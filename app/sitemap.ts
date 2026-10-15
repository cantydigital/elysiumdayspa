import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/client";
import { POST_SITEMAP_QUERY, type PostSitemapEntry } from "@/sanity/queries";
import { SITE_URL, policyLinks } from "./content";

// Regenerate hourly so newly published posts are picked up.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityFetch<PostSitemapEntry[]>(POST_SITEMAP_QUERY, {}, revalidate);

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.updatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...policyLinks.map((link) => ({
      url: `${SITE_URL}${link.href}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
