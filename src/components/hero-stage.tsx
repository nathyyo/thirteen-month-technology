import Image from "next/image";
import { cn } from "@/lib/cn";

export function HeroStage({ className }: { className?: string }) {
  return (
    <div className={cn("hero-stage", className)}>
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7EC8FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0B5EC4" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g className="orbit-spin">
          <ellipse cx="200" cy="200" rx="168" ry="78" fill="none" stroke="url(#hero-ring)" strokeWidth="1" />
          <circle cx="368" cy="200" r="3.5" fill="#20A0F8" />
        </g>
        <g className="orbit-spin orbit-spin-rev">
          <ellipse cx="200" cy="200" rx="126" ry="166" fill="none" stroke="url(#hero-ring)" strokeWidth="0.8" opacity="0.7" />
          <circle cx="200" cy="34" r="2.5" fill="#C8CDD4" />
        </g>
        <path
          className="dash-flow"
          d="M52 210 C110 268 170 286 248 250 C310 220 348 168 360 118"
          fill="none"
          stroke="#20A0F8"
          strokeWidth="1.4"
          opacity="0.55"
        />
      </svg>

      <div className="float-y absolute inset-[10%] overflow-hidden rounded-[1.4rem] bg-[#05070c] shadow-[0_24px_70px_var(--glow)] ring-1 ring-white/15 sm:inset-[12%] sm:rounded-[1.75rem] lg:inset-[14%] lg:rounded-[1.85rem]">
        <Image
          src="/brand/logo-original.png"
          alt="Thirteen Month Technology logo — Digital Trusted Infrastructure"
          width={720}
          height={720}
          priority
          sizes="(min-width: 1024px) 420px, 70vw"
          className="relative z-10 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
