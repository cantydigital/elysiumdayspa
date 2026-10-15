import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { POST_QUERY, POST_SLUGS_QUERY, type Post } from "@/sanity/queries";
import PostBody from "../../components/PostBody";
import { Eyebrow } from "../../components/ui";
import { formatDate } from "../format";

const getPost = (slug: string) => sanityFetch<Post | null>(POST_QUERY, { slug });

// Prerender every published post; posts added later render on first request.
export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(POST_SLUGS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: post.mainImage
      ? { images: [urlFor(post.mainImage).width(1200).height(630).url()] }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const date = formatDate(post.publishedAt);
  const meta = [post.author && `By ${post.author}`, date].filter(Boolean).join(" · ");

  return (
    <main>
      <section className="border-b border-line bg-band">
        <div className="mx-auto flex max-w-[880px] flex-col gap-5 px-6 pt-20 pb-16">
          <Link href="/blog" className="group w-fit animate-fade-up text-[15px] no-underline">
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-calm group-hover:-translate-x-1"
            >
              ←
            </span>{" "}
            All stories
          </Link>
          {post.categories?.length ? (
            <Eyebrow className="animate-fade-up text-accent">{post.categories.join(" · ")}</Eyebrow>
          ) : null}
          <h1 className="m-0 animate-fade-up font-serif text-[clamp(40px,5vw,64px)] leading-[1.06] font-normal [animation-delay:100ms]">
            {post.title}
          </h1>
          {meta && (
            <span className="animate-fade-up text-sm text-muted [animation-delay:200ms]">{meta}</span>
          )}
        </div>
      </section>

      <article className="mx-auto flex max-w-[880px] flex-col gap-12 px-6 py-16">
        {post.mainImage && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-placeholder">
            <Image
              src={urlFor(post.mainImage).width(1760).height(1100).url()}
              alt={post.mainImage.alt ?? ""}
              fill
              priority
              sizes="(min-width: 880px) 832px, 100vw"
              className="object-cover"
            />
          </div>
        )}
        {post.body && <PostBody value={post.body} />}
      </article>
    </main>
  );
}
