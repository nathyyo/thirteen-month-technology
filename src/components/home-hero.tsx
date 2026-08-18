import Link from "next/link";
import { Button } from "@/components/button";
import { HeroStage } from "@/components/hero-stage";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="home-hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_52%)]" />
      <div className="container-site relative grid items-center gap-5 py-6 sm:gap-8 sm:py-10 lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-6">
        <div className="text-center lg:text-left">
          <p className="brand-kicker">Digital Trusted Infrastructure</p>
          <h1
            id="home-hero-heading"
            className="font-display mx-auto mt-3 max-w-xl text-[clamp(1.85rem,4.6vw,3.6rem)] font-semibold tracking-[-0.038em] leading-[1.08] lg:mx-0"
          >
            Building trusted digital infrastructure for a connected world.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-7 text-[var(--muted)] lg:mx-0">
            {site.heroLede}
          </p>
          <p className="sr-only">{site.summary}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button href="/solutions">Explore Our Solutions</Button>
            <Button href="/partnerships" variant="secondary">
              Partner With Us
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {site.sectors.map((sector) => (
              <li key={sector.href}>
                <Link
                  href={sector.href}
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] transition hover:border-[var(--blue)] hover:text-[var(--blue)]"
                >
                  {sector.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
