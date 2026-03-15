'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/cn';

interface BirdCallPlayerProps {
  songUrl?: string;
  birdName: string;
}

/**
 * Plays a bird call audio clip for the Song & Call category round.
 * songUrl points to a Xeno-canto MP3 — add these to each Bird in birds.ts.
 * Renders a "not yet available" state gracefully when songUrl is absent.
 */
export function BirdCallPlayer({ songUrl, birdName }: BirdCallPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch {
        setError(true);
      }
    }
  };

  if (!songUrl) {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-center">
        <p className="text-sm font-medium text-slate-300">🔇 No audio available yet</p>
        <p className="mt-0.5 text-xs text-slate-500">
          Bird calls are sourced from Xeno-canto. Use the written clue below to answer.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-800 p-4">
      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        src={songUrl}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setError(true)}
      />

      <div className="flex items-center gap-3">
        {/* Play / Pause button */}
        <button
          onClick={toggle}
          disabled={error}
          className={cn(
            'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl transition-colors',
            error
              ? 'cursor-not-allowed bg-slate-700 text-slate-600'
              : playing
                ? 'bg-amber-400 text-slate-900'
                : 'bg-slate-700 text-slate-200 hover:bg-slate-600',
          )}
          aria-label={playing ? `Pause ${birdName} call` : `Play ${birdName} call`}
        >
          {error ? '✕' : playing ? '⏸' : '▶'}
        </button>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">
            {error ? 'Could not load audio' : 'Listen to the call'}
          </p>
          <p className="text-xs text-slate-400">
            {error ? 'Use the written clue below' : playing ? 'Playing…' : 'Tap to hear this bird'}
          </p>
        </div>
      </div>

      {/* Animated bars while playing */}
      {playing && (
        <div className="mt-3 flex h-5 items-end justify-center gap-0.5">
          {[55, 80, 45, 95, 60, 75, 40, 90, 50, 70, 55, 85, 45, 75, 60, 95, 50, 80, 40, 65].map(
            (h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-amber-400"
                style={{
                  height: `${h}%`,
                  animation: `tittle-wave 0.8s ease-in-out ${i * 40}ms infinite alternate`,
                }}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}
