import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "404 — Pagina niet gevonden | Vancoillie Group",
  description: "Deze pagina bestaat niet of is verplaatst.",
};

export default function GlobalNotFound() {
  return <html lang="nl">
    <body>
      <main className="page">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <section>
          <p className="kicker">404 / VERKEERDE RICHTING</p>
          <p className="code">404</p>
          <h1>Deze pagina bestaat niet.</h1>
          <p className="description">De pagina die je zoekt is verplaatst, verwijderd of heeft nooit bestaan. Geen zorgen: je kunt altijd weer verder.</p>
          <div className="actions"><a className="primary" href="/nl">Terug naar home <span>↗</span></a><a className="secondary" href="/nl#contact">Neem contact op <span>↗</span></a></div>
        </section>
        <p className="brand">VANCOILLIE GROUP</p>
      </main>
      <style>{`
        *{box-sizing:border-box}html,body{margin:0;min-height:100%;font-family:Arial,Helvetica,sans-serif}.page{position:relative;display:grid;min-height:100svh;place-items:center;overflow:hidden;padding:48px 24px;color:#fff;background:radial-gradient(circle at 50% 112%,#3c458e 0,transparent 37%),linear-gradient(135deg,#10131b,#161c2a 58%,#12151c)}section{position:relative;z-index:1;width:min(100%,740px);text-align:center}.kicker{color:#aab3ff;font-size:11px;font-weight:700;letter-spacing:.18em}.code{margin:12px 0 -7px;color:rgba(255,255,255,.09);font-size:clamp(130px,24vw,300px);font-weight:500;letter-spacing:-.12em;line-height:.85}h1{position:relative;margin:0;font-size:clamp(42px,6vw,78px);font-weight:400;letter-spacing:-.065em;line-height:.95}.description{max-width:490px;margin:26px auto 0;color:rgba(255,255,255,.66);font-size:17px;line-height:1.65}.actions{display:flex;justify-content:center;gap:22px;margin-top:40px}.primary,.secondary{display:inline-flex;align-items:center;gap:20px;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:.06em}.primary{padding:17px 20px;color:#15181d;background:#fff;border-radius:5px}.secondary{color:#fff}.brand{position:absolute;bottom:28px;z-index:1;margin:0;color:rgba(255,255,255,.34);font-size:10px;letter-spacing:.24em}.orbit{position:absolute;border:1px solid rgba(164,177,255,.18);border-radius:50%}.orbit-one{width:75vw;height:75vw;min-width:700px;min-height:700px}.orbit-two{width:44vw;height:44vw;min-width:410px;min-height:410px;border-color:rgba(164,177,255,.12)}@media(max-width:560px){.actions{flex-direction:column;align-items:center;gap:24px}.code{font-size:160px}.orbit-one{min-width:580px;min-height:580px}.orbit-two{min-width:340px;min-height:340px}}
      `}</style>
    </body>
  </html>;
}
