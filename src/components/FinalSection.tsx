import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import finalBackground from "@/LastSectionBackground-optimized.jpg";
import footerLogo from "@/IMAGES/LogoBlackText.png";

const contacts = ["email", "call", "visit", "meeting"] as const;

function ContactIcon({name}: {name: typeof contacts[number]}) {
  const p = {fill: "none", stroke: "currentColor", strokeWidth: 1.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const};
  if (name === "email") return <svg viewBox="0 0 32 32"><rect {...p} x="4" y="7" width="24" height="18" rx="2"/><path {...p} d="m5 9 11 9L27 9"/></svg>;
  if (name === "call") return <svg viewBox="0 0 32 32"><path {...p} d="M10 4 6 7c-2 2 1 9 7 15s13 9 15 7l2-4-7-4-3 3c-3-1-10-8-11-11l3-3-2-6Z"/></svg>;
  if (name === "visit") return <svg viewBox="0 0 32 32"><path {...p} d="M27 13c0 8-11 16-11 16S5 21 5 13a11 11 0 0 1 22 0Z"/><circle {...p} cx="16" cy="13" r="4"/></svg>;
  return <svg viewBox="0 0 32 32"><rect {...p} x="4" y="7" width="24" height="21" rx="2"/><path {...p} d="M10 3v8M22 3v8M4 14h24"/></svg>;
}

export function FinalSection() {
  const t = useTranslations("Final");
  const contactHref = {
    email: "mailto:info@vancoilliegroup.be",
    call: "tel:+32499873892",
    visit: "https://maps.google.com/?q=Roeselare+Belgium",
    meeting: "mailto:info@vancoilliegroup.be?subject=Meeting%20Vancoillie%20Group",
  };

  return (
    <>
      <section id="contact" className="final-cta" style={{backgroundImage: `url(${finalBackground.src})`}} aria-labelledby="final-title">
        <div className="reveal">
          <p className="section-kicker">{t("kicker")}</p>
          <h2 id="final-title">{t("title1")}<br />{t("title2")}<span>?</span></h2>
          <p>{t("intro")}</p>
          <div className="final-buttons">
            <a className="dark-button" href="#contact-form">
              <span>{t("start")}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-button" href="/#work">
              <span>{t("work")}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="contact-grid" id="contact-form">
          <div className="contact-lead">
            <p className="section-kicker">{t("connect_kicker")}</p>
            <h2>{t("connect_title1")}<br />{t("connect_title2")}</h2>
            <p>{t("connect_intro")}</p>
          </div>
          {contacts.map((contact) => (
            <a key={contact} href={contactHref[contact]} target={contact === "visit" ? "_blank" : undefined} rel={contact === "visit" ? "noreferrer" : undefined}>
              <span><ContactIcon name={contact} /></span>
              <h3>{t(`contacts.${contact}.title`)}</h3>
              <p>{t(`contacts.${contact}.value`)} <b aria-hidden="true">↗</b></p>
            </a>
          ))}
        </div>

        <div className="footer-links">
          <div className="footer-brand">
            <div>
              <Image src={footerLogo} alt="Vancoillie Group" sizes="220px" />
            </div>
            <p>{t("brand_description")}</p>
          </div>
          <nav aria-label={t("group_title")}>
            <h3>{t("group_title")}</h3>
            <Link href="/#companies">{t("group.about")}</Link>
            <Link href="/#companies">{t("group.companies")}</Link>
            <Link href="/#contact">{t("group.contact")}</Link>
          </nav>
          <nav aria-label={t("expertise_title")}>
            <h3>{t("expertise_title")}</h3>
            <Link href="/expertise/products">{t("expertise.products")}</Link>
            <Link href="/expertise/software">{t("expertise.software")}</Link>
            <Link href="/expertise/it">{t("expertise.it")}</Link>
            <Link href="/expertise/security">{t("expertise.security")}</Link>
            <Link href="/expertise/data">{t("expertise.data")}</Link>
            <Link href="/expertise/design">{t("expertise.design")}</Link>
          </nav>
          <nav aria-label={t("insights_title")}>
            <h3>{t("insights_title")}</h3>
            <Link href="/news">{t("insights.news")}</Link>
          </nav>
          <nav aria-label={t("follow_title")}>
            <h3>{t("follow_title")}</h3>
            <a href="https://www.instagram.com/vancoilliestudio/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://github.com/batistevancoillie" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://x.com/vancstudio" target="_blank" rel="noreferrer">X / Twitter ↗</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vancoillie Group. {t("rights")}</p>
          <div>
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
