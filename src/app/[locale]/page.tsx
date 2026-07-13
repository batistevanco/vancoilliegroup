import Image from "next/image";
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {Navbar} from "@/components/Navbar";
import {SponsorsBar} from "@/components/SponsorsBar";
import {StatsCard} from "@/components/StatsCard";
import backgroundImage from "@/BackgroundImage-optimized.jpg";
import {CompaniesSection} from "@/components/CompaniesSection";
import {SelectedWorkSection} from "@/components/SelectedWorkSection";
import {CapabilitiesSection} from "@/components/CapabilitiesSection";
import {VisionSection} from "@/components/VisionSection";
import {GlobalSection} from "@/components/GlobalSection";
import {FinalSection} from "@/components/FinalSection";
import {pageMetadata} from "@/lib/seo";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Home"});

  return {
    ...pageMetadata({locale, title: t("title"), description: t("description")}),
    title: {absolute: "Vancoillie Group"},
  };
}

export default function HomePage() {
  const t = useTranslations("Hero");
  return (<>
    <main className="hero-page">
      <div className="hero-background" aria-hidden="true">
        <Image src={backgroundImage} alt="" fill priority quality={75} sizes="100vw" />
      </div>
      <div className="hero-wash" aria-hidden="true" />
      <Navbar />

      <section className="hero-content" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-eyebrow">{t("tagline")}</p>
          <h1 id="hero-title">
            {t("title_line1")}<br />
            {t("title_line2")}<br />
            <span>{t("title_highlight")}</span> {t("title_end")}
          </h1>
          <p className="hero-description">{t("description")}</p>
          <div className="hero-buttons">
            <Link href="/#companies" className="dark-button"><span>{t("btn_discover")}</span><span aria-hidden="true">↗</span></Link>
            <Link href="/#work" className="text-button"><span>{t("btn_explore")}</span><span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <StatsCard />
      </section>

      <div className="scroll-cue" aria-hidden="true"><i/><span>{t("scroll_text")}</span><b/></div>
      <SponsorsBar />
    </main>
    <CompaniesSection />
    <SelectedWorkSection />
    <CapabilitiesSection />
    <VisionSection />
    <GlobalSection />
    <FinalSection />
  </>);
}
