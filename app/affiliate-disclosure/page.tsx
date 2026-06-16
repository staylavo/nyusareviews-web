import type { Metadata } from "next";
import { DISCLOSURE } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — NY USA Reviews",
  description: "How NY USA Reviews earns money through affiliate links, and how that does and doesn't affect our reviews.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-read px-4 py-12">
      <h1 className="font-serif text-4xl font-semibold text-ink">Affiliate disclosure</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink/90">{DISCLOSURE}</p>
      <p className="mt-5 leading-relaxed text-ink/90">
        Some links on this site are affiliate links. If you click one and make a purchase, we may receive a small
        commission at no additional cost to you. As an Amazon Associate, we earn from qualifying purchases.
      </p>
      <p className="mt-5 leading-relaxed text-ink/90">
        Commissions never determine which products we recommend or how we rank them. Our picks are based solely on
        research, verified-buyer feedback, and testing where noted. If a product isn&apos;t good, we won&apos;t
        recommend it — regardless of commission.
      </p>
    </main>
  );
}
