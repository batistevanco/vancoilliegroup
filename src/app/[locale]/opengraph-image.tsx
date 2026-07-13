import {ImageResponse} from "next/og";

export const alt = "Vancoillie Group — Technologie. Mensen. Impact.";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "linear-gradient(135deg, #0d1118 0%, #151c2d 54%, #5964c4 150%)", color: "#f8f8f7"}}>
        <div style={{display: "flex", alignItems: "center", gap: "20px", fontSize: 30, letterSpacing: "5px", textTransform: "uppercase"}}>
          <div style={{width: "42px", height: "42px", background: "#7180ef"}} />
          Vancoillie Group
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
          <div style={{fontSize: 76, lineHeight: 1.05, letterSpacing: "-3px"}}>Technologie die mensen vooruit helpt.</div>
          <div style={{fontSize: 28, color: "#c9cfeb"}}>Technology. People. Impact.</div>
        </div>
      </div>
    ),
    size,
  );
}
