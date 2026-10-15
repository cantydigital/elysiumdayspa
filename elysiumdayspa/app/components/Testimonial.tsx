import Reveal from "./Reveal";
import { QuoteIcon } from "./ui";

export default function Testimonial() {
  return (
    <section className="bg-band">
      <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 py-24 text-center">
        <QuoteIcon />
        <p className="m-0 font-serif text-[clamp(28px,3.2vw,40px)] leading-[1.3] italic">
          “I walked in after a brutal week and walked out feeling like a different person. The
          lounge afterwards is the best part — nobody hurries you.”
        </p>
        <span className="text-sm tracking-[0.16em] text-muted uppercase">
          Sample review · Sarah M., Surry Hills
        </span>
      </Reveal>
    </section>
  );
}
