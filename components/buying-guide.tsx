import Link from "next/link";
import type { Guide } from "@/lib/mock-data";
import { ProductCard } from "./product-card";
import { ComparisonTable } from "./comparison-table";
import { NewsletterCta } from "./newsletter-cta";

export function BuyingGuide({ guide }: { guide: Guide }) {
  const { meta, products } = guide;
  const top = products[0];

  const faqs = [
    {
      q: "How do we choose?",
      a: "We analyze thousands of verified-buyer reviews plus published specs and safety information, and test hands-on where noted. We only recommend picks we'd suggest to family.",
    },
    {
      q: `When was this ${meta.subcategory.toLowerCase()} guide last updated?`,
      a: `This guide was updated ${meta.updated} and is reviewed regularly as new products launch and prices change.`,
    },
    {
      q: "How do you make money?",
      a: "We may earn a commission when you buy through our links, at no extra cost to you. It never affects which products we pick.",
    },
  ];

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${p.brand} ${p.name}`,
    })),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <nav className="mb-4 text-xs text-muted">
        <Link href={`/${meta.categorySlug}`} className="hover:text-ink">{meta.category}</Link>
        <span className="mx-1.5">/</span>
        <span>{meta.subcategory}</span>
      </nav>

      <header className="max-w-read">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">{meta.title}</h1>
        <p className="mt-3 text-sm text-muted">
          Updated {meta.updated} · By the{" "}
          <Link href="/about/editorial-team" className="font-medium text-brand hover:underline">
            NY USA Reviews Editorial Team
          </Link>
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink/90">{meta.intro}</p>
      </header>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 rounded-2xl bg-surface px-6 py-4 shadow-card ring-1 ring-line">
        <Stat n={meta.modelsConsidered} label="Models considered" />
        <Stat n={meta.hoursResearched} label="Hours researched" />
        <Stat n={products.length} label="Top picks" />
        <div className="flex flex-col">
          <span className="font-serif text-xl font-semibold text-ink">First reviewed</span>
          <span className="text-xs text-muted">{meta.firstReviewed}</span>
        </div>
      </div>

      <section className="mt-8 max-w-read">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Ready to buy? Shop the best:</h2>
        <ul className="mt-2 space-y-1.5 text-[15px]">
          {products.map((p) => (
            <li key={p.id}>
              <span className="font-semibold text-ink">{p.awardLabel}: </span>
              <a href={p.amazonUrl} target="_blank" rel="nofollow sponsored noopener" className="text-brand hover:underline">
                {p.brand} {p.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold text-ink">Quick comparison</h2>
        <ComparisonTable products={products} />
      </section>

      <section className="mt-12">
        <h2 className="mb-5 font-serif text-2xl font-semibold text-ink">Our top picks, reviewed</h2>
        <div className="space-y-5">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-read">
        <h2 className="font-serif text-2xl font-semibold text-ink">How we chose</h2>
        <p className="mt-3 leading-relaxed text-ink/90">
          We started with {meta.modelsConsidered} {meta.subcategory.toLowerCase()} and narrowed by the factors that
          matter most to buyers, reading through thousands of verified-buyer reviews to surface the real pros and cons
          owners report after months of use — not just spec-sheet marketing. Our top pick, the {top.brand} {top.name},
          won for {top.tagline.toLowerCase()}.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-2xl font-semibold text-ink">{n}</span>
      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}
