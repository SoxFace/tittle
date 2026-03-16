// Server component — runs at request time on Vercel, never statically cached.
// Passes today's date to the client so there is no hydration mismatch.
export const dynamic = 'force-dynamic';

import { getTodayDate } from '@/lib/gameLogic';
import { GameClient } from './GameClient';

export default function Page() {
  return <GameClient initialDate={getTodayDate()} />;
}
