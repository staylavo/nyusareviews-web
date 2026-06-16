import type { Product } from "@/lib/types";
import { AwardBadge } from "./award-badge";

/**
 * Our edge over BestReviews: a clean, scannable comparison table.
 * (Sortable/filterable interactivity can be layered on as a client component later.)
 */
export function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-line">
      <table className="w-full min-w-[640px] border-collapse bg-surface text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-paper/60 text-xs uppercase tracking-wide text-muted">
            <th className="px-4 py-3 font-semibold">Product</th>
            <th className="px-4 py-3 font-semibold">Award</th>
            <th className="px-4 py-3 font-semibold">Rating</th>
            <th className="px-4 py-3 font-semibold">Price</th>
            <th className="px-4 py-3 font-semibold">Best for</th>
            <th className="px-4 py-3 font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b border-line last:border-0">
              <td className="px-4 py-3 font-semibold text-ink">
                {p.brand} {p.name}
              </td>
              <td className="px-4 py-3">
                <AwardBadge kind={p.award} label={p.awardLabel} />
              </td>
              <td className="px-4 py-3 text-ink">{p.rating.toFixed(1)} ★</td>
              <td className="px-4 py-3 font-semibold text-ink">
                {p.price.toLocaleString("en-US", { style: "currency", currency: p.currency ?? "USD" })}
              </td>
              <td className="px-4 py-3 text-muted">{p.bestFor}</td>
              <td className="px-4 py-3">
                <a
                  href={p.amazonUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="whitespace-nowrap rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110"
                >
                  Check Price
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
