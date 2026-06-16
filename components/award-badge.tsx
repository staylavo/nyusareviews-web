import type { AwardKind } from "@/lib/types";

const styles: Record<AwardKind, string> = {
  "best-of-best": "bg-gold/15 text-gold ring-gold/30",
  "best-value": "bg-success/15 text-success ring-success/30",
  premium: "bg-brand/12 text-brand ring-brand/30",
  budget: "bg-muted/15 text-muted ring-muted/30",
  standard: "bg-muted/10 text-muted ring-line",
};

export function AwardBadge({ kind, label }: { kind?: AwardKind; label?: string }) {
  if (!kind || !label) return null;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${styles[kind]}`}
    >
      {label}
    </span>
  );
}
