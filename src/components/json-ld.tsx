import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/brand/logo-original.png`,
        description: site.summary,
        email: site.contact.email,
        slogan: site.tagline,
        knowsAbout: [
          "Financial technology",
          "Government digital transformation",
          "Aviation technology",
          "Cross-border verification",
          "Digital trust infrastructure",
        ],
        areaServed: ["Africa", "Worldwide"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `${site.name} | Trusted Digital Infrastructure`,
        headline: "Building trusted digital infrastructure for a connected world",
        description: site.summary,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        primaryImageOfPage: `${site.url}/brand/logo-original.png`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
