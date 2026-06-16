import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuides } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

const CATEGORIES: Record<string, { name: string; blurb: string }> = {
  baby: { name: "Baby", blurb: "Bassinets, strollers, monitors, car seats and more — vetted for safety and value." },
  beauty: { name: "Beauty", blurb: "Skincare, hair tools and devices, compared on formula, results and price." },
  kitchen: { name: "Kitchen", blurb: "Air fryers, blenders, cookware and gadgets that are actually worth the counter space." },
};

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const c = CATEGORIES[params.category];
  if (!c) return { title: "Category not found" };
  return {
    title: `${c.name} Buying Guides & Reviews — NY USA Reviews`,
    description: c.blurb,
    alternates: { canonical: `/${params.category}` },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const c = CATEGORIES[params.category];
  if (!c) notFound();
  const guides = getAllGuides().filter((g) => g.meta.categorySlug === params.category);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-read">
        <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">{c.name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/90">{c.blurb}</p>
      </header>

      <section className="mt-10">
        <h2 className="mb-5 font-serif text-2xl font-semibold text-ink">Buying guides</h2>
        {guides.length === 0 ? (
          <p className="text-muted">New {c.name.toLowerCase()} guides are coming soon.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.meta.slug}
                href={`/guides/${g.meta.slug}`}
                className="group flex flex-col rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line transition hover:shadow-card-hover"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">{g.meta.subcategory}</span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-ink">{g.meta.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.meta.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Read the guide <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
