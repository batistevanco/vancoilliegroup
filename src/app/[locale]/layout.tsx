import type {Metadata} from "next";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import {siteUrl} from "@/lib/seo";
import {AnalyticsConsent} from "@/components/AnalyticsConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vancoillie Group",
    template: "%s | Vancoillie Group",
  },
  description: "Vancoillie Group",
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {url: "/favicon.ico", sizes: "any"},
      {url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16"},
      {url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32"},
    ],
    apple: [
      {url: "/favicons/apple-touch-icon.png", type: "image/png", sizes: "180x180"},
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? {"msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION} : undefined,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Vancoillie Group",
        url: siteUrl,
        logo: `${siteUrl}/favicons/android-chrome-512x512.png`,
        email: "info@vancoilliegroup.be",
        telephone: "+32499873892",
        description: "A family of digital companies building technology that moves people forward.",
        areaServed: ["Belgium", "Europe"],
        sameAs: [
          "https://www.instagram.com/vancoilliestudio/",
          "https://github.com/batistevancoillie",
          "https://x.com/vancstudio",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Vancoillie Group",
        publisher: {"@id": `${siteUrl}/#organization`},
        inLanguage: locale === "nl" ? "nl-BE" : "en",
      },
    ],
  };

  // Get messages for next-intl
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <AnalyticsConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
