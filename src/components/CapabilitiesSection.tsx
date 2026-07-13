import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

const capabilities = ["products", "software", "it", "security", "data", "design"] as const;
const steps = ["discover", "define", "design", "build", "deliver"] as const;

function LineIcon({name}: {name: string}) {
  const common = {fill: "none", stroke: "currentColor", strokeWidth: 1.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const};
  if (name === "products") return <svg viewBox="0 0 32 32" aria-hidden="true"><rect {...common} x="5" y="10" width="15" height="16" rx="1"/><rect {...common} x="12" y="4" width="15" height="16" rx="1"/></svg>;
  if (name === "software" || name === "build") return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="m11 8-7 8 7 8M21 8l7 8-7 8M18 5l-4 22"/></svg>;
  if (name === "it") return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="M9 25h16a5 5 0 0 0 .4-10A8 8 0 0 0 10 12a6.5 6.5 0 0 0-1 13Z"/></svg>;
  if (name === "security") return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="M16 3 27 8v7c0 7-4.4 11.5-11 14-6.6-2.5-11-7-11-14V8l11-5Z"/><path {...common} d="M16 10v10"/></svg>;
  if (name === "data") return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="M6 25V14M16 25V7M26 25V3"/></svg>;
  if (name === "design") return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="m5 26 3-9L22 3l7 7-14 14-10 2ZM8 17l7 7M20 5l7 7"/></svg>;
  if (name === "discover") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle {...common} cx="14" cy="14" r="9"/><path {...common} d="m21 21 8 8"/></svg>;
  if (name === "define") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle {...common} cx="16" cy="16" r="11"/><circle {...common} cx="16" cy="16" r="4"/><path {...common} d="M16 1v6M16 25v6M1 16h6M25 16h6"/></svg>;
  if (name === "deliver") return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="m3 22 8-8 6 5L29 6M21 6h8v8"/></svg>;
  return null;
}

export function CapabilitiesSection() {
  const t = useTranslations("Capabilities");

  return (
    <section id="expertise" className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="capabilities-top">
        <div className="capabilities-copy">
          <p className="section-kicker">{t("kicker")}</p>
          <h2 id="capabilities-title">{t("title1")}<br />{t("title2")}<br /><span>{t("title_highlight")}</span></h2>
          <p>{t("intro")}</p>
          <Link className="section-text-link" href="/#approach">{t("approach_link")} <span aria-hidden="true">↗</span></Link>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability}>
              <LineIcon name={capability} />
              <h3>{t(`items.${capability}.title`)}</h3>
              <i aria-hidden="true" />
              <p>{t(`items.${capability}.description`)}</p>
              <Link href={`/expertise/${capability}`}>{t("learn_more")} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </div>

      <div id="approach" className="approach-row">
        <div className="approach-intro">
          <p className="section-kicker">{t("approach.kicker")}</p>
          <h2>{t("approach.title1")}<br />{t("approach.title2")}</h2>
          <p>{t("approach.intro")}</p>
        </div>
        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step}>
              <LineIcon name={step} />
              <div className="process-marker"><b>{index + 1}</b></div>
              <h3>{t(`approach.steps.${step}.title`)}</h3>
              <p>{t(`approach.steps.${step}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
