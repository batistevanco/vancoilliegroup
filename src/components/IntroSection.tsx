import { useTranslations } from "next-intl";
import ScrollRevealText from "./ScrollRevealText";
import GradientOrb from "./GradientOrb";

export default function IntroSection() {
  const t = useTranslations("Intro");

  return (
    <section className="bg-black px-6 py-32 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <ScrollRevealText text={t("body")} />
        </div>
        <GradientOrb label={t("orbLabel")} />
      </div>
    </section>
  );
}
