import type { ReactNode } from "react";
import { pillars } from "@/content/site";
import { Reveal } from "@/components/reveal";

const icons: Record<string, ReactNode> = {
  verify: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <circle cx="24" cy="24" r="16" className="icon-draw" stroke="url(#pblue)" strokeWidth="1.6" />
      <path className="icon-draw" d="M16 24.5 21.2 30 32 18" stroke="url(#pblue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  connect: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <circle cx="14" cy="24" r="5" stroke="url(#pblue)" strokeWidth="1.6" />
      <circle cx="34" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" className="text-[var(--silver)]" />
      <circle cx="34" cy="34" r="5" stroke="url(#pblue)" strokeWidth="1.6" />
      <path d="M18.5 21.5 29.5 16M18.8 26.8 29.4 32.2" stroke="url(#pblue)" strokeWidth="1.6" />
    </svg>
  ),
  manage: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <rect x="10" y="12" width="28" height="24" rx="3" stroke="url(#pblue)" strokeWidth="1.6" />
      <path d="M16 20h16M16 26h10M16 32h7" stroke="currentColor" strokeWidth="1.6" className="text-[var(--silver)]" />
    </svg>
  ),
  audit: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <path d="M16 10h12l10 10v18a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3Z" stroke="url(#pblue)" strokeWidth="1.6" />
      <path d="M28 10v9h9M18 26h12M18 32h8" stroke="currentColor" strokeWidth="1.6" className="text-[var(--silver)]" />
    </svg>
  ),
};

export function Pillars() {
  return (
    <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <linearGradient id="pblue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7EC8FF" />
          <stop offset="100%" stopColor="#0B5EC4" />
        </linearGradient>
      </svg>
      {pillars.map((pillar, i) => (
        <Reveal key={pillar.id} delay={i * 80} className="glass rounded-2xl p-6">
          <div className="text-[var(--blue)]">{icons[pillar.id]}</div>
          <p className="brand-kicker mt-5">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="font-display mt-2 text-xl font-semibold">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{pillar.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
