'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

const CYCLE_INTERVAL_MS = 90; // fast enough to feel exciting, slow enough to see

/**
 * Manages the Catchphrase-style cycling mechanic.
 *
 * - Call start() to begin cycling through availableSquares at speed.
 * - Call stop() to freeze on the current square — returns its index.
 * - highlighted tracks whichever square is currently lit up.
 *
 * Uses refs internally so stop() always captures the exact value shown on screen,
 * avoiding stale-closure issues with fast intervals.
 */
export function useCatchphrase(availableSquares: number[]) {
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [cycling, setCycling] = useState(false);

  // Refs so the interval callback and stop() always see the latest values
  const highlightedRef = useRef<number | null>(null);
  const availableRef = useRef(availableSquares);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Keep availableRef current so the interval always cycles from the live list
  useEffect(() => {
    availableRef.current = availableSquares;
  }, [availableSquares]);

  // Clear the interval if the component using this hook unmounts mid-cycle
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const start = useCallback(() => {
    if (availableRef.current.length === 0) return;

    const tick = () => {
      const squares = availableRef.current;
      if (squares.length === 0) return;
      const idx = squares[Math.floor(Math.random() * squares.length)];
      highlightedRef.current = idx;
      setHighlighted(idx);
    };

    tick(); // fire immediately — no waiting for the first interval
    intervalRef.current = setInterval(tick, CYCLE_INTERVAL_MS);
    setCycling(true);
  }, []);

  const stop = useCallback((): number => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const selected = highlightedRef.current;
    highlightedRef.current = null;
    setHighlighted(null);
    setCycling(false);

    // Fallback: if called before the first tick, pick the first available square
    return selected ?? availableRef.current[0] ?? 0;
  }, []);

  return { highlighted, cycling, start, stop };
}
