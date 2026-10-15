import Link from "next/link";
import type { ReactNode } from "react";
import { EMAIL, PHONE, policyLinks } from "../content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export type PolicySection = {
  id: string;
  title: string;
  body: ReactNode;
};

type PolicyPageProps = {
  title: string;
  /** Path of this page, used to highlight it among the other policies. */
  path: string;
  updated: string;
  intro: ReactNode;
  sections: PolicySection[];
};

// Typography for the policy body, scoped to descendants so section bodies stay plain JSX.
const proseClass =
  "text-body [&_a]:underline [&_a]:decoration-rule [&_a]:underline-offset-4 [&_a:hover]:decoration-forest [&_li]:pl-1 [&_li+li]:mt-2 [&_p]:m-0 [&_p+p]:mt-4 [&_p+ul]:mt-4 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:m-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul+p]:mt-4 [&_li]:marker:text-accent";

export default function PolicyPage({ title, path, updated, intro, sections }: PolicyPageProps) {
  return (
    <main>
      <section className="border-b border-line bg-band">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 pt-20 pb-16">
          <Eyebrow className="animate-fade-up text-accent">Policies</Eyebrow>
          <h1 className="m-0 max-w-[800px] animate-fade-up font-serif text-[clamp(44px,5.4vw,72px)] leading-[1.04] font-normal [animation-delay:100ms]">
            {title}
          </h1>
          <p className="m-0 max-w-[640px] animate-fade-up text-lg text-body [animation-delay:200ms]">
            {intro}
          </p>
          <span className="animate-fade-up text-sm text-muted [animation-delay:300ms]">
            Last updated {updated}
          </span>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-x-16 gap-y-10 px-6 py-20">
        <aside className="flex min-w-0 flex-[1_1_220px] flex-col gap-8 max-lg:order-last lg:sticky lg:top-28 lg:max-w-[260px]">
          <nav aria-label="On this page" className="flex flex-col gap-1 text-[15px] max-lg:hidden">
            <span className="mb-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              On this page
            </span>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border-l border-line py-1.5 pl-4 text-body no-underline transition-all duration-300 ease-calm hover:border-forest hover:pl-5 hover:text-forest"
              >
                {s.title}
              </a>
            ))}
          </nav>
          <nav aria-label="Other policies" className="flex flex-col gap-1 text-[15px]">
            <span className="mb-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Policies
            </span>
            {policyLinks.map((link) =>
              link.href === path ? (
                <span key={link.href} className="py-1 font-semibold text-ink">
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group w-fit py-1 no-underline"
                >
                  {link.label}{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ),
            )}
          </nav>
        </aside>

        <article className="flex min-w-0 flex-[999_1_560px] flex-col gap-12">
          {sections.map((s, i) => (
            <Reveal key={s.id}>
              <section
                id={s.id}
                className={`flex scroll-mt-28 flex-col gap-4 ${i > 0 ? "border-t border-rule pt-8" : ""}`}
              >
                <h2 className="m-0 font-serif text-[32px] leading-[1.15] font-medium">
                  <span className="mr-3 text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className={proseClass}>{s.body}</div>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-col gap-3 rounded-[20px] bg-white p-10 max-sm:p-7">
              <h2 className="m-0 font-serif text-[28px] font-medium">Questions?</h2>
              <p className="m-0 text-body">
                Call us on{" "}
                <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`} className="font-medium">
                  {PHONE}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium">
                  {EMAIL}
                </a>{" "}
                — we&apos;re happy to help.
              </p>
            </div>
          </Reveal>
        </article>
      </div>
    </main>
  );
}
