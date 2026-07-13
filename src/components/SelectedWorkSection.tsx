import Image, {type StaticImageData} from "next/image";
import {useTranslations} from "next-intl";
import abboBuddyImage from "@/IMAGES/AbboBuddyPromoBovenAan-optimized.jpg";
import websiteImage from "@/IMAGES/WebsiteBuildingPromo.png";
import newsImage from "@/IMAGES/VancoillieNewsPromoRechtsOnder-optimized.jpg";

type WorkCardProps = {
  image: StaticImageData;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  className: string;
};

function WorkCard({image, imageAlt, label, title, description, cta, href, className}: WorkCardProps) {
  return (
    <article className={`work-card ${className}`}>
      <Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 84vw" quality={75} />
      <div className="work-card-shade" aria-hidden="true" />
      <div className="work-card-copy">
        <p className="work-card-label">{label}</p>
        <h3>{title}</h3>
        <p className="work-card-description">{description}</p>
        <a className="work-card-link" href={href} target="_blank" rel="noreferrer">
          <span>{cta}</span><span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function SelectedWorkSection() {
  const t = useTranslations("SelectedWork");
  const metrics = ["maker", "initiatives", "apps", "studio", "ambition"] as const;

  return (
    <section id="work" className="selected-work-section" aria-labelledby="selected-work-title">
      <div className="selected-work-shell">
        <header className="selected-work-header reveal">
          <div>
            <p className="section-kicker">{t("kicker")}</p>
            <h2 id="selected-work-title">{t("title_line1")}<br />{t("title_line2")}</h2>
          </div>
          <div className="selected-work-intro">
            <p>{t("intro")}</p>
            <a href="https://www.vancoilliestudio.be/" target="_blank" rel="noreferrer"><span>{t("view_all")}</span><span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <div className="work-grid reveal delay-1">
          <WorkCard
            image={abboBuddyImage}
            imageAlt={t("abbobuddy.image_alt")}
            label={t("abbobuddy.label")}
            title={t("abbobuddy.title")}
            description={t("abbobuddy.description")}
            cta={t("view_case")}
            href="https://www.vancoilliestudio.be/abbo/"
            className="work-card-featured work-card-dark work-card-abbobuddy"
          />
          <WorkCard
            image={websiteImage}
            imageAlt={t("website.image_alt")}
            label={t("website.label")}
            title={t("website.title")}
            description={t("website.description")}
            cta={t("website.cta")}
            href="https://www.vancoilliestudio.be/"
            className="work-card-small work-card-light work-card-website"
          />
          <WorkCard
            image={newsImage}
            imageAlt={t("news.image_alt")}
            label={t("news.label")}
            title={t("news.title")}
            description={t("news.description")}
            cta={t("view_case")}
            href="https://www.vancoilliestudio.be/news/"
            className="work-card-small work-card-dark work-card-news"
          />
        </div>

        <dl className="work-metrics reveal delay-2 grid grid-cols-5 max-[560px]:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric}>
              <dt>{t(`metrics.${metric}.value`)}</dt>
              <dd>{t(`metrics.${metric}.label`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
