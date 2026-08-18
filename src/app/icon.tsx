import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070c",
          color: "#20A0F8",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: -0.8,
        }}
      >
        <span style={{ color: "#20A0F8" }}>1</span>
        <span style={{ color: "#C8CDD4" }}>3</span>
      </div>
    ),
    { ...size },
  );
}
