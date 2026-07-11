import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AuroraBackground from "./AuroraBackground";
import Navbar from "./Navbar";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero relative flex min-h-screen flex-col items-center overflow-hidden bg-black text-center">
      <AuroraBackground />
      <Navbar />

      <div className="hero-content relative z-10 flex flex-col items-center px-6">
        <span className="hero-badge">
          {t("badge")}
        </span>

        <h1 className="hero-title">
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h1>

        <p className="hero-subtitle">
          {t("subtitle")}
        </p>

        <Link href="/get-started" className="cosmic-button mt-10">
          <span>
            {t("cta")}
          </span>
        </Link>
      </div>
    </section>
  );
}
