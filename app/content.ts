export type Photo = {
  src: string;
  alt: string;
};

export type Treatment = {
  name: string;
  desc: string;
  time: string;
  price: string;
  photo: Photo;
};

export type Step = {
  num: string;
  title: string;
  desc: string;
};

// Stock photography from Unsplash (free to use under the Unsplash License).
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=1600&q=80`;

export const heroPhoto: Photo = {
  src: unsplash("1787651343620-8d5303006ecb"),
  alt: "A calm treatment room with a massage table in soft daylight",
};

export const loungePhoto: Photo = {
  src: unsplash("1567922045116-2a00fae2ed03"),
  alt: "A bowl of herbal tea surrounded by green leaves",
};

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://elysiumdayspa.com.au").replace(
  /\/$/,
  "",
);

export const EMAIL = "hello@elysiumdayspa.com.au";

export const navLinks = [
  { href: "/#treatments", label: "Treatments" },
  { href: "/#packages", label: "Packages" },
  { href: "/#memberships", label: "Memberships" },
  { href: "/#gifts", label: "Gift cards" },
  { href: "/#visit", label: "Visit" },
  { href: "/blog", label: "Journal" },
];

export const treatments: Treatment[] = [
  {
    name: "Massage",
    desc: "Relaxation, deep tissue and hot stone — pressure tailored to you.",
    time: "60 · 90 min",
    price: "$129",
    photo: { src: unsplash("1745327883508-b6cd32e5dde5"), alt: "A therapist giving a slow back massage" },
  },
  {
    name: "Facials",
    desc: "Cleansing, hydrating and renewing facials matched to your skin.",
    time: "45 · 75 min",
    price: "$149",
    photo: { src: unsplash("1570172619644-dfd03ed5d881"), alt: "A guest receiving a clay mask facial" },
  },
  {
    name: "Body rituals",
    desc: "Scrubs, wraps and soaks that leave skin soft and mind quiet.",
    time: "60 · 90 min",
    price: "$159",
    photo: { src: unsplash("1683944433023-027a3f443ae4"), alt: "Jars of body scrub and botanical skincare" },
  },
  {
    name: "Hands & feet",
    desc: "Restorative manicures and pedicures with a long, slow massage.",
    time: "45 · 60 min",
    price: "$79",
    photo: { src: unsplash("1610992015732-2449b76344bc"), alt: "Freshly manicured hands resting on soft white linen" },
  },
];

export const steps: Step[] = [
  {
    num: "01",
    title: "Arrive",
    desc: "Come 15 minutes early. Change into a robe, sip native herbal tea and let the city fall away.",
  },
  {
    num: "02",
    title: "Unwind",
    desc: "A short consultation, then your treatment — at the pace and pressure you choose.",
  },
  {
    num: "03",
    title: "Linger",
    desc: "Stay in the garden lounge as long as you like. There is no rush to leave.",
  },
];

export const ritualIncludes = [
  "Lemon myrtle body scrub & wrap",
  "90-minute signature massage",
  "Kakadu plum hydrating facial",
  "Light lunch & herbal tea",
];

export const policyLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cancellation-policy", label: "Cancellation policy" },
];

export const POLICY_UPDATED = "15 October 2026";
