import { treatments } from "../content";
import Reveal from "./Reveal";
import { Eyebrow, PhotoFrame, SectionTitle } from "./ui";

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 pt-[104px] pb-24"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[620px] flex-col gap-3.5">
          <Eyebrow>Signature treatments</Eyebrow>
          <SectionTitle>Choose how you&apos;d like to unwind</SectionTitle>
        </div>
        <a href="#treatments" className="group py-2.5 font-medium no-underline">
          View full menu{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1.5"
          >
            →
          </span>
        </a>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {treatments.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="h-full">
            <a
              href="#book"
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white text-ink no-underline transition-all duration-500 ease-calm hover:-translate-y-1.5 hover:text-ink hover:shadow-[0_20px_50px_rgba(30,39,35,0.14)]"
            >
              <div className="relative">
                <PhotoFrame
                  photo={t.photo}
                  sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="h-[280px]"
                  imgClassName="transition-transform duration-700 ease-calm group-hover:scale-105"
                />
                <span className="absolute right-4 bottom-4 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold opacity-0 shadow-sm transition-all duration-500 ease-calm group-hover:translate-y-0 group-hover:opacity-100">
                  Book →
                </span>
              </div>
              <div className="flex grow flex-col gap-2.5 p-6">
                <h3 className="m-0 font-serif text-[28px] font-medium transition-colors duration-300 group-hover:text-forest">
                  {t.name}
                </h3>
                <p className="m-0 grow text-[15px] text-body">{t.desc}</p>
                <div className="flex justify-between border-t border-divider pt-3.5 text-sm">
                  <span className="text-muted">{t.time}</span>
                  <span className="font-semibold">From {t.price}</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
