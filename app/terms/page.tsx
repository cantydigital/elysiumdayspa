import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";
import { POLICY_UPDATED } from "../content";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: "The terms that apply to bookings, gift cards, memberships and use of the Elysium Day Spa website.",
};

const sections: PolicySection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <p>
        These terms apply when you book a treatment, buy a gift card or membership, visit Elysium
        Day Spa, or use our website. By making a booking or purchase you agree to them. Please read
        them together with our <Link href="/cancellation-policy">cancellation policy</Link> and{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    ),
  },
  {
    id: "bookings",
    title: "Bookings and payment",
    body: (
      <ul>
        <li>All prices are in Australian dollars and include GST.</li>
        <li>
          Prices shown as &ldquo;from&rdquo; are for the shortest treatment length; the final
          price depends on the duration and options you choose.
        </li>
        <li>
          We may ask for card details or a deposit to secure some bookings, including packages,
          group bookings and weekend appointments.
        </li>
        <li>Treatment prices may change, but we will always honour the price at the time you booked.</li>
      </ul>
    ),
  },
  {
    id: "health",
    title: "Your health and safety",
    body: (
      <>
        <p>
          Before your first treatment we&apos;ll ask you to complete a short health
          consultation. Please tell us about any medical conditions, allergies, injuries,
          medications or pregnancy — and let us know if anything changes before a later visit.
        </p>
        <p>
          Our therapists may adjust or decline a treatment if it isn&apos;t safe or suitable for
          you. Guests must be 16 or older; guests aged 16–17 need a parent or guardian&apos;s
          consent.
        </p>
      </>
    ),
  },
  {
    id: "visit",
    title: "During your visit",
    body: (
      <ul>
        <li>
          Please arrive 15 minutes before your appointment. Late arrivals may receive a shorter
          treatment so the next guest isn&apos;t delayed, charged at the full price.
        </li>
        <li>
          Elysium is a quiet space — please keep phones on silent in treatment rooms and the
          lounge.
        </li>
        <li>We provide lockers, but we can&apos;t accept responsibility for valuables left on the premises.</li>
        <li>
          We may end a treatment, without refund, if a guest behaves inappropriately towards our
          staff.
        </li>
      </ul>
    ),
  },
  {
    id: "gift-cards",
    title: "Gift cards",
    body: (
      <ul>
        <li>Gift cards are valid for 3 years from the date of purchase.</li>
        <li>
          They can be used towards any treatment, package or product, but can&apos;t be exchanged
          for cash or used to buy another gift card.
        </li>
        <li>Any unused balance stays on the card until it expires.</li>
        <li>
          Please treat gift cards like cash — we can replace lost e-gift cards sent to a known
          email address, but not lost physical cards.
        </li>
      </ul>
    ),
  },
  {
    id: "memberships",
    title: "Memberships",
    body: (
      <ul>
        <li>
          Memberships cost $119 per month, billed automatically to your nominated card, with a
          minimum term of three months.
        </li>
        <li>
          Each month includes one 60-minute treatment. Unused monthly treatments roll over for
          one month, then expire.
        </li>
        <li>Member discounts of 15% apply to additional treatments and retail products.</li>
        <li>
          After the minimum term you can cancel at any time with 30 days&apos; notice by email or
          in person.
        </li>
        <li>Memberships are personal and can&apos;t be transferred or shared.</li>
      </ul>
    ),
  },
  {
    id: "offers",
    title: "Promotions and offers",
    body: (
      <p>
        Promotional offers can&apos;t be combined with other offers or member pricing unless
        stated, have no cash value, and may be withdrawn at any time. Any extra conditions will be
        shown with the offer.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Your rights and our liability",
    body: (
      <p>
        Our services come with guarantees that cannot be excluded under the Australian Consumer
        Law. Nothing in these terms limits those rights. To the extent permitted by law, we are not
        liable for indirect or consequential loss, or for reactions caused by health information
        that wasn&apos;t disclosed to us.
      </p>
    ),
  },
  {
    id: "website",
    title: "Using our website",
    body: (
      <p>
        We work to keep our website accurate and available, but treatment details, availability
        and prices may change. The content, photography and branding on this site belong to
        Elysium Day Spa or its licensors and may not be copied without permission.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <p>
        These terms are governed by the laws of New South Wales, Australia. We may update them
        from time to time; changes apply to bookings and purchases made after the update is
        published on this page.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & conditions"
      path="/terms"
      updated={POLICY_UPDATED}
      intro="The fine print, kept as clear and fair as we can make it — covering bookings, gift cards, memberships and your visit."
      sections={sections}
    />
  );
}
