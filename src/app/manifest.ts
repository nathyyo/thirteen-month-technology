import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.summary,
    start_url: "/",
    display: "browser",
    background_color: "#05070c",
    theme_color: "#20A0F8",
    lang: "en",
  };
}
