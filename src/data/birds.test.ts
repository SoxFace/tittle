import { describe, it, expect } from 'vitest';
import { BIRDS } from './birds';
import { CATEGORY_CONFIG, ROUND_ORDER } from './categories';
import type { CategoryKey } from '@/types';

const ALL_CATEGORY_KEYS = Object.keys(CATEGORY_CONFIG) as CategoryKey[];

describe('BIRDS data integrity', () => {
  it('has exactly 30 birds', () => {
    expect(BIRDS).toHaveLength(30);
  });

  it('has unique ids', () => {
    const ids = BIRDS.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has unique commonNames', () => {
    const names = BIRDS.map((b) => b.commonName);
    expect(new Set(names).size).toBe(names.length);
  });

  it('every bird has all 9 categories', () => {
    for (const bird of BIRDS) {
      for (const key of ALL_CATEGORY_KEYS) {
        expect(bird.categories[key], `${bird.commonName} missing category: ${key}`).toBeDefined();
      }
    }
  });

  it('every correctAnswer matches a valid option in CATEGORY_CONFIG', () => {
    for (const bird of BIRDS) {
      for (const key of ALL_CATEGORY_KEYS) {
        const { correctAnswer } = bird.categories[key];
        const validOptions = CATEGORY_CONFIG[key].options;
        expect(
          validOptions,
          `${bird.commonName} — ${key}: "${correctAnswer}" is not a valid option`,
        ).toContain(correctAnswer);
      }
    }
  });

  it('every bird has a non-empty funFact', () => {
    for (const bird of BIRDS) {
      expect(bird.funFact.trim().length, `${bird.commonName} has empty funFact`).toBeGreaterThan(0);
    }
  });

  it('every bird has at least one alias', () => {
    for (const bird of BIRDS) {
      expect(bird.aliases.length, `${bird.commonName} has no aliases`).toBeGreaterThan(0);
    }
  });

  it('every bird category has a non-empty hint', () => {
    for (const bird of BIRDS) {
      for (const key of ALL_CATEGORY_KEYS) {
        const { hint } = bird.categories[key];
        expect(hint.trim().length, `${bird.commonName} — ${key}: empty hint`).toBeGreaterThan(0);
      }
    }
  });

  it('difficulty distribution is reasonable', () => {
    const counts = { common: 0, familiar: 0, rare: 0 };
    for (const bird of BIRDS) {
      counts[bird.difficulty]++;
    }
    expect(counts.common).toBeGreaterThanOrEqual(5);
    expect(counts.familiar).toBeGreaterThanOrEqual(5);
    expect(counts.rare).toBeGreaterThanOrEqual(5);
  });
});

describe('CATEGORY_CONFIG integrity', () => {
  it('has exactly 9 categories', () => {
    expect(Object.keys(CATEGORY_CONFIG)).toHaveLength(9);
  });

  it('every category has at least 4 options', () => {
    for (const [key, config] of Object.entries(CATEGORY_CONFIG)) {
      expect(config.options.length, `${key} has fewer than 4 options`).toBeGreaterThanOrEqual(4);
    }
  });

  it('every category has a non-empty label and question', () => {
    for (const [key, config] of Object.entries(CATEGORY_CONFIG)) {
      expect(config.label.trim().length, `${key} has empty label`).toBeGreaterThan(0);
      expect(config.question.trim().length, `${key} has empty question`).toBeGreaterThan(0);
    }
  });
});

describe('ROUND_ORDER', () => {
  it('contains all 9 category keys', () => {
    expect(ROUND_ORDER).toHaveLength(9);
    expect(new Set(ROUND_ORDER)).toEqual(new Set(ALL_CATEGORY_KEYS));
  });
});
