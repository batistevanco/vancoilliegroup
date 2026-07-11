export default function SectionHeader({eyebrow, title, body, light = false}: {eyebrow: string; title: string; body?: string; light?: boolean}) {
  return <header className={`section-header ${light ? "is-light" : ""}`}><p className="eyebrow"><span/>{eyebrow}</p><h2>{title}</h2>{body && <p className="section-copy">{body}</p>}</header>;
}
