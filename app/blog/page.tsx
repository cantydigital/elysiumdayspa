import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { POSTS_QUERY, type PostSummary } from "@/sanity/queries";
import Reveal from "../components/Reveal";
import { Eyebrow } from "../components/ui";
import { formatDate } from "./format";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on rest, skin and ritual from the therapists at Elysium Day Spa.",
};

export default async function BlogPage() {
  const posts = await sanityFetch<PostSummary[]>(POSTS_QUERY);

  return (
    <main>
      <section className="border-b border-line bg-band">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 pt-20 pb-16">
          <Eyebrow className="animate-fade-up text-accent">Journal</Eyebrow>
          <h1 className="m-0 max-w-[800px] animate-fade-up font-serif text-[clamp(44px,5.4vw,72px)] leading-[1.04] font-normal [animation-delay:100ms]">
            Notes on rest and ritual
          </h1>
          <p className="m-0 max-w-[640px] animate-fade-up text-lg text-body [animation-delay:200ms]">
            Seasonal skin advice, aftercare tips and a little slow living from our therapists.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-6 py-20">
        {posts.length === 0 ? (
          <p className="m-0 text-lg text-body">New stories are on their way — check back soon.</p>
        ) : (
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-x-6 gap-y-12 p-0">
            {posts.map((post, i) => (
              <li key={post._id}>
                <Reveal delay={(i % 3) * 120} className="h-full">
                  <PostCard post={post} priority={i < 3} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

function PostCard({ post, priority }: { post: PostSummary; priority: boolean }) {
  const date = formatDate(post.publishedAt);
  const meta = [post.categories?.[0], date].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-5 text-ink no-underline hover:text-ink"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-placeholder">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(1000).height(750).url()}
            alt={post.mainImage.alt ?? ""}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 400px, (min-width: 760px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        {meta && (
          <span className="text-[13px] font-semibold tracking-[0.2em] text-muted uppercase">
            {meta}
          </span>
        )}
        <h2 className="m-0 font-serif text-[30px] leading-[1.15] font-medium">{post.title}</h2>
        {post.excerpt && <p className="m-0 line-clamp-3 text-body">{post.excerpt}</p>}
        <span className="mt-1 font-medium text-forest">
          Read more{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
