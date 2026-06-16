import { Star } from "lucide-react";

export function Stars({ rating, count }: { rating: number; count?: number }) {
  const full = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-1 text-sm text-muted">
      <span className="inline-flex" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < full ? "fill-gold text-gold" : "text-line"}
            size={15}
          />
        ))}
      </span>
      <span className="font-medium text-ink">{rating.toFixed(1)}</span>
      {count ? <span className="text-muted">({count.toLocaleString()})</span> : null}
    </span>
  );
}
