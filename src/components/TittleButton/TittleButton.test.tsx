import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react';
import { TittleButton } from './TittleButton';

// Framer Motion — strip animations in tests
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>();
  return {
    ...actual,
    motion: {
      ...actual.motion,
      button: ({
        children,
        className,
        onClick,
        disabled,
        'aria-label': ariaLabel,
      }: React.ComponentProps<'button'>) => (
        <button className={className} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
          {children}
        </button>
      ),
    },
  };
});

const ALL_SQUARES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

describe('TittleButton', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders and starts cycling on mount', () => {
    render(
      <TittleButton
        availableSquares={ALL_SQUARES}
        onReveal={vi.fn()}
        onHighlightChange={vi.fn()}
      />,
    );
    // After mount + first tick, the button should show "Tittle It!"
    act(() => vi.advanceTimersByTime(90));
    expect(screen.getByText('Tittle It!')).toBeInTheDocument();
  });

  it('button is enabled once cycling begins', () => {
    render(
      <TittleButton
        availableSquares={ALL_SQUARES}
        onReveal={vi.fn()}
        onHighlightChange={vi.fn()}
      />,
    );
    act(() => vi.advanceTimersByTime(90));
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('calls onReveal with a valid square index when clicked', () => {
    const onReveal = vi.fn();

    render(
      <TittleButton
        availableSquares={ALL_SQUARES}
        onReveal={onReveal}
        onHighlightChange={vi.fn()}
      />,
    );

    act(() => vi.advanceTimersByTime(90));
    fireEvent.click(screen.getByRole('button'));

    expect(onReveal).toHaveBeenCalledTimes(1);
    const [squareIndex] = onReveal.mock.calls[0];
    expect(squareIndex).toBeGreaterThanOrEqual(0);
    expect(squareIndex).toBeLessThanOrEqual(8);
  });

  it('onReveal only fires for squares in the availableSquares list', () => {
    const available = [2, 5, 7];
    const onReveal = vi.fn();

    render(
      <TittleButton availableSquares={available} onReveal={onReveal} onHighlightChange={vi.fn()} />,
    );

    act(() => vi.advanceTimersByTime(90));
    fireEvent.click(screen.getByRole('button'));

    const [squareIndex] = onReveal.mock.calls[0];
    expect(available).toContain(squareIndex);
  });

  it('calls onHighlightChange as the cycler runs', () => {
    const onHighlightChange = vi.fn();

    render(
      <TittleButton
        availableSquares={ALL_SQUARES}
        onReveal={vi.fn()}
        onHighlightChange={onHighlightChange}
      />,
    );

    act(() => vi.advanceTimersByTime(450)); // ~5 ticks
    expect(onHighlightChange).toHaveBeenCalled();
    expect(onHighlightChange).toHaveBeenCalledWith(expect.any(Number));
  });

  it('calls onHighlightChange(null) after the reveal', () => {
    const onHighlightChange = vi.fn();

    render(
      <TittleButton
        availableSquares={ALL_SQUARES}
        onReveal={vi.fn()}
        onHighlightChange={onHighlightChange}
      />,
    );

    act(() => vi.advanceTimersByTime(90));
    fireEvent.click(screen.getByRole('button'));

    // The last call to onHighlightChange should clear the highlight
    const calls = onHighlightChange.mock.calls;
    expect(calls[calls.length - 1][0]).toBeNull();
  });

  it('has the correct accessible label', () => {
    render(
      <TittleButton
        availableSquares={ALL_SQUARES}
        onReveal={vi.fn()}
        onHighlightChange={vi.fn()}
      />,
    );
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Tittle it — stop the cycler and reveal a square',
    );
  });
});
