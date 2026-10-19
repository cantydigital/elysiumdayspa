import Link from "next/link";
import { navLinks } from "../content";
import { ButtonLink, LogoIcon, UnderlineLink } from "./ui";

export default function Header() {
  return (
    <>
      {/* Utility bar */}
      <div className="bg-forest text-[13px] text-mist">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-x-6 gap-y-2 px-6 py-2.5">
          <span>Open 7 days · Mon–Fri 9am–8pm · Sat–Sun 9am–6pm</span>
          <span>Paddington, Sydney</span>
        </div>
      </div>

      <header className="relative z-50 sm:sticky sm:top-0 border-b border-line bg-canvas/90 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-[18px] max-sm:py-3"
        >
          <Link href="/" className="group flex items-center gap-3 text-ink no-underline hover:text-ink">
            <LogoIcon className="transition-transform duration-700 ease-calm group-hover:rotate-[360deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[28px] font-medium tracking-[0.08em] transition-[letter-spacing] duration-500 ease-calm group-hover:tracking-[0.12em]">
                ELYSIUM
              </span>
              <span className="mt-1 text-[10px] tracking-[0.42em] text-muted">DAY SPA</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
            {navLinks.map((link) => (
              <UnderlineLink key={link.href} href={link.href} className="py-2.5">
                {link.label}
              </UnderlineLink>
            ))}
            <ButtonLink href="/#book" size="sm">
              Book now
            </ButtonLink>
          </div>
        </nav>
      </header>
    </>
  );
}
