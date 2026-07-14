import {getTranslations} from "next-intl/server";
import type {Metadata} from "next";
import {Navbar} from "@/components/Navbar";
import {Link} from "@/i18n/navigation";
import {pageMetadata} from "@/lib/seo";

const principles = ["people", "longterm", "excellence", "together"] as const;
const values = ["integrity", "accountability", "innovation", "respect", "impact"] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return pageMetadata({
    locale,
    path: "/philosophy",
    title: locale === "en" ? "Our Philosophy" : "Onze filosofie",
    description: locale === "en"
      ? "Learn about the people-first principles and values behind Vancoillie Group."
      : "Ontdek de mensgerichte principes en waarden achter Vancoillie Group.",
  });
}

export default async function PhilosophyPage() {
  const t = await getTranslations("Vision");
  const page = await getTranslations("Philosophy");

  return (
    <main className="philosophy-page">
      <Navbar />
      <section className="philosophy-intro" aria-labelledby="philosophy-title">
        <p className="section-kicker">{page("kicker")}</p>
        <h1 id="philosophy-title">{t("title1")}<br />{t("title2")}<br /><span>{t("title_highlight")}</span></h1>
        <p>{t("intro")}</p>
        <div style={{ marginBlock: "18px 24px" }}>
          <Link href="/about" className="text-button">
            <span>{page("about_link")}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <blockquote>“{t("quote")}”</blockquote>
      </section>
      <section className="philosophy-principles" aria-labelledby="principles-title">
        <p className="section-kicker">{page("principles_kicker")}</p>
        <h2 id="principles-title">{page("principles_title")}</h2>
        <div>
          {principles.map((principle, index) => <article key={principle}><span>{String(index + 1).padStart(2, "0")}</span><h3>{t(`principles.${principle}.title`)}</h3><p>{t(`principles.${principle}.description`)}</p></article>)}
        </div>
      </section>
      <section className="philosophy-values" aria-labelledby="philosophy-values-title">
        <p className="section-kicker">{t("values_kicker")}</p>
        <h2 id="philosophy-values-title">{page("values_title")}</h2>
        <div>{values.map((value) => <article key={value}><h3>{t(`values.${value}.title`)}</h3><p>{t(`values.${value}.description`)}</p></article>)}</div>
        <Link href="/#contact" className="dark-button"><span>{page("contact")}</span><span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
