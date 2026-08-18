import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const paths = [
  "/",
  "/about",
  "/solutions",
  "/financial-services",
  "/government",
  "/aviation",
  "/technology",
  "/vision-2036",
  "/partnerships",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
