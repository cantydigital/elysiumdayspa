import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { ClockIcon, HandIcon, LeafIcon } from "./ui";

const pillars: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ClockIcon />,
    title: "Slow by design",
    desc: "Every booking includes time to arrive, settle and linger — never rushed from room to room.",
  },
  {
    icon: <LeafIcon />,
    title: "Australian botanicals",
    desc: "Native oils and skincare — Kakadu plum, lemon myrtle, macadamia — chosen for how they feel and what they leave out.",
  },
  {
    icon: <HandIcon />,
    title: "Skilled hands",
    desc: "Qualified therapists who listen first and tailor every treatment to how you're feeling today.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-band">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10 px-6 py-[72px]">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <div className="group flex flex-col gap-3">
              <span className="flex size-14 items-center justify-center rounded-full border border-rule transition-all duration-500 ease-calm group-hover:-translate-y-1 group-hover:border-forest group-hover:bg-canvas">
                {p.icon}
              </span>
              <h2 className="m-0 font-serif text-[28px] font-medium">{p.title}</h2>
              <p className="m-0 text-body">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
