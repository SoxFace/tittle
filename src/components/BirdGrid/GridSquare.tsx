'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface GridSquareProps {
  index: number; // 0–8
  isHighlighted: boolean; // true when the Catchphrase cycler is resting on this square
}

export function GridSquare({ index, isHighlighted }: GridSquareProps) {
  // Pin each tile to its fixed 1/9 cell using absolute positioning.
  // CSS grid would reflow remaining tiles into the gap when a tile is removed,
  // causing the wrong tile to appear to disappear.
  const row = Math.floor(index / 3);
  const col = index % 3;

  return (
    <motion.div
      exit={{
        scale: [1, 1.15, 0],
        opacity: [1, 1, 0],
        transition: { duration: 0.38, ease: [0.4, 0, 0.6, 1] },
      }}
      style={{
        position: 'absolute',
        top: `${(row / 3) * 100}%`,
        left: `${(col / 3) * 100}%`,
        width: '33.333%',
        height: '33.333%',
      }}
      className={cn(
        'flex items-center justify-center outline outline-1 outline-black/20 select-none',
        isHighlighted
          ? 'bg-amber-400 shadow-[inset_0_0_0_3px_theme(colors.amber.200)]'
          : 'bg-slate-800',
      )}
      aria-label={`Square ${index + 1}`}
    >
      <span
        className={cn(
          'leading-none font-black tabular-nums',
          // Scale text to the square — will be ~125px wide on mobile
          'text-4xl sm:text-5xl',
          isHighlighted ? 'text-slate-900' : 'text-slate-600',
        )}
      >
        {index + 1}
      </span>
    </motion.div>
  );
}
