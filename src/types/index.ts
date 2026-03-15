export type CategoryKey =
  | 'size'
  | 'habitat'
  | 'diet'
  | 'beakShape'
  | 'footType'
  | 'flightStyle'
  | 'song'
  | 'plumage'
  | 'season';

export interface CategoryConfig {
  label: string;
  question: string;
  options: readonly string[];
}

export interface BirdCategory {
  correctAnswer: string;
  hint: string; // Educational fact shown after each round
}

export interface Bird {
  id: string;
  commonName: string;
  scientificName: string;
  imageUrl: string; // /birds/{id}.webp
  songUrl?: string; // Xeno-canto recording URL e.g. https://xeno-canto.org/sounds/uploaded/...
  categories: Record<CategoryKey, BirdCategory>;
  funFact: string;
  difficulty: 'common' | 'familiar' | 'rare';
  aliases: string[]; // Accepted alternate spellings for the bird name guess
}

export type RoundStatus = 'pending' | 'correct' | 'incorrect';

export interface GameRound {
  categoryKey: CategoryKey;
  status: RoundStatus;
  selectedAnswer: string | null;
}

export type GameStatus = 'playing' | 'won' | 'lost';

export interface GameState {
  date: string; // YYYY-MM-DD — invalidates persisted state when the day changes
  birdId: string;
  revealedSquares: number[]; // Indices 0–8 of the 3x3 grid
  rounds: GameRound[];
  currentRoundIndex: number; // 0–8
  awaitingReveal: boolean; // true after a correct answer, waiting for "Tittle it" press
  status: GameStatus;
}
