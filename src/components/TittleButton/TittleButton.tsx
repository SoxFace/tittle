'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCatchphrase } from '@/hooks/useCatchphrase';
import { cn } from '@/lib/cn';

interface TittleButtonProps {
  /** Unrevealed square indices — the cycler will only visit these */
  availableSquares: number[];
  /** Called with the selected square index when the button is pressed */
  onReveal: (squareIndex: number) => void;
  /**
   * Called every time the cycling highlight changes.
   * Parent should forward this to BirdGrid as highlightedSquare.
   */
  onHighlightChange: (squareIndex: number | null) => void;
}

/**
 * The centrepiece of the Tittle mechanic.
 *
 * On mount, the cycler starts immediately — numbers race across the grid.
 * One press freezes it. That square is revealed.
 */
export function TittleButton({ availableSquares, onReveal, onHighlightChange }: TittleButtonProps) {
  const { highlighted, cycling, start, stop } = useCatchphrase(availableSquares);

  // Keep a stable ref to onHighlightChange to avoid re-running the sync effect
  const onHighlightChangeRef = useRef(onHighlightChange);
  useEffect(() => {
    onHighlightChangeRef.current = onHighlightChange;
  });

  // Sync the cycling highlight up to the parent → BirdGrid
  useEffect(() => {
    onHighlightChangeRef.current(highlighted);
  }, [highlighted]);

  // Begin cycling the moment this button appears on screen
  useEffect(() => {
    start();
    return () => {
      // Ensure the interval is cleared if the component unmounts mid-cycle
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePress = () => {
    if (!cycling) return;
    const squareIndex = stop();
    onReveal(squareIndex);
  };

  return (
    <motion.button
      onClick={handlePress}
      disabled={!cycling}
      // Subtle pulse while cycling to build urgency
      animate={cycling ? { scale: [1, 1.03, 1] } : { scale: 1 }}
      transition={cycling ? { repeat: Infinity, duration: 0.55, ease: 'easeInOut' } : {}}
      // Tactile press feedback
      whileTap={{ scale: 0.94 }}
      className={cn(
        'w-full rounded-2xl py-5 text-2xl font-black tracking-widest uppercase shadow-lg',
        // No CSS transition on colour — state changes must be instant
        cycling
          ? 'cursor-pointer bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900'
          : 'cursor-not-allowed bg-slate-700 text-slate-500',
      )}
      aria-label="Tittle it — stop the cycler and reveal a square"
    >
      {cycling ? 'Tittle It!' : '…'}
    </motion.button>
  );
}
