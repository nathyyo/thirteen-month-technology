import { approach, images, reasons, site } from "@/content/site";
import { CtaBand, MediaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { approachIcons, reasonIcons } from "@/components/section-icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Thirteen Month Technology is a professional, secure, international technology company focused on financial technology, government digital transformation, aviation technology, and cross-border verification.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A corporate technology partner for institutions that operate across borders."
        description="Thirteen Month Technology presents itself as a professional, secure, international technology company. We focus on financial technology, government digital transformation, aviation technology, cross-border verification, and digital trust infrastructure."
      />

      <MediaBand
        src={images.africa}
        alt="Urban skyline representing African and international markets"
        caption="African roots. International position."
      />

      <section className="container-site grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 section-y">
        <Reveal>
          <p className="brand-kicker">Who we are</p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight">
            Building trusted digital infrastructure for a connected world.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{site.summary}</p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            This is a public corporate website. We communicate the value and purpose of our platforms while keeping
            proprietary architecture, security mechanisms, and unreleased product detail confidential.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[var(--line)] section-y">
        <div className="container-site">
          <Reveal>
            <p className="brand-kicker">Our approach</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight">
              From Complex Problems to Trusted Digital Workflows
            </h2>
          </Reveal>
          <ol className="stack-after list-none space-y-3 sm:space-y-4">
            {approach.map((item, i) => {
              const Icon = approachIcons[item.title];
              return (
                <li key={item.step}>
                  <Reveal
                    delay={i * 50}
                    className="glass card-hover grid gap-3 rounded-2xl p-6 md:grid-cols-[7rem_12rem_1fr] md:items-center"
                  >
                    <div className="flex items-center gap-2.5">
                      {Icon ? <Icon className="h-7 w-7 shrink-0 text-[var(--accent)]" /> : null}
                      <span className="font-display text-sm tracking-[0.22em] text-[var(--accent)]">{item.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="text-[var(--muted)]">{item.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container-site section-y">
        <Reveal>
          <p className="brand-kicker">Why Thirteen Month Technology</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
            Built for the Institutions of Tomorrow
          </h2>
        </Reveal>
        <div className="stack-after grid gap-4 sm:grid-cols-2">
          {reasons.map((item, i) => {
            const Icon = reasonIcons[item.title];
            return (
              <Reveal key={item.title} delay={i * 60} className="glass card-hover rounded-2xl p-6">
                {Icon ? <Icon className="text-[var(--accent)]" /> : null}
                <h3 className="font-display mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
