"use client";

import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";

const consentKey = "vancoilliegroup-analytics-consent";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function loadAnalytics() {
  if (!measurementId || document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.gaId = measurementId;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {anonymize_ip: true});
}

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

export function AnalyticsConsent() {
  const t = useTranslations("Consent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!measurementId) return;
    const consent = window.localStorage.getItem(consentKey);
    if (consent === "granted") loadAnalytics();
    else if (!consent) {
      const timer = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  function choose(value: "granted" | "denied") {
    window.localStorage.setItem(consentKey, value);
    if (value === "granted") loadAnalytics();
    setVisible(false);
  }

  return <aside className="consent-banner" aria-label={t("label")}><p>{t("message")}</p><div><button type="button" className="text-button" onClick={() => choose("denied")}>{t("decline")}</button><button type="button" className="dark-button" onClick={() => choose("granted")}>{t("accept")}</button></div></aside>;
}
