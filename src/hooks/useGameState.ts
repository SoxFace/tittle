'use client';

import { useEffect } from 'react';
import { useGameStore } from './useGameStore';
import { getTodayDate } from '@/lib/gameLogic';

/**
 * Primary hook for game state.
 * Wraps useGameStore and handles the date-change guard on mount —
 * if the persisted state is from a previous day, it resets to a fresh game.
 *
 * Use this hook in components, not useGameStore directly.
 */
export function useGameState() {
  const store = useGameStore();

  useEffect(() => {
    if (store.date !== getTodayDate()) {
      store.resetForNewDay();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return store;
}
