import type { Metadata } from "next";
import { PrimeDayHub } from "@/components/prime-day-hub";

export const metadata: Metadata = {
  title: "Best Prime Day Beauty Deals 2026 (Live) — NY USA Reviews",
  description:
    "The best Amazon Prime Day 2026 beauty deals, updated live June 23–26. Vetted skincare, hair tools and devices — only the deals worth buying.",
  alternates: { canonical: "/deals/prime-day-beauty-deals-2026" },
};

export default function Page() {
  return (
    <PrimeDayHub
      config={{
        niche: "Beauty",
        intro:
          "Prime Day runs June 23–26. We're tracking the beauty deals and listing only the ones actually worth buying — skincare, hair tools and devices, vetted against price history.",
        budgets: ["Under $25", "Under $50", "Under $100"],
        categories: ["Skincare", "Hair tools", "Beauty devices", "Makeup", "Fragrance", "Tools & brushes"],
      }}
    />
  );
}
