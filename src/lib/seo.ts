import type {Metadata} from "next";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vancoilliegroup.be").replace(/\/$/, "");
export const siteName = "Vancoillie Group";
export const locales = ["nl", "en"] as const;

export function localizedUrl(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path;
  return `${siteUrl}/${locale}${normalizedPath}`;
}

export function languageAlternates(path = "/") {
  return {
    nl: localizedUrl("nl", path),
    en: localizedUrl("en", path),
    "x-default": localizedUrl("nl", path),
  };
}

export function pageMetadata({
  locale,
  path = "/",
  title,
  description,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const url = localizedUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: `${title} | ${siteName}`,
      description,
      locale: locale === "nl" ? "nl_BE" : "en_US",
      alternateLocale: locale === "nl" ? ["en_US"] : ["nl_BE"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
