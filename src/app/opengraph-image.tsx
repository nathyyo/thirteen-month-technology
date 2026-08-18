import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const rayEndpoints: [number, number][] = [
  [0, -52],
  [26, -45],
  [40, -23],
  [45, 0],
  [40, 23],
  [26, 45],
  [0, 52],
  [-26, 45],
  [-40, 23],
  [-45, 0],
  [-40, -23],
  [-26, -45],
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A1614",
          color: "#F6F1E7",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="52" height="52" viewBox="0 0 140 140">
            <g transform="translate(70,70)">
              <g stroke="#F6F1E7" strokeWidth="5" strokeLinecap="round">
                {rayEndpoints.map(([x, y]) => (
                  <line key={`${x}-${y}`} x1="0" y1="0" x2={x} y2={y} />
                ))}
              </g>
              <circle cx="0" cy="0" r="3.6" fill="#F6F1E7" />
              <path d="M 9 -54 A 55 55 0 0 1 40 -38" fill="none" stroke="#C1622D" strokeWidth="5" strokeLinecap="round" />
              <circle cx="46" cy="-47" r="5.6" fill="#C1622D" />
            </g>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, letterSpacing: 6, fontWeight: 700 }}>
              THIRTEEN MONTH
            </span>
            <span style={{ fontSize: 12, letterSpacing: 8, color: "#C1622D", marginTop: 6 }}>
              TECHNOLOGY
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1.4, fontFamily: "Georgia, serif" }}>
            Building Trusted Digital Infrastructure for a Connected World
          </div>
          <div style={{ marginTop: 28, fontSize: 22, color: "#a89e8f" }}>
            Finance · Government · Aviation · Cross-Border Verification
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#d97a46", fontSize: 16, letterSpacing: 4 }}>
          <span>VERIFY · CONNECT · MANAGE · AUDIT</span>
          <span>DIGITAL TRUSTED INFRASTRUCTURE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
