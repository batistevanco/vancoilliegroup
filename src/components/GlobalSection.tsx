import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import globeImage from "@/IMAGES/globeSection06-optimized.jpg";
import itHulp from "@/sponsors/SponsorVancoillieITHulp.png";
import studio from "@/sponsors/SponsorVancoillieStudio.png";

const pillars = ["reach", "partnerships", "growth"] as const;
function GlobalIcon({name}: {name: string}) {
  const p = {fill:"none", stroke:"currentColor", strokeWidth:1.35, strokeLinecap:"round" as const, strokeLinejoin:"round" as const};
  if (name === "reach" || name === "countries") return <svg viewBox="0 0 32 32"><circle {...p} cx="16" cy="16" r="12"/><path {...p} d="M4 16h24M16 4c4 4 6 8 6 12s-2 8-6 12M16 4c-4 4-6 8-6 12s2 8 6 12"/></svg>;
  if (name === "partnerships" || name === "partners") return <svg viewBox="0 0 32 32"><circle {...p} cx="11" cy="10" r="4"/><circle {...p} cx="22" cy="9" r="3"/><path {...p} d="M3 28v-4c0-5 3-8 8-8s8 3 8 8v4M20 17c5 0 8 3 8 7v3"/></svg>;
  if (name === "projects") return <svg viewBox="0 0 32 32"><path {...p} d="M5 28V12h9v16M14 28V4h13v24M9 17h1M9 22h1M19 9h2M19 14h2M19 19h2"/></svg>;
  if (name === "satisfaction") return <svg viewBox="0 0 32 32"><circle {...p} cx="16" cy="16" r="13"/><path {...p} d="m10 16 4 4 8-9"/></svg>;
  return <svg viewBox="0 0 32 32"><path {...p} d="m3 24 8-8 6 5L29 7M21 7h8v8"/></svg>;
}

export function GlobalSection() {
  const t = useTranslations("Global");
  return <section id="global" className="global-section" aria-labelledby="global-title">
    <div className="global-hero" style={{backgroundImage:`url(${globeImage.src})`}}>
      <div className="global-copy">
        <p className="section-kicker">{t("kicker")}</p>
        <h2 id="global-title">{t("title1")}<br /><span>{t("title_highlight")}</span></h2>
        <p>{t("intro")}</p>
        <Link className="section-text-link" href="/growth">{t("growth_link")} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="global-pillars">
        {pillars.map(pillar => <article key={pillar}><span><GlobalIcon name={pillar}/></span><div><h3>{t(`pillars.${pillar}.title`)}</h3><p>{t(`pillars.${pillar}.description`)}</p></div></article>)}
      </div>
    </div>
    <div className="global-partners">
      <blockquote><b aria-hidden="true">“</b><p>{t("quote")}</p><cite>VANCOILLIE GROUP</cite></blockquote>
      <div><p>{t("trusted_by")}</p><ul className="global-sponsor-logos" aria-label={t("trusted_by")}><li className="logo-ithulp"><Image src={itHulp} alt="Vancoillie IT Hulp" sizes="170px"/></li><li className="logo-studio"><Image src={studio} alt="Vancoillie Studio" sizes="170px"/></li></ul></div>
    </div>
  </section>;
}
