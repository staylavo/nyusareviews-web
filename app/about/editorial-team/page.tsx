import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Team — NY USA Reviews",
  description:
    "How the NY USA Reviews editorial team researches and chooses products: verified-buyer review analysis, published specs, and hands-on testing where noted.",
};

export default function EditorialTeamPage() {
  return (
    <main className="mx-auto max-w-read px-4 py-12">
      <h1 className="font-serif text-4xl font-semibold text-ink">The NY USA Reviews Editorial Team</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink/90">
        Every guide on this site is produced by our editorial team. We&apos;re transparent about how we work, because
        trust is the whole point of a review site.
      </p>

      <h2 className="mt-10 font-serif text-2xl font-semibold text-ink">How we choose</h2>
      <p className="mt-3 leading-relaxed text-ink/90">
        Our recommendations are based on analysis of thousands of verified-buyer reviews, published manufacturer
        specifications and safety information, and hands-on testing where we&apos;ve done it (those products are clearly
        marked &ldquo;we tested this&rdquo;). We do not accept payment to feature a product, and commissions never
        influence our picks.
      </p>

      <h2 className="mt-10 font-serif text-2xl font-semibold text-ink">What we don&apos;t do</h2>
      <p className="mt-3 leading-relaxed text-ink/90">
        We don&apos;t invent testing we didn&apos;t do, fabricate statistics, or publish AI-spun content without
        editorial review. If we say we considered 22 products over 11 hours, that&apos;s the real number.
      </p>

      <p className="mt-10 rounded-2xl bg-surface px-6 py-4 text-sm text-muted ring-1 ring-line">
        <span className="font-semibold text-ink">Note for build:</span> replace this with a real named editor + a
        2–3 sentence bio and photo to maximize E-E-A-T (see the build spec).
      </p>
    </main>
  );
}
