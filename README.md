This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

---

│ npm run dev │ Dev server │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm run typecheck │ TypeScript check │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm run lint / lint:fix │ ESLint │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm run format / format:check │ Prettier │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm test │ Vitest unit tests │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm run test:watch │ Vitest watch mode │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm run test:e2e │ Playwright (mobile Chrome by default) │
├───────────────────────────────┼───────────────────────────────────────┤
│ npm run test:e2e:ui │ Playwright with visual UI |

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Tittle - bird watching game

## Game Mechanics Summary

Core loop:

1. Bird of the day is set (same for all users on a given day)
2. 9 rounds — each round presents a category clue (e.g. "What is this bird's diet?")
3. User picks an answer (multiple choice works best on mobile)
4. Correct answer → unlocks the "Tittle it" button, Catchphrase cycling begins
5. Tittle it pressed → cycling stops, that square reveals a piece of the image
6. Wrong answer → no reveal, move to next category
7. At any point (or after all 9 rounds) user can attempt to name the bird
8. Win = correct bird identification; lose = 9 rounds exhausted without guessing

The 9 categories (one per round):

┌─────┬─────────────────┬─────────────────────────────────────────────────────┐
│ # │ Category │ Example clue │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 1 │ Size │ Small / Medium / Large / Very large │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 2 │ Habitat │ Woodland, Wetland, Coastal, Urban, Moorland │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 3 │ Diet │ Insects, Seeds, Fish, Berries, Small mammals │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 4 │ Beak shape │ Short & stubby, Long & curved, Hooked, Flat/broad │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 5 │ Foot type │ Perching, Wading, Swimming, Climbing, Raptor talons │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 6 │ Flight style │ Soaring, Hovering, Darting, Undulating │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 7 │ Song/call │ Melodic, Harsh, Repetitive, Mimics other birds │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 8 │ Plumage │ Description or colour clue │
├─────┼─────────────────┼─────────────────────────────────────────────────────┤
│ 9 │ Season / Origin │ Resident, Summer visitor, Winter visitor │
└─────┴─────────────────┴─────────────────────────────────────────────────────┘

---

The Catchphrase Reveal Mechanic

┌───┬───┬───┐
│ 1 │ 2 │ 3 │ ← numbered squares covering the bird image
├───┼───┼───┤
│ 4 │[5]│ 6 │ ← [5] = currently highlighted (cycling)
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┴───┴───┘
↓
[TITTLE IT] ← button press stops the cycle

```
Square 5 flips/fades away → bird image segment visible
```

Key implementation detail: The cycling is a setInterval (e.g. 80–120ms) racing through unrevealed square indices. On button press, clearInterval fires and the highlighted square animates out. This needs to feel snappy and slightly unpredictable — you
can add variable speed ramping to increase tension.

---

Data Structure

interface Bird {
id: string;
commonName: string; // "Robin"
scientificName: string; // "Erithacus rubecula"
imageUrl: string;
categories: {
size: 'tiny' | 'small' | 'medium' | 'large' | 'very large';
habitat: string[];
diet: string[];
beakShape: string;
footType: string;
flightStyle: string;
song: string;
plumage: string;
season: 'resident' | 'summer' | 'winter' | 'passage';
};
answers: Record<CategoryKey, string[]>; // correct answer(s) per category
funFact: string;
difficulty: 'common' | 'familiar' | 'rare';
}

interface GameState {
birdId: string;
date: string; // YYYY-MM-DD (seed for daily bird)
revealedSquares: number[]; // indices 0-8
currentRound: number; // 0-8
guessAttempted: boolean;
won: boolean;
}

---

Tech Stack Recommendations

Before I give a hard recommendation, here are the viable options depending on what you know:

┌────────┬─────────────────────────────────────────────────┬─────────────────────────────────┐
│ Option │ Stack │ Best if you know... │
├────────┼─────────────────────────────────────────────────┼─────────────────────────────────┤
│ A │ Next.js + TypeScript + Tailwind + Framer Motion │ React ecosystem │
├────────┼─────────────────────────────────────────────────┼─────────────────────────────────┤
│ B │ SvelteKit + TypeScript + Tailwind │ Svelte │
├────────┼─────────────────────────────────────────────────┼─────────────────────────────────┤
│ C │ React Native / Expo │ Native mobile dev │
├────────┼─────────────────────────────────────────────────┼─────────────────────────────────┤
│ D │ Vanilla HTML/CSS/JS + Vite │ Prefer lightweight/no framework │
└────────┴─────────────────────────────────────────────────┴─────────────────────────────────┘

My lean for this project:

Next.js + TypeScript + Tailwind + Framer Motion — here's why it suits the data structure:

- Bird of the day → getStaticProps or a simple date-seeded deterministic selection from a local JSON dataset — no backend required
- PWA support → installable on mobile, works offline, no App Store needed
- Framer Motion → the square reveal animation is a natural fit (AnimatePresence + motion.div exit animations)
- Local JSON data → the bird catalogue can just be a TypeScript data file until/unless you need a CMS or database
- Tailwind → mobile-first by default, the aspect-ratio and grid utilities are perfect for the 3x3 overlay

---

Bird Image Sourcing

This is a key consideration. Options:

1. Wikimedia Commons — free, high quality, programmatically accessible via API
2. iNaturalist API — rich, community-verified, has taxonomy data that maps to your categories
3. eBird / Macaulay Library — Cornell Lab's database, excellent quality but check licensing
4. Curated static assets — hand-pick 30–50 birds, host images yourself (best control, good MVP)

For an MVP, I'd suggest curating a starter set of ~30 well-known birds with images you own/license, structured as a local JSON file. Expand later.

---

Questions to narrow the stack

1. What's your primary frontend experience? (React, Vue, Svelte, vanilla?)
2. Web app or native mobile? A PWA (Next.js) avoids the App Store but a native app (Expo) gives smoother touch interactions
3. Do you want a backend at all? (user accounts, streaks, leaderboard) or purely static/local state like Wordle?
4. Region focus? UK birds (RSPB dataset), North American (Audubon), or global?

That'll let me give you a precise stack recommendation and we can move into the implementation plan.

## Birdlife.org.au

BirdLife Australia's bird profiles are an excellent authoritative source — they're structured exactly around the categories Tittle needs:

    - Size (measurements)
    - Habitat (described per species)
    - Diet / Feeding behaviour
    - Identification (plumage, beak, field marks)
    - Voice / Call descriptions
    - Distribution / Season (range maps and seasonal presence)

    A few things worth knowing for the project:

    1. Data use — BirdLife Australia is a non-profit conservation organisation. For a commercial product you'd want to check their terms before scraping or bulk-copying content. For an educational side project with attribution it's likely fine, but worth
    confirming.
    2. Images — Their profile images are photographer-credited. You'll need separate image licensing. Wikimedia Commons under CC licences is the safest source for free bird images, and many high-quality Australian bird photos are available there.
    3. For the MVP — the local JSON approach is still right. You can use BirdLife Australia to verify and enrich the data already seeded (the 30 birds are in the dataset), then consider an API integration post-validation when you're ready to expand the
    catalogue beyond 30.
    4. Future API — BirdLife Australia also feeds into the Atlas of Living Australia (ALA) at api.ala.org.au, which has a proper REST API with species profiles, range data, and images. That's the cleaner programmatic route when you're ready to move off
    local JSON.

    Worth saving that URL as a reference for enriching the bird data as the project grows.
