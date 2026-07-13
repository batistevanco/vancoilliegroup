import type {Metadata} from "next";
import {LegalPage} from "@/components/LegalPage";
import {pageMetadata} from "@/lib/seo";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return pageMetadata({
    locale,
    path: "/terms",
    title: locale === "en" ? "Terms & Conditions" : "Algemene voorwaarden",
    description: locale === "en" ? "Read the terms and conditions for the Vancoillie Group website and services." : "Lees de algemene voorwaarden voor de website en diensten van Vancoillie Group.",
  });
}

export default function TermsPage() {
  return <LegalPage document="terms" />;
}
