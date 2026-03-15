import type { CategoryConfig, CategoryKey } from '@/types';

/**
 * Defines the question text and all possible answer options for each category.
 * Each Bird stores only its correctAnswer (which must match one of these options exactly).
 */
export const CATEGORY_CONFIG: Record<CategoryKey, CategoryConfig> = {
  size: {
    label: 'Size',
    question: 'How big is this bird?',
    options: [
      'Tiny (under 12 cm)',
      'Small (12–30 cm)',
      'Medium (30–50 cm)',
      'Large (50–80 cm)',
      'Very large (over 80 cm)',
    ],
  },
  habitat: {
    label: 'Habitat',
    question: 'Where does this bird primarily live?',
    options: [
      'Woodland & forest',
      'Wetland & waterways',
      'Coastal & ocean',
      'Urban & suburban gardens',
      'Open grassland & farmland',
      'Rainforest',
      'Desert & arid scrubland',
    ],
  },
  diet: {
    label: 'Diet',
    question: "What is this bird's main food source?",
    options: [
      'Insects & invertebrates',
      'Seeds & grain',
      'Fruit & nectar',
      'Fish & aquatic life',
      'Small mammals & reptiles',
      'Carrion & scraps',
      'Plants & aquatic vegetation',
    ],
  },
  beakShape: {
    label: 'Beak Shape',
    question: "What best describes this bird's beak?",
    options: [
      'Short & hooked',
      'Long & dagger-like',
      'Broad & flat',
      'Short & stubby',
      'Long & curved downward',
      'Large & powerful',
    ],
  },
  footType: {
    label: 'Foot Type',
    question: 'What type of feet does this bird have?',
    options: [
      'Perching (three toes forward)',
      'Wading (long, spread toes)',
      'Swimming (webbed)',
      'Zygodactyl (two toes each way)',
      'Taloned (strong raptor grip)',
      'Running (large, reduced toes)',
    ],
  },
  flightStyle: {
    label: 'Flight Style',
    question: 'How does this bird fly?',
    options: [
      'Soaring on thermals',
      'Fast & direct',
      'Hovering in place',
      'Undulating (rises & dips)',
      'Swooping & diving',
      'Rarely or never flies',
    ],
  },
  song: {
    label: 'Song & Call',
    question: "How would you describe this bird's call?",
    options: [
      'Melodic & musical',
      'Loud & raucous',
      'Laughing or cackling',
      'Soft & repetitive',
      'Skilled mimic',
      'Mostly silent',
    ],
  },
  plumage: {
    label: 'Plumage',
    question: "What best describes this bird's colouring?",
    options: [
      'Vivid multicolour',
      'Black & white',
      'Brown & mottled',
      'White with coloured accents',
      'Pink & grey',
      'Blue or iridescent',
      'Mostly black',
      'Grey with coloured markings',
    ],
  },
  season: {
    label: 'Season',
    question: 'When is this bird found in Australia?',
    options: [
      'Year-round resident',
      'Summer breeding visitor',
      'Winter visitor from the north',
      'Nomadic (follows food or rain)',
    ],
  },
};

/**
 * The order in which categories are presented across the 9 rounds.
 * Progresses from broad/easy clues to more specialist knowledge.
 */
export const ROUND_ORDER: CategoryKey[] = [
  'size',
  'habitat',
  'diet',
  'plumage',
  'song',
  'beakShape',
  'footType',
  'flightStyle',
  'season',
];
