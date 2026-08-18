import { images, vision } from "@/content/site";
import { CtaBand, MediaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vision 2036",
  description:
    "To become a trusted provider of digital infrastructure connecting financial institutions, governments, aviation organizations, and enterprises across Africa and the world.",
  path: "/vision-2036",
});

export default function VisionPage() {
  return (
    <>
      <PageHero eyebrow="Vision 2036" title={vision.title} description={vision.statement} />
      <MediaBand
        src={images.globe}
        alt="Earth viewed from orbit, suggesting global digital infrastructure"
        caption="Start local. Build for global scale."
      />

      <section className="container-site section-y">
        <p className="brand-kicker">Roadmap</p>
        <ol className="relative stack-after list-none space-y-4 sm:space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[0.7rem] before:w-px before:bg-[var(--line)] md:before:left-1/2">
          {vision.roadmap.map((item, i) => (
            <li key={item.period} className="relative md:grid md:grid-cols-2 md:gap-8">
              <Reveal
                delay={i * 80}
                className={`pl-6 md:pl-0 ${i % 2 === 1 ? "md:col-start-2 md:text-right" : "md:col-start-1"}`}
              >
                <div className="glass rounded-[1.4rem] p-5 sm:p-6">
                  <p className="text-sm font-semibold tracking-[0.18em] text-[var(--blue)] uppercase">{item.period}</p>
                  <h2 className="font-display mt-2 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4">{item.items.join(" • ")}</p>
                </div>
              </Reveal>
              <span className="absolute top-7 left-0 h-2.5 w-2.5 rounded-sm bg-[var(--blue)] md:left-1/2 md:-translate-x-1/2" />
            </li>
          ))}
        </ol>
        <Reveal className="stack-after">
          <p className="font-display text-3xl font-semibold tracking-tight">{vision.closing}</p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
