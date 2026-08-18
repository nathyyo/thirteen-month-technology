import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Speak with Thirteen Month Technology about secure digital solutions for finance, government, aviation, and technology partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build What Comes Next."
        description="Whether you are a financial institution, government organization, aviation company, or technology partner, we welcome conversations about building secure digital solutions for complex challenges."
      />

      <section className="container-site grid gap-8 section-y lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="brand-kicker">Institutional enquiries</p>
          <h2 className="font-display mt-4 text-2xl font-semibold">Talk to Our Team</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Share a brief description of your institution and the challenge you want to explore. We will follow up
            directly.
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-6 inline-flex text-sm font-semibold text-[var(--blue)]"
          >
            {site.contact.email}
          </a>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
