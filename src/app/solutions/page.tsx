import Link from "next/link";
import { audiences, financial, technology } from "@/content/site";
import { CoverImage } from "@/components/brand";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Pillars } from "@/components/pillars";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Secure digital platforms that help financial institutions, governments, aviation organizations, and enterprises verify, connect, and manage critical workflows.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Secure platforms for financial, government, and aviation institutions."
        description="Thirteen Month Technology develops digital infrastructure that strengthens verification, connection, management, and audit across complex institutional workflows."
      />

      <section className="container-site section-y">
        <Pillars />
      </section>

      <section className="border-y border-[var(--line)] section-y">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {audiences.map((item, i) => (
            <Reveal key={item.href} delay={i * 80}>
                <Link href={item.href} className="group glass block overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[16/10]">
                    <CoverImage src={item.image} alt={item.imageAlt} sizes="(min-width:1024px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-[#05070c]/25" />
                </div>
                <div className="p-6">
                  <p className="brand-kicker">{item.kicker}</p>
                  <h2 className="font-display mt-3 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site grid gap-6 section-y lg:grid-cols-2">
        <Reveal className="glass rounded-[1.6rem] p-6 sm:p-8">
          <p className="brand-kicker">Financial Services</p>
          <h2 className="font-display mt-3 text-2xl font-semibold">{financial.title}</h2>
          <p className="mt-4 text-[var(--muted)]">{financial.lede}</p>
          <Link href="/financial-services" className="mt-6 inline-flex text-sm font-semibold text-[var(--blue)]">
            View financial services →
          </Link>
        </Reveal>
        <Reveal delay={80} className="glass rounded-[1.6rem] p-6 sm:p-8">
          <p className="brand-kicker">Technology</p>
          <h2 className="font-display mt-3 text-2xl font-semibold">{technology.title}</h2>
          <p className="mt-4 text-[var(--muted)]">{technology.lede}</p>
          <Link href="/technology" className="mt-6 inline-flex text-sm font-semibold text-[var(--blue)]">
            View technology foundation →
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
