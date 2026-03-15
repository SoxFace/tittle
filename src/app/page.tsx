'use client';

import { useState } from 'react';
import { BirdGrid } from '@/components/BirdGrid/BirdGrid';
import type { GameStatus } from '@/types';

/**
 * Temporary dev harness — lets you exercise the BirdGrid component
 * interactively before the full game UI is wired up.
 * Will be replaced in step 8 (wire-up).
 */
export default function Home() {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [status, setStatus] = useState<GameStatus>('playing');

  const reveal = (i: number) => {
    if (!revealed.includes(i)) setRevealed((prev) => [...prev, i]);
  };

  return (
    <main className="flex min-h-svh flex-col items-center justify-start gap-6 bg-slate-950 p-6">
      <h1 className="text-3xl font-black tracking-tight text-white">🐦 Tittle</h1>

      {/* BirdGrid — placeholder image until real bird images are added */}
      <div className="w-full max-w-sm">
        <BirdGrid
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gull_portrait_ca_usa.jpg/1280px-Gull_portrait_ca_usa.jpg"
          birdName="Laughing Kookaburra"
          revealedSquares={revealed}
          highlightedSquare={highlighted}
          gameStatus={status}
        />
      </div>

      {/* Dev controls */}
      <div className="flex w-full max-w-sm flex-col gap-3">
        <p className="text-center text-sm font-medium text-slate-400">Dev controls</p>

        {/* Highlight buttons */}
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, i) => (
            <button
              key={i}
              onMouseEnter={() => setHighlighted(i)}
              onMouseLeave={() => setHighlighted(null)}
              onClick={() => reveal(i)}
              className="rounded-lg bg-slate-800 py-2 text-sm font-semibold text-slate-300 hover:bg-amber-400 hover:text-slate-900"
            >
              {revealed.includes(i) ? '✓' : i + 1}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setStatus(status === 'won' ? 'playing' : 'won')}
            className="flex-1 rounded-lg bg-emerald-600 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Toggle win overlay
          </button>
          <button
            onClick={() => {
              setRevealed([]);
              setHighlighted(null);
              setStatus('playing');
            }}
            className="flex-1 rounded-lg bg-slate-700 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-600"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
