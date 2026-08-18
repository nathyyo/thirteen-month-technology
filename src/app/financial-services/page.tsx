import { financial, images } from "@/content/site";
import { CtaBand, MediaBand, PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Financial Services",
  description:
    "Secure digital financial infrastructure, including a visa bond platform designed with financial institutions for application, verification, collateral, bank workflow, and audit trails.",
  path: "/financial-services",
});

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title="Digital Financial Infrastructure"
        description="Secure platforms designed to help financial institutions manage emerging digital financial services, verification, customer workflows, and auditable transactions."
      />
      <MediaBand
        src={images.documents}
        alt="Professional review of institutional documents"
        caption="Application · Verification · Collateral · Bank workflow · Audit trail"
      />

      <section className="container-site grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 section-y">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight">{financial.title}</h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{financial.lede}</p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{financial.body}</p>
        </Reveal>
        <Reveal delay={90} className="glass rounded-[1.6rem] p-6 sm:p-8">
          <p className="brand-kicker">Public-facing capabilities</p>
          <ul className="mt-6 list-none space-y-3">
            {financial.capabilities.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-[var(--line)] py-3 last:border-0">
                <span className="h-1.5 w-1.5 rounded-sm bg-[var(--blue)]" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
