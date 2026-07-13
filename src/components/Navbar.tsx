"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {Link, usePathname, useRouter} from "@/i18n/navigation";
import logo from "@/IMAGES/LogoBlackText.png";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);
  const companiesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCompaniesOpen(false);
        setMobileCompaniesOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!companiesMenuRef.current?.contains(event.target as Node)) setCompaniesOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  function switchLocale() {
    router.replace(pathname, {locale: locale === "en" ? "nl" : "en"});
  }

  return (
    <header className="hero-nav">
      <Link href="/" className="brand-logo" aria-label="Vancoillie Group">
        <Image src={logo} alt="Vancoillie Group" priority sizes="230px" />
      </Link>

      <nav className="desktop-nav" aria-label={t("navigation_label")}>
        <Link href="/" className="active">{t("group")}</Link>
        <div className="companies-menu" ref={companiesMenuRef}>
          <button type="button" aria-expanded={companiesOpen} aria-controls="companies-dropdown" onClick={() => setCompaniesOpen((open) => !open)}>
            {t("companies")}<span className="nav-chevron" aria-hidden="true">⌄</span>
          </button>
          <div id="companies-dropdown" className={`companies-dropdown ${companiesOpen ? "open" : ""}`}>
            <a href="https://www.vancoillieithulp.be/" target="_blank" rel="noreferrer" onClick={() => setCompaniesOpen(false)}>{t("it_help")}</a>
            <a href="https://www.vancoilliestudio.be/" target="_blank" rel="noreferrer" onClick={() => setCompaniesOpen(false)}>{t("studio")}</a>
          </div>
        </div>
        <Link href="/#expertise">{t("expertise")}</Link>
        <Link href="/#work">{t("work")}</Link>
        <a href="https://www.vancoilliestudio.be/news/" target="_blank" rel="noreferrer">{t("insights")}</a>
        <Link href="/#contact">{t("contact")}</Link>
      </nav>

      <div className="nav-actions">
        <button className="language-button flex items-center gap-1.5" type="button" onClick={switchLocale} aria-label={t("switch_language")}>
          <span>{locale.toUpperCase()}</span>
          <svg className="w-2.5 h-2.5 text-[#74777e] translate-y-[0.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <Link href="/#contact" className="dark-button nav-cta">
          <span>{t("get_in_touch")}</span>
          <span aria-hidden="true">↗</span>
        </Link>
        <button className={`menu-button ${menuOpen ? "open" : ""}`} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">{menuOpen ? t("close_menu") : t("open_menu")}</span>
          <i/><i/>
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <Link href="/" onClick={() => setMenuOpen(false)}>{t("group")}</Link>
        <div className="mobile-companies-menu">
          <button type="button" aria-expanded={mobileCompaniesOpen} aria-controls="mobile-companies-dropdown" onClick={() => setMobileCompaniesOpen((open) => !open)}>{t("companies")} <span aria-hidden="true">⌄</span></button>
          <div id="mobile-companies-dropdown" className={mobileCompaniesOpen ? "open" : ""}>
            <a href="https://www.vancoillieithulp.be/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>{t("it_help")}</a>
            <a href="https://www.vancoilliestudio.be/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>{t("studio")}</a>
          </div>
        </div>
        <Link href="/#expertise" onClick={() => setMenuOpen(false)}>{t("expertise")}</Link>
        <Link href="/#work" onClick={() => setMenuOpen(false)}>{t("work")}</Link>
        <a href="https://www.vancoilliestudio.be/news/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>{t("insights")}</a>
        <Link href="/#contact" onClick={() => setMenuOpen(false)}>{t("contact")}</Link>
        <button type="button" onClick={switchLocale}>{locale === "en" ? "Nederlands" : "English"}</button>
      </nav>
    </header>
  );
}
