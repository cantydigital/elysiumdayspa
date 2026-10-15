import { PHONE } from "../content";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui";

export default function BookingCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-ink text-canvas">
      {/* Soft, slowly drifting glow behind the call to action */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[10%] size-[480px] animate-float rounded-full bg-forest opacity-60 blur-3xl [animation-duration:12s]"
      />
      <Reveal className="relative mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 px-6 py-[88px]">
        <h2 className="m-0 max-w-[640px] font-serif text-[clamp(36px,4.4vw,58px)] leading-[1.08] font-normal">
          Your time out starts here.
        </h2>
        <div className="flex flex-wrap gap-3.5">
          <ButtonLink href="#book" variant="light" arrow>
            Book online
          </ButtonLink>
          <ButtonLink href={`tel:${PHONE.replace(/[^\d]/g, "")}`} variant="outline-light">
            Call {PHONE}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
