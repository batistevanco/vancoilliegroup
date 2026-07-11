import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import HomeSections from "@/components/HomeSections";
import {Link} from "@/i18n/navigation";

const slugs=["brands","about","services","work","vision","contact","get-started","privacy","cookies","terms"] as const;
type Slug=(typeof slugs)[number];
export function generateStaticParams(){return slugs.map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale,slug}=await params;if(!slugs.includes(slug as Slug))return{};const t=await getTranslations({locale,namespace:"Pages"});const contact=slug==="contact"||slug==="get-started";return{title:contact?t("contactTitle"):t(`routes.${slug}.title`),description:contact?t("contactBody"):t(`routes.${slug}.body`),alternates:{canonical:`/${locale}/${slug}`,languages:{nl:`/nl/${slug}`,en:`/en/${slug}`}}}}
export default async function ContentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!slugs.includes(slug as Slug))notFound();const t=await getTranslations("Pages");const contact=slug==="contact"||slug==="get-started";const rich=(["brands","services","work","vision"] as string[]).includes(slug);return <main id="main-content" className="page-main"><div className="page-nav"><Navbar/></div><section className="page-hero"><div className="page-grid" aria-hidden="true"/><div className="section-shell"><p className="eyebrow"><span/>Vancoillie Group / {slug}</p><h1>{contact?t("contactTitle"):t(`routes.${slug}.title`)}</h1><p>{contact?t("contactBody"):t(`routes.${slug}.body`)}</p>{contact?<ContactForm/>:<Link href="/" className="button-primary">← {t("back")}</Link>}</div></section>{rich&&<div className="page-home-sections"><HomeSections/></div>}</main>}
