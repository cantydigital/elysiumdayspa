import { loungePhoto, ritualIncludes } from "../content";
import Reveal from "./Reveal";
import { ButtonLink, CheckIcon, Eyebrow, PhotoFrame } from "./ui";

export default function FeaturedPackage() {
  return (
    <section id="packages" className="bg-forest text-canvas">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-stretch px-6">
        <div className="group min-h-[560px] min-w-0 flex-[1_1_520px] overflow-hidden max-sm:min-h-[320px]">
          <PhotoFrame
            photo={loungePhoto}
            sizes="(min-width: 1100px) 640px, 100vw"
            className="h-full min-h-[inherit]"
            imgClassName="transition-transform duration-[1.5s] ease-calm group-hover:scale-105"
          />
        </div>

        <Reveal className="box-border flex min-w-0 flex-[1_1_480px] flex-col justify-center gap-6 px-14 py-20 max-sm:px-0 max-sm:py-14">
          <Eyebrow className="text-gold">The half-day package</Eyebrow>
          <h2 className="m-0 font-serif text-[clamp(40px,4.6vw,60px)] leading-[1.04] font-normal">
            The Elysium Ritual
          </h2>
          <p className="m-0 max-w-[460px] text-[17px] text-fog">
            Our most complete escape — a slow progression from warmth to stillness, finished with
            lunch and tea in the garden lounge.
          </p>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {ritualIncludes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 transition-transform duration-300 ease-calm hover:translate-x-1"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap items-center gap-6">
            <span className="font-serif text-[32px]">
              $389 <span className="font-sans text-sm text-fog">· approx. 4 hours</span>
            </span>
            <ButtonLink href="#book" variant="light" size="md" arrow>
              Book the ritual
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
