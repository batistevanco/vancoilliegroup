import {getTranslations} from "next-intl/server";
import type {Metadata} from "next";
import {Navbar} from "@/components/Navbar";
import {Link} from "@/i18n/navigation";
import {pageMetadata} from "@/lib/seo";

const pillars = ["reach", "partnerships", "growth"] as const;
const metricsKeys = ["clients", "downloads", "satisfaction", "maker", "initiatives"] as const;

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
      
      {/* Intro section */}
      <section className="growth-intro" aria-labelledby="growth-title">
        <p className="section-kicker">{page("kicker")}</p>
        <h1 id="growth-title">
          {page("title1")}<br />
          <span>{page("title_highlight")}</span>
        </h1>
        <p>{t("intro")}</p>
        <div style={{ marginBlock: "18px 24px" }}>
          <Link href="/about" className="text-button">
            <span>{page("about_link")}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="growth-pillars" aria-labelledby="growth-pillars-title">
        <p className="section-kicker">{page("pillars_kicker")}</p>
        <h2 id="growth-pillars-title">
          {page("pillars_title").split(". ")[0]}.<br />
          {page("pillars_title").split(". ")[1]}
        </h2>
        <div>
          {pillars.map((pillar, index) => (
            <article key={pillar}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{t(`pillars.${pillar}.title`)}</h3>
              <p>{t(`pillars.${pillar}.description`)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Strategy Roadmap Section */}
      <section className="growth-strategy" aria-labelledby="growth-strategy-title">
        <p className="section-kicker">{page("strategy_kicker")}</p>
        <h2 id="growth-strategy-title">{page("strategy_title")}</h2>
        <div className="strategy-grid">
          {["phase1", "phase2", "phase3"].map((phase) => (
            <div key={phase} className="strategy-card">
              <span className="strategy-num">{page(`strategy.${phase}.num`)}</span>
              <h3>{page(`strategy.${phase}.title`)}</h3>
              <p>{page(`strategy.${phase}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="growth-metrics" aria-labelledby="growth-metrics-title">
        <p className="section-kicker">{page("metrics_kicker")}</p>
        <h2 id="growth-metrics-title">{page("metrics_title")}</h2>
        <div className="metrics-grid">
          {metricsKeys.map((metric) => (
            <div key={metric} className="metric-card">
              <strong>{t(`metrics.${metric}.value`)}</strong>
              <span>{t(`metrics.${metric}.label`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy FAQ Section */}
      <section className="growth-faq" aria-labelledby="growth-faq-title">
        <p className="section-kicker">{page("faq_kicker")}</p>
        <h2 id="growth-faq-title">{page("faq_title")}</h2>
        <div className="faq-list">
          {["q1", "q2", "q3"].map((item) => (
            <details key={item} className="faq-item">
              <summary className="faq-question">
                <span>{page(`faq.${item}.question`)}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>{page(`faq.${item}.answer`)}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Sustainable Vision Section */}
      <section className="growth-vision" aria-labelledby="growth-vision-title">
        <div className="vision-text-layout">
          <div>
            <p className="section-kicker">{page("vision_kicker")}</p>
            <h2 id="growth-vision-title">{page("vision_title")}</h2>
          </div>
          <div>
            <p>{page("vision_para1")}</p>
            <p>{page("vision_para2")}</p>
            <div style={{ marginTop: "40px" }}>
              <Link href="/#contact" className="dark-button">
                <span>{page("contact")}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
