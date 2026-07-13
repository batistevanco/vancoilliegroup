import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import staircaseImage from "@/IMAGES/StairCaseSection05-optimized.jpg";

const principles = ["people", "longterm", "excellence", "together"] as const;
const values = ["integrity", "accountability", "innovation", "respect", "impact"] as const;
const facts = ["founded", "maker", "initiatives", "apps", "studio", "vision"] as const;

function ValueIcon({name}: {name: typeof values[number]}) {
  const p = {fill:"none", stroke:"currentColor", strokeWidth:1.3, strokeLinecap:"round" as const, strokeLinejoin:"round" as const};
  if (name === "integrity") return <svg viewBox="0 0 32 32"><path {...p} d="M16 3 27 8v7c0 7-4.5 11.5-11 14C9.5 26.5 5 22 5 15V8l11-5Z"/></svg>;
  if (name === "accountability") return <svg viewBox="0 0 32 32"><circle {...p} cx="16" cy="10" r="5"/><path {...p} d="M7 28v-4c0-5 3.5-8 9-8s9 3 9 8v4"/></svg>;
  if (name === "innovation") return <svg viewBox="0 0 32 32"><path {...p} d="M10 20c-2-2-3-4-3-7a9 9 0 0 1 18 0c0 3-1 5-3 7-1.5 1.5-2 3-2 5h-8c0-2-.5-3.5-2-5ZM12 28h8"/></svg>;
  if (name === "respect") return <svg viewBox="0 0 32 32"><circle {...p} cx="11" cy="10" r="4"/><circle {...p} cx="22" cy="9" r="3"/><path {...p} d="M3 28v-4c0-5 3-8 8-8s8 3 8 8v4M20 17c5 0 8 3 8 7v3"/></svg>;
  return <svg viewBox="0 0 32 32"><path {...p} d="m16 3 4 8 9 1-6.5 6.5L24 28l-8-4.5L8 28l1.5-9.5L3 12l9-1 4-8Z"/></svg>;
}

export function VisionSection() {
  const t = useTranslations("Vision");
  return (
    <section id="vision" className="vision-section" aria-labelledby="vision-title">
      <div className="vision-main">
        <div className="vision-content">
          <div className="vision-copy reveal">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 id="vision-title">{t("title1")}<br />{t("title2")}<br /><span>{t("title_highlight")}</span></h2>
            <p>{t("intro")}</p>
            <Link className="section-text-link" href="/philosophy">{t("philosophy_link")} <span aria-hidden="true">↗</span></Link>
          </div>
          <ol className="vision-principles reveal delay-1">
            {principles.map((principle, index) => <li key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" />
              <div><h3>{t(`principles.${principle}.title`)}</h3><p>{t(`principles.${principle}.description`)}</p></div>
            </li>)}
          </ol>
        </div>
        <div className="vision-image" role="img" aria-label={t("image_alt")} style={{backgroundImage: `url(${staircaseImage.src})`}}>
          <blockquote className="reveal delay-2"><b aria-hidden="true">“</b><p>{t("quote")}</p><i aria-hidden="true"/><cite>VANCOILLIE GROUP</cite></blockquote>
        </div>
      </div>

      <div id="values" className="values-strip reveal">
        <p className="section-kicker">{t("values_kicker")}</p>
        <div className="values-grid">
          {values.map(value => <article key={value}><ValueIcon name={value}/><h3>{t(`values.${value}.title`)}</h3><p>{t(`values.${value}.description`)}</p></article>)}
        </div>
      </div>
      <dl className="vision-facts reveal delay-1">
        {facts.map(fact => <div key={fact}><dt>{t(`facts.${fact}.value`)}</dt><dd>{t(`facts.${fact}.label`)}</dd></div>)}
      </dl>
    </section>
  );
}
