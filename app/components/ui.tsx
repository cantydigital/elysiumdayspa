import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "../content";

type ClassProps = { children: ReactNode; className?: string };

export function Eyebrow({ children, className = "text-accent" }: ClassProps) {
  return (
    <span className={`text-[13px] font-semibold tracking-[0.28em] uppercase ${className}`}>
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = "" }: ClassProps) {
  return (
    <h2
      className={`m-0 font-serif text-[clamp(38px,4.4vw,56px)] leading-[1.08] font-normal ${className}`}
    >
      {children}
    </h2>
  );
}

const buttonVariants = {
  solid: "border-forest bg-forest text-white hover:border-ink-deep hover:bg-ink-deep hover:text-white",
  outline: "border-forest text-forest hover:bg-forest hover:text-white",
  light: "border-canvas bg-canvas text-ink hover:border-white hover:bg-white hover:text-ink",
  "outline-light": "border-canvas text-canvas hover:bg-canvas hover:text-ink",
};

const buttonSizes = {
  sm: "px-[22px] py-[11px]",
  md: "px-[26px] py-[13px]",
  lg: "px-[30px] py-[15px]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  /** Adds a trailing arrow that slides forward on hover. */
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "lg",
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`group/btn inline-flex items-center gap-2 rounded-full border font-medium no-underline transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(30,39,35,0.18)] active:translate-y-0 active:shadow-none ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-calm group-hover/btn:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}

/** Text link with an underline that draws in from the left on hover. */
export function UnderlineLink({ href, children, className = "" }: ClassProps & { href: string }) {
  return (
    <a
      href={href}
      className={`relative no-underline after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-calm hover:after:scale-x-100 ${className}`}
    >
      {children}
    </a>
  );
}

type PhotoProps = {
  photo: Photo;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/** Cover-fit photo in a sized frame; the frame's background shows while the image loads. */
export function PhotoFrame({ photo, sizes, className = "", imgClassName = "", priority }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-placeholder ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}

type IconProps = { size?: number; stroke?: string; strokeWidth?: number; className?: string };

function Icon({
  size = 24,
  stroke = "#23352F",
  strokeWidth = 1.3,
  viewBox = "0 0 24 24",
  className,
  children,
}: IconProps & { viewBox?: string; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={`shrink-0 ${className ?? ""}`}
    >
      {children}
    </svg>
  );
}

export const LogoIcon = (p: IconProps) => (
  <Icon size={34} viewBox="0 0 34 34" {...p}>
    <circle cx="17" cy="17" r="16" />
    <path d="M17 7c-5 5-5 15 0 20c5-5 5-15 0-20z" />
    <path d="M17 27V12" />
  </Icon>
);

export const CalendarIcon = (p: IconProps) => (
  <Icon size={36} strokeWidth={1.4} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon size={32} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const LeafIcon = (p: IconProps) => (
  <Icon size={32} {...p}>
    <path d="M12 21c-5-3-8-7-8-12c4 0 7 2 8 5c1-3 4-5 8-5c0 5-3 9-8 12z" />
    <path d="M12 21v-7" />
  </Icon>
);

export const HandIcon = (p: IconProps) => (
  <Icon size={32} {...p}>
    <path d="M7 11V7a2 2 0 0 1 4 0v4M11 10V5a2 2 0 0 1 4 0v6M15 9a2 2 0 0 1 4 0v4a8 8 0 0 1-8 8h-1a6 6 0 0 1-6-6v-2a2 2 0 0 1 3-2" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon size={18} stroke="#D2B27A" strokeWidth={1.6} {...p}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);

export const QuoteIcon = (p: IconProps) => (
  <Icon size={40} strokeWidth={1.2} {...p}>
    <path d="M9 7H6a2 2 0 0 0-2 2v3h5v5H4M20 7h-3a2 2 0 0 0-2 2v3h5v5h-5" />
  </Icon>
);
