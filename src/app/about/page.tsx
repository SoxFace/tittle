import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex min-h-svh flex-col items-center bg-slate-950 px-4 py-8">
      <div className="w-full max-w-sm space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-400 hover:text-white">
            ← Play
          </Link>
          <h1 className="text-2xl font-black tracking-tight text-white">Why Tittle?</h1>
          <div className="w-10" />
        </div>

        {/* Mission */}
        <div className="rounded-2xl bg-amber-400 p-5">
          <p className="text-base leading-snug font-black text-slate-900">
            A daily quiz to educate, engage, and make change.
          </p>
          <p className="mt-2 text-sm font-medium text-slate-800">
            Learn to identify the birds that are still here — then help make sure they stay.
          </p>
        </div>

        {/* The crisis */}
        <section className="space-y-4">
          <h2 className="text-lg font-black text-white">The crisis</h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-800 p-4 text-center">
              <p className="text-3xl font-black text-amber-400">1 in 6</p>
              <p className="mt-1 text-xs text-slate-400">
                Australian birds threatened with extinction
              </p>
            </div>
            <div className="rounded-xl bg-slate-800 p-4 text-center">
              <p className="text-3xl font-black text-amber-400">2032</p>
              <p className="mt-1 text-xs text-slate-400">
                Target year to stop bird extinctions in Australia
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            Climate change, bushfire, habitat loss and predation by introduced species are pushing
            Australia&apos;s birds toward extinction. BirdLife Australia&apos;s Bird Conservation
            Strategy sets bold targets: stop extinctions by 2032, improve the status of 30% of
            threatened birds by 2032, and halt overall bird declines by 2050.
          </p>

          <p className="text-sm leading-relaxed text-slate-300">
            But targets require communities who care. You can&apos;t protect what you don&apos;t
            know.
          </p>
        </section>

        {/* How Tittle helps */}
        <section className="space-y-4">
          <h2 className="text-lg font-black text-white">How Tittle helps</h2>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-xl bg-slate-800 p-4">
              <span className="text-xl">🎧</span>
              <div>
                <p className="text-sm font-bold text-white">Learn to identify</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Each daily puzzle teaches you how to recognise an Australian bird — its call,
                  size, habitat, plumage — using the same clues a real birdwatcher uses.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-slate-800 p-4">
              <span className="text-xl">📅</span>
              <div>
                <p className="text-sm font-bold text-white">Build a habit</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  One bird per day. Over 30 days you&apos;ll know 30 Australian species — the common
                  and the critically rare.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-slate-800 p-4">
              <span className="text-xl">🌿</span>
              <div>
                <p className="text-sm font-bold text-white">Turn knowledge into action</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  An informed community is an empowered one. Once you can name the birds in your
                  patch, you&apos;re ready to protect them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-800" />

        {/* CTA */}
        <section className="space-y-4 pb-4">
          <h2 className="text-lg font-black text-white">Get involved</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            BirdLife Australia is the nation&apos;s leading bird conservation organisation. Whether
            you want to volunteer at a local bird count, support habitat restoration, or simply
            learn more — they need people like you.
          </p>
          <a
            href="https://birdlife.org.au/get-involved"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-amber-400 px-6 py-4 text-center font-black text-slate-900 hover:bg-amber-300"
          >
            Volunteer with BirdLife Australia →
          </a>
          <a
            href="https://birdlife.org.au"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-slate-500 hover:text-slate-400"
          >
            birdlife.org.au
          </a>
        </section>
      </div>
    </main>
  );
}
