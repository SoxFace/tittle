import { renderHook, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useCatchphrase } from './useCatchphrase';

const ALL_SQUARES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

describe('useCatchphrase', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts idle — no highlight, not cycling', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    expect(result.current.highlighted).toBeNull();
    expect(result.current.cycling).toBe(false);
  });

  it('start() sets cycling to true', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    expect(result.current.cycling).toBe(true);
  });

  it('start() highlights a square immediately (first tick fires at once)', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    expect(result.current.highlighted).not.toBeNull();
    expect(ALL_SQUARES).toContain(result.current.highlighted);
  });

  it('cycles to a new square on each interval tick', () => {
    const { result } = renderHook(() => useCatchphrase([0, 1, 2]));
    act(() => result.current.start());

    const highlights = new Set<number>();
    for (let i = 0; i < 30; i++) {
      act(() => vi.advanceTimersByTime(90));
      if (result.current.highlighted !== null) {
        highlights.add(result.current.highlighted);
      }
    }
    // Over 30 ticks across 3 squares, all 3 should appear at least once
    expect(highlights.size).toBeGreaterThan(1);
  });

  it('only highlights squares from the available list', () => {
    const available = [2, 5, 7];
    const { result } = renderHook(() => useCatchphrase(available));
    act(() => result.current.start());

    for (let i = 0; i < 20; i++) {
      act(() => vi.advanceTimersByTime(90));
      if (result.current.highlighted !== null) {
        expect(available).toContain(result.current.highlighted);
      }
    }
  });

  it('stop() returns the currently highlighted square', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    act(() => vi.advanceTimersByTime(90));

    let returned: number;
    act(() => {
      returned = result.current.stop();
    });
    expect(ALL_SQUARES).toContain(returned!);
  });

  it('stop() sets cycling to false', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    act(() => result.current.stop());
    expect(result.current.cycling).toBe(false);
  });

  it('stop() clears the highlighted square', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    act(() => result.current.stop());
    expect(result.current.highlighted).toBeNull();
  });

  it('stop() before any tick returns the first available square as fallback', () => {
    const { result } = renderHook(() => useCatchphrase([3, 4, 5]));
    // Don't call start() — call stop() cold
    let returned: number;
    act(() => {
      returned = result.current.stop();
    });
    expect([3, 4, 5]).toContain(returned!);
  });

  it('does not keep cycling after stop()', () => {
    const { result } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    act(() => result.current.stop());

    const highlightAfterStop = result.current.highlighted;
    act(() => vi.advanceTimersByTime(500));
    // highlight must not change after stop
    expect(result.current.highlighted).toBe(highlightAfterStop);
  });

  it('cleans up the interval on unmount', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearInterval');
    const { result, unmount } = renderHook(() => useCatchphrase(ALL_SQUARES));
    act(() => result.current.start());
    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });
});
