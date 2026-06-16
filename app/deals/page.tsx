import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Deals — NY USA Reviews",
  description: "Live deal hubs, including the best Amazon Prime Day 2026 deals (June 23–26) across baby, beauty and kitchen.",
};

const hubs = [
  { name: "Prime Day Baby Deals 2026", href: "/deals/prime-day-baby-deals-2026", blurb: "Strollers, monitors, car seats & bassinets — vetted." },
  { name: "Prime Day Beauty Deals 2026", href: "/deals/prime-day-beauty-deals-2026", blurb: "Skincare, hair tools & devices worth buying." },
  { name: "Prime Day Kitchen Deals 2026", href: "/deals/prime-day-kitchen-deals-2026", blurb: "Air fryers, blenders & cookware on sale." },
];

export default function DealsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-read">
        <span className="inline-flex items-center rounded-full bg-success/12 px-3 py-1 text-xs font-semibold text-success">
          Prime Day June 23–26
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink sm:text-5xl">Deals</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/90">
          We track the deals and list only the ones actually worth buying — checked against price history, not just
          the marketing.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hubs.map((h) => (
          <Link
            key={h.href}
            href={h.href}
            className="group flex flex-col rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line transition hover:shadow-card-hover"
          >
            <h2 className="font-serif text-xl font-semibold text-ink">{h.name}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{h.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
              View deals <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
