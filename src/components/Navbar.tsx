"use client";

import {useEffect, useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";

const links = [
  ["group", "/#group"], ["companies", "/#companies"], ["capabilities", "/#capabilities"],
  ["work", "/work"], ["vision", "/vision"], ["contact", "/contact"]
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className={`hero-nav site-nav ${compact ? "is-compact" : ""}`}>
      <Link href="/" className="hero-logo site-logo" aria-label={t("logo")}>
        Vancoillie <span>Group</span>
      </Link>
      <nav className="hero-nav-links" aria-label="Primary navigation">
        {links.map(([key, href]) => <Link key={key} href={href} className={pathname.includes(href.replace("/", "")) ? "is-active" : ""}>{t(`links.${key}`)}</Link>)}
      </nav>
      <div className="nav-actions">
        <Link href={pathname} locale={locale === "nl" ? "en" : "nl"} className="locale-switch" aria-label={t("language")}>
          {locale === "nl" ? "EN" : "NL"}
        </Link>
        <Link href="/contact" className="cosmic-button cosmic-button--nav"><span>{t("cta")}</span></Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? t("close") : t("menu")}</span><i/><i/>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-orbit" aria-hidden="true"/>
        <nav aria-label="Mobile navigation">
          {links.map(([key, href], index) => <Link key={key} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{t(`links.${key}`)}</Link>)}
        </nav>
        <p>Vancoillie Group · Belgium</p>
      </div>
    </header>
  );
}
