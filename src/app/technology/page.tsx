import { crossBorder, technology } from "@/content/site";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "Reusable digital capabilities for identity, documents, workflows, data, and audit — plus cross-border verification infrastructure.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={technology.title}
        description={technology.lede}
      />

      <section className="container-site section-y">
        <p className="brand-kicker">Core capabilities</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {technology.capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="glass rounded-2xl p-5">
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="stack-after">
          <p className="font-display text-2xl font-semibold tracking-tight">{technology.closing}</p>
        </Reveal>
      </section>

      <section id="cross-border" className="scroll-mt-24 border-y border-[var(--line)] section-y">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <p className="brand-kicker">Cross-Border Verification</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight">{crossBorder.title}</h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{crossBorder.lede}</p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{crossBorder.body}</p>
          </Reveal>
          <div className="stack-after grid gap-4 md:grid-cols-3">
            {crossBorder.pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="rounded-2xl border border-[var(--line)] p-6">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
