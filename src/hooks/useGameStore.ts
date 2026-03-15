import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  buildInitialState,
  checkBirdGuess,
  checkCategoryAnswer,
  getBirdById,
  getTodayDate,
} from '@/lib/gameLogic';
import type { GameState } from '@/types';

interface GameActions {
  /**
   * Submit the player's answer for the current category round.
   * - Correct: sets awaitingReveal = true (Catchphrase cycling can begin)
   * - Incorrect: advances to the next round immediately
   */
  submitCategoryAnswer: (answer: string) => void;

  /**
   * Confirm a square reveal after the "Tittle it" button stops the cycler.
   * Adds squareIndex to revealedSquares, clears awaitingReveal, advances the round.
   * Only valid when awaitingReveal is true.
   */
  revealSquare: (squareIndex: number) => void;

  /**
   * Attempt to guess the bird's name. Can be called at any point during play.
   * Returns true if the guess is correct (status → 'won').
   */
  submitBirdGuess: (guess: string) => boolean;

  /** Reset the store to a fresh game for today's date. */
  resetForNewDay: () => void;
}

export type GameStore = GameState & GameActions;

const TOTAL_ROUNDS = 9;

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...buildInitialState(getTodayDate()),

      submitCategoryAnswer: (answer) => {
        const state = get();

        // Guard: only accept answers when actively playing and not mid-reveal
        if (state.status !== 'playing' || state.awaitingReveal) return;

        const { rounds, currentRoundIndex, birdId } = state;
        const bird = getBirdById(birdId);
        const round = rounds[currentRoundIndex];
        const isCorrect = checkCategoryAnswer(bird, round.categoryKey, answer);

        const updatedRounds = rounds.map((r, i) =>
          i === currentRoundIndex
            ? {
                ...r,
                status: isCorrect ? ('correct' as const) : ('incorrect' as const),
                selectedAnswer: answer,
              }
            : r,
        );

        if (isCorrect) {
          // Correct: wait for the player to press "Tittle it"
          set({ rounds: updatedRounds, awaitingReveal: true });
        } else {
          // Incorrect: advance the round immediately
          const nextIndex = currentRoundIndex + 1;
          set({
            rounds: updatedRounds,
            currentRoundIndex: nextIndex,
            status: nextIndex >= TOTAL_ROUNDS ? 'lost' : 'playing',
          });
        }
      },

      revealSquare: (squareIndex) => {
        const state = get();
        if (!state.awaitingReveal) return;

        const { revealedSquares, currentRoundIndex } = state;
        const nextIndex = currentRoundIndex + 1;

        set({
          revealedSquares: [...revealedSquares, squareIndex],
          awaitingReveal: false,
          currentRoundIndex: nextIndex,
          status: nextIndex >= TOTAL_ROUNDS ? 'lost' : 'playing',
        });
      },

      submitBirdGuess: (guess) => {
        const state = get();
        // Allow a guess during play or on the final round (status may have just flipped to lost)
        if (state.status === 'won') return false;

        const bird = getBirdById(state.birdId);
        const isCorrect = checkBirdGuess(bird, guess);

        if (isCorrect) {
          set({ status: 'won' });
        }

        return isCorrect;
      },

      resetForNewDay: () => {
        set(buildInitialState(getTodayDate()));
      },
    }),
    {
      name: 'tittle-game-state',
      // After localStorage is rehydrated, check if the stored date is still today.
      // If the user returns the next day, silently start a fresh game.
      onRehydrateStorage: () => (rehydratedState) => {
        if (rehydratedState && rehydratedState.date !== getTodayDate()) {
          // setState is available on the store instance after creation
          // Use a microtask to ensure the store is fully mounted first
          Promise.resolve().then(() => {
            rehydratedState.resetForNewDay();
          });
        }
      },
    },
  ),
);
