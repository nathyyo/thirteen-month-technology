import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1614",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 140 140">
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
      </div>
    ),
    { ...size },
  );
}
