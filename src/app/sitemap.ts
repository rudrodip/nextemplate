import { MetadataRoute } from "next";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { MainNavItem } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = generateSitemap(marketingConfig.mainNav);
  return routes;
}

type SitemapItem = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

function generateSitemap(items: MainNavItem[]): SitemapItem[] {
  const baseUrl = siteConfig.url;
  const sitemap: SitemapItem[] = [];

  function processItem(item: MainNavItem, depth: number): void {
    const url = `${baseUrl}${item.href}`;
    const priority = 1 - depth * 0.2;
    const newItem: SitemapItem = {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: Math.max(0.4, priority),
    };

    sitemap.push(newItem);
  }

  items.forEach((item) => processItem(item, 0));

  return sitemap;
}
