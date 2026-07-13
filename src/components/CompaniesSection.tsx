import Image, {type StaticImageData} from "next/image";
import {useTranslations} from "next-intl";
import background from "@/Background-optimized.jpg";
import itHulpLogo from "@/sponsors/SponsorVancoillieITHulp.png";
import studioLogo from "@/sponsors/SponsorVancoillieStudio.png";

type CompanyKey = "it" | "studio";

function CompanyPanel({company, logo}: {company: CompanyKey; logo: StaticImageData}) {
  const t = useTranslations("Companies");
  const services = ["service1", "service2", "service3", "service4"] as const;

  return (
    <article className="company-panel">
      <div className="company-summary">
        <div className={`company-logo company-logo-${company}`}>
          <Image src={logo} alt={t(`${company}.name`)} sizes="250px" />
        </div>
        <p>{t(`${company}.description`)}</p>
      </div>
      <ul className="company-services">
        {services.map((service) => <li key={service}><i aria-hidden="true" />{t(`${company}.${service}`)}</li>)}
      </ul>
      <a href={company === "it" ? "https://www.vancoillieithulp.be/" : "https://www.vancoilliestudio.be/"} className="company-arrow" aria-label={t(`${company}.cta`)} target="_blank" rel="noreferrer">→</a>
    </article>
  );
}

export function CompaniesSection() {
  const t = useTranslations("Companies");
  return (
    <section id="companies" className="companies-section" aria-labelledby="companies-title">
      <div className="companies-background" aria-hidden="true"><Image src={background} alt="" fill quality={75} sizes="100vw" /></div>
      <div className="companies-wash" aria-hidden="true" />
      <div className="companies-layout">
        <div className="companies-copy reveal">
          <p className="section-kicker">{t("what_we_do")}</p>
          <h2 id="companies-title">{t("title1")}<br />{t("title2")}<br />{t("title3")} <span>{t("title_highlight")}</span>.</h2>
          <p className="companies-intro">{t("introduction")}</p>
          <div className="who-we-are">
            <p className="section-kicker">{t("who_we_are")}</p>
            <p>{t("identity")}</p>
            <div className="location-line"><span aria-hidden="true">◎</span>{t("belgium")}<i>/</i>{t("ambition")}</div>
          </div>
        </div>
        <div className="company-panels reveal delay-2">
          <CompanyPanel company="it" logo={itHulpLogo} />
          <CompanyPanel company="studio" logo={studioLogo} />
        </div>
      </div>
    </section>
  );
}
