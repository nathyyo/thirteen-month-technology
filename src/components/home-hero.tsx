import Link from "next/link";
import { AccentDivider } from "@/components/accent-divider";
import { Button } from "@/components/button";
import { HeroStage } from "@/components/hero-stage";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="home-hero-heading">
      <div className="container-site relative grid items-center gap-5 py-6 sm:gap-8 sm:py-10 lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-6">
        <div className="text-center lg:text-left">
          <AccentDivider eager className="mx-auto mb-4 lg:mx-0" />
          <p className="brand-kicker">Digital Trusted Infrastructure</p>
          <h1
            id="home-hero-heading"
            className="font-display mx-auto mt-4 max-w-xl text-[clamp(2.15rem,5.6vw,4.75rem)] font-semibold tracking-[-0.03em] leading-[0.98] lg:mx-0"
          >
            Building trusted digital infrastructure for a connected world.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[1.02rem] leading-7 text-[var(--muted)] lg:mx-0">
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
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
