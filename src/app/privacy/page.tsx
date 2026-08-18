import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How Thirteen Month Technology handles information submitted through this corporate website.",
  path: "/privacy",
  keywords: ["privacy"],
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description="This public website collects only the information needed to respond to institutional enquiries."
      />
      <section className="container-site max-w-3xl space-y-6 py-10 leading-7 text-[var(--muted)] sm:py-14">
        <p>
          {site.name} controls this website, including its domain, hosting, source code, deployment, analytics, and
          related administrator accounts.
        </p>
        <p>
          If you submit the contact form, we process your name, email, organization, enquiry type, and message in order
          to respond. Messages may be stored securely and emailed to our team. We do not sell this information.
        </p>
        <p>
          Optional analytics, if enabled, is configured by {site.name} and should be limited to privacy-respecting
          measurement of public pages.
        </p>
        <p>
          For privacy questions, contact{" "}
          <a className="text-[var(--accent)]" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
