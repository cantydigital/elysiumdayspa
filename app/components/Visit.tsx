import type { ReactNode } from "react";
import { EMAIL } from "../content";
import Reveal from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

// Keyless Google Maps embed; swap the query for the exact street address once confirmed.
const MAP_EMBED_URL = "https://maps.google.com/maps?q=Paddington%20NSW%202021&z=15&output=embed";

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-semibold">{label}</span>
      <span className="text-body">{children}</span>
    </div>
  );
}

export default function Visit() {
  return (
    <section
      id="visit"
      className="mx-auto flex max-w-[1280px] flex-wrap items-stretch gap-12 px-6 pb-[104px]"
    >
      <Reveal className="flex min-w-0 flex-[1_1_380px] flex-col gap-7">
        <Eyebrow>Find us</Eyebrow>
        <SectionTitle>Visit the sanctuary</SectionTitle>
        <Detail label="Address">
          18 Fernleaf Lane
          <br />
          Paddington NSW 2021
        </Detail>
        <Detail label="Hours">
          Mon–Fri · 9am – 8pm
          <br />
          Sat–Sun · 9am – 6pm
        </Detail>
        <Detail label="Getting here">
          5 min walk from Oxford St buses (333, 380). Street parking and a Wilson car park on Neild
          Ave.
        </Detail>
        <Detail label="Contact">
          <a href={`mailto:${EMAIL}`} className="text-body hover:text-forest">
            {EMAIL}
          </a>
        </Detail>
      </Reveal>
      <Reveal
        delay={150}
        className="relative min-h-[420px] min-w-0 flex-[1_1_560px] overflow-hidden rounded-[20px] bg-placeholder"
      >
        <iframe
          title="Map of Paddington, Sydney"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale-[45%] transition-[filter] duration-700 ease-calm hover:grayscale-0"
        />
      </Reveal>
    </section>
  );
}
