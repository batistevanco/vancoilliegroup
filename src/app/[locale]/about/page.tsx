import {Navbar} from "@/components/Navbar";
import {FinalSection} from "@/components/FinalSection";
import {pageMetadata} from "@/lib/seo";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {getTranslations} from "next-intl/server";
import profilePic from "../../../../public/afbeeldingen/personal/portfolioPicture.png";

export function generateStaticParams() {
  return [{locale: "nl"}, {locale: "en"}];
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "AboutPage"});
  return pageMetadata({
    locale,
    path: "/about",
    title: t("kicker"),
    description: t("intro"),
  });
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="studio-page-root">
      <Navbar />
      <main className="studio-detail about-page">
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

        {/* Bio Section */}
        <section className="bio-section">
          <div className="bio-grid">
            <div className="bio-image-container">
              <div className="bio-image-frame">
                <Image
                  src={profilePic}
                  alt="Batiste Vancoillie"
                  fill
                  sizes="(max-width: 760px) 100vw, 400px"
                  priority
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
            <div className="bio-content">
              <p className="section-kicker">{t("story_kicker")}</p>
              <h2>{t("story_title")}</h2>
              <p>{t("story_para1")}</p>
              <p>{t("story_para2")}</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <p className="section-kicker">{t("timeline_kicker")}</p>
          <h2>{t("timeline_title")}</h2>
          
          <div className="timeline-container">
            {/* Event 1: Past */}
            <div className="timeline-item past">
              <div className="timeline-badge">{t("timeline.past.label")}</div>
              <div className="timeline-panel">
                <h3>{t("timeline.past.event1.title")}</h3>
                <p>{t("timeline.past.event1.desc")}</p>
              </div>
            </div>

            {/* Event 2: Past */}
            <div className="timeline-item past">
              <div className="timeline-badge">{t("timeline.past.label")}</div>
              <div className="timeline-panel">
                <h3>{t("timeline.past.event2.title")}</h3>
                <p>{t("timeline.past.event2.desc")}</p>
              </div>
            </div>

            {/* Event 3: Present */}
            <div className="timeline-item present">
              <div className="timeline-badge">{t("timeline.present.label")}</div>
              <div className="timeline-panel">
                <h3>{t("timeline.present.event.title")}</h3>
                <p>{t("timeline.present.event.desc")}</p>
              </div>
            </div>

            {/* Event 4: Future */}
            <div className="timeline-item future">
              <div className="timeline-badge">{t("timeline.future.label")}</div>
              <div className="timeline-panel">
                <h3>{t("timeline.future.event.title")}</h3>
                <p>{t("timeline.future.event.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social / Portfolio Links Section */}
        <section className="social-links-section">
          <p className="section-kicker">{t("links_title")}</p>
          <div className="social-links-grid">
            <a
              href="https://batistevancoillie.be/portfolio/index.html"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span>{t("portfolio_label")}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/batistevanco"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span>{t("github_label")}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/batiste-vancoillie-622562291/"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span>{t("linkedin_label")}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <FinalSection />
    </div>
  );
}
