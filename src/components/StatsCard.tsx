import {useTranslations} from "next-intl";

export function StatsCard() {
  const t = useTranslations("Hero");
  return (
    <aside className="stats-card" aria-label={t("stats_label")}>
      <div><strong>{t("companies_count")}</strong><span>{t("companies_label")}</span></div>
      <div><strong>{t("vision_count")}</strong><span>{t("vision_label")}</span></div>
      <div><strong className="infinity">∞</strong><span>{t("possibilities_label")}</span></div>
    </aside>
  );
}
