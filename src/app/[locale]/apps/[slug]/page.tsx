import Image from "next/image";
import {notFound} from "next/navigation";
import {Navbar} from "@/components/Navbar";
import {FinalSection} from "@/components/FinalSection";
import {Link} from "@/i18n/navigation";
import {pageMetadata} from "@/lib/seo";
import {studioApps} from "@/lib/studio-content";

export function generateStaticParams() { return ["nl", "en"].flatMap((locale) => studioApps.map(({slug}) => ({locale, slug}))); }

export async function generateMetadata({params}: {params: Promise<{locale:string; slug:string}>}) {
  const {locale, slug} = await params; const app = studioApps.find((item) => item.slug === slug); if (!app) return {};
  return pageMetadata({locale, path:`/apps/${slug}`, title:app.name, description:app.description});
}

export default async function StudioAppPage({params}: {params: Promise<{locale:string; slug:string}>}) {
  const {slug} = await params; const app = studioApps.find((item) => item.slug === slug); if (!app) notFound();
  return <div className="studio-page-root"><Navbar /><main className="studio-detail">
    <Link href="/#work" className="section-text-link">← TERUG NAAR MIJN WERK</Link>
    <section className="studio-app-hero"><div><p className="section-kicker">{app.eyebrow}</p><h1>{app.name}</h1><p>{app.description}</p>{app.appStoreUrl && <a className="dark-button" href={app.appStoreUrl} target="_blank" rel="noreferrer">Download in de App Store <span>↗</span></a>}</div><div className="studio-device"><Image src={app.image} alt={`${app.name} app`} fill priority sizes="(max-width: 760px) 70vw, 320px" /></div></section>
    <section className="studio-features"><p className="section-kicker">WAT JE KUNT VERWACHTEN</p><div>{app.features.map((feature, index) => <article key={feature}><span>{String(index+1).padStart(2,"0")}</span><h2>{feature}</h2><p>Ontworpen met aandacht voor eenvoud, duidelijkheid en dagelijks gebruik.</p></article>)}</div></section>
    <section className="studio-gallery"><p className="section-kicker">EEN KIJKJE IN DE APP</p><div>{app.screenshots.map((image, index) => <figure key={image}><Image src={image} alt={`${app.name} scherm ${index+1}`} fill sizes="(max-width: 760px) 72vw, 280px" /></figure>)}</div></section>
  </main><FinalSection /></div>;
}
