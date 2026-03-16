import { BIRDS } from '@/data/birds';
import { BIRD_SCHEDULE } from '@/data/schedule';
import { ROUND_ORDER } from '@/data/categories';
import type { Bird, CategoryKey, GameRound, GameState } from '@/types';

/**
 * Returns today's date as YYYY-MM-DD in the Australia/Sydney timezone.
 * Always use Sydney time so the bird rolls over at midnight AEDT/AEST
 * regardless of where the server is running (Vercel uses UTC).
 */
export function getTodayDate(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });
}

/**
 * Maps a date string (YYYY-MM-DD) to a bird index via the frozen schedule.
 * Using a schedule means adding or reordering birds never shifts existing dates.
 */
export function getDailyBirdIndex(date: string): number {
  const birdId = BIRD_SCHEDULE[date];
  if (birdId) {
    const idx = BIRDS.findIndex((b) => b.id === birdId);
    if (idx !== -1) return idx;
  }
  // Fallback for dates beyond the schedule
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
