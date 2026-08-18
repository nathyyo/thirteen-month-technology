import type { Metadata } from "next";
import { site } from "@/content/site";
import { resolvePublicUrl } from "@/lib/site-url";

export function absoluteUrl(path = "/") {
  const base = resolvePublicUrl();
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const isHome = path === "/";
  const fullTitle = isHome
    ? `${site.name} | Trusted Digital Infrastructure`
    : `${title} | ${site.name}`;

  return {
    title: isHome ? { absolute: fullTitle } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
