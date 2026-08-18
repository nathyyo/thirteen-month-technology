import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#05070c",
          color: "#eef3f8",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            <span style={{ color: "#20A0F8" }}>1</span>
            <span style={{ color: "#C8CDD4" }}>3</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, letterSpacing: 6, fontWeight: 700 }}>
              THIRTEEN MONTH
            </span>
            <span style={{ fontSize: 12, letterSpacing: 8, color: "#20A0F8", marginTop: 6 }}>
              TECHNOLOGY
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1.4 }}>
            Building Trusted Digital Infrastructure for a Connected World
          </div>
          <div style={{ marginTop: 28, fontSize: 22, color: "#9AA8B8" }}>
            Finance · Government · Aviation · Cross-Border Verification
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#7EC8FF", fontSize: 16, letterSpacing: 4 }}>
          <span>VERIFY · CONNECT · MANAGE · AUDIT</span>
          <span>DIGITAL TRUSTED INFRASTRUCTURE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
