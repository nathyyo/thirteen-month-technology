import { aviation, images } from "@/content/site";
import { CtaBand, MediaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aviation",
  description:
    "Future aviation solutions focused on passenger and cargo verification, procurement, supplier trust, MRO workflows, and parts traceability.",
  path: "/aviation",
});

export default function AviationPage() {
  return (
    <>
      <PageHero
        eyebrow="Aviation"
        title={aviation.title}
        description={aviation.lede}
      />
      <MediaBand
        src={images.airport}
        alt="Airport terminal representing connected aviation operations"
        caption="Future Aviation Solutions"
      />

      <section className="container-site section-y">
        <Reveal className="max-w-3xl">
          <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{aviation.body}</p>
        </Reveal>
        <div className="stack-after">
          <p className="brand-kicker">Future Aviation Solutions</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {aviation.solutions.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="glass rounded-[1.4rem] p-6">
                <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--blue)] uppercase">
                  Future solution
                </p>
                <h2 className="font-display mt-3 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="stack-after">
          <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{aviation.closing}</p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
