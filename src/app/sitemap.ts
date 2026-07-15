import type {MetadataRoute} from "next";
import {languageAlternates, localizedUrl, locales} from "@/lib/seo";
import {studioApps} from "@/lib/studio-content";

const staticPages = [
  {path: "/", changeFrequency: "monthly", priority: 1},
  {path: "/about", changeFrequency: "monthly", priority: 0.8},
  {path: "/apps", changeFrequency: "monthly", priority: 0.9},
  {path: "/websites", changeFrequency: "monthly", priority: 0.9},
  {path: "/expertise/products", changeFrequency: "monthly", priority: 0.9},
  {path: "/expertise/software", changeFrequency: "monthly", priority: 0.9},
  {path: "/expertise/it", changeFrequency: "monthly", priority: 0.9},
  {path: "/expertise/security", changeFrequency: "monthly", priority: 0.9},
  {path: "/expertise/data", changeFrequency: "monthly", priority: 0.9},
  {path: "/expertise/design", changeFrequency: "monthly", priority: 0.9},
  {path: "/philosophy", changeFrequency: "yearly", priority: 0.6},
  {path: "/growth", changeFrequency: "yearly", priority: 0.6},
  {path: "/news", changeFrequency: "weekly", priority: 0.7},
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticSitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, page.path),
      lastModified,
      changeFrequency: page.changeFrequency as "weekly" | "monthly" | "yearly",
      priority: page.priority,
      alternates: {languages: languageAlternates(page.path)},
    })),
  );

  const dynamicAppsSitemap = studioApps.flatMap((app) =>
    locales.map((locale) => {
      const path = `/apps/${app.slug}`;
      return {
        url: localizedUrl(locale, path),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {languages: languageAlternates(path)},
      };
    }),
  );

  return [...staticSitemap, ...dynamicAppsSitemap];
}
