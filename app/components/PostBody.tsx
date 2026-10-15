import Image from "next/image";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/image";
import type { SanityImage } from "@/sanity/queries";

const components: PortableTextComponents = {
  block: {
    // The page title is the only h1, so h1 blocks render one level down.
    h1: ({ children }) => <h2 className="font-serif text-[40px] leading-[1.1] font-medium">{children}</h2>,
    h2: ({ children }) => <h2 className="font-serif text-[34px] leading-[1.15] font-medium">{children}</h2>,
    h3: ({ children }) => <h3 className="font-serif text-[28px] leading-[1.2] font-medium">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="mx-0 border-l-2 border-accent pl-6 font-serif text-[26px] leading-[1.35] text-ink italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <figure className="m-0 overflow-hidden rounded-[20px] bg-placeholder">
        <Image
          src={urlFor(value).width(1600).url()}
          alt={value.alt ?? ""}
          width={1600}
          height={1000}
          sizes="(min-width: 880px) 832px, 100vw"
          className="h-auto w-full"
        />
      </figure>
    ),
  },
};

// Typography for the post body, matching the policy pages.
const proseClass =
  "flex flex-col gap-5 text-lg text-body [&_a]:underline [&_a]:decoration-rule [&_a]:underline-offset-4 [&_a:hover]:decoration-forest [&_h2]:m-0 [&_h2]:mt-6 [&_h2]:text-ink [&_h3]:m-0 [&_h3]:mt-4 [&_h3]:text-ink [&_h4]:m-0 [&_h4]:text-ink [&_li]:pl-1 [&_li+li]:mt-2 [&_li]:marker:text-accent [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:m-0 [&_ul]:list-disc [&_ul]:pl-5";

export default function PostBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className={proseClass}>
      <PortableText value={value} components={components} />
    </div>
  );
}
