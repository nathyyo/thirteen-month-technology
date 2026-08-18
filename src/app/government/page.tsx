import { government } from "@/content/site";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Government",
  description:
    "Technology that supports secure document verification, institutional workflows, transparency, and digital transformation across public services.",
  path: "/government",
});

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Government"
        title={government.title}
        description={government.lede}
      />

      <section className="container-site section-y">
        <Reveal className="max-w-3xl">
          <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{government.body}</p>
        </Reveal>
        <div className="stack-after">
          <p className="brand-kicker">Potential applications</p>
          <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {government.applications.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 50} className="glass card-hover rounded-2xl px-5 py-6 font-medium">
                {item}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal className="stack-after max-w-3xl">
          <blockquote className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {government.statement}
          </blockquote>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
