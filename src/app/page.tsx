import Link from "next/link";
import { CoverImage } from "@/components/brand";
import { HomeHero } from "@/components/home-hero";
import { CtaBand } from "@/components/page-hero";
import { Pillars } from "@/components/pillars";
import { Reveal } from "@/components/reveal";
import { approach, audiences, reasons, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: site.name,
  description: site.summary,
  path: "/",
  keywords: [
    "digital trust infrastructure",
    "financial technology",
    "government digital transformation",
    "aviation technology",
    "cross-border verification",
  ],
});

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="cv-auto container-site section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="brand-kicker">Trust statement</p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trust is the foundation of digital transformation.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            As organizations become increasingly connected across borders, the ability to verify identities, documents,
            transactions, and critical information becomes essential.
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Thirteen Month Technology builds digital infrastructure designed to strengthen verification, transparency,
            security, and operational trust across complex institutional workflows.
          </p>
        </Reveal>
        <div className="stack-after">
          <Pillars />
        </div>
      </section>

      <section className="cv-auto border-y border-[var(--line)] section-y">
        <div className="container-site">
          <Reveal className="text-center sm:text-left">
            <p className="brand-kicker">Who we serve</p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology for Institutions That Matter
            </h2>
          </Reveal>
          <div className="stack-after grid gap-4 sm:gap-5 lg:grid-cols-3">
            {audiences.map((item, i) => (
              <Reveal key={item.href} delay={i * 90}>
                <Link href={item.href} className="group glass block overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <CoverImage
                      src={item.image}
                      alt={item.imageAlt}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/20 to-transparent" />
                    <p className="absolute bottom-4 left-5 text-[0.68rem] font-semibold tracking-[0.28em] text-white uppercase">
                      {item.kicker}
                    </p>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-auto container-site section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="brand-kicker">Our approach</p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            From Complex Problems to Trusted Digital Workflows
          </h2>
        </Reveal>
        <ol className="stack-after grid list-none gap-3 sm:gap-4 md:grid-cols-5">
          {approach.map((item, i) => (
            <li key={item.step}>
              <Reveal delay={i * 70} className="glass h-full rounded-2xl p-5">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--blue)]">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="cv-auto border-y border-[var(--line)] section-y">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="brand-kicker">Why Thirteen Month Technology</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the Institutions of Tomorrow
            </h2>
          </Reveal>
          <div className="stack-after grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="glass rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
