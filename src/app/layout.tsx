import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { Providers } from "@/components/providers";
import { SkipLink } from "@/components/skip-link";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";
import { resolvePublicUrl } from "@/lib/site-url";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1614" },
  ],
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(resolvePublicUrl()),
  title: {
    default: `${site.name} | Trusted Digital Infrastructure`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  applicationName: site.name,
  keywords: [
    "digital trust infrastructure",
    "financial technology",
    "government digital transformation",
    "aviation technology",
    "cross-border verification",
    "identity verification",
    "Africa technology",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: absoluteUrl("/"),
    siteName: site.name,
    title: site.name,
    description: site.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.summary,
  },
  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
