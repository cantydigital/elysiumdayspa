import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SITE_URL } from "./content";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elysium Day Spa — Sydney",
    template: "%s · Elysium Day Spa",
  },
  description:
    "Unhurried massage, facials and body rituals in a light-filled Paddington terrace, a short stroll from Oxford Street.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${figtree.variable} ${cormorant.variable} antialiased`}>
      <body className="m-0 bg-canvas font-sans text-base leading-[1.6] text-ink">
        {/* Without JavaScript, scroll reveals never trigger — show their content straight away. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;translate:none!important}"}</style>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
