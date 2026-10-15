import Reveal from "./Reveal";
import { ButtonLink, Eyebrow } from "./ui";

const cardClass =
  "flex h-full flex-col gap-[18px] rounded-[20px] p-12 transition-all duration-500 ease-calm hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(30,39,35,0.12)] max-sm:p-8";

export default function Offers() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6 px-6 py-[104px]">
      <Reveal className="h-full">
        <div id="memberships" className={`bg-white ${cardClass}`}>
          <Eyebrow>Membership · $119 / month</Eyebrow>
          <h2 className="m-0 font-serif text-[44px] leading-[1.08] font-normal">
            Make it a monthly ritual
          </h2>
          <p className="m-0 text-body">
            One 60-minute treatment each month, 15% off extra bookings and products, and priority
            weekend booking. Cancel anytime after three months.
          </p>
          <ButtonLink href="#memberships" size="md" arrow className="mt-2 self-start">
            See memberships
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal className="h-full" delay={150}>
        <div id="gifts" className={`bg-sage ${cardClass}`}>
          <Eyebrow>Gift cards · from $50</Eyebrow>
          <h2 className="m-0 font-serif text-[44px] leading-[1.08] font-normal">
            Give someone an afternoon of calm
          </h2>
          <p className="m-0 text-body">
            Choose a treatment or a value. Delivered instantly by email, or beautifully boxed for
            pick-up in Paddington. Valid for 3 years.
          </p>
          <ButtonLink href="#gifts" variant="outline" size="md" className="mt-2 self-start">
            Buy a gift card
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
