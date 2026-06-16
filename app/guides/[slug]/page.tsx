import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, getAllGuideSlugs } from "@/lib/mock-data";
import { BuyingGuide } from "@/components/buying-guide";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: `${guide.meta.title} — NY USA Reviews`,
    description: guide.meta.metaDescription,
    alternates: { canonical: `/guides/${guide.meta.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  return <BuyingGuide guide={guide} />;
}
