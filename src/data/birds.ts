import type { Bird } from '@/types';

/**
 * Australian bird catalogue for Tittle MVP.
 * Images sourced from /public/birds/{id}.webp — see README for licensing notes.
 * correctAnswer values must match options in src/data/categories.ts exactly.
 */
export const BIRDS: Bird[] = [
  // ─── COMMON ─────────────────────────────────────────────────────────────────

  {
    id: 'laughing-kookaburra',
    commonName: 'Laughing Kookaburra',
    scientificName: 'Dacelo novaeguineae',
    imageUrl: '/birds/laughing-kookaburra.webp',
    difficulty: 'common',
    aliases: ['kookaburra', 'laughing kookaburra'],
    funFact:
      "The world's largest kingfisher, despite living far from water. It kills prey by gripping it in its beak and bashing it against a hard branch to stun or break it.",
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 42–46 cm, the Kookaburra is a stocky, medium-sized bird — roughly the size of a crow.',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Kookaburras thrive in dry eucalyptus woodland but readily adapt to suburban areas with large trees.',
      },
      diet: {
        correctAnswer: 'Small mammals & reptiles',
        hint: 'Famous for eating snakes, lizards, and worms. Their powerful beak can crack bones.',
      },
      beakShape: {
        correctAnswer: 'Large & powerful',
        hint: 'The long, heavy dagger-like bill is used to grip and bash prey — ideal for subduing reptiles.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Like all kingfishers, Kookaburras have two toes pointing forward and two back — great for gripping branches.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Short, fast flights between perches. They sit still for long periods scanning the ground for prey.',
      },
      song: {
        correctAnswer: 'Laughing or cackling',
        hint: 'The iconic "koo-koo-koo-koo-kaa-kaa-kaa" call is used to proclaim territory and is often heard at dawn and dusk.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Brown and cream with a distinctive dark eye stripe. Males have a blue-green patch on the wing.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Kookaburras are non-migratory and maintain territories year-round, often with family groups.',
      },
    },
  },

  {
    id: 'sulphur-crested-cockatoo',
    commonName: 'Sulphur-crested Cockatoo',
    scientificName: 'Cacatua galerita',
    imageUrl: '/birds/sulphur-crested-cockatoo.webp',
    difficulty: 'common',
    aliases: ['sulphur crested cockatoo', 'white cockatoo', 'cockatoo'],
    funFact:
      'Can live over 70 years in captivity. Highly intelligent — they have been documented using tools and solving multi-step puzzles to access food.',
    categories: {
      size: {
        correctAnswer: 'Large (50–80 cm)',
        hint: 'At 44–55 cm, they are one of the larger cockatoos — noticeably bigger than a galah.',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Found in eucalyptus forests but forms huge, noisy flocks in urban parks and farmland.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Their powerful beak can crack the hardest seeds and nuts. They also dig for roots and corms.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'The curved parrot beak is both a nutcracker and a climbing tool — cockatoos use it as a third limb.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Parrots have zygodactyl feet, allowing them to grip food and hold it up to their beak like a hand.',
      },
      flightStyle: {
        correctAnswer: 'Undulating (rises & dips)',
        hint: 'Large flocks fly with slow, deep wing beats in a loose, rolling undulation pattern.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'Their screeching calls can be heard over a kilometre away. Flocks are famously deafening.',
      },
      plumage: {
        correctAnswer: 'White with coloured accents',
        hint: 'Entirely white with a bright sulphur-yellow crest that is raised when alarmed or excited.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Non-migratory, though some populations make local seasonal movements following food sources.',
      },
    },
  },

  {
    id: 'rainbow-lorikeet',
    commonName: 'Rainbow Lorikeet',
    scientificName: 'Trichoglossus moluccanus',
    imageUrl: '/birds/rainbow-lorikeet.webp',
    difficulty: 'common',
    aliases: ['lorikeet', 'rainbow lorikeet'],
    funFact:
      'Has a brush-tipped tongue specifically designed for lapping up nectar and pollen. Its sugar-rich diet can cause it to appear intoxicated after eating fermented fruit.',
    categories: {
      size: {
        correctAnswer: 'Small (12–30 cm)',
        hint: 'At 25–30 cm, lorikeets are a compact, fast-moving small parrot.',
      },
      habitat: {
        correctAnswer: 'Urban & suburban gardens',
        hint: 'Extremely adaptable, they are as common in city parks and garden grevilleas as they are in bushland.',
      },
      diet: {
        correctAnswer: 'Fruit & nectar',
        hint: 'A specialist nectar feeder. Their brush-tipped tongue collects pollen and nectar from flowers.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'The curved parrot beak is used to prise open flowers and grip food.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Zygodactyl feet let lorikeets hang acrobatically upside down to reach flowers.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Lorikeets fly fast and straight with rapid wing beats, often in noisy flocks.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'High-pitched, rolling screeches in flight. Large roosts produce a cacophony at dusk.',
      },
      plumage: {
        correctAnswer: 'Vivid multicolour',
        hint: "Blue head, green back, orange-red breast, yellow flanks — one of Australia's most colourful birds.",
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident across eastern Australia, though they make local movements following flowering trees.',
      },
    },
  },

  {
    id: 'australian-magpie',
    commonName: 'Australian Magpie',
    scientificName: 'Gymnorhina tibicen',
    imageUrl: '/birds/australian-magpie.webp',
    difficulty: 'common',
    aliases: ['magpie', 'australian magpie'],
    funFact:
      "Considered one of the world's most complex songbirds — it can mimic up to 35 other bird species. It also remembers individual human faces and will selectively swoop only those it perceives as threats.",
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 37–43 cm, the Australian Magpie is crow-sized and one of the most recognisable birds in the country.',
      },
      habitat: {
        correctAnswer: 'Urban & suburban gardens',
        hint: 'Thrives wherever open ground meets tall trees — ovals, parks, roadsides, and suburban gardens.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'Forages on open ground, using its keen eyesight to detect worms, beetles, and grubs.',
      },
      beakShape: {
        correctAnswer: 'Long & dagger-like',
        hint: 'The long, straight, pointed bill is ideal for probing soil for invertebrates.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Standard passerine feet — three toes forward, one back — perfect for gripping branches and walking on the ground.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Strong, direct flight — though most activity is on the ground walking with a confident stride.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: 'The fluty, warbling carol of the Australian Magpie is one of the most beloved sounds in the Australian bush.',
      },
      plumage: {
        correctAnswer: 'Black & white',
        hint: 'Bold black and white patterning. The back pattern varies between subspecies and regions.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Strongly territorial and non-migratory. Groups defend the same territory for generations.',
      },
    },
  },

  {
    id: 'galah',
    commonName: 'Galah',
    scientificName: 'Eolophus roseicapilla',
    imageUrl: '/birds/galah.webp',
    difficulty: 'common',
    aliases: ['galah', 'rose-breasted cockatoo'],
    funFact:
      'Galahs are monogamous and mate for life. The word "galah" has become Australian slang for a fool or clown — partly inspired by their boisterous, acrobatic behaviour.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 35–38 cm, galahs are mid-sized cockatoos — noticeably smaller than a sulphur-crested.',
      },
      habitat: {
        correctAnswer: 'Open grassland & farmland',
        hint: 'Originally inland birds, galahs have expanded dramatically with land clearing and grain farming.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Ground feeders that eat grass seeds, grain crops, and roots. Often seen in large flocks on paddocks.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'The typical curved parrot beak — used for husking seeds and as a climbing aid.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Like all parrots, galahs are zygodactyl — two toes forward, two back.',
      },
      flightStyle: {
        correctAnswer: 'Undulating (rises & dips)',
        hint: 'Distinctive undulating flight in flocks, often rolling and tumbling in the wind.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'A shrill, rolling screech. Large flocks are extremely noisy, especially around roost trees.',
      },
      plumage: {
        correctAnswer: 'Pink & grey',
        hint: "Rose-pink head and underparts, grey back and wings. One of Australia's most iconic colour combinations.",
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident across most of Australia. Populations have expanded since European settlement.',
      },
    },
  },

  {
    id: 'willie-wagtail',
    commonName: 'Willie Wagtail',
    scientificName: 'Rhipidura leucophrys',
    imageUrl: '/birds/willie-wagtail.webp',
    difficulty: 'common',
    aliases: ['willie wagtail', 'wagtail'],
    funFact:
      'Despite its tiny size, the Willie Wagtail will fearlessly mob eagles, kookaburras, and even humans near its nest. It constantly wags its tail side-to-side — thought to flush insects from grass.',
    categories: {
      size: {
        correctAnswer: 'Small (12–30 cm)',
        hint: "At 19–21 cm, the Willie Wagtail is a small but feisty bird — one of Australia's most conspicuous small birds.",
      },
      habitat: {
        correctAnswer: 'Urban & suburban gardens',
        hint: "One of Australia's most adaptable birds — found everywhere from suburban gardens to remote outback creek beds.",
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'An aerial and ground insect hunter. The tail-wagging behaviour may help flush prey from cover.',
      },
      beakShape: {
        correctAnswer: 'Short & stubby',
        hint: 'Wide, flat bill typical of flycatchers — excellent for snapping up flying insects.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Standard passerine perching feet. Often seen on fence posts and low branches, scanning for prey.',
      },
      flightStyle: {
        correctAnswer: 'Swooping & diving',
        hint: 'Agile, twisting aerial pursuit of insects, often launching from a low perch.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: 'A sweet, chattering "sweet-pretty-creature" song, often sung at night. Also has a harsh scolding call.',
      },
      plumage: {
        correctAnswer: 'Black & white',
        hint: 'Jet black above, white below, with a white eyebrow and throat. Clean and striking contrast.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Non-migratory and highly territorial year-round.',
      },
    },
  },

  {
    id: 'emu',
    commonName: 'Emu',
    scientificName: 'Dromaius novaehollandiae',
    imageUrl: '/birds/emu.webp',
    difficulty: 'common',
    aliases: ['emu'],
    funFact:
      'Australia\'s largest native bird and the world\'s second-tallest. In the 1932 "Great Emu War", Australian soldiers armed with machine guns attempted to cull emus damaging crops — the emus largely won.',
    categories: {
      size: {
        correctAnswer: 'Very large (over 80 cm)',
        hint: 'At up to 190 cm tall, the Emu is a giant. Adults weigh 30–45 kg.',
      },
      habitat: {
        correctAnswer: 'Open grassland & farmland',
        hint: 'Found across mainland Australia in open scrubland, grassland, and agricultural areas.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Eats a wide variety of seeds, berries, insects, and plant matter. They are highly nomadic, following rain and food.',
      },
      beakShape: {
        correctAnswer: 'Broad & flat',
        hint: 'A wide, flat bill suited to grazing and picking up food from the ground.',
      },
      footType: {
        correctAnswer: 'Running (large, reduced toes)',
        hint: 'Only three toes — fewer than most birds — built for speed. Can sprint at up to 50 km/h.',
      },
      flightStyle: {
        correctAnswer: 'Rarely or never flies',
        hint: 'Emus are completely flightless. Their wings are tiny vestigial structures hidden under feathers.',
      },
      song: {
        correctAnswer: 'Mostly silent',
        hint: 'Generally quiet. Females make a booming drumming sound from an inflatable throat sac during breeding season.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Shaggy brown-grey double feathers that droop from the body. Adapted to regulate temperature in extreme heat.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident across most of mainland Australia, though they make long nomadic movements following rainfall.',
      },
    },
  },

  {
    id: 'australian-pelican',
    commonName: 'Australian Pelican',
    scientificName: 'Pelecanus conspicillatus',
    imageUrl: '/birds/australian-pelican.webp',
    difficulty: 'common',
    aliases: ['pelican', 'australian pelican'],
    funFact:
      'Has the longest bill of any living bird — up to 47 cm. Its pouch can hold up to 13 litres of water, which it drains before swallowing its catch whole.',
    categories: {
      size: {
        correctAnswer: 'Very large (over 80 cm)',
        hint: 'Body length 160–180 cm with a wingspan up to 250 cm — one of the largest flying birds in Australia.',
      },
      habitat: {
        correctAnswer: 'Wetland & waterways',
        hint: 'Found on lakes, rivers, estuaries, and coastal waters across Australia.',
      },
      diet: {
        correctAnswer: 'Fish & aquatic life',
        hint: 'Cooperative hunters — groups herd fish into shallow water and scoop them up in their massive pouches.',
      },
      beakShape: {
        correctAnswer: 'Large & powerful',
        hint: 'The longest bill of any living bird, with a flexible pouch that acts as a fishing net.',
      },
      footType: {
        correctAnswer: 'Swimming (webbed)',
        hint: 'All four toes are connected by webbing (totipalmate) — a feature shared with gannets and cormorants.',
      },
      flightStyle: {
        correctAnswer: 'Soaring on thermals',
        hint: 'Despite their bulk, pelicans are graceful soarers, riding thermals to great heights in V-formations.',
      },
      song: {
        correctAnswer: 'Mostly silent',
        hint: 'Generally silent. Makes low grunts and bill-clattering during breeding season.',
      },
      plumage: {
        correctAnswer: 'White with coloured accents',
        hint: 'Largely white with black flight feathers. Bare facial skin is pink and yellow.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Widespread resident, though breeding is opportunistic and follows inland flooding events.',
      },
    },
  },

  {
    id: 'black-swan',
    commonName: 'Black Swan',
    scientificName: 'Cygnus atratus',
    imageUrl: '/birds/black-swan.webp',
    difficulty: 'common',
    aliases: ['black swan'],
    funFact:
      'The term "Black Swan event" — a rare, high-impact, impossible-to-predict occurrence — comes from the European belief that black swans simply could not exist, shattered when they were discovered in Australia in 1697.',
    categories: {
      size: {
        correctAnswer: 'Very large (over 80 cm)',
        hint: 'At 110–140 cm in length with a wingspan of up to 200 cm, the Black Swan is unmistakably large.',
      },
      habitat: {
        correctAnswer: 'Wetland & waterways',
        hint: 'Found on lakes, rivers, estuaries, and coastal lagoons across southern Australia.',
      },
      diet: {
        correctAnswer: 'Plants & aquatic vegetation',
        hint: 'Grazes on aquatic plants, submerging its long neck to reach underwater vegetation.',
      },
      beakShape: {
        correctAnswer: 'Broad & flat',
        hint: 'The typical broad, flat swan bill, adapted for grazing on aquatic plants near the surface.',
      },
      footType: {
        correctAnswer: 'Swimming (webbed)',
        hint: 'Fully webbed feet set far back on the body — great for swimming, awkward on land.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Powerful, sustained flight with slow, deep wing beats. Takes a long runway to get airborne.',
      },
      song: {
        correctAnswer: 'Mostly silent',
        hint: 'Makes soft, musical honking and whistling sounds. Much quieter than the mute or whooper swan.',
      },
      plumage: {
        correctAnswer: 'Mostly black',
        hint: 'Almost entirely black with white flight feathers visible in flight. The bright red bill is diagnostic.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident across most of southern Australia. The state emblem of Western Australia.',
      },
    },
  },

  {
    id: 'australian-white-ibis',
    commonName: 'Australian White Ibis',
    scientificName: 'Threskiornis molucca',
    imageUrl: '/birds/australian-white-ibis.webp',
    difficulty: 'common',
    aliases: ['white ibis', 'ibis', 'bin chicken', 'australian white ibis'],
    funFact:
      'Affectionately dubbed the "bin chicken" for raiding bins in city parks. Once revered in ancient Egypt — a closely related species was sacred to the god Thoth and mummified in its millions.',
    categories: {
      size: {
        correctAnswer: 'Large (50–80 cm)',
        hint: 'At 65–75 cm, the White Ibis is a large wading bird, easily spotted by its distinctive bald black head.',
      },
      habitat: {
        correctAnswer: 'Wetland & waterways',
        hint: 'Naturally a wetland bird, it has colonised urban areas dramatically as inland wetlands have dried.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'Probes mud and shallow water for worms, crustaceans, and invertebrates with its curved bill.',
      },
      beakShape: {
        correctAnswer: 'Long & curved downward',
        hint: 'The long, strongly decurved bill is perfectly shaped for probing into mud and crevices.',
      },
      footType: {
        correctAnswer: 'Wading (long, spread toes)',
        hint: 'Long, spread toes distribute weight across soft mud and shallow water.',
      },
      flightStyle: {
        correctAnswer: 'Soaring on thermals',
        hint: 'Ibises soar in groups on thermals, often reaching great heights. Flocks form long V-formations.',
      },
      song: {
        correctAnswer: 'Mostly silent',
        hint: 'Mostly silent. Makes occasional grunting and croaking sounds at nesting colonies.',
      },
      plumage: {
        correctAnswer: 'White with coloured accents',
        hint: 'White body with a bare black head and neck, black wingtips, and a pinkish-red flush under the wing.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident and increasingly urban. Populations in coastal cities have grown significantly since the 1970s.',
      },
    },
  },

  // ─── FAMILIAR ───────────────────────────────────────────────────────────────

  {
    id: 'noisy-miner',
    commonName: 'Noisy Miner',
    scientificName: 'Manorina melanocephala',
    imageUrl: '/birds/noisy-miner.webp',
    difficulty: 'familiar',
    aliases: ['noisy miner', 'miner'],
    funFact:
      "One of Australia's most aggressive small birds. Groups cooperatively mob intruders — including kookaburras and currawongs — and are so effective at chasing other species away that they can reduce local bird diversity dramatically.",
    categories: {
      size: {
        correctAnswer: 'Small (12–30 cm)',
        hint: 'At 24–28 cm, the Noisy Miner is a medium-small honeyeater — noticeably larger than a fairy-wren.',
      },
      habitat: {
        correctAnswer: 'Urban & suburban gardens',
        hint: 'Thrives in open woodland with sparse understorey and in suburban parks and gardens.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'Eats insects, spiders, nectar, and some fruit. Forages both in trees and on the ground.',
      },
      beakShape: {
        correctAnswer: 'Short & stubby',
        hint: 'A short, slightly curved honeyeater bill — all-yellow, which is a key identification feature.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Standard passerine feet. Highly mobile and agile in trees and on the ground.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Strong, direct flight. Frequently launches into group attacks ("mobbing") on larger birds.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'Highly vocal and perpetually noisy — a constant chorus of harsh calls, especially when alarmed.',
      },
      plumage: {
        correctAnswer: 'Grey with coloured markings',
        hint: 'Grey-brown body with a distinctive yellow bill, bare yellow eye-patch, and white forehead.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Non-migratory and strongly territorial, defending areas communally year-round.',
      },
    },
  },

  {
    id: 'eastern-rosella',
    commonName: 'Eastern Rosella',
    scientificName: 'Platycercus eximius',
    imageUrl: '/birds/eastern-rosella.webp',
    difficulty: 'familiar',
    aliases: ['eastern rosella', 'rosella'],
    funFact:
      'One of the first Australian parrots to be scientifically described by European settlers. Its red, white, and blue colouring inspired the name "rosella", derived from "Rosehill" near Sydney where early specimens were collected.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 30–33 cm, the Eastern Rosella is a compact, medium-small parrot.',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Open woodland, forest edges, roadsides, and parks with large trees.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Feeds on seeds, berries, blossoms, and some insects. Often seen foraging on the ground.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'The sturdy, curved parrot bill is used for husking seeds and cracking open fruit.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Zygodactyl feet allow rosellas to grip food items and hold them up to their beak.',
      },
      flightStyle: {
        correctAnswer: 'Undulating (rises & dips)',
        hint: 'A distinctive undulating flight pattern — a characteristic shared by most Australian parrots.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: 'A rich, rolling "kwink-kwink" and melodious piping calls. One of the prettier parrot songs.',
      },
      plumage: {
        correctAnswer: 'Vivid multicolour',
        hint: 'Red head and chest, white cheek patches, yellow-green belly, and blue shoulder patches — spectacularly colourful.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'A common resident of south-eastern Australia. Introduced to New Zealand where it is also established.',
      },
    },
  },

  {
    id: 'superb-fairy-wren',
    commonName: 'Superb Fairy-wren',
    scientificName: 'Malurus cyaneus',
    imageUrl: '/birds/superb-fairy-wren.webp',
    difficulty: 'familiar',
    aliases: ['superb fairy wren', 'fairy wren', 'blue wren', 'superb fairywren'],
    funFact:
      'Despite forming monogamous pairs, DNA studies show that up to 75% of chicks in a nest are fathered by males from other territories — females sneak away at dawn to mate with the most brilliantly-coloured males they can find.',
    categories: {
      size: {
        correctAnswer: 'Tiny (under 12 cm)',
        hint: "At 11–14 cm (body just 9 cm), the Superb Fairy-wren is one of Australia's smallest birds.",
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Dense understorey shrubs and heath in woodland, parks, and suburban gardens.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'Hops through low vegetation picking off small insects, spiders, and other invertebrates.',
      },
      beakShape: {
        correctAnswer: 'Short & stubby',
        hint: 'A short, fine bill ideal for picking tiny insects from leaves and bark.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Tiny, delicate perching feet. Often seen with the tail cocked vertically — a signature pose.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Short, rapid bursts between shrubs, rarely flying far. Prefers to hop through dense vegetation.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: 'A fast, reeling song. Males also sing a specific song only to females and a separate "seduction" song in the early morning.',
      },
      plumage: {
        correctAnswer: 'Blue or iridescent',
        hint: 'Breeding males have brilliant cobalt-blue plumage. Females and non-breeding males are brown.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Strongly territorial and non-migratory. Groups defend the same territory year-round.',
      },
    },
  },

  {
    id: 'wedge-tailed-eagle',
    commonName: 'Wedge-tailed Eagle',
    scientificName: 'Aquila audax',
    imageUrl: '/birds/wedge-tailed-eagle.webp',
    difficulty: 'familiar',
    aliases: ['wedge tailed eagle', 'wedge-tailed eagle', 'wedgie'],
    funFact:
      "Australia's largest bird of prey. Once persecuted in the mistaken belief it took large numbers of lambs — it is now fully protected. Can soar for hours without a single wing beat using thermal currents.",
    categories: {
      size: {
        correctAnswer: 'Very large (over 80 cm)',
        hint: 'At 85–105 cm with a wingspan of up to 230 cm, the Wedge-tailed Eagle is unmistakably large.',
      },
      habitat: {
        correctAnswer: 'Open grassland & farmland',
        hint: 'Found across all habitats in Australia, but most common over open country, forests, and mountain ranges.',
      },
      diet: {
        correctAnswer: 'Small mammals & reptiles',
        hint: 'Hunts rabbits, wallabies, lizards, and carrion. Will steal prey from other raptors.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'A powerful, deeply hooked beak for tearing flesh. Typical of all large raptors.',
      },
      footType: {
        correctAnswer: 'Taloned (strong raptor grip)',
        hint: 'Massive talons for gripping and killing prey. Can carry prey up to the size of a small wallaby.',
      },
      flightStyle: {
        correctAnswer: 'Soaring on thermals',
        hint: 'A master soarer — can reach altitudes of 1,800 m on thermals without flapping. Iconic diamond-shaped tail is diagnostic in flight.',
      },
      song: {
        correctAnswer: 'Mostly silent',
        hint: 'Generally silent. Makes thin, high-pitched yelps and whistles near the nest.',
      },
      plumage: {
        correctAnswer: 'Mostly black',
        hint: 'Dark brown to black overall. Young birds are lighter brown and gradually darken with age over several years.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Non-migratory resident across the entire Australian mainland and Tasmania.',
      },
    },
  },

  {
    id: 'tawny-frogmouth',
    commonName: 'Tawny Frogmouth',
    scientificName: 'Podargus strigoides',
    imageUrl: '/birds/tawny-frogmouth.webp',
    difficulty: 'familiar',
    aliases: ['tawny frogmouth', 'frogmouth'],
    funFact:
      'A master of camouflage — when threatened it freezes, tilts its head back, and narrows its eyes to mimic a dead branch. Despite being widely mistaken for an owl, it is more closely related to nightjars.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 34–53 cm, tawny frogmouths are roughly pigeon to crow-sized depending on sex (males are larger).',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Open woodland, forest, and suburban gardens with large trees for daytime roosting.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'A nocturnal hunter that drops onto prey from a perch. Eats large insects, worms, slugs, and the occasional small vertebrate.',
      },
      beakShape: {
        correctAnswer: 'Broad & flat',
        hint: 'The enormous, frog-like gaping bill is used to catch prey on the ground at night.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Weak perching feet — tawny frogmouths are not strong fliers or walkers and mostly sit still.',
      },
      flightStyle: {
        correctAnswer: 'Swooping & diving',
        hint: 'Drops silently from a perch at night to catch prey on the ground.',
      },
      song: {
        correctAnswer: 'Soft & repetitive',
        hint: 'A deep, booming "oom-oom-oom" repeated rhythmically throughout the night — easy to miss as it sounds like a distant machine.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Intricately patterned grey-brown that perfectly mimics the bark and lichen of eucalyptus branches.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Non-migratory. Pairs often roost together in the same tree for years.',
      },
    },
  },

  {
    id: 'sacred-kingfisher',
    commonName: 'Sacred Kingfisher',
    scientificName: 'Todiramphus sanctus',
    imageUrl: '/birds/sacred-kingfisher.webp',
    difficulty: 'familiar',
    aliases: ['sacred kingfisher', 'kingfisher'],
    funFact:
      'Despite being a kingfisher, the Sacred Kingfisher often lives far from water, hunting lizards and large insects in dry woodland. It nests in a burrow excavated directly into a termite mound — the hard casing protects the nest from predators.',
    categories: {
      size: {
        correctAnswer: 'Small (12–30 cm)',
        hint: 'At 19–23 cm, the Sacred Kingfisher is a compact, jewel-like small bird.',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Dry woodland, mangroves, and forest edges. Despite the name, it is often found away from water.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'Hunts lizards, insects, and small crustaceans by diving from a perch. In coastal areas, also takes small fish.',
      },
      beakShape: {
        correctAnswer: 'Long & dagger-like',
        hint: 'A long, straight, powerful bill for catching and subduing prey. The tip is slightly flattened.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'All kingfishers have zygodactyl feet — the inner two toes are fused, which helps them perch on thin branches.',
      },
      flightStyle: {
        correctAnswer: 'Swooping & diving',
        hint: 'Hunts by diving headlong from a perch onto prey below. Flight between perches is fast and direct.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'A sharp, repetitive "kek-kek-kek" — loud and penetrating, often the first sign of its presence.',
      },
      plumage: {
        correctAnswer: 'Blue or iridescent',
        hint: 'Turquoise-blue back and crown, buff-white underparts. The iridescent blue glows in sunlight.',
      },
      season: {
        correctAnswer: 'Summer breeding visitor',
        hint: 'Migratory in southern Australia — arrives in spring to breed, departs north in autumn.',
      },
    },
  },

  {
    id: 'crimson-rosella',
    commonName: 'Crimson Rosella',
    scientificName: 'Platycercus elegans',
    imageUrl: '/birds/crimson-rosella.webp',
    difficulty: 'familiar',
    aliases: ['crimson rosella', 'rosella'],
    funFact:
      'The Crimson Rosella exists in several distinct colour morphs — deep crimson in the east and south, orange in central ranges, and yellow in some inland areas. Young birds are entirely green for their first year of life.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 33–36 cm, the Crimson Rosella is slightly larger than the Eastern Rosella.',
      },
      habitat: {
        correctAnswer: 'Rainforest',
        hint: 'Wet sclerophyll forest, rainforest edges, and mountain woodland. Closely associated with tall eucalyptus.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Eats seeds, berries, blossoms, and insects. Frequently seen foraging on the ground in parks and picnic areas.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'Classic curved parrot beak for husking seeds and gripping fruit.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Zygodactyl feet are the trademark of parrots — two toes pointing forward and two back.',
      },
      flightStyle: {
        correctAnswer: 'Undulating (rises & dips)',
        hint: 'Sweeping, undulating flight typical of rosellas — alternates wingbeats with short glides.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: 'A piping, whistling call and a variety of melodic phrases. Common sound in mountain forests.',
      },
      plumage: {
        correctAnswer: 'Vivid multicolour',
        hint: 'Deep crimson red with cobalt-blue cheeks, wing edges, and tail. Striking even at a distance.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident in south-eastern Australia and south-west Western Australia. Does not migrate.',
      },
    },
  },

  {
    id: 'pied-currawong',
    commonName: 'Pied Currawong',
    scientificName: 'Strepera graculina',
    imageUrl: '/birds/pied-currawong.webp',
    difficulty: 'familiar',
    aliases: ['pied currawong', 'currawong'],
    funFact:
      'Named for its call — a distinctive "curra-wong" that echoes through suburban streets. It caches excess food in tree crevices and has been linked to declining small-bird populations in gardens, as it raids nests for eggs and chicks.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 44–50 cm, the Pied Currawong is crow-sized — large and conspicuous.',
      },
      habitat: {
        correctAnswer: 'Urban & suburban gardens',
        hint: 'Breeds in tall forest but descends to urban areas and lowlands in autumn and winter in large flocks.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'An omnivore — eats insects, berries, lizards, bird eggs and chicks, and carrion. Caches food for later.',
      },
      beakShape: {
        correctAnswer: 'Large & powerful',
        hint: 'A strong, heavy bill with a hooked tip — used for probing bark, tearing fruit, and catching small prey.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Sturdy passerine feet. Walks confidently on the ground and perches prominently in tall trees.',
      },
      flightStyle: {
        correctAnswer: 'Soaring on thermals',
        hint: 'Strong, deliberate flier. Soars on thermals and glides between tall trees with ease.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: 'The "curra-wong" call is melodious and haunting. Also has a complex variety of other whistling notes.',
      },
      plumage: {
        correctAnswer: 'Mostly black',
        hint: 'Mostly black with white patches at the base and tip of the tail and under the wings. Yellow eye is distinctive.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident in eastern Australia. Many populations make altitudinal migrations — "currawong season" in autumn brings flocks to city parks.',
      },
    },
  },

  {
    id: 'australian-wood-duck',
    commonName: 'Australian Wood Duck',
    scientificName: 'Chenonetta jubata',
    imageUrl: '/birds/australian-wood-duck.webp',
    difficulty: 'familiar',
    aliases: ['wood duck', 'australian wood duck', 'maned duck', 'maned goose'],
    funFact:
      'Unlike most ducks, the Australian Wood Duck spends most of its time on land grazing on grass — it behaves more like a goose than a typical duck. It nests in tree hollows, sometimes at a considerable height, and ducklings jump to the ground on their first day.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 44–50 cm, the Wood Duck is a medium-sized duck, smaller than a Pacific Black Duck.',
      },
      habitat: {
        correctAnswer: 'Wetland & waterways',
        hint: 'Wetlands, flooded grasslands, and farm dams — but spends much of its time grazing on adjacent grass.',
      },
      diet: {
        correctAnswer: 'Plants & aquatic vegetation',
        hint: 'Primarily a grazer — feeds on grass, clover, and seeds on land. Rarely dives for aquatic food.',
      },
      beakShape: {
        correctAnswer: 'Broad & flat',
        hint: 'The flat, duck bill is suited for grazing on short grass rather than filtering water.',
      },
      footType: {
        correctAnswer: 'Swimming (webbed)',
        hint: 'Webbed feet for swimming, though it spends more time walking on land than most ducks.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Fast, strong, direct flight. Often seen flying in small flocks at dusk to roost.',
      },
      song: {
        correctAnswer: 'Soft & repetitive',
        hint: 'The female gives a rising "gnow" call; the male a softer grunt. Fairly quiet compared to other ducks.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Male: dark brown head with a small mane, grey body. Female: streaked brown with white eye stripes.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident and common across most of Australia. Population has increased with agricultural water sources.',
      },
    },
  },

  {
    id: 'brolga',
    commonName: 'Brolga',
    scientificName: 'Antigone rubicunda',
    imageUrl: '/birds/brolga.webp',
    difficulty: 'familiar',
    aliases: ['brolga', 'native companion'],
    funFact:
      'Famous for its spectacular courtship dance — pairs leap high into the air, spread their wings, bow, and call in a synchronised display. It features prominently in Aboriginal Dreamtime stories and is the faunal emblem of Queensland.',
    categories: {
      size: {
        correctAnswer: 'Very large (over 80 cm)',
        hint: "At 100–120 cm, the Brolga is one of Australia's tallest birds — standing at eye level with a child.",
      },
      habitat: {
        correctAnswer: 'Wetland & waterways',
        hint: 'Shallow freshwater wetlands, floodplains, and adjacent grasslands in northern and eastern Australia.',
      },
      diet: {
        correctAnswer: 'Plants & aquatic vegetation',
        hint: 'Digs up bulrush roots and tubers with its bill. Also eats insects, small vertebrates, and grain.',
      },
      beakShape: {
        correctAnswer: 'Long & dagger-like',
        hint: 'A long, straight, powerful bill used for probing mud and digging up food.',
      },
      footType: {
        correctAnswer: 'Wading (long, spread toes)',
        hint: 'Long legs and spread toes for wading in shallow water and walking on soft mud.',
      },
      flightStyle: {
        correctAnswer: 'Soaring on thermals',
        hint: 'Cranes are graceful soarers, circling on thermals and migrating long distances in V-formations.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'A far-carrying, trumpeting "garroo" call — produced using a long, coiled trachea that amplifies the sound.',
      },
      plumage: {
        correctAnswer: 'Grey with coloured markings',
        hint: 'Grey overall with a bare red head and a dangling red dewlap. White cheeks and green bill.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident in northern and eastern Australia. Makes local movements following seasonal wetlands.',
      },
    },
  },

  {
    id: 'little-penguin',
    commonName: 'Little Penguin',
    scientificName: 'Eudyptula minor',
    imageUrl: '/birds/little-penguin.webp',
    difficulty: 'familiar',
    aliases: ['little penguin', 'fairy penguin', 'little blue penguin'],
    funFact:
      'Australia\'s only penguin species and the world\'s smallest, standing just 33 cm tall. They come ashore after dark in groups — "penguin parades" — to avoid predators. The most famous parade at Phillip Island, Victoria, draws over 500,000 visitors a year.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 33–43 cm and weighing just 1 kg, the Little Penguin lives up to its name — tiny for a penguin.',
      },
      habitat: {
        correctAnswer: 'Coastal & ocean',
        hint: 'Nests in burrows on coastal islands and headlands. Spends most of its life at sea.',
      },
      diet: {
        correctAnswer: 'Fish & aquatic life',
        hint: 'Dives to catch small fish, squid, and krill. Can dive to 60 m and swim at 6 km/h.',
      },
      beakShape: {
        correctAnswer: 'Long & dagger-like',
        hint: 'A pointed bill for catching and gripping slippery fish underwater.',
      },
      footType: {
        correctAnswer: 'Swimming (webbed)',
        hint: 'Webbed feet act as rudders underwater. On land, penguins walk upright with a characteristic waddle.',
      },
      flightStyle: {
        correctAnswer: 'Rarely or never flies',
        hint: 'Penguins are flightless. Their wings have evolved into flippers — they "fly" underwater at great speed.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'Braying, trumpeting calls at night when returning to the colony — pairs have distinct calls to locate each other.',
      },
      plumage: {
        correctAnswer: 'Blue or iridescent',
        hint: 'Indigo-blue above and white below. The blue plumage gives them their other name — "little blue penguin".',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Year-round resident on Australian and New Zealand coasts. Breeds in spring and summer.',
      },
    },
  },

  {
    id: 'satin-bowerbird',
    commonName: 'Satin Bowerbird',
    scientificName: 'Ptilonorhynchus violaceus',
    imageUrl: '/birds/satin-bowerbird.webp',
    difficulty: 'familiar',
    aliases: ['satin bowerbird', 'bowerbird'],
    funFact:
      'The male builds an elaborate "bower" — an avenue of sticks decorated almost exclusively with blue objects (bottle caps, flowers, feathers, pegs) — to attract females. Females assess bower quality and construction skill as a proxy for mate fitness.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 27–33 cm, the Satin Bowerbird is similar in size to a small dove.',
      },
      habitat: {
        correctAnswer: 'Rainforest',
        hint: 'Rainforest and adjacent wet sclerophyll forest in eastern Australia.',
      },
      diet: {
        correctAnswer: 'Fruit & nectar',
        hint: 'Mainly fruit, berries, and nectar. Insects are added to the diet, especially during breeding season.',
      },
      beakShape: {
        correctAnswer: 'Short & stubby',
        hint: 'A slightly hooked, robust bill for handling fruit and seeds.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Standard passerine perching feet.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Strong, direct flight through and above the forest canopy.',
      },
      song: {
        correctAnswer: 'Skilled mimic',
        hint: 'Males are accomplished mimics, incorporating the calls of other birds, machinery, and human voices into their display at the bower.',
      },
      plumage: {
        correctAnswer: 'Blue or iridescent',
        hint: 'The adult male is entirely glossy blue-black that shimmers violet in sunlight. The female is olive-green and brown.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident in eastern Australia. Makes altitudinal movements in autumn.',
      },
    },
  },

  {
    id: 'red-tailed-black-cockatoo',
    commonName: 'Red-tailed Black Cockatoo',
    scientificName: 'Calyptorhynchus banksii',
    imageUrl: '/birds/red-tailed-black-cockatoo.webp',
    difficulty: 'familiar',
    aliases: ['red tailed black cockatoo', 'red-tailed black cockatoo', 'black cockatoo'],
    funFact:
      "Uses its massive beak to crack open some of Australia's hardest seed pods. There are five subspecies — some are now endangered due to the loss of old-growth trees containing the large hollows they need for nesting.",
    categories: {
      size: {
        correctAnswer: 'Large (50–80 cm)',
        hint: "At 50–65 cm, this is one of Australia's largest parrots.",
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Dry eucalyptus woodland and tropical savanna. Requires old, hollow-bearing trees for nesting.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Specialises in hard seeds from eucalyptus, banksia, and cypress pine. The beak can crack extremely hard seed pods.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'An immensely powerful, curved parrot beak — capable of cracking seed pods that other birds cannot access.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Zygodactyl feet for gripping both branches and food items.',
      },
      flightStyle: {
        correctAnswer: 'Undulating (rises & dips)',
        hint: 'Slow, undulating flight with deep wing beats. Often heard before seen — their calls carry for kilometres.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'A loud, metallic "krree" screech. Contact calls between flocks carry vast distances across open woodland.',
      },
      plumage: {
        correctAnswer: 'Mostly black',
        hint: 'Males: all black with scarlet tail panel. Females: black spotted with yellow and orange-barred tail.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident, though some populations are nomadic over large ranges following food availability.',
      },
    },
  },

  {
    id: 'barn-owl',
    commonName: 'Barn Owl',
    scientificName: 'Tyto alba',
    imageUrl: '/birds/barn-owl.webp',
    difficulty: 'familiar',
    aliases: ['barn owl'],
    funFact:
      'Can locate and catch prey in complete darkness using sound alone. Its heart-shaped facial disc acts like a satellite dish, funnelling sound to asymmetrically placed ears. It eats up to 1,000 mice and rats per year.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 33–39 cm — medium-sized, lighter and slimmer than a Tawny Frogmouth.',
      },
      habitat: {
        correctAnswer: 'Open grassland & farmland',
        hint: 'Open farmland, grassland, and lightly wooded areas where rodents are abundant.',
      },
      diet: {
        correctAnswer: 'Small mammals & reptiles',
        hint: 'Almost exclusively eats mice, rats, and small marsupials — one of the most effective rodent controllers in nature.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: "A small, hooked bill for tearing prey into pieces. The facial disc, not the bill, is the owl's defining feature.",
      },
      footType: {
        correctAnswer: 'Taloned (strong raptor grip)',
        hint: 'Long, powerful talons for gripping prey in complete darkness — the killing blow, not the bill.',
      },
      flightStyle: {
        correctAnswer: 'Swooping & diving',
        hint: 'Silent, low gliding flight — specialised wing feathers eliminate almost all sound, allowing the owl to approach prey undetected.',
      },
      song: {
        correctAnswer: 'Mostly silent',
        hint: 'Flight is nearly silent. Makes a harsh, drawn-out screech that can be alarming to hear at night.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Golden-buff and grey above, white to pale below. The heart-shaped white face is the key identification feature.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Year-round resident across most of Australia. Breeds year-round when food is abundant.',
      },
    },
  },

  // ─── RARE ────────────────────────────────────────────────────────────────────

  {
    id: 'spotted-pardalote',
    commonName: 'Spotted Pardalote',
    scientificName: 'Pardalotus punctatus',
    imageUrl: '/birds/spotted-pardalote.webp',
    difficulty: 'rare',
    aliases: ['spotted pardalote', 'pardalote'],
    funFact:
      "One of Australia's smallest birds. It feeds almost exclusively on lerps — tiny sugar-rich coatings secreted by psyllid insects on eucalyptus leaves. It nests in a 30 cm tunnel bored into a dirt bank.",
    categories: {
      size: {
        correctAnswer: 'Tiny (under 12 cm)',
        hint: 'At 8–10 cm and weighing just 6 g, the Spotted Pardalote is one of the tiniest birds in Australia.',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Eucalyptus woodland and forest — wherever lerp-producing psyllid insects infest the upper canopy.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'Specialises in lerps and scale insects high in the eucalyptus canopy. A key tree health service.',
      },
      beakShape: {
        correctAnswer: 'Short & stubby',
        hint: 'A tiny, blunt bill for picking lerps off leaves. Short and precise rather than long and probing.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Tiny perching feet for clinging to leaf stems and bark in the canopy.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Rapid, flitting flight between trees. Often heard before seen — a constant "sleep-may-be" call from the canopy.',
      },
      song: {
        correctAnswer: 'Soft & repetitive',
        hint: 'A soft, persistent two-note whistle often rendered as "sleep-may-be" or "wit-i-chu". Repeated incessantly from the canopy.',
      },
      plumage: {
        correctAnswer: 'Vivid multicolour',
        hint: 'Male has a spotted black crown, yellow throat, red rump and a striking spotted pattern. Tiny but spectacular.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Resident across south-eastern Australia, though it makes some altitudinal movements in winter.',
      },
    },
  },

  {
    id: 'powerful-owl',
    commonName: 'Powerful Owl',
    scientificName: 'Ninox strenua',
    imageUrl: '/birds/powerful-owl.webp',
    difficulty: 'rare',
    aliases: ['powerful owl'],
    funFact:
      "Australia's largest owl. It regularly roosts during the day while clutching its half-eaten prey — often a ringtail possum — in its talons. Pairs mate for life and may use the same hollow for decades.",
    categories: {
      size: {
        correctAnswer: 'Large (50–80 cm)',
        hint: 'At 45–65 cm with a wingspan up to 140 cm, the Powerful Owl is a large, imposing raptor.',
      },
      habitat: {
        correctAnswer: 'Rainforest',
        hint: 'Tall wet sclerophyll forest and rainforest in south-eastern Australia. Requires old trees with large hollows.',
      },
      diet: {
        correctAnswer: 'Small mammals & reptiles',
        hint: 'Specialises in arboreal mammals — particularly common and greater ringtail possums, gliders, and flying foxes.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'A strongly hooked bill for tearing apart prey, which is often eaten over multiple nights.',
      },
      footType: {
        correctAnswer: 'Taloned (strong raptor grip)',
        hint: 'Enormous, powerful talons relative to body size — capable of gripping and killing prey as large as a ringtail possum.',
      },
      flightStyle: {
        correctAnswer: 'Swooping & diving',
        hint: 'Hunts at night, crashing into foliage or swooping through the canopy to catch arboreal prey.',
      },
      song: {
        correctAnswer: 'Soft & repetitive',
        hint: 'A slow, deep "woo-hoo" repeated at 10-second intervals — carries far through the forest on still nights.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Dark brown above, white below with dark brown chevron-shaped barring. Yellow eyes are striking.',
      },
      season: {
        correctAnswer: 'Year-round resident',
        hint: 'Non-migratory. Pairs maintain large, permanent territories of up to 1,000 ha.',
      },
    },
  },

  {
    id: 'channel-billed-cuckoo',
    commonName: 'Channel-billed Cuckoo',
    scientificName: 'Scythrops novaehollandiae',
    imageUrl: '/birds/channel-billed-cuckoo.webp',
    difficulty: 'rare',
    aliases: ['channel billed cuckoo', 'channel-billed cuckoo', 'storm bird'],
    funFact:
      'The world\'s largest cuckoo. Its arrival in eastern Australia in spring is announced by an eerie, screaming call that gave it the nickname "storm bird". It is a brood parasite — laying its eggs in the nests of currawongs and crows.',
    categories: {
      size: {
        correctAnswer: 'Large (50–80 cm)',
        hint: "At 58–65 cm — the world's largest cuckoo. Far bigger than the familiar Common Cuckoo.",
      },
      habitat: {
        correctAnswer: 'Rainforest',
        hint: 'Rainforest, wet sclerophyll forest, and fig-bearing trees. Follows fruiting trees across the landscape.',
      },
      diet: {
        correctAnswer: 'Fruit & nectar',
        hint: 'A frugivore — eats figs and other forest fruits. Despite the alarming bill, it is not a predator.',
      },
      beakShape: {
        correctAnswer: 'Large & powerful',
        hint: 'A massive, ridged, toucan-like bill. The "channel" refers to the groove along the upper mandible.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'All cuckoos are zygodactyl — well adapted for perching in forest canopy.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Strong, direct flight above the canopy. Often seen flying in pairs or small groups at dusk.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'An extraordinarily loud, grating, "awk-awk-awk" scream. A familiar heralding sound of spring in eastern Australia.',
      },
      plumage: {
        correctAnswer: 'Grey with coloured markings',
        hint: 'Grey overall with bare red facial skin around the eyes. Lightly barred underparts.',
      },
      season: {
        correctAnswer: 'Summer breeding visitor',
        hint: 'Migrates from New Guinea and Indonesia to eastern Australia each spring to breed. Departs in autumn.',
      },
    },
  },

  {
    id: 'little-corella',
    commonName: 'Little Corella',
    scientificName: 'Cacatua sanguinea',
    imageUrl: '/birds/little-corella.webp',
    difficulty: 'rare',
    aliases: ['little corella', 'corella', 'bare-eyed cockatoo'],
    funFact:
      'Highly intelligent and capable of mimicking speech. Large urban flocks — sometimes thousands strong — are considered a pest, stripping bark from trees and causing significant crop damage. Some councils hire falconers to disperse them.',
    categories: {
      size: {
        correctAnswer: 'Medium (30–50 cm)',
        hint: 'At 36–39 cm, the Little Corella is similar in size to a galah.',
      },
      habitat: {
        correctAnswer: 'Open grassland & farmland',
        hint: 'Arid and semi-arid grassland, farmland, and increasingly, urban parks and ovals.',
      },
      diet: {
        correctAnswer: 'Seeds & grain',
        hint: 'Ground feeders that eat seeds, grass, grain crops, and roots. Often seen in huge foraging flocks.',
      },
      beakShape: {
        correctAnswer: 'Short & hooked',
        hint: 'The typical curved parrot beak, also used to strip bark from trees — a behaviour that can kill large trees.',
      },
      footType: {
        correctAnswer: 'Zygodactyl (two toes each way)',
        hint: 'Zygodactyl feet for both ground feeding and canopy climbing.',
      },
      flightStyle: {
        correctAnswer: 'Undulating (rises & dips)',
        hint: 'Undulating flight in flocks, often performing rolling acrobatics. Large flocks create spectacular aerial displays.',
      },
      song: {
        correctAnswer: 'Loud & raucous',
        hint: 'Raucous, screeching calls — flocks of thousands are deafening. Can mimic human speech in captivity.',
      },
      plumage: {
        correctAnswer: 'White with coloured accents',
        hint: 'Mainly white with a distinctive pink-salmon wash between the bill and eye. Blue bare eye-ring.',
      },
      season: {
        correctAnswer: 'Nomadic (follows food or rain)',
        hint: 'Nomadic in inland Australia, following rainfall and food sources. Sedentary in some urban populations.',
      },
    },
  },

  {
    id: 'fairy-martin',
    commonName: 'Fairy Martin',
    scientificName: 'Petrochelidon ariel',
    imageUrl: '/birds/fairy-martin.webp',
    difficulty: 'rare',
    aliases: ['fairy martin', 'bottle swallow'],
    funFact:
      'Builds a unique flask-shaped nest from hundreds of individual mud pellets, with a long entrance tunnel to deter predators. Colonies of hundreds of nests are attached to cliff faces, culverts, and the underside of bridges.',
    categories: {
      size: {
        correctAnswer: 'Tiny (under 12 cm)',
        hint: "At 11–12 cm, the Fairy Martin is one of Australia's smallest aerial birds.",
      },
      habitat: {
        correctAnswer: 'Open grassland & farmland',
        hint: 'Open country, especially near water, cliffs, and structures that support their mud nests.',
      },
      diet: {
        correctAnswer: 'Insects & invertebrates',
        hint: 'A specialist aerial insectivore — catches all its food in flight, swooping gracefully over water and open ground.',
      },
      beakShape: {
        correctAnswer: 'Short & stubby',
        hint: 'A tiny, wide, flat bill for catching insects in flight — opens into a wide gape when hunting.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Small, weak feet. Fairy Martins rarely walk — their lives are spent in the air or clinging to their mud nests.',
      },
      flightStyle: {
        correctAnswer: 'Swooping & diving',
        hint: 'Graceful, twisting aerial flight. Sweeps low over water, picking insects from the surface.',
      },
      song: {
        correctAnswer: 'Soft & repetitive',
        hint: 'Soft twittering and chattering calls in flight and at the colony.',
      },
      plumage: {
        correctAnswer: 'Brown & mottled',
        hint: 'Chestnut head, iridescent blue-black back, white rump, and pale underparts. Distinctive in flight.',
      },
      season: {
        correctAnswer: 'Nomadic (follows food or rain)',
        hint: 'Partially nomadic and migratory. Many birds move north in winter, following insect availability.',
      },
    },
  },

  {
    id: 'regent-honeyeater',
    commonName: 'Regent Honeyeater',
    scientificName: 'Anthochaera phrygia',
    imageUrl: '/birds/regent-honeyeater.webp',
    difficulty: 'rare',
    aliases: ['regent honeyeater'],
    funFact:
      'Critically endangered — fewer than 400 survive in the wild. So few remain that some birds have never heard another of their species sing, and have begun mimicking other birds instead. Captive breeding programs are teaching hand-raised birds the correct song before release.',
    categories: {
      size: {
        correctAnswer: 'Small (12–30 cm)',
        hint: 'At 19–24 cm, the Regent Honeyeater is a medium-small honeyeater.',
      },
      habitat: {
        correctAnswer: 'Woodland & forest',
        hint: 'Box-ironbark woodland and dry sclerophyll forest in south-eastern Australia — a critically threatened ecosystem.',
      },
      diet: {
        correctAnswer: 'Fruit & nectar',
        hint: 'A nectar specialist, particularly of box and ironbark eucalyptus. Also takes lerps and insects for protein.',
      },
      beakShape: {
        correctAnswer: 'Long & curved downward',
        hint: 'A curved, pointed honeyeater bill, perfectly shaped for probing into eucalyptus blossom.',
      },
      footType: {
        correctAnswer: 'Perching (three toes forward)',
        hint: 'Typical passerine perching feet for gripping flower stems and branches while feeding.',
      },
      flightStyle: {
        correctAnswer: 'Fast & direct',
        hint: 'Fast, direct flight between flowering trees — it must cover large distances following patchy eucalyptus flowering.',
      },
      song: {
        correctAnswer: 'Melodic & musical',
        hint: "Historically, a complex and beautiful song. Tragically, some wild birds have lost the species' song entirely due to lack of adults to learn from.",
      },
      plumage: {
        correctAnswer: 'Vivid multicolour',
        hint: 'Striking black and yellow patterning with white spots on the wings and bare yellow facial skin. Unmistakable.',
      },
      season: {
        correctAnswer: 'Nomadic (follows food or rain)',
        hint: 'Nomadic, following the irregular flowering of box and ironbark eucalyptus across south-eastern Australia.',
      },
    },
  },
];
