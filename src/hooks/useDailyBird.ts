'use client';

import { BIRDS } from '@/data/birds';
import { useGameStore } from './useGameStore';
import type { Bird } from '@/types';

/**
 * Returns the current Bird of the Day derived from the active game state.
 * Components that only need to display bird information (image, name reveal)
 * should use this hook rather than reading birdId from the store themselves.
 */
export function useDailyBird(): Bird {
  const birdId = useGameStore((state) => state.birdId);
  const bird = BIRDS.find((b) => b.id === birdId);
  if (!bird) throw new Error(`useDailyBird: no bird found for id "${birdId}"`);
  return bird;
}
