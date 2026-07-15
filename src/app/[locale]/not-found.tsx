import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("Errors.not_found");
  return <main className="status-page">
    <div className="status-orbit status-orbit-one" aria-hidden="true" />
    <div className="status-orbit status-orbit-two" aria-hidden="true" />
    <div className="status-content">
      <p className="section-kicker">{t("kicker")}</p>
      <p className="status-code" aria-hidden="true">404</p>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="status-actions">
        <Link href="/" className="dark-button"><span>{t("home")}</span><span aria-hidden="true">↗</span></Link>
        <Link href="/#contact" className="text-button"><span>{t("contact")}</span><span aria-hidden="true">↗</span></Link>
      </div>
    </div>
    <p className="status-brand">VANCOILLIE GROUP</p>
  </main>;
}
