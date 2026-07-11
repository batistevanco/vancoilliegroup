import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {getTranslations} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import GroupFooter from "@/components/GroupFooter";
import "./globals.css";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params; const t=await getTranslations({locale,namespace:"Hero"});
  const url="https://vancoillie.group";
  return {metadataBase:new URL(url),title:{default:"Vancoillie Group",template:"%s · Vancoillie Group"},description:t("subtitle"),alternates:{canonical:`/${locale}`,languages:{nl:"/nl",en:"/en","x-default":"/nl"}},openGraph:{type:"website",siteName:"Vancoillie Group",title:"Vancoillie Group",description:t("subtitle"),locale:locale==="nl"?"nl_BE":"en_BE"},twitter:{card:"summary_large_image",title:"Vancoillie Group",description:t("subtitle")},robots:{index:true,follow:true}};
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <NextIntlClientProvider>{children}<GroupFooter /></NextIntlClientProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Vancoillie Group",url:"https://vancoillie.group",address:{"@type":"PostalAddress",addressCountry:"BE"},subOrganization:[{"@type":"Organization",name:"Vancoillie IT Hulp"},{"@type":"Organization",name:"Vancoillie Studio"}]})}} />
      </body>
    </html>
  );
}
