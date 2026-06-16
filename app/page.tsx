import Link from "next/link";
import { getAllGuides } from "@/lib/mock-data";
import { NewsletterCta } from "@/components/newsletter-cta";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Baby", href: "/baby", blurb: "Bassinets, strollers, monitors & more" },
  { name: "Beauty", href: "/beauty", blurb: "Skincare, hair tools & devices" },
  { name: "Kitchen", href: "/kitchen", blurb: "Air fryers, blenders & cookware" },
];

export default function Home() {
  const guides = getAllGuides();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero — honest copy (no fabricated stats) */}
      <section className="max-w-read">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Honest buying guides that save you from buyer&apos;s remorse
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/90">
          We read the reviews, compare the specs, and track the prices — then tell you the few products actually
          worth buying. No fluff, no fake hype, just clear picks for every budget.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-xl bg-surface px-4 py-2 text-sm font-medium text-ink shadow-card ring-1 ring-line transition hover:shadow-card-hover"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured guides */}
      <section className="mt-14">
        <h2 className="mb-5 font-serif text-2xl font-semibold text-ink">Latest buying guides</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.meta.slug}
              href={`/guides/${g.meta.slug}`}
              className="group flex flex-col rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line transition hover:shadow-card-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">{g.meta.category}</span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-ink">{g.meta.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.meta.metaDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Read the guide <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Category tiles */}
      <section className="mt-14">
        <h2 className="mb-5 font-serif text-2xl font-semibold text-ink">Browse by category</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line transition hover:shadow-card-hover"
            >
              <h3 className="font-serif text-xl font-semibold text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <NewsletterCta />
      </div>
    </main>
  );
}
