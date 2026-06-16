import Link from "next/link";
import type { Product } from "@/lib/types";
import { AwardBadge } from "./award-badge";
import { Stars } from "./stars";
import { PriceBlock } from "./price-block";
import { ProductImage } from "./product-image";
import { Check, X } from "lucide-react";

export function ProductCard({ product, rank }: { product: Product; rank?: number }) {
  return (
    <article className="rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line transition hover:shadow-card-hover">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col items-center gap-3">
          <ProductImage product={product} />
          {typeof rank === "number" && (
            <span className="text-xs font-semibold text-muted">#{rank} pick</span>
          )}
        </div>

        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <AwardBadge kind={product.award} label={product.awardLabel} />
            <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-medium text-muted ring-1 ring-line">
              Best for: {product.bestFor}
            </span>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink">
            {product.brand} {product.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-brand">{product.tagline}</p>
          <div className="mt-2">
            <Stars rating={product.rating} count={product.ratingCount} />
          </div>

          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">{product.blurb}</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ul className="space-y-1.5">
              {product.pros.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink/90">
                  <Check size={16} className="mt-0.5 shrink-0 text-success" /> {p}
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {product.cons.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted">
                  <X size={16} className="mt-0.5 shrink-0 text-muted" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-4 text-xs text-muted">
            {product.specs.map((s) => (
              <span key={s.label}>
                <span className="font-semibold text-ink">{s.label}:</span> {s.value}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <PriceBlock product={product} />
          </div>

          <Link
            href={`/reviews/${product.slug}`}
            className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
          >
            Read our full {product.brand} {product.name} review →
          </Link>
        </div>
      </div>
    </article>
  );
}
