'use client';

import { useState } from 'react';
import { BirdGrid } from '@/components/BirdGrid/BirdGrid';
import { TittleButton } from '@/components/TittleButton/TittleButton';
import { BirdCallPlayer } from '@/components/BirdCallPlayer/BirdCallPlayer';
import { BIRDS } from '@/data/birds';
import type { GameStatus } from '@/types';

const PLACEHOLDER_IMAGE = '/birds/placeholder.svg';

// Song round index in MOCK_ROUNDS — swap out for real categoryKey check in the full game
const SONG_ROUND_INDEX = 3;

const kookaburra = BIRDS.find((b) => b.id === 'laughing-kookaburra')!;
const KOOKABURRA_SONG_URL = kookaburra.songUrl;

const MOCK_ROUNDS = [
  {
    question: 'How big is this bird?',
    correct: 'Medium (30–50 cm)',
    options: ['Tiny (under 12 cm)', 'Small (12–30 cm)', 'Medium (30–50 cm)', 'Large (50–80 cm)'],
    isSong: false,
  },
  {
    question: 'Where does it live?',
    correct: 'Woodland & forest',
    options: [
      'Wetland & waterways',
      'Woodland & forest',
      'Urban & suburban gardens',
      'Coastal & ocean',
    ],
    isSong: false,
  },
  {
    question: "What's its main diet?",
    correct: 'Small mammals & reptiles',
    options: [
      'Insects & invertebrates',
      'Seeds & grain',
      'Small mammals & reptiles',
      'Fish & aquatic life',
    ],
    isSong: false,
  },
  {
    question: 'How would you describe its call?',
    correct: 'Laughing or cackling',
    options: ['Melodic & musical', 'Loud & raucous', 'Laughing or cackling', 'Mostly silent'],
    isSong: true,
  },
  {
    question: "What's its beak like?",
    correct: 'Large & powerful',
    options: ['Short & hooked', 'Long & dagger-like', 'Short & stubby', 'Large & powerful'],
    isSong: false,
  },
  {
    question: 'What type of feet does it have?',
    correct: 'Zygodactyl (two toes each way)',
    options: [
      'Perching (three toes forward)',
      'Zygodactyl (two toes each way)',
      'Taloned (strong raptor grip)',
      'Swimming (webbed)',
    ],
    isSong: false,
  },
  {
    question: 'How does it fly?',
    correct: 'Fast & direct',
    options: ['Soaring on thermals', 'Fast & direct', 'Hovering in place', 'Swooping & diving'],
    isSong: false,
  },
  {
    question: 'Describe its plumage',
    correct: 'Brown & mottled',
    options: ['Vivid multicolour', 'Black & white', 'Brown & mottled', 'Blue or iridescent'],
    isSong: false,
  },
  {
    question: 'When is this bird found in Australia?',
    correct: 'Year-round resident',
    options: [
      'Year-round resident',
      'Summer breeding visitor',
      'Winter visitor from the north',
      'Nomadic (follows food or rain)',
    ],
    isSong: false,
  },
];

type Phase = 'answering' | 'revealing';

export default function Home() {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [phase, setPhase] = useState<Phase>('answering');
  const [roundIndex, setRoundIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const availableSquares = Array.from({ length: 9 }, (_, i) => i).filter(
    (i) => !revealed.includes(i),
  );

  const currentRound = MOCK_ROUNDS[Math.min(roundIndex, MOCK_ROUNDS.length - 1)];
  const isSongRound = roundIndex === SONG_ROUND_INDEX;

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentRound.correct;
    if (isCorrect) {
      setFeedback('✓ Correct! Now Tittle It to reveal a square.');
      setPhase('revealing');
    } else {
      setFeedback(`✗ The answer was: ${currentRound.correct}`);
      advanceRound();
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
      advanceRound();
    }
  };

  const advanceRound = () => {
    setPhase('answering');
    setRoundIndex((r) => r + 1);
  };

  const reset = () => {
    setRevealed([]);
    setHighlighted(null);
    setGameStatus('playing');
    setPhase('answering');
    setRoundIndex(0);
    setFeedback(null);
  };

  return (
    <main className="flex min-h-svh flex-col items-center gap-5 bg-slate-950 px-4 py-8">
      {/* Header */}
      <div className="flex w-full max-w-sm items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight text-white">Tittle</h1>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
          {revealed.length}/9 revealed
        </span>
      </div>

      {/* Bird grid */}
      <div className="w-full max-w-sm">
        <BirdGrid
          imageUrl={PLACEHOLDER_IMAGE}
          birdName="Laughing Kookaburra"
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
            <p className="text-sm text-slate-400">
              Preview only — the real game will ask you to type the name.
            </p>
            <button
              onClick={reset}
              className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-900 hover:bg-amber-300"
            >
              Play again
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

            {/* Audio player on the Song & Call round */}
            {isSongRound && (
              <BirdCallPlayer songUrl={KOOKABURRA_SONG_URL} birdName="Mystery bird" />
            )}

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
