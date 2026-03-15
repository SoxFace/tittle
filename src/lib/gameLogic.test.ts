import { describe, it, expect, beforeEach } from 'vitest';
import { BIRDS } from '@/data/birds';
import { ROUND_ORDER } from '@/data/categories';
import {
  getTodayDate,
  getDailyBirdIndex,
  getDailyBird,
  getBirdById,
  checkCategoryAnswer,
  checkBirdGuess,
  buildInitialRounds,
  buildInitialState,
} from './gameLogic';

describe('getTodayDate', () => {
  it('returns a string in YYYY-MM-DD format', () => {
    expect(getTodayDate()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('reflects the system date', () => {
    const now = new Date();
    const expected = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    expect(getTodayDate()).toBe(expected);
  });
});

describe('getDailyBirdIndex', () => {
  it('returns a valid index within the BIRDS array', () => {
    const index = getDailyBirdIndex('2025-06-15');
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(BIRDS.length);
  });

  it('returns the same index for the same date (deterministic)', () => {
    expect(getDailyBirdIndex('2025-06-15')).toBe(getDailyBirdIndex('2025-06-15'));
  });

  it('returns different indices for different dates', () => {
    const indices = ['2025-01-01', '2025-01-02', '2025-01-03'].map(getDailyBirdIndex);
    const unique = new Set(indices);
    expect(unique.size).toBeGreaterThan(1);
  });

  it('cycles through all birds over 30 consecutive days', () => {
    const indices = new Set<number>();
    for (let i = 0; i < 30; i++) {
      const date = new Date('2025-01-01');
      date.setDate(date.getDate() + i);
      const iso = date.toISOString().slice(0, 10);
      indices.add(getDailyBirdIndex(iso));
    }
    expect(indices.size).toBe(BIRDS.length);
  });
});

describe('getDailyBird', () => {
  it('returns a bird from the BIRDS array', () => {
    const bird = getDailyBird('2025-06-15');
    expect(BIRDS).toContain(bird);
  });
});

describe('getBirdById', () => {
  it('returns the correct bird', () => {
    const bird = getBirdById('laughing-kookaburra');
    expect(bird.commonName).toBe('Laughing Kookaburra');
  });

  it('throws if the bird id does not exist', () => {
    expect(() => getBirdById('does-not-exist')).toThrow('Bird not found: does-not-exist');
  });
});

describe('checkCategoryAnswer', () => {
  const kookaburra = getBirdById('laughing-kookaburra');

  it('returns true for the correct answer', () => {
    const correct = kookaburra.categories.size.correctAnswer;
    expect(checkCategoryAnswer(kookaburra, 'size', correct)).toBe(true);
  });

  it('returns false for an incorrect answer', () => {
    expect(checkCategoryAnswer(kookaburra, 'size', 'Tiny (under 12 cm)')).toBe(false);
  });

  it('is case-sensitive — must match exactly', () => {
    const correct = kookaburra.categories.size.correctAnswer;
    expect(checkCategoryAnswer(kookaburra, 'size', correct.toLowerCase())).toBe(false);
  });
});

describe('checkBirdGuess', () => {
  const magpie = getBirdById('australian-magpie');

  it('returns true for an exact common name match', () => {
    expect(checkBirdGuess(magpie, 'Australian Magpie')).toBe(true);
  });

  it('returns true for a matching alias', () => {
    expect(checkBirdGuess(magpie, 'magpie')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(checkBirdGuess(magpie, 'AUSTRALIAN MAGPIE')).toBe(true);
    expect(checkBirdGuess(magpie, 'australian magpie')).toBe(true);
  });

  it('trims leading and trailing whitespace', () => {
    expect(checkBirdGuess(magpie, '  magpie  ')).toBe(true);
  });

  it('returns false for a wrong guess', () => {
    expect(checkBirdGuess(magpie, 'kookaburra')).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(checkBirdGuess(magpie, '')).toBe(false);
  });

  it('returns false for a partial match', () => {
    expect(checkBirdGuess(magpie, 'magp')).toBe(false);
  });
});

describe('buildInitialRounds', () => {
  it('returns 9 rounds', () => {
    expect(buildInitialRounds()).toHaveLength(9);
  });

  it('all rounds start as pending with no selected answer', () => {
    for (const round of buildInitialRounds()) {
      expect(round.status).toBe('pending');
      expect(round.selectedAnswer).toBeNull();
    }
  });

  it('rounds follow ROUND_ORDER', () => {
    const rounds = buildInitialRounds();
    rounds.forEach((round, i) => {
      expect(round.categoryKey).toBe(ROUND_ORDER[i]);
    });
  });
});

describe('buildInitialState', () => {
  const date = '2025-06-15';
  let state: ReturnType<typeof buildInitialState>;

  beforeEach(() => {
    state = buildInitialState(date);
  });

  it('stores the correct date', () => {
    expect(state.date).toBe(date);
  });

  it('sets the bird for the given date', () => {
    expect(state.birdId).toBe(getDailyBird(date).id);
  });

  it('starts with no revealed squares', () => {
    expect(state.revealedSquares).toEqual([]);
  });

  it('starts at round index 0', () => {
    expect(state.currentRoundIndex).toBe(0);
  });

  it('awaitingReveal is false', () => {
    expect(state.awaitingReveal).toBe(false);
  });

  it('status is playing', () => {
    expect(state.status).toBe('playing');
  });

  it('has 9 rounds', () => {
    expect(state.rounds).toHaveLength(9);
  });
});
