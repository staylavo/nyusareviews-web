/**
 * Pricing provider abstraction.
 * Wire AmazonProvider (PA-API) + KeepaProvider (price history) when keys exist;
 * ManualProvider is the fallback so pages never break without an API.
 *
 * Add to web/.env.local:
 *   AMAZON_PAAPI_ACCESS_KEY, AMAZON_PAAPI_SECRET_KEY, AMAZON_ASSOCIATE_TAG, KEEPA_API_KEY (optional)
 */
export interface PriceInfo {
  price: number;
  currency: string;
  checkedAt: string; // ISO
  source: "amazon" | "keepa" | "manual";
  lowestIn30Days?: number;
  dropped?: boolean;
}

export interface PriceProvider {
  getPrice(asin: string): Promise<PriceInfo | null>;
}

class ManualProvider implements PriceProvider {
  constructor(private fallback: Record<string, number>) {}
  async getPrice(asin: string): Promise<PriceInfo | null> {
    const price = this.fallback[asin];
    if (price == null) return null;
    return { price, currency: "USD", checkedAt: new Date().toISOString(), source: "manual" };
  }
}

// TODO: implement AmazonProvider (PA-API 5.0) and KeepaProvider once keys are added.
export function getPriceProvider(): PriceProvider {
  // When PA-API keys exist, return a chained provider: Amazon -> Keepa -> Manual.
  return new ManualProvider({});
}

export function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}
