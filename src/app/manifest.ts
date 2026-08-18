import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.summary,
    start_url: "/",
    display: "browser",
    background_color: "#1A1614",
    theme_color: "#C1622D",
    lang: "en",
  };
}
