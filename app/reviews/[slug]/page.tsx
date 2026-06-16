import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getAllProductSlugs } from "@/lib/mock-data";
import { Stars } from "@/components/stars";
import { PriceBlock } from "@/components/price-block";
import { ProductImage } from "@/components/product-image";
import { AwardBadge } from "@/components/award-badge";
import { Check, X } from "lucide-react";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const found = getProductBySlug(params.slug);
  if (!found) return { title: "Review not found" };
  const { product } = found;
  return {
    title: `${product.brand} ${product.name} Review — NY USA Reviews`,
    description: product.blurb,
    alternates: { canonical: `/reviews/${product.slug}` },
  };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const found = getProductBySlug(params.slug);
  if (!found) notFound();
  const { product, guide } = found;

  const reviewLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Product", name: `${product.brand} ${product.name}` },
    reviewRating: { "@type": "Rating", ratingValue: product.rating, bestRating: 5 },
    author: { "@type": "Organization", name: "NY USA Reviews Editorial Team" },
  };

  return (
    <main className="mx-auto max-w-read px-4 py-8">
      <nav className="mb-4 text-xs text-muted">
        <Link href={`/${guide.meta.categorySlug}`} className="hover:text-ink">{guide.meta.category}</Link>
        <span className="mx-1.5">/</span>
        <Link href={`/guides/${guide.meta.slug}`} className="hover:text-ink">{guide.meta.subcategory}</Link>
      </nav>

      <header className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <ProductImage product={product} size={96} />
        <div>
          <AwardBadge kind={product.award} label={product.awardLabel} />
          <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink">
            {product.brand} {product.name} Review
          </h1>
          <p className="mt-1 text-brand">{product.tagline}</p>
          <div className="mt-2"><Stars rating={product.rating} count={product.ratingCount} /></div>
        </div>
      </header>

      <div className="mt-6 rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line">
        <PriceBlock product={product} />
      </div>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-semibold text-ink">Our verdict</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink/90">{product.blurb}</p>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-serif text-lg font-semibold text-ink">Pros</h3>
          <ul className="mt-2 space-y-1.5">
            {product.pros.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-ink/90">
                <Check size={16} className="mt-0.5 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-ink">Cons</h3>
          <ul className="mt-2 space-y-1.5">
            {product.cons.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-muted">
                <X size={16} className="mt-0.5 shrink-0 text-muted" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="font-serif text-lg font-semibold text-ink">Specs</h3>
        <dl className="mt-2 divide-y divide-line rounded-2xl bg-surface ring-1 ring-line">
          {product.specs.map((s) => (
            <div key={s.label} className="flex justify-between px-5 py-3 text-sm">
              <dt className="text-muted">{s.label}</dt>
              <dd className="font-medium text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-8 text-sm text-muted">
        Compared with alternatives in our{" "}
        <Link href={`/guides/${guide.meta.slug}`} className="font-medium text-brand hover:underline">
          {guide.meta.title}
        </Link>{" "}
        guide.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }} />
    </main>
  );
}
