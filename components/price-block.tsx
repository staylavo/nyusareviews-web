import { ArrowDown } from "lucide-react";
import type { Product } from "@/lib/types";

export function PriceBlock({ product, cta = "Check Price at Amazon" }: { product: Product; cta?: string }) {
  const price = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: product.currency ?? "USD",
  });
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-2xl font-semibold text-ink">{price}</span>
        <span className="text-sm text-muted">at Amazon</span>
        {product.priceDropped && (
          <span className="inline-flex items-center gap-0.5 rounded-full bg-success/12 px-2 py-0.5 text-xs font-semibold text-success">
            <ArrowDown size={12} /> Price dropped
          </span>
        )}
      </div>
      <a
        href={product.amazonUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110 active:scale-[.99]"
      >
        {cta}
      </a>
      {product.priceCheckedLabel && (
        <span className="text-xs text-muted">Price {product.priceCheckedLabel} · free shipping on eligible orders</span>
      )}
    </div>
  );
}
