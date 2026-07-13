"use client";

import {FormEvent, useState} from "react";
import {useTranslations} from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Object.fromEntries(form)),
      });

      if (!response.ok) throw new Error("Contact request failed");
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={submit} aria-labelledby="contact-form-title">
      <div className="contact-form-heading">
        <p className="section-kicker">{t("kicker")}</p>
        <h2 id="contact-form-title">{t("title")}</h2>
        <p>{t("intro")}</p>
      </div>
      <div className="contact-form-fields">
        <label>{t("name_label")}<input name="name" autoComplete="name" required /></label>
        <label>{t("email_label")}<input name="email" type="email" autoComplete="email" required /></label>
        <label>{t("company_label")}<input name="company" autoComplete="organization" /></label>
        <input className="contact-form-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <label>{t("message_label")}<textarea name="message" rows={5} required /></label>
        <label className="contact-form-consent"><input name="consent" type="checkbox" required /><span>{t("consent")}</span></label>
        <button className="dark-button" type="submit" disabled={status === "sending"}><span>{status === "sending" ? t("sending") : t("submit")}</span><span aria-hidden="true">↗</span></button>
        {status === "success" && <p className="contact-form-status success" role="status">{t("success")}</p>}
        {status === "error" && <p className="contact-form-status error" role="alert">{t("error")} <a href="mailto:info@vancoilliegroup.be">info@vancoilliegroup.be</a>.</p>}
      </div>
    </form>
  );
}
