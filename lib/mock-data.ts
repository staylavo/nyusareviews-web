import type { Product } from "./types";

export interface GuideMeta {
  slug: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  title: string;
  updated: string;
  modelsConsidered: number;
  hoursResearched: number;
  firstReviewed: string;
  intro: string;
  metaDescription: string;
}

export interface Guide {
  meta: GuideMeta;
  products: Product[];
}

const bassinets: Product[] = [
  {
    id: "1",
    brand: "Halo",
    name: "BassiNest Swivel 3.0",
    slug: "halo-bassinest-swivel-3",
    award: "best-of-best",
    awardLabel: "Best of the Best",
    tagline: "The safest, most flexible bedside bassinet",
    blurb:
      "A 360° swivel and lowering wall make night feeds genuinely easy, and the breathable mesh sides meet current safe-sleep guidance. It's pricey, but it's the one parents keep recommending.",
    rating: 4.8,
    ratingCount: 6120,
    price: 279.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE1?tag=YOURTAG-20",
    priceCheckedLabel: "checked 2h ago",
    priceDropped: true,
    pros: [
      "360° swivel reaches you in any position",
      "Breathable mesh on all sides (safe-sleep compliant)",
      "Adjustable height fits most bed frames",
    ],
    cons: ["Premium price", "Base footprint is large"],
    specs: [
      { label: "Type", value: "Bedside / swivel" },
      { label: "Weight limit", value: "20 lb" },
      { label: "Height adjust", value: "Yes (6 positions)" },
      { label: "Mattress", value: "Included, firm" },
    ],
    bestFor: "C-section recovery & easy night feeds",
  },
  {
    id: "2",
    brand: "Chicco",
    name: "Close to You 3-in-1",
    slug: "chicco-close-to-you-3in1",
    award: "best-value",
    awardLabel: "Best Bang for the Buck",
    tagline: "Most of the premium features for far less",
    blurb:
      "Bedside mode, an incline for reflux, and a portable mode cover nearly every need at roughly half the price of the top pick. The best balance of features and cost on the list.",
    rating: 4.6,
    ratingCount: 3380,
    price: 149.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE2?tag=YOURTAG-20",
    priceCheckedLabel: "checked 2h ago",
    pros: ["Bedside + standalone modes", "Reflux-friendly incline", "Great price"],
    cons: ["No swivel", "Wheels feel light-duty"],
    specs: [
      { label: "Type", value: "Bedside / 3-in-1" },
      { label: "Weight limit", value: "20 lb" },
      { label: "Height adjust", value: "Yes (7 positions)" },
      { label: "Mattress", value: "Included, firm" },
    ],
    bestFor: "Best all-rounder on a budget",
  },
  {
    id: "3",
    brand: "SNOO",
    name: "Smart Sleeper",
    slug: "snoo-smart-sleeper",
    award: "premium",
    awardLabel: "Premium Pick",
    tagline: "Rocks and soothes automatically all night",
    blurb:
      "Responds to crying with motion and white noise, and keeps baby safely on their back. Expensive — but for sleep-deprived parents, many say it's worth every cent (and it rents).",
    rating: 4.7,
    ratingCount: 2210,
    price: 1695.0,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE3?tag=YOURTAG-20",
    priceCheckedLabel: "checked 2h ago",
    pros: ["Auto-soothing motion + sound", "Built-in safe-sleep swaddle", "Rent-to-try option"],
    cons: ["Very expensive", "Subscription for some features"],
    specs: [
      { label: "Type", value: "Smart / motorized" },
      { label: "Weight limit", value: "25 lb or rolling" },
      { label: "Height adjust", value: "No" },
      { label: "Mattress", value: "Included, firm" },
    ],
    bestFor: "Maximizing newborn sleep",
  },
  {
    id: "4",
    brand: "Dream On Me",
    name: "Karley Bassinet",
    slug: "dream-on-me-karley",
    award: "budget",
    awardLabel: "Bargain Pick",
    tagline: "Safe, simple, and genuinely affordable",
    blurb:
      "No frills, but it nails the essentials: a firm flat mattress, breathable mesh, and an easy fold. The pick if you need a safe sleep space without spending much.",
    rating: 4.4,
    ratingCount: 5040,
    price: 69.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE4?tag=YOURTAG-20",
    priceCheckedLabel: "checked 2h ago",
    pros: ["Lowest price", "Lightweight & foldable", "Breathable mesh sides"],
    cons: ["No height adjust", "Basic fabrics"],
    specs: [
      { label: "Type", value: "Standalone" },
      { label: "Weight limit", value: "25 lb" },
      { label: "Height adjust", value: "No" },
      { label: "Mattress", value: "Included, firm" },
    ],
    bestFor: "Tight budgets & travel",
  },
];

const vitaminCSerums: Product[] = [
  {
    id: "b1",
    brand: "SkinCeuticals",
    name: "C E Ferulic",
    slug: "skinceuticals-ce-ferulic",
    award: "best-of-best",
    awardLabel: "Best of the Best",
    tagline: "The gold-standard vitamin C serum",
    blurb:
      "The most studied antioxidant serum on the market. Expensive, but the 15% L-ascorbic acid + vitamin E + ferulic acid formula is what every other serum is trying to copy.",
    rating: 4.7,
    ratingCount: 8800,
    price: 182.0,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLEB1?tag=YOURTAG-20",
    priceCheckedLabel: "checked 3h ago",
    pros: ["Clinically studied formula", "Visible brightening", "Stable, effective antioxidant blend"],
    cons: ["Very expensive", "Can oxidize if stored warm"],
    specs: [
      { label: "Vitamin C", value: "15% L-ascorbic acid" },
      { label: "Size", value: "30 ml" },
      { label: "Skin type", value: "Normal / dry" },
    ],
    bestFor: "Maximum proven results",
  },
  {
    id: "b2",
    brand: "Maelove",
    name: "Glow Maker",
    slug: "maelove-glow-maker",
    award: "best-value",
    awardLabel: "Best Bang for the Buck",
    tagline: "A near-dupe of the gold standard, for a fraction",
    blurb:
      "Often called the affordable C E Ferulic alternative. Similar active lineup at a fraction of the cost — the value pick that overdelivers.",
    rating: 4.5,
    ratingCount: 14200,
    price: 32.95,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLEB2?tag=YOURTAG-20",
    priceCheckedLabel: "checked 3h ago",
    pros: ["Excellent value", "Lightweight texture", "Similar actives to premium serums"],
    cons: ["Smaller cult following", "Can pill under some sunscreens"],
    specs: [
      { label: "Vitamin C", value: "15% L-ascorbic acid" },
      { label: "Size", value: "30 ml" },
      { label: "Skin type", value: "All" },
    ],
    bestFor: "Best results per dollar",
  },
  {
    id: "b3",
    brand: "La Roche-Posay",
    name: "Pure Vitamin C12",
    slug: "lrp-pure-vitamin-c12",
    award: "premium",
    awardLabel: "Best for Sensitive Skin",
    tagline: "Brightening that sensitive skin tolerates",
    blurb:
      "A 12% vitamin C with a gentle, fragrance-free base from a dermatologist-favorite brand. The pick if stronger serums leave you red.",
    rating: 4.4,
    ratingCount: 3900,
    price: 44.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLEB3?tag=YOURTAG-20",
    priceCheckedLabel: "checked 3h ago",
    pros: ["Gentle on reactive skin", "Fragrance-free", "Trusted derm brand"],
    cons: ["Lower concentration", "Slower visible results"],
    specs: [
      { label: "Vitamin C", value: "12%" },
      { label: "Size", value: "20 ml" },
      { label: "Skin type", value: "Sensitive" },
    ],
    bestFor: "Sensitive, reactive skin",
  },
];

const airFryers: Product[] = [
  {
    id: "k1",
    brand: "Ninja",
    name: "Foodi DualZone 8-qt",
    slug: "ninja-foodi-dualzone-8qt",
    award: "best-of-best",
    awardLabel: "Best of the Best",
    tagline: "Two baskets, perfect for whole meals",
    blurb:
      "Two independent baskets cook two foods two ways and finish together — the feature that makes weeknight dinners actually easy. Roomy, reliable, and the one most worth owning.",
    rating: 4.8,
    ratingCount: 41200,
    price: 199.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLEK1?tag=YOURTAG-20",
    priceCheckedLabel: "checked 1h ago",
    priceDropped: true,
    pros: ["Two baskets cook in parallel", "Large 8-qt capacity", "Dishwasher-safe baskets"],
    cons: ["Big countertop footprint", "Pricier than single-basket models"],
    specs: [
      { label: "Capacity", value: "8 qt (2 × 4)" },
      { label: "Programs", value: "6" },
      { label: "Max temp", value: "450°F" },
    ],
    bestFor: "Cooking full meals at once",
  },
  {
    id: "k2",
    brand: "Cosori",
    name: "Pro II 5.8-qt",
    slug: "cosori-pro-ii-5-8qt",
    award: "best-value",
    awardLabel: "Best Bang for the Buck",
    tagline: "The best single-basket air fryer for the money",
    blurb:
      "A big, easy-to-use basket, reliable results, and a price that undercuts the competition. The default recommendation for most kitchens.",
    rating: 4.7,
    ratingCount: 38900,
    price: 99.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLEK2?tag=YOURTAG-20",
    priceCheckedLabel: "checked 1h ago",
    pros: ["Great price", "Easy to clean", "Consistent results"],
    cons: ["Single basket", "Basic presets"],
    specs: [
      { label: "Capacity", value: "5.8 qt" },
      { label: "Programs", value: "9" },
      { label: "Max temp", value: "450°F" },
    ],
    bestFor: "Most kitchens on a budget",
  },
  {
    id: "k3",
    brand: "Instant",
    name: "Vortex Mini 2-qt",
    slug: "instant-vortex-mini-2qt",
    award: "budget",
    awardLabel: "Bargain Pick",
    tagline: "Compact, cheap, perfect for one or two",
    blurb:
      "Small footprint, small price, and big enough for singles or couples. The pick for tiny kitchens or dorms.",
    rating: 4.5,
    ratingCount: 12100,
    price: 49.99,
    currency: "USD",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLEK3?tag=YOURTAG-20",
    priceCheckedLabel: "checked 1h ago",
    pros: ["Lowest price", "Tiny footprint", "Fast preheat"],
    cons: ["Small capacity", "Not for families"],
    specs: [
      { label: "Capacity", value: "2 qt" },
      { label: "Programs", value: "4" },
      { label: "Max temp", value: "400°F" },
    ],
    bestFor: "Singles, couples & small spaces",
  },
];

export const guides: Record<string, Guide> = {
  "best-baby-bassinets-2026": {
    meta: {
      slug: "best-baby-bassinets-2026",
      category: "Baby",
      categorySlug: "baby",
      subcategory: "Bassinets",
      title: "Best Baby Bassinets of 2026",
      updated: "June 2026",
      modelsConsidered: 22,
      hoursResearched: 11,
      firstReviewed: "March 2026",
      intro:
        "A good bassinet keeps your newborn close, safe, and sleeping — without taking over the room. We analyzed thousands of verified-buyer reviews and compared the specs that actually matter (safety certs, mattress firmness, portability, and price) to find the bassinets worth your money.",
      metaDescription:
        "The best baby bassinets of 2026, compared. Safe-sleep compliant picks for every budget — from the Halo BassiNest to budget options under $70.",
    },
    products: bassinets,
  },
  "best-vitamin-c-serums-2026": {
    meta: {
      slug: "best-vitamin-c-serums-2026",
      category: "Beauty",
      categorySlug: "beauty",
      subcategory: "Skincare",
      title: "Best Vitamin C Serums of 2026",
      updated: "June 2026",
      modelsConsidered: 31,
      hoursResearched: 14,
      firstReviewed: "April 2026",
      intro:
        "A good vitamin C serum brightens, evens tone, and protects skin from daily damage. We compared formulas, concentrations, stability, and thousands of real reviews to find the serums actually worth adding to your routine.",
      metaDescription:
        "The best vitamin C serums of 2026, compared. From the gold-standard SkinCeuticals C E Ferulic to budget dupes that overdeliver.",
    },
    products: vitaminCSerums,
  },
  "best-air-fryers-2026": {
    meta: {
      slug: "best-air-fryers-2026",
      category: "Kitchen",
      categorySlug: "kitchen",
      subcategory: "Air Fryers",
      title: "Best Air Fryers of 2026",
      updated: "June 2026",
      modelsConsidered: 27,
      hoursResearched: 13,
      firstReviewed: "February 2026",
      intro:
        "The right air fryer makes crispy food fast with almost no oil — but capacity, ease of cleaning, and reliability vary a lot. We compared specs and thousands of owner reviews to find the ones worth your counter space.",
      metaDescription:
        "The best air fryers of 2026, compared. Dual-basket, single-basket and compact picks for every kitchen and budget.",
    },
    products: airFryers,
  },
};

export function getGuide(slug: string): Guide | undefined {
  return guides[slug];
}

export function getAllGuideSlugs(): string[] {
  return Object.keys(guides);
}

export function getAllGuides(): Guide[] {
  return Object.values(guides);
}

export function getProductBySlug(slug: string): { product: Product; guide: Guide } | undefined {
  for (const guide of Object.values(guides)) {
    const product = guide.products.find((p) => p.slug === slug);
    if (product) return { product, guide };
  }
  return undefined;
}

export function getAllProductSlugs(): string[] {
  return Object.values(guides).flatMap((g) => g.products.map((p) => p.slug));
}
