import { steps } from "../content";
import Reveal from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export default function VisitSteps() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 py-[104px]">
      <Reveal className="flex flex-col items-center gap-3.5 text-center">
        <Eyebrow>Your visit</Eyebrow>
        <SectionTitle>Arrive. Unwind. Linger.</SectionTitle>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 150}>
            <div className="group relative flex flex-col gap-3.5 border-t border-rule pt-6">
              {/* Accent rule that draws across the top border on hover */}
              <span className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-calm group-hover:scale-x-100" />
              <span className="font-serif text-[44px] leading-none text-accent transition-transform duration-500 ease-calm group-hover:translate-x-1.5">
                {s.num}
              </span>
              <h3 className="m-0 font-serif text-[28px] font-medium">{s.title}</h3>
              <p className="m-0 text-body">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
