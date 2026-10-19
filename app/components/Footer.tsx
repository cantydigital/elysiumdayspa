import Link from "next/link";
import { navLinks, policyLinks } from "../content";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Explore",
    links: navLinks.filter((link) => link.href !== "/#visit"),
  },
  {
    title: "Spa",
    links: [
      { href: "/#visit", label: "About us" },
      { href: "/#visit", label: "Spa etiquette" },
      { href: "/#visit", label: "FAQs" },
      { href: "/#visit", label: "Contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      { href: "/#top", label: "Instagram" },
      { href: "/#top", label: "Facebook" },
    ],
  },
];

const footerLinkClass =
  "w-fit text-fog no-underline transition-all duration-300 ease-calm hover:translate-x-1 hover:text-canvas";

export default function Footer() {
  return (
    <footer className="border-t border-moss bg-ink text-fog">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-12 px-6 pt-16 pb-10">
        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
          <span className="font-serif text-[30px] tracking-[0.08em] text-canvas">ELYSIUM</span>
          <span className="text-sm">18 Fernleaf Lane, Paddington NSW 2021</span>
          <NewsletterForm />
        </div>
        <div className="flex flex-wrap gap-16">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2 text-[15px]">
              <span className="font-semibold text-canvas">{col.title}</span>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className={footerLinkClass}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-6 pt-5 pb-8 text-[13px] text-ash">
        <span>© 2026 Elysium Day Spa</span>
        <nav aria-label="Policies" className="flex flex-wrap gap-x-2">
          {policyLinks.map((link, i) => (
            <span key={link.href} className="flex gap-2">
              {i > 0 && <span aria-hidden="true">·</span>}
              <Link href={link.href} className="text-ash no-underline transition-colors hover:text-canvas">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
