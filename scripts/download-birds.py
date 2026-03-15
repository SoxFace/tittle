#!/usr/bin/env python3
"""
Download CC-licensed bird images and audio from Wikimedia Commons via curl.

Images: saved as public/birds/{id}.webp (800×800 square crop)
Audio:  saved as public/birds/{id}.mp3 (converted from opus/ogg via ffmpeg)

Usage:
  python3 scripts/download-birds.py           # images + audio
  python3 scripts/download-birds.py --images  # images only
  python3 scripts/download-birds.py --audio   # audio only
"""

import json
import subprocess
import os
import sys
import re

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'birds')
BIRDS_TS   = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'birds.ts')
UA = 'Mozilla/5.0 (compatible; TittleApp/1.0)'

# (id, wiki_image_title, scientific_name_for_audio_search)
BIRDS = [
    ('laughing-kookaburra',       'Dacelo_novaeguineae',              'Dacelo novaeguineae'),
    ('sulphur-crested-cockatoo',  'Sulphur-crested_cockatoo',         'Cacatua galerita'),
    ('rainbow-lorikeet',          'Trichoglossus_moluccanus',         'Trichoglossus moluccanus'),
    ('australian-magpie',         'Australian_magpie',                'Gymnorhina tibicen'),
    ('galah',                     'Eolophus_roseicapilla',            'Eolophus roseicapilla'),
    ('willie-wagtail',            'Willie_wagtail',                   'Rhipidura leucophrys'),
    ('emu',                       'Emu',                              'Dromaius novaehollandiae'),
    ('australian-pelican',        'Australian_pelican',               'Pelecanus conspicillatus'),
    ('black-swan',                'Black_swan',                       'Cygnus atratus'),
    ('australian-white-ibis',     'Australian_white_ibis',            'Threskiornis molucca'),
    ('noisy-miner',               'Noisy_miner',                      'Manorina melanocephala'),
    ('eastern-rosella',           'Eastern_rosella',                  'Platycercus eximius'),
    ('superb-fairy-wren',         'Superb_fairywren',                 'Malurus cyaneus'),
    ('wedge-tailed-eagle',        'Wedge-tailed_eagle',               'Aquila audax'),
    ('tawny-frogmouth',           'Tawny_frogmouth',                  'Podargus strigoides'),
    ('sacred-kingfisher',         'Sacred_kingfisher',                'Todiramphus sanctus'),
    ('crimson-rosella',           'Crimson_rosella',                  'Platycercus elegans'),
    ('pied-currawong',            'Pied_currawong',                   'Strepera graculina'),
    ('australian-wood-duck',      'Australian_wood_duck',             'Chenonetta jubata'),
    ('brolga',                    'Brolga',                           'Antigone rubicunda'),
    ('little-penguin',            'Little_penguin_(Eudyptula_minor)', 'Eudyptula minor'),
    ('satin-bowerbird',           'Satin_bowerbird',                  'Ptilonorhynchus violaceus'),
    ('red-tailed-black-cockatoo', 'Red-tailed_black_cockatoo',        'Calyptorhynchus banksii'),
    ('barn-owl',                  'Barn_owl',                         'Tyto alba'),
    ('spotted-pardalote',         'Spotted_pardalote',                'Pardalotus punctatus'),
    ('powerful-owl',              'Powerful_owl',                     'Ninox strenua'),
    ('channel-billed-cuckoo',     'Channel-billed_cuckoo',            'Scythrops novaehollandiae'),
    ('little-corella',            'Little_corella',                   'Cacatua sanguinea'),
    ('fairy-martin',              'Fairy_martin',                     'Petrochelidon ariel'),
    ('regent-honeyeater',         'Regent_honeyeater',                'Anthochaera phrygia'),
]


# ── Helpers ──────────────────────────────────────────────────────────────────

def curl_json(url: str) -> dict | None:
    r = subprocess.run(
        ['curl', '-s', '-A', UA, '--max-time', '15', url],
        capture_output=True
    )
    if r.returncode != 0:
        return None
    try:
        return json.loads(r.stdout)
    except Exception:
        return None


# ── Images ────────────────────────────────────────────────────────────────────

def get_image_url(wiki_title: str) -> str | None:
    data = curl_json(
        f'https://en.wikipedia.org/w/api.php'
        f'?action=query&titles={wiki_title}'
        f'&prop=pageimages&pithumbsize=1200&format=json&redirects=1'
    )
    if data:
        for page in data['query']['pages'].values():
            thumb = page.get('thumbnail', {}).get('source')
            if thumb:
                return thumb.replace('/960px-', '/1200px-').replace('/800px-', '/1200px-')

    # Fallback: Commons image search
    data2 = curl_json(
        f'https://commons.wikimedia.org/w/api.php'
        f'?action=query&generator=search'
        f'&gsrsearch={wiki_title.replace("_", "+")}'
        f'&gsrnamespace=6&gsrlimit=1'
        f'&prop=imageinfo&iiprop=url&format=json'
    )
    if data2:
        for page in data2.get('query', {}).get('pages', {}).values():
            ii = page.get('imageinfo', [])
            if ii:
                return ii[0]['url']
    return None


def download_image(bird_id: str, url: str) -> bool:
    tmp_path = f'/tmp/tittle_{bird_id}_img'
    out_path = os.path.join(OUTPUT_DIR, f'{bird_id}.webp')

    r = subprocess.run(
        ['curl', '-sL', '-A', UA, '--max-time', '30', '-o', tmp_path, url],
        capture_output=True
    )
    if r.returncode != 0 or not os.path.exists(tmp_path):
        print(f'  Download failed')
        return False

    r2 = subprocess.run(
        ['convert', tmp_path,
         '-auto-orient', '-gravity', 'Center',
         '-resize', '800x800^', '-extent', '800x800',
         '-quality', '85', out_path],
        capture_output=True, text=True
    )
    if os.path.exists(tmp_path):
        os.unlink(tmp_path)
    if r2.returncode != 0:
        print(f'  convert error: {r2.stderr.strip()}')
        return False

    print(f'  -> {bird_id}.webp ({os.path.getsize(out_path) // 1024} KB)')
    return True


# ── Audio ─────────────────────────────────────────────────────────────────────

AUDIO_EXTS = ('.opus', '.ogg', '.flac', '.mp3', '.wav')

def get_audio_file_url(sci_name: str) -> str | None:
    """Search Wikimedia Commons for a CC-licensed call recording."""
    query = sci_name.replace(' ', '+') + '+filetype:audio'
    data = curl_json(
        f'https://commons.wikimedia.org/w/api.php'
        f'?action=query&list=search'
        f'&srsearch={query}'
        f'&srnamespace=6&srlimit=10&format=json'
    )
    if not data:
        return None

    results = data.get('query', {}).get('search', [])
    # Prefer ANWC (Australian National Wildlife Collection) recordings, then any audio
    preferred = [r for r in results if 'ANWC' in r['title']]
    candidates = (preferred or results)

    for candidate in candidates:
        title = candidate['title']
        if not any(title.lower().endswith(ext) for ext in AUDIO_EXTS):
            continue
        info = curl_json(
            f'https://commons.wikimedia.org/w/api.php'
            f'?action=query&titles={title.replace(" ", "_")}'
            f'&prop=imageinfo&iiprop=url&format=json'
        )
        if info:
            for page in info['query']['pages'].values():
                ii = page.get('imageinfo', [])
                if ii:
                    return ii[0]['url']
    return None


def download_audio(bird_id: str, url: str) -> bool:
    ext = os.path.splitext(url.split('?')[0])[1] or '.opus'
    tmp_path = f'/tmp/tittle_{bird_id}_audio{ext}'
    out_path = os.path.join(OUTPUT_DIR, f'{bird_id}.mp3')

    r = subprocess.run(
        ['curl', '-sL', '-A', UA, '--max-time', '60', '-o', tmp_path, url],
        capture_output=True
    )
    if r.returncode != 0 or not os.path.exists(tmp_path):
        print(f'  Audio download failed')
        return False

    r2 = subprocess.run(
        ['ffmpeg', '-y', '-i', tmp_path,
         '-ar', '44100', '-ac', '1', '-b:a', '96k',
         out_path],
        capture_output=True, text=True
    )
    if os.path.exists(tmp_path):
        os.unlink(tmp_path)
    if r2.returncode != 0:
        print(f'  ffmpeg error: {r2.stderr[-200:].strip()}')
        return False

    print(f'  -> {bird_id}.mp3 ({os.path.getsize(out_path) // 1024} KB)')
    return True


# ── birds.ts patcher ─────────────────────────────────────────────────────────

def patch_birds_ts(downloaded: list[str]) -> None:
    """Insert songUrl line after imageUrl for each successfully downloaded bird."""
    with open(BIRDS_TS, 'r') as f:
        src = f.read()

    changed = 0
    for bird_id in downloaded:
        song_url = f"'/birds/{bird_id}.mp3'"
        # Already patched?
        if f"songUrl: {song_url}" in src:
            continue
        # Match the imageUrl line for this specific bird id
        pattern = rf"(id: '{re.escape(bird_id)}',[^{{}}]*?imageUrl: '/birds/{re.escape(bird_id)}\.webp',)"
        replacement = rf"\1\n    songUrl: {song_url},"
        new_src, n = re.subn(pattern, replacement, src, count=1, flags=re.DOTALL)
        if n:
            src = new_src
            changed += 1

    with open(BIRDS_TS, 'w') as f:
        f.write(src)
    print(f'\nPatched birds.ts: added songUrl for {changed} bird(s).')


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    mode_images = '--audio' not in sys.argv
    mode_audio  = '--images' not in sys.argv

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    img_failed   = []
    audio_ok     = []
    audio_failed = []

    for bird_id, wiki_title, sci_name in BIRDS:
        # ── Images ──
        if mode_images:
            img_out = os.path.join(OUTPUT_DIR, f'{bird_id}.webp')
            if os.path.exists(img_out):
                print(f'[img skip] {bird_id}')
            else:
                print(f'[img] {bird_id}')
                url = get_image_url(wiki_title)
                if not url:
                    print(f'  ERROR: no image URL')
                    img_failed.append(bird_id)
                else:
                    print(f'  {url[:90]}')
                    if not download_image(bird_id, url):
                        img_failed.append(bird_id)

        # ── Audio ──
        if mode_audio:
            aud_out = os.path.join(OUTPUT_DIR, f'{bird_id}.mp3')
            if os.path.exists(aud_out):
                print(f'[aud skip] {bird_id}')
                audio_ok.append(bird_id)
            else:
                print(f'[aud] {bird_id} ({sci_name})')
                url = get_audio_file_url(sci_name)
                if not url:
                    print(f'  ERROR: no audio URL')
                    audio_failed.append(bird_id)
                else:
                    print(f'  {url[:90]}')
                    if download_audio(bird_id, url):
                        audio_ok.append(bird_id)
                    else:
                        audio_failed.append(bird_id)

    # Patch birds.ts for all birds with a downloaded mp3
    if mode_audio and audio_ok:
        patch_birds_ts(audio_ok)

    print('\n─── Summary ───')
    if mode_images:
        status = 'OK' if not img_failed else f'FAILED: {", ".join(img_failed)}'
        print(f'Images:  {len(BIRDS) - len(img_failed)}/{len(BIRDS)}  {status}')
    if mode_audio:
        status = 'OK' if not audio_failed else f'FAILED: {", ".join(audio_failed)}'
        print(f'Audio:   {len(audio_ok)}/{len(BIRDS)}  {status}')


if __name__ == '__main__':
    main()
