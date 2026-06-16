import type { Metadata } from "next";
import { PrimeDayHub } from "@/components/prime-day-hub";

export const metadata: Metadata = {
  title: "Best Prime Day Baby Deals 2026 (Live) — NY USA Reviews",
  description:
    "The best Amazon Prime Day 2026 baby deals, updated live June 23–26. Vetted picks on strollers, monitors, car seats and bassinets — only the deals worth buying.",
  alternates: { canonical: "/deals/prime-day-baby-deals-2026" },
};

export default function Page() {
  return (
    <PrimeDayHub
      config={{
        niche: "Baby",
        intro:
          "Prime Day runs June 23–26. We're tracking every baby deal and listing only the ones actually worth your money — updated through the event. Most “deals” aren't; these are.",
        budgets: ["Under $50", "Under $100", "Under $200"],
        categories: ["Strollers", "Car seats", "Baby monitors", "Bassinets", "High chairs", "Diapering"],
      }}
    />
  );
}
