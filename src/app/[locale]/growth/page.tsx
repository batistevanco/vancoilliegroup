import {getTranslations} from "next-intl/server";
import type {Metadata} from "next";
import {Navbar} from "@/components/Navbar";
import {Link} from "@/i18n/navigation";
import {pageMetadata} from "@/lib/seo";

const pillars = ["reach", "partnerships", "growth"] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return pageMetadata({
    locale,
    path: "/growth",
    title: locale === "en" ? "Growth" : "Groei",
    description: locale === "en"
      ? "Discover the independent direction and long-term ambition behind Vancoillie Group."
      : "Ontdek de onafhankelijke richting en langetermijnambitie achter Vancoillie Group.",
  });
}

export default async function GrowthPage() {
  const t = await getTranslations("Global");
  const page = await getTranslations("Growth");

  return (
    <main className="growth-page">
      <Navbar />
      <section className="growth-intro" aria-labelledby="growth-title">
        <p className="section-kicker">{page("kicker")}</p>
        <h1 id="growth-title">{page("title1")}<br /><span>{page("title_highlight")}</span></h1>
        <p>{t("intro")}</p>
      </section>
      <section className="growth-pillars" aria-labelledby="growth-pillars-title">
        <p className="section-kicker">{page("pillars_kicker")}</p>
        <h2 id="growth-pillars-title">{page("pillars_title")}</h2>
        <div>{pillars.map((pillar, index) => <article key={pillar}><span>{String(index + 1).padStart(2, "0")}</span><h3>{t(`pillars.${pillar}.title`)}</h3><p>{t(`pillars.${pillar}.description`)}</p></article>)}</div>
        <Link href="/#contact" className="dark-button"><span>{page("contact")}</span><span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
