import {notFound} from "next/navigation";
import type {Metadata} from "next";
import Image, {type StaticImageData} from "next/image";
import {getTranslations} from "next-intl/server";
import {Navbar} from "@/components/Navbar";
import {Link} from "@/i18n/navigation";
import {routing} from "@/i18n/routing";
import {pageMetadata} from "@/lib/seo";
import productsImage from "@/afbeeldingen/detail-optimized/products.jpg";
import softwareImage from "@/afbeeldingen/detail-optimized/software.jpg";
import itImage from "@/afbeeldingen/detail-optimized/it.jpg";
import securityImage from "@/afbeeldingen/detail-optimized/security.jpg";
import dataImage from "@/afbeeldingen/detail-optimized/data.jpg";
import designImage from "@/afbeeldingen/detail-optimized/design.jpg";

const expertise = {
  products: "products",
  software: "software",
  it: "it",
  security: "security",
  data: "data",
  design: "design",
} as const;

type ExpertiseSlug = keyof typeof expertise;

const companyDestinations = {
  products: {url: "https://www.vancoilliestudio.be/", label: "visit_studio"},
  software: {url: "https://www.vancoilliestudio.be/", label: "visit_studio"},
  it: {url: "https://www.vancoillieithulp.be/", label: "visit_it"},
  security: {url: "https://www.vancoilliestudio.be/", label: "visit_studio"},
  data: {url: "https://www.vancoilliestudio.be/", label: "visit_studio"},
  design: {url: "https://www.vancoilliestudio.be/", label: "visit_studio"},
} as const;

const expertiseImages: Record<ExpertiseSlug, StaticImageData> = {
  products: productsImage,
  software: softwareImage,
  it: itImage,
  security: securityImage,
  data: dataImage,
  design: designImage,
};

const processSteps = ["discover", "define", "build", "evolve"] as const;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => Object.keys(expertise).map((slug) => ({locale, slug})));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}): Promise<Metadata> {
  const {locale, slug} = await params;
  if (!(slug in expertise)) return {};

  const key = expertise[slug as ExpertiseSlug];
  const t = await getTranslations({locale, namespace: "Capabilities"});
  return pageMetadata({
    locale,
    path: `/expertise/${slug}`,
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
  });
}

export default async function ExpertiseDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  if (!(slug in expertise)) notFound();

  const key = expertise[slug as ExpertiseSlug];
  const destination = companyDestinations[slug as ExpertiseSlug];
  const image = expertiseImages[slug as ExpertiseSlug];
  const t = await getTranslations("Capabilities");
  const detail = await getTranslations("DetailPage");

  return (
    <main className="detail-page">
      <Navbar />
      <section className="detail-content" aria-labelledby="detail-title">
        <header className="detail-hero">
          <div className="detail-hero-copy">
            <p className="section-kicker">{detail("kicker")}</p>
            <h1 id="detail-title">{t(`items.${key}.title`)}</h1>
            <p>{t(`items.${key}.description`)}</p>
            <p className="detail-overview">{detail(`details.${key}.overview`)}</p>
          </div>
          <div className={`detail-visual detail-visual-${key}`}>
            <Image src={image} alt={detail(`details.${key}.image_alt`)} fill priority sizes="(max-width: 780px) 100vw, 46vw" />
          </div>
        </header>
        <section className="detail-focus" aria-labelledby="focus-title">
          <p className="section-kicker">{detail("focus_kicker")}</p>
          <h2 id="focus-title">{detail(`details.${key}.headline`)}</h2>
          <div>
            {(["focus1", "focus2", "focus3"] as const).map((focus, index) => <article key={focus}><span>{String(index + 1).padStart(2, "0")}</span><p>{detail(`details.${key}.${focus}`)}</p></article>)}
          </div>
        </section>
        <section className="detail-outcomes" aria-labelledby="outcomes-title">
          <p className="section-kicker">{detail("outcomes_kicker")}</p>
          <h2 id="outcomes-title">{detail(`details.${key}.outcomes_title`)}</h2>
          <div>
            {(["outcome1", "outcome2", "outcome3"] as const).map((outcome, index) => <article key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><h3>{detail(`details.${key}.${outcome}_title`)}</h3><p>{detail(`details.${key}.${outcome}_text`)}</p></article>)}
          </div>
        </section>
        <section className="detail-process" aria-labelledby="process-title">
          <div><p className="section-kicker">{detail("process_kicker")}</p><h2 id="process-title">{detail("process_title")}</h2></div>
          <ol>{processSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{detail(`process.${step}.title`)}</h3><p>{detail(`process.${step}.text`)}</p></div></li>)}</ol>
        </section>
        <div className="detail-actions">
          <a href={destination.url} className="dark-button" target="_blank" rel="noreferrer"><span>{detail(destination.label)}</span><span aria-hidden="true">↗</span></a>
          <Link href="/#expertise" className="text-button"><span>{detail("back")}</span><span aria-hidden="true">←</span></Link>
        </div>
      </section>
    </main>
  );
}
