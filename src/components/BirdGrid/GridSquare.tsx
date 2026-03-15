'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface GridSquareProps {
  index: number; // 0–8
  isHighlighted: boolean; // true when the Catchphrase cycler is resting on this square
}

export function GridSquare({ index, isHighlighted }: GridSquareProps) {
  return (
    <motion.div
      // Exit animation — plays when this square is removed from the DOM on reveal
      exit={{
        scale: [1, 1.15, 0],
        opacity: [1, 1, 0],
        transition: { duration: 0.38, ease: [0.4, 0, 0.6, 1] },
      }}
      className={cn(
        // Base styles — no CSS transition on bg-color so the fast cycler looks snappy
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
