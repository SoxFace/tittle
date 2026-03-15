import { BIRDS } from '@/data/birds';
import { ROUND_ORDER } from '@/data/categories';
import type { Bird, CategoryKey, GameRound, GameState } from '@/types';

/** Returns today's date as YYYY-MM-DD in the local timezone. */
export function getTodayDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Maps a date string (YYYY-MM-DD) to a stable bird index.
 * Counts days elapsed since a fixed epoch so each calendar day yields
 * a different bird, cycling through the full catalogue.
 */
export function getDailyBirdIndex(date: string): number {
  const epoch = new Date('2025-01-01').getTime();
  const target = new Date(date).getTime();
  const daysSinceEpoch = Math.floor((target - epoch) / (1000 * 60 * 60 * 24));
  return Math.abs(daysSinceEpoch) % BIRDS.length;
}

export function getDailyBird(date: string): Bird {
  return BIRDS[getDailyBirdIndex(date)];
}

export function getBirdById(id: string): Bird {
  const bird = BIRDS.find((b) => b.id === id);
  if (!bird) throw new Error(`Bird not found: ${id}`);
  return bird;
}

/**
 * Checks whether the selected answer is correct for a given bird and category.
 * Exact match — options are always chosen from the known CATEGORY_CONFIG pool.
 */
export function checkCategoryAnswer(bird: Bird, categoryKey: CategoryKey, answer: string): boolean {
  return bird.categories[categoryKey].correctAnswer === answer;
}

/**
 * Checks a freeform bird name guess against the bird's commonName and all aliases.
 * Case-insensitive, trims whitespace.
 */
export function checkBirdGuess(bird: Bird, guess: string): boolean {
  const normalised = guess.trim().toLowerCase();
  const targets = [bird.commonName, ...bird.aliases].map((s) => s.toLowerCase());
  return targets.includes(normalised);
}

export function buildInitialRounds(): GameRound[] {
  return ROUND_ORDER.map((categoryKey) => ({
    categoryKey,
    status: 'pending',
    selectedAnswer: null,
  }));
}

export function buildInitialState(date: string): GameState {
  const bird = getDailyBird(date);
  return {
    date,
    birdId: bird.id,
    revealedSquares: [],
    rounds: buildInitialRounds(),
    currentRoundIndex: 0,
    awaitingReveal: false,
    status: 'playing',
  };
}
