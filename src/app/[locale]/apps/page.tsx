import {Navbar} from "@/components/Navbar";
import {FinalSection} from "@/components/FinalSection";
import {pageMetadata} from "@/lib/seo";
import {studioApps} from "@/lib/studio-content";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {getTranslations} from "next-intl/server";

export function generateStaticParams() {
  return [{locale: "nl"}, {locale: "en"}];
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "AppsPage"});
  return pageMetadata({
    locale,
    path: "/apps",
    title: t("title1") + " " + t("title2"),
    description: t("intro"),
  });
}

export default function AppsPage() {
  const t = useTranslations("AppsPage");

  return (
    <div className="studio-page-root">
      <Navbar />
      <main className="studio-detail apps-page">
        <Link href="/" className="section-text-link">
          {t("back")}
        </Link>
        <section className="websites-hero">
          <p className="section-kicker">{t("kicker")}</p>
          <h1>
            {t("title1")}<br />
            <span>{t("title2")}</span>
          </h1>
          <p>{t("intro")}</p>
        </section>

        <section className="apps-list-section">
          <div className="apps-grid">
            {studioApps.map((app) => (
              <article key={app.slug} className="app-list-card">
                <div className="app-image-wrap">
                  <Image
                    src={app.image}
                    alt={`${app.name} mockup`}
                    fill
                    sizes="(max-width: 760px) 100vw, 400px"
                    priority
                  />
                </div>
                <div className="app-card-details">
                  <span className="app-kicker">{app.eyebrow}</span>
                  <h2>{app.name}</h2>
                  <p>{app.description}</p>
                  <div className="app-features-mini">
                    {app.features.slice(0, 2).map((feat) => (
                      <span key={feat} className="mini-feat-tag">✓ {feat}</span>
                    ))}
                  </div>
                  <Link href={`/apps/${app.slug}`} className="dark-button">
                    <span>{t("view_app")}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FinalSection />
    </div>
  );
}
