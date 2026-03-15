'use client';

import { useCallback, useMemo, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { BirdGrid } from '@/components/BirdGrid/BirdGrid';
import { TittleButton } from '@/components/TittleButton/TittleButton';
import { BirdCallPlayer } from '@/components/BirdCallPlayer/BirdCallPlayer';
import { BIRDS } from '@/data/birds';
import { CATEGORY_CONFIG, ROUND_ORDER } from '@/data/categories';
import { getDailyBirdIndex, getTodayDate } from '@/lib/gameLogic';
import type { GameStatus } from '@/types';

// Song first, then remaining categories
const ROUND_KEYS = ['song', ...ROUND_ORDER.filter((k) => k !== 'song')] as const;

function msUntilMidnight(): number {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function timeUntilMidnight(): string {
  const ms = msUntilMidnight();
  const h = Math.floor(ms / (1000 * 60 * 60));
  const m = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  return `${h}h ${m}m`;
}

type Phase = 'answering' | 'revealing';

export default function Home() {
  // useSyncExternalStore calls getTodayDate() fresh on both server and client,
  // resolving any hydration mismatch from static pre-rendering, and re-syncs at midnight.
  const subscribeMidnight = useCallback((callback: () => void) => {
    const timer = setTimeout(callback, msUntilMidnight());
    return () => clearTimeout(timer);
  }, []);
  const today = useSyncExternalStore(subscribeMidnight, getTodayDate, getTodayDate);

  const dailyBird = BIRDS[getDailyBirdIndex(today)];

  const rounds = useMemo(
    () =>
      ROUND_KEYS.map((key) => ({
        question: CATEGORY_CONFIG[key].question,
        correct: dailyBird.categories[key].correctAnswer,
        options: CATEGORY_CONFIG[key].options as readonly string[],
        isSong: key === 'song',
      })),
    [dailyBird],
  );

  const [revealed, setRevealed] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [phase, setPhase] = useState<Phase>('answering');
  const [roundIndex, setRoundIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const availableSquares = Array.from({ length: 9 }, (_, i) => i).filter(
    (i) => !revealed.includes(i),
  );

  const currentRound = rounds[Math.min(roundIndex, rounds.length - 1)];
  const isSongRound = currentRound.isSong;

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentRound.correct;
    if (isCorrect) {
      setFeedback('✓ Correct! Now Tittle It to reveal a square.');
      setPhase('revealing');
    } else {
      setFeedback(`✗ The answer was: ${currentRound.correct}`);
      advanceRound(roundIndex);
    }
  };

  const handleReveal = (squareIndex: number) => {
    setHighlighted(null);
    setFeedback(null);
    const nextRevealed = [...revealed, squareIndex];
    setRevealed(nextRevealed);
    if (nextRevealed.length >= 9) {
      setGameStatus('won');
    } else {
      advanceRound(roundIndex);
    }
  };

  const advanceRound = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= rounds.length) {
      setRevealed(Array.from({ length: 9 }, (_, i) => i));
      setGameStatus('lost');
    } else {
      setPhase('answering');
      setRoundIndex(nextIndex);
    }
  };

  const reset = () => {
    setRevealed([]);
    setHighlighted(null);
    setGameStatus('playing');
    setPhase('answering');
    setRoundIndex(0);
    setFeedback(null);
  };

  const birdlifeUrl = `https://birdlife.org.au/bird-profiles/${dailyBird.id}`;
  const nextTittle = timeUntilMidnight();

  return (
    <main className="flex min-h-svh flex-col items-center gap-5 bg-slate-950 px-4 py-8">
      {/* Header */}
      <div className="flex w-full max-w-sm items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight text-white">Tittle</h1>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
            {revealed.length}/9 revealed
          </span>
          <Link href="/about" className="text-xs font-semibold text-slate-500 hover:text-slate-300">
            Why?
          </Link>
        </div>
      </div>

      {/* Bird grid */}
      <div className="w-full max-w-sm">
        <BirdGrid
          imageUrl={dailyBird.imageUrl}
          birdName={dailyBird.commonName}
          revealedSquares={revealed}
          highlightedSquare={highlighted}
          gameStatus={gameStatus}
        />
      </div>

      {/* Game area */}
      <div className="flex w-full max-w-sm flex-col gap-3">
        {gameStatus === 'won' ? (
          /* ── Win state ── */
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-800 p-6 text-center">
            <p className="text-4xl">🎉</p>
            <p className="text-lg font-black text-white">You identified the bird!</p>
            <p className="text-sm text-slate-400">Next Tittle in {nextTittle}</p>
            <a
              href={birdlifeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-amber-400 underline-offset-2 hover:underline"
            >
              Learn more about the {dailyBird.commonName} →
            </a>
            <button
              onClick={reset}
              className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-900 hover:bg-amber-300"
            >
              Play again
            </button>
          </div>
        ) : gameStatus === 'lost' ? (
          /* ── Lost state ── */
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-800 p-6 text-center">
            <p className="text-4xl">🐦</p>
            <p className="text-lg font-black text-white">It was a {dailyBird.commonName}</p>
            <p className="text-sm text-slate-400">Next Tittle in {nextTittle}</p>
            <a
              href={birdlifeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-amber-400 underline-offset-2 hover:underline"
            >
              Learn more about the {dailyBird.commonName} →
            </a>
            <button
              onClick={reset}
              className="rounded-xl bg-slate-700 px-6 py-3 font-black text-slate-200 hover:bg-slate-600"
            >
              Try again
            </button>
          </div>
        ) : phase === 'answering' ? (
          /* ── Category question ── */
          <div className="flex flex-col gap-3 rounded-2xl bg-slate-800 p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-700 px-2 py-0.5 text-xs font-bold text-slate-400">
                Round {Math.min(roundIndex + 1, 9)}/9
              </span>
              {feedback && (
                <span
                  className={`text-xs font-semibold ${feedback.startsWith('✓') ? 'text-emerald-400' : 'text-red-400'}`}
                >
                  {feedback}
                </span>
              )}
            </div>

            {isSongRound && <BirdCallPlayer songUrl={dailyBird.songUrl} birdName="Mystery bird" />}

            <p className="font-semibold text-white">{currentRound.question}</p>

            <div className="flex flex-col gap-2">
              {currentRound.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="rounded-xl bg-slate-700 px-4 py-3 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 active:bg-slate-500"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ── Catchphrase reveal ── */
          <div className="flex flex-col gap-3">
            {feedback && (
              <p className="text-center text-sm font-semibold text-emerald-400">{feedback}</p>
            )}
            <TittleButton
              availableSquares={availableSquares}
              onReveal={handleReveal}
              onHighlightChange={setHighlighted}
            />
            <p className="text-center text-xs text-slate-500">
              Numbers cycling — press to freeze and reveal that square
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
