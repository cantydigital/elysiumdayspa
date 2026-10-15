import { heroPhoto } from "../content";
import { ButtonLink, CalendarIcon, Eyebrow, PhotoFrame } from "./ui";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-14 px-6 pt-[72px] pb-[88px]"
    >
      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
        <Eyebrow className="animate-fade-up text-accent">Day spa · Paddington, Sydney</Eyebrow>
        <h1 className="m-0 animate-fade-up font-serif text-[clamp(48px,6vw,84px)] leading-[1.02] font-normal tracking-[-0.01em] [animation-delay:120ms]">
          A quiet place to <em className="text-forest italic">come back</em> to yourself.
        </h1>
        <p className="m-0 max-w-[520px] animate-fade-up text-lg text-body [animation-delay:240ms]">
          Unhurried massage, facials and body rituals in a light-filled terrace, a short stroll from
          Oxford Street. Leave the city at the door — we&apos;ll take care of the rest.
        </p>
        <div className="mt-1 flex animate-fade-up flex-wrap gap-3.5 [animation-delay:360ms]">
          <ButtonLink href="#book" arrow>
            Book a treatment
          </ButtonLink>
          <ButtonLink href="#treatments" variant="outline">
            Explore treatments
          </ButtonLink>
        </div>
      </div>

      <div className="relative min-w-0 flex-[1_1_520px]">
        <div className="group animate-unveil overflow-hidden rounded-[260px_260px_16px_16px] [animation-delay:200ms]">
          <PhotoFrame
            photo={heroPhoto}
            priority
            sizes="(min-width: 1280px) 600px, (min-width: 1100px) 50vw, 100vw"
            className="h-[600px] max-sm:h-[460px]"
            imgClassName="animate-settle object-[center_80%] transition-[scale] duration-[2s] ease-calm group-hover:scale-[1.04]"
          />
        </div>
        <div className="absolute bottom-10 -left-4 animate-fade-up [animation-delay:900ms] max-sm:left-4">
          <div className="flex animate-float items-center gap-4 rounded-2xl bg-white px-[22px] py-[18px] shadow-[0_12px_40px_rgba(30,39,35,0.12)]">
            <CalendarIcon />
            <span className="flex flex-col leading-[1.3]">
              <span className="text-xs tracking-[0.08em] text-muted uppercase">Next available</span>
              <span className="flex items-center gap-2 font-semibold">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5f9a72] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#4f8a62]" />
                </span>
                Today, 3:30pm
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
