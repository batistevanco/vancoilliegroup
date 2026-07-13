import {useTranslations} from "next-intl";
import {Navbar} from "@/components/Navbar";
import {Link} from "@/i18n/navigation";

type LegalDocument = "privacy" | "terms";

export function LegalPage({document}: {document: LegalDocument}) {
  const t = useTranslations("Legal");

  return (
    <main className="detail-page">
      <Navbar />
      <section className="detail-content legal-content" aria-labelledby="legal-title">
        <p className="section-kicker">{t(`${document}.kicker`)}</p>
        <h1 id="legal-title">{t(`${document}.title`)}</h1>
        <p>{t(`${document}.intro`)}</p>
        <h2>{t(`${document}.section_title`)}</h2>
        <p>{t(`${document}.section_content`)}</p>
        <div className="detail-actions">
          <Link href="/#contact" className="dark-button"><span>{t("contact")}</span><span aria-hidden="true">↗</span></Link>
          <Link href="/" className="text-button"><span>{t("home")}</span><span aria-hidden="true">←</span></Link>
        </div>
      </section>
    </main>
  );
}
