import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BirdGrid } from './BirdGrid';

// Framer Motion works in jsdom but exit animations don't play —
// AnimatePresence immediately removes elements on unmount in test env.
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>();
  return {
    ...actual,
    // Render motion.div as a plain div so exit animations don't block assertions
    motion: {
      ...actual.motion,
      div: ({ children, className, ...rest }: React.ComponentProps<'div'>) => (
        <div className={className} {...rest}>
          {children}
        </div>
      ),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Next.js Image renders as a regular <img> in tests
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const defaultProps = {
  imageUrl: '/birds/laughing-kookaburra.webp',
  birdName: 'Laughing Kookaburra',
  revealedSquares: [],
  highlightedSquare: null,
  gameStatus: 'playing' as const,
};

describe('BirdGrid', () => {
  it('renders all 9 squares when none are revealed', () => {
    render(<BirdGrid {...defaultProps} />);

    for (let i = 1; i <= 9; i++) {
      expect(screen.getByLabelText(`Square ${i}`)).toBeInTheDocument();
    }
  });

  it('renders the bird image', () => {
    render(<BirdGrid {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('uses a non-revealing alt text while the game is in progress', () => {
    render(<BirdGrid {...defaultProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Mystery bird — keep guessing!');
  });

  it('hides a revealed square', () => {
    render(<BirdGrid {...defaultProps} revealedSquares={[0]} />);
    expect(screen.queryByLabelText('Square 1')).not.toBeInTheDocument();
  });

  it('hides multiple revealed squares', () => {
    render(<BirdGrid {...defaultProps} revealedSquares={[0, 4, 8]} />);

    expect(screen.queryByLabelText('Square 1')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Square 5')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Square 9')).not.toBeInTheDocument();

    // The other 6 squares should still be visible
    expect(screen.getByLabelText('Square 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Square 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Square 4')).toBeInTheDocument();
    expect(screen.getByLabelText('Square 6')).toBeInTheDocument();
    expect(screen.getByLabelText('Square 7')).toBeInTheDocument();
    expect(screen.getByLabelText('Square 8')).toBeInTheDocument();
  });

  it('renders no squares when all 9 are revealed', () => {
    render(<BirdGrid {...defaultProps} revealedSquares={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />);

    for (let i = 1; i <= 9; i++) {
      expect(screen.queryByLabelText(`Square ${i}`)).not.toBeInTheDocument();
    }
  });

  it('shows the win name overlay when game is won', () => {
    render(<BirdGrid {...defaultProps} gameStatus="won" />);
    expect(screen.getByText('Laughing Kookaburra')).toBeInTheDocument();
  });

  it('does not show the win overlay while playing', () => {
    render(<BirdGrid {...defaultProps} gameStatus="playing" />);
    expect(screen.queryByText('Laughing Kookaburra')).not.toBeInTheDocument();
  });

  it('reveals the bird name in the alt text on win', () => {
    render(<BirdGrid {...defaultProps} gameStatus="won" />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Laughing Kookaburra');
  });
});

describe('GridSquare highlighting', () => {
  it('applies amber background to the highlighted square', () => {
    render(<BirdGrid {...defaultProps} highlightedSquare={2} />);
    const square = screen.getByLabelText('Square 3'); // index 2 = square 3
    expect(square.className).toContain('bg-amber-400');
  });

  it('does not apply amber background to non-highlighted squares', () => {
    render(<BirdGrid {...defaultProps} highlightedSquare={2} />);
    const square = screen.getByLabelText('Square 1'); // index 0
    expect(square.className).not.toContain('bg-amber-400');
    expect(square.className).toContain('bg-slate-800');
  });

  it('renders no highlighted square when highlightedSquare is null', () => {
    render(<BirdGrid {...defaultProps} highlightedSquare={null} />);

    for (let i = 1; i <= 9; i++) {
      const square = screen.getByLabelText(`Square ${i}`);
      expect(square.className).not.toContain('bg-amber-400');
    }
  });
});
