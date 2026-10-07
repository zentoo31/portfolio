import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-4x5jqskl3-zentoo31s-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/overview", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
