import Image from "next/image";
import {useTranslations} from "next-intl";
import itHulp from "@/sponsors/SponsorVancoillieITHulp.png";
import studio from "@/sponsors/SponsorVancoillieStudio.png";

export function SponsorsBar() {
  const t = useTranslations("Footer");
  return (
    <div className="sponsors-bar">
      <span className="sponsor-label">{t("trusted_by")}</span>
      <div className="sponsor-logos">
        <div className="logo-ithulp"><Image src={itHulp} alt="Vancoillie IT Hulp" sizes="150px" /></div>
        <div className="logo-studio"><Image src={studio} alt="Vancoillie Studio" sizes="150px" /></div>
      </div>
    </div>
  );
}
