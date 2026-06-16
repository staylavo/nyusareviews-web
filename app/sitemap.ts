import type { MetadataRoute } from "next";
import { getAllGuideSlugs } from "@/lib/mock-data";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyusareviews.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/baby", "/beauty", "/kitchen", "/deals", "/about/editorial-team", "/affiliate-disclosure"];
  const guideRoutes = getAllGuideSlugs().map((slug) => `/guides/${slug}`);

  return [...staticRoutes, ...guideRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/guides") ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
