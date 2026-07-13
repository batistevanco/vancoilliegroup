import type {Metadata} from "next";
import {LegalPage} from "@/components/LegalPage";
import {pageMetadata} from "@/lib/seo";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return pageMetadata({
    locale,
    path: "/privacy",
    title: locale === "en" ? "Privacy Policy" : "Privacybeleid",
    description: locale === "en" ? "Read how Vancoillie Group handles personal data and privacy." : "Lees hoe Vancoillie Group persoonsgegevens en privacy behandelt.",
  });
}

export default function PrivacyPage() {
  return <LegalPage document="privacy" />;
}
