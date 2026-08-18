import { cn } from "@/lib/cn";

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

// Pagumē: the Ethiopian calendar's short thirteenth month runs five or six
// days past the twelve. These sit just beyond the ray field, past the arc.
const pagumeAngles = [-88, -74.5, -61, -47.5, -34];

function polar(radius: number, degrees: number) {
  const rad = (degrees * Math.PI) / 180;
  return [radius * Math.cos(rad), radius * Math.sin(rad)] as const;
}

export function LogoMark({
  className,
  animated = false,
  flourish = false,
  tone = "ink",
}: {
  className?: string;
  animated?: boolean;
  flourish?: boolean;
  tone?: "ink" | "reversed" | "mono";
}) {
  const strokeColor = tone === "mono" ? "currentColor" : tone === "reversed" ? "#F6F1E7" : "#1A1614";
  const arcColor = tone === "mono" ? "currentColor" : "#C1622D";

  return (
    <svg
      viewBox="0 0 140 140"
      className={cn("overflow-visible", className)}
      role="img"
      aria-label="Thirteen Month Technology mark"
    >
      <g transform="translate(70,70)">
        <g stroke={strokeColor} strokeWidth="4.5" strokeLinecap="round">
          {rayEndpoints.map(([x, y]) => (
            <line key={`${x}-${y}`} x1="0" y1="0" x2={x} y2={y} />
          ))}
        </g>
        <circle cx="0" cy="0" r="3.2" fill={strokeColor} />
        <path
          className={animated ? "arc-draw" : undefined}
          d="M 9 -54 A 55 55 0 0 1 40 -38"
          fill="none"
          stroke={arcColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <circle cx="46" cy="-47" r="5" fill={arcColor} />
        {flourish
          ? pagumeAngles.map((deg, i) => {
              const [x, y] = polar(64, deg);
              return (
                <circle
                  key={deg}
                  className={animated ? "pagume-dot" : undefined}
                  cx={x}
                  cy={y}
                  r="2.1"
                  fill={arcColor}
                  opacity={animated ? undefined : 0.6}
                  style={animated ? { animationDelay: `${1150 + i * 110}ms` } : undefined}
                />
              );
            })
          : null}
      </g>
    </svg>
  );
}
