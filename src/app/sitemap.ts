import type {MetadataRoute} from "next";
import {languageAlternates, localizedUrl, locales} from "@/lib/seo";

const pages = [
  {path: "/", changeFrequency: "monthly", priority: 1},
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

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {languages: languageAlternates(page.path)},
    })),
  );
}
