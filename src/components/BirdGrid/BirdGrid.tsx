'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { GridSquare } from './GridSquare';
import type { GameStatus } from '@/types';

interface BirdGridProps {
  imageUrl: string;
  birdName: string; // Revealed in the win overlay and used as alt text on win
  revealedSquares: number[]; // Indices 0–8 that have been uncovered
  highlightedSquare: number | null; // The square currently lit up by the cycler
  gameStatus: GameStatus;
}

const SQUARES = Array.from({ length: 9 }, (_, i) => i);

export function BirdGrid({
  imageUrl,
  birdName,
  revealedSquares,
  highlightedSquare,
  gameStatus,
}: BirdGridProps) {
  const isWon = gameStatus === 'won';

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* ── Bird image — always present underneath the grid ── */}
      <Image
        src={imageUrl}
        alt={isWon ? birdName : 'Mystery bird — keep guessing!'}
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 640px) 100vw, 480px"
      />

      {/* ── 3×3 grid overlay ── */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        <AnimatePresence initial={false}>
          {SQUARES.map((i) =>
            revealedSquares.includes(i) ? null : (
              <GridSquare key={i} index={i} isHighlighted={highlightedSquare === i} />
            ),
          )}
        </AnimatePresence>
      </div>

      {/* ── Win name reveal — slides up from the bottom ── */}
      <AnimatePresence>
        {isWon && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pt-8 pb-4"
          >
            <p className="text-center text-xl font-black tracking-wide text-white drop-shadow-lg">
              {birdName}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
