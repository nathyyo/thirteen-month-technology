import { cn } from "@/lib/cn";

export function LogoMark({
  className,
  animated = false,
  uid = "tm",
}: {
  className?: string;
  animated?: boolean;
  uid?: string;
}) {
  const blue = `${uid}-blue`;
  const silver = `${uid}-silver`;
  const blueSide = `${uid}-blue-side`;

  return (
    <svg
      viewBox="40 20 340 250"
      className={cn("overflow-visible", className)}
      role="img"
      aria-label="Thirteen Month Technology mark"
    >
      <defs>
        <linearGradient id={blue} x1="0.2" y1="0" x2="0.75" y2="1">
          <stop offset="0%" stopColor="#7EC8FF" />
          <stop offset="38%" stopColor="#20A0F8" />
          <stop offset="100%" stopColor="#0B5EC4" />
        </linearGradient>
        <linearGradient id={blueSide} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1670D0" />
          <stop offset="100%" stopColor="#082050" />
        </linearGradient>
        <linearGradient id={silver} x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="42%" stopColor="#D8DDE4" />
          <stop offset="100%" stopColor="#8A96A4" />
        </linearGradient>
      </defs>

      {/*
        Italic 1 matching the official mark:
        flat horizontal top, sharp triangular flag on the top-left,
        thick slanted stem, flat base. The 3 sits in front on the right.
      */}
      <path
        fill={`url(#${blueSide})`}
        d="M176 46 L188 56 L140 246 L128 236 Z"
      />
      <path
        fill={`url(#${blue})`}
        d="M86 46 L176 46 L128 236 L80 236 L114 116 L54 98 Z"
      />

      <path
        fill={`url(#${silver})`}
        d="M176 86 C176 62 200 48 236 48 C278 48 304 70 304 98 C304 120 288 134 256 144 C292 152 316 174 316 206 C316 244 282 266 232 266 C188 266 158 244 154 210 L198 210 C202 228 214 236 234 236 C260 236 274 222 274 204 C274 184 256 174 224 174 L200 174 L200 142 L224 142 C252 142 264 130 264 112 C264 92 248 82 228 82 C206 82 194 92 192 110 Z"
      />

      {animated ? (
        <>
          <path
            className="swoosh-draw"
            d="M58 206 C108 246 168 258 228 240 C286 222 332 176 348 118"
            fill="none"
            stroke={`url(#${blue})`}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {[
            [338, 96, 9, "0.85s"],
            [354, 84, 6, "1s"],
            [346, 110, 7, "1.1s"],
            [364, 100, 5, "1.2s"],
            [328, 78, 5, "1.28s"],
          ].map(([x, y, size, delay], i) => (
            <rect
              key={i}
              className="pixel-pop"
              x={Number(x) - Number(size) / 2}
              y={Number(y) - Number(size) / 2}
              width={size}
              height={size}
              rx="1"
              fill={`url(#${blue})`}
              style={{ animationDelay: String(delay) }}
            />
          ))}
        </>
      ) : null}
    </svg>
  );
}
