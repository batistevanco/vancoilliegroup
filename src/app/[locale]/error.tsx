"use client";

import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function Error({reset}: {error: Error & {digest?: string}; reset: () => void}) {
  const t = useTranslations("Errors.error");
  return <main className="status-page">
    <div className="status-orbit status-orbit-one" aria-hidden="true" />
    <div className="status-orbit status-orbit-two" aria-hidden="true" />
    <div className="status-content">
      <p className="section-kicker">{t("kicker")}</p>
      <p className="status-code" aria-hidden="true">!</p>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="status-actions">
        <button className="dark-button" type="button" onClick={reset}><span>{t("retry")}</span><span aria-hidden="true">↗</span></button>
        <Link href="/" className="text-button"><span>{t("home")}</span><span aria-hidden="true">↗</span></Link>
      </div>
    </div>
    <p className="status-brand">VANCOILLIE GROUP</p>
  </main>;
}
