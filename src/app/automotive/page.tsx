import { automotive } from "@/content/site";
import { AutomotiveBand } from "@/components/automotive-graphic";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Automotive",
  description:
    "Digital infrastructure for vehicle inspection, maintenance, repair, and fleet operations across the vehicle lifecycle.",
  path: "/automotive",
});

export default function AutomotivePage() {
  return (
    <>
      <PageHero eyebrow="Automotive" title={automotive.title} description={automotive.lede} />
      <AutomotiveBand caption="Smart Automotive Infrastructure" />

      <section className="container-site section-y">
        <Reveal className="max-w-3xl">
          <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{automotive.body}</p>
        </Reveal>

        <div className="stack-after">
          <p className="brand-kicker">Our Automotive Focus</p>
          <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {automotive.focus.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 50} className="glass card-hover rounded-2xl px-5 py-6 font-medium">
                  {item}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="stack-after">
          <p className="brand-kicker">Our Approach</p>
          <Reveal className="mt-6 flex flex-wrap items-center gap-2">
            {automotive.approachFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-4 py-2 text-sm font-semibold">
                  {step}
                </span>
                {i < automotive.approachFlow.length - 1 ? (
                  <svg
                    viewBox="0 0 16 10"
                    className="h-2.5 w-3.5 shrink-0 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M1 5h13M9 1l5 4-5 4" />
                  </svg>
                ) : null}
              </div>
            ))}
          </Reveal>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {automotive.approachText}
          </p>
        </div>

        <div className="stack-after">
          <p className="brand-kicker">Future Direction</p>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">Our automotive platform is designed to support:</p>
          <ul className="mt-5 flex list-none flex-wrap gap-2">
            {automotive.future.map((item) => (
              <li key={item}>
                <span className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="stack-after">
          <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{automotive.closing}</p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
