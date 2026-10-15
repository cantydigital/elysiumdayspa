import { defineQuery, type PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = SanityImageSource & { alt?: string };

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: SanityImage | null;
  author: string | null;
  categories: string[] | null;
};

export type Post = PostSummary & {
  body: PortableTextBlock[] | null;
};

const postFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "excerpt": pt::text(body)[0...200],
  mainImage,
  "author": author->name,
  "categories": categories[]->title
`;

const published = `_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))`;

export const POSTS_QUERY = defineQuery(
  `*[${published}] | order(publishedAt desc) { ${postFields} }`,
);

export const POST_QUERY = defineQuery(
  `*[${published} && slug.current == $slug][0] { ${postFields}, body }`,
);

export const POST_SLUGS_QUERY = defineQuery(`*[${published}].slug.current`);

export type PostSitemapEntry = { slug: string; updatedAt: string };

export const POST_SITEMAP_QUERY = defineQuery(
  `*[${published}] | order(publishedAt desc) { "slug": slug.current, "updatedAt": _updatedAt }`,
);
