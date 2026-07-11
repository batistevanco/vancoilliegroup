import type {MetadataRoute} from "next";

const base = "https://vancoillie.group";
const routes = ["", "brands", "about", "services", "work", "vision", "contact", "privacy", "cookies", "terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ["nl", "en"].flatMap((locale) =>
    routes.map((route) => {
      const suffix = route ? `/${route}` : "";
      return {
        url: `${base}/${locale}${suffix}`,
        lastModified: new Date(),
        changeFrequency: route ? "monthly" as const : "weekly" as const,
        priority: route ? 0.7 : 1,
        alternates: {languages: {nl: `${base}/nl${suffix}`, en: `${base}/en${suffix}`}},
      };
    }),
  );
}
