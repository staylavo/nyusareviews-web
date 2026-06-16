/**
 * Centralized affiliate-link building + disclosure.
 * Start with Amazon; the shape supports Walmart/Target/Sovrn later.
 */
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG ?? "YOURTAG-20";

export type Retailer = "amazon" | "walmart" | "target";

export function amazonLink(asin: string, tag: string = AMAZON_TAG): string {
  return `https://www.amazon.com/dp/${asin}/?tag=${encodeURIComponent(tag)}`;
}

export function buildRetailerLink(retailer: Retailer, id: string): string {
  switch (retailer) {
    case "amazon":
      return amazonLink(id);
    case "walmart":
      return `https://www.walmart.com/ip/${id}`;
    case "target":
      return `https://www.target.com/p/-/A-${id}`;
  }
}

/** Always render affiliate links with these rel attributes for FTC + SEO compliance. */
export const AFFILIATE_REL = "nofollow sponsored noopener";
export const DISCLOSURE =
  "We may earn a commission from links on this page. As an Amazon Associate we earn from qualifying purchases.";
