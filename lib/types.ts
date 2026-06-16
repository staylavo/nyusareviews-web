export type AwardKind = "best-of-best" | "best-value" | "premium" | "budget" | "standard";

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  slug: string;
  award?: AwardKind;
  awardLabel?: string; // e.g., "Best of the Best", "Bargain Pick"
  tagline: string; // short "why it wins"
  blurb: string;
  rating: number; // 0-5
  ratingCount?: number;
  price: number;
  currency?: string;
  amazonUrl: string;
  priceCheckedLabel?: string; // e.g., "checked 2h ago"
  priceDropped?: boolean;
  pros: string[];
  cons: string[];
  specs: Spec[];
  bestFor: string;
}
