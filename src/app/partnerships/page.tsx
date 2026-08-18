import { images, partnerships } from "@/content/site";
import { CtaBand, MediaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partnerships",
  description:
    "We work toward partnerships with financial institutions, government institutions, aviation organizations, and technology partners.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  return (
    <>
      <PageHero eyebrow="Partnerships" title={partnerships.title} description={partnerships.lede} />
      <MediaBand
        src={images.partnership}
        alt="Institutional teams collaborating around a shared table"
        caption="We build technology. Partners bring institutional strength."
      />

      <section className="container-site section-y">
        <p className="brand-kicker">{partnerships.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {partnerships.partners.map((item, i) => (
            <Reveal key={item} delay={i * 70} className="glass card-hover rounded-[1.4rem] p-6 sm:rounded-[1.5rem] sm:p-8">
              <p className="font-display text-[0.7rem] tracking-[0.28em] text-[var(--accent)] uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold">{item}</h2>
            </Reveal>
          ))}
        </div>
        <Reveal className="stack-after max-w-3xl">
          <p className="text-xl leading-8 text-[var(--ink-soft)]">{partnerships.closing}</p>
        </Reveal>
      </section>

      <CtaBand
        title="Partner With Us"
        text="We build technology. Our partners bring expertise, infrastructure, and institutional strength."
      />
    </>
  );
}
