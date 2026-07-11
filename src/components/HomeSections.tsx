import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const capabilities = ["strategy","web","software","mobile","cloud","network","automation","support"] as const;
const beliefs = ["simple","quality","human","secure","long"] as const;
const projects = ["support","platform"] as const;

export default function HomeSections() {
  const intro = useTranslations("Intro"), companies = useTranslations("Companies"), caps = useTranslations("Capabilities");
  const philosophy = useTranslations("Philosophy"), innovation = useTranslations("Innovation"), work = useTranslations("Work");
  const metrics = useTranslations("Metrics"), international = useTranslations("International"), cta = useTranslations("CTA");
  return <>
    <section id="group" className="section group-intro">
      <div className="section-shell"><Reveal><SectionHeader eyebrow={intro("eyebrow")} title={intro("title")} body={intro("body")}/></Reveal>
        <Reveal className="ecosystem-visual"><div className="ecosystem-core"><span>VG</span><small>{intro("nodes.group")}</small></div>
          <div className="orbit orbit-a"><span>{intro("nodes.it")}</span></div><div className="orbit orbit-b"><span>{intro("nodes.studio")}</span></div><div className="orbit orbit-c"><span>{intro("nodes.future")}</span></div>
        </Reveal></div>
    </section>

    <section id="companies" className="section companies-section"><div className="section-shell"><Reveal><SectionHeader eyebrow={companies("eyebrow")} title={companies("title")} body={companies("description")} light/></Reveal>
      <div className="company-showcase">
        {(["it","studio"] as const).map((id) => <Reveal key={id} className={`company-panel company-${id}`}><div className="company-top"><span>{companies(`${id}.index`)}</span><strong>{companies(`${id}.name`)}</strong><small>{companies(`${id}.label`)}</small></div><div className="company-copy"><h3>{companies(`${id}.title`)}</h3><p>{companies(`${id}.body`)}</p><div className="tag-row">{companies(`${id}.tags`).split("|").map(tag => <span key={tag}>{tag}</span>)}</div><Link href={id === "it" ? "/brands#it-hulp" : "/brands#studio"} className="text-link">{companies(`${id}.cta`)} <span>↗</span></Link></div><div className="company-visual" aria-hidden="true"><i/><i/><i/></div></Reveal>)}
      </div></div></section>

    <section id="capabilities" className="section capabilities-section"><div className="section-shell"><Reveal><SectionHeader eyebrow={caps("eyebrow")} title={caps("title")} body={caps("description")}/></Reveal>
      <div className="capability-matrix">{capabilities.map((key,index)=><Reveal key={key} className={`capability cap-${index + 1}`}><span>0{index+1}</span><h3>{caps(`items.${key}`)}</h3><i aria-hidden="true">↗</i></Reveal>)}</div></div></section>

    <section className="section philosophy-section"><div className="section-shell"><Reveal><SectionHeader eyebrow={philosophy("eyebrow")} title={philosophy("title")} light/></Reveal><ol className="beliefs">{beliefs.map((key,index)=><li key={key}><span>0{index+1}</span><p>{philosophy(`statements.${key}`)}</p></li>)}</ol></div></section>

    <section id="vision" className="section innovation-section"><div className="section-shell innovation-grid"><Reveal><SectionHeader eyebrow={innovation("eyebrow")} title={innovation("title")} body={innovation("body")}/><Link href="/vision" className="button-primary">{innovation("cta")} <span>→</span></Link></Reveal><Reveal className="innovation-visual"><div className="innovation-core">VG<small>{innovation("labels.core")}</small></div>{(["products","platforms","ventures","experiences"] as const).map((key,index)=><span key={key} className={`innovation-node node-${index+1}`}>{innovation(`labels.${key}`)}</span>)}</Reveal></div></section>

    <section id="work" className="section work-section"><div className="section-shell"><Reveal><SectionHeader eyebrow={work("eyebrow")} title={work("title")} body={work("description")} light/></Reveal><div className="projects">{projects.map((key,index)=><Reveal key={key} className={`project project-${index+1}`}><div className="project-art" aria-hidden="true"><div/><span>0{index+1}</span></div><div className="project-meta"><p>{work(`items.${key}.company`)} · {work(`items.${key}.year`)}</p><h3>{work(`items.${key}.title`)}</h3><p>{work(`items.${key}.description`)}</p><div className="tag-row">{work(`items.${key}.tech`).split("|").map(tag=><span key={tag}>{tag}</span>)}</div></div></Reveal>)}</div><Link href="/contact" className="button-light">{work("cta")} <span>→</span></Link></div></section>

    <section className="metrics-section"><div className="section-shell"><p className="eyebrow"><span/>{metrics("eyebrow")}</p><div className="metrics-grid">{(["companies","languages","base","scope"] as const).map(key=><div key={key}><strong>{metrics(`items.${key}.value`)}</strong><span>{metrics(`items.${key}.label`)}</span></div>)}</div></div></section>

    <section className="section international-section"><div className="network-map" aria-hidden="true"><div className="network-origin"/><i/><i/><i/><i/></div><div className="section-shell international-copy"><Reveal><SectionHeader eyebrow={international("eyebrow")} title={international("title")} body={international("body")}/><div className="international-data"><span>{international("origin")}</span><span>{international("reach")}</span><span>{international("languages")}</span></div></Reveal></div></section>

    <section className="future-cta"><div className="cta-glow" aria-hidden="true"/><div className="section-shell"><Reveal><p className="eyebrow"><span/>{cta("eyebrow")}</p><h2>{cta("title")}</h2><p>{cta("body")}</p><div className="cta-actions"><Link href="/contact" className="button-primary">{cta("primary")} <span>→</span></Link><Link href="/brands#studio" className="text-link">{cta("studio")} ↗</Link><Link href="/brands#it-hulp" className="text-link">{cta("it")} ↗</Link></div></Reveal></div></section>
  </>;
}
