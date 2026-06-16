import { NewsletterCta } from "./newsletter-cta";

export interface PrimeDayConfig {
  niche: string; // "Baby"
  intro: string;
  budgets: string[];
  categories: string[];
}

export function PrimeDayHub({ config }: { config: PrimeDayConfig }) {
  const faqs = [
    { q: "When is Prime Day 2026?", a: "Amazon Prime Day 2026 runs June 23–26. Deals require a Prime membership." },
    { q: "Are these the lowest prices of the year?", a: "Not always. We check price history and only list deals that are genuinely good — not just marked 'deal'." },
    { q: "How do you pick the deals?", a: "We cross-check each discount against its price history and our buying-guide research, then list only the ones worth buying." },
  ];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-4 text-xs text-muted">Deals / Prime Day 2026</nav>

      <header className="max-w-read">
        <span className="inline-flex items-center rounded-full bg-success/12 px-3 py-1 text-xs font-semibold text-success">
          Live June 23–26
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Best Prime Day {config.niche} Deals 2026
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/90">{config.intro}</p>
      </header>

      <section className="mt-8">
        <h2 className="mb-3 font-serif text-2xl font-semibold text-ink">Top {config.niche.toLowerCase()} deals right now</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-dashed border-line bg-surface/60 p-6 text-sm text-muted">
              Live deal slot {i + 1} — fills automatically when Prime Day deals drop (PA-API).
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-3 font-serif text-2xl font-semibold text-ink">Shop by budget</h2>
        <div className="flex flex-wrap gap-3">
          {config.budgets.map((b) => (
            <span key={b} className="rounded-xl bg-surface px-4 py-2 text-sm font-medium text-ink shadow-card ring-1 ring-line">
              {b}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-3 font-serif text-2xl font-semibold text-ink">Shop by category</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {config.categories.map((c) => (
            <div key={c} className="rounded-2xl bg-surface p-5 shadow-card ring-1 ring-line">
              <h3 className="font-serif text-lg font-semibold text-ink">{c}</h3>
              <p className="mt-1 text-sm text-muted">Vetted {c.toLowerCase()} deals — live during Prime Day.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-read rounded-2xl bg-surface px-6 py-6 shadow-card ring-1 ring-line">
        <h2 className="font-serif text-2xl font-semibold text-ink">Is it actually a deal? Our 30-second test</h2>
        <p className="mt-3 leading-relaxed text-ink/90">
          A big &ldquo;% off&rdquo; means nothing if the price was inflated first. Before you buy, check the price
          history (we do this for every deal we list). If today&apos;s price isn&apos;t at or near the lowest in the
          last 3–6 months, it&apos;s not really a deal — wait.
        </p>
      </section>

      <section className="mt-12 max-w-read">
        <h2 className="font-serif text-2xl font-semibold text-ink">FAQ</h2>
        <dl className="mt-4 divide-y divide-line rounded-2xl bg-surface ring-1 ring-line">
          {faqs.map((f) => (
            <div key={f.q} className="px-6 py-4">
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12">
        <NewsletterCta />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
