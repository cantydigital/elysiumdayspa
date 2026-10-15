import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";
import { EMAIL, POLICY_UPDATED } from "../content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Elysium Day Spa collects, uses and protects your personal information.",
};

const sections: PolicySection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        Elysium Day Spa (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates a day spa at 18 Fernleaf
        Lane, Paddington NSW 2021. We are committed to handling your personal information in line
        with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>
            <strong>Contact details</strong> — your name, email address, phone number and, for
            boxed gift cards, a delivery or pick-up name.
          </li>
          <li>
            <strong>Booking details</strong> — treatments booked, preferred therapist, visit
            history, membership status and gift card balances.
          </li>
          <li>
            <strong>Health and consultation information</strong> — allergies, skin sensitivities,
            pregnancy, injuries or medical conditions relevant to your treatment.
          </li>
          <li>
            <strong>Payment information</strong> — processed securely by our payment provider. We
            do not store full card numbers.
          </li>
          <li>
            <strong>Website information</strong> — pages visited, device and browser type, and
            approximate location, collected through cookies and analytics.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "health-information",
    title: "Health information",
    body: (
      <>
        <p>
          Health information is &ldquo;sensitive information&rdquo; under the Privacy Act. We only
          collect it with your consent, and only so our therapists can tailor your treatment and
          keep you safe — for example, avoiding certain oils or pressure.
        </p>
        <p>
          Consultation forms are stored securely, are accessible only to the staff providing or
          managing your care, and are never used for marketing.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <ul>
        <li>To take, confirm, remind you about and manage your bookings.</li>
        <li>To deliver treatments safely and suited to your needs.</li>
        <li>To process payments, gift cards and memberships.</li>
        <li>To respond to enquiries, feedback and complaints.</li>
        <li>To send seasonal offers and news, if you have opted in.</li>
        <li>To improve our services and website.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We never sell your personal information. We share it only with trusted providers who
          help us run the spa — such as our online booking system, payment processor, email
          service and IT providers — and only as needed for them to do so.
        </p>
        <p>
          Some of these providers may store data on servers outside Australia. Where that happens,
          we take reasonable steps to make sure your information is handled consistently with the
          APPs. We may also disclose information where required or authorised by law.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    title: "Marketing",
    body: (
      <p>
        We only send marketing emails if you subscribe or agree to receive them. Every email
        includes an unsubscribe link, or you can ask us to remove you at any time by emailing{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        Our website uses cookies to remember preferences and to understand how visitors use the
        site. You can block or delete cookies in your browser settings, though some parts of the
        site — such as online booking — may not work as intended.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security and retention",
    body: (
      <p>
        We take reasonable steps to protect your information from misuse, loss and unauthorised
        access, including access controls and secure, reputable software providers. We keep
        information only for as long as we need it for the purposes above or as required by law,
        after which it is securely destroyed or de-identified.
      </p>
    ),
  },
  {
    id: "access",
    title: "Access and correction",
    body: (
      <p>
        You can ask to access the personal information we hold about you, or to correct it if it
        is inaccurate, out of date or incomplete. Contact us at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we&apos;ll respond within 30 days.
      </p>
    ),
  },
  {
    id: "complaints",
    title: "Complaints",
    body: (
      <p>
        If you have a concern about how we have handled your information, please contact us first
        so we can try to resolve it. If you&apos;re not satisfied with our response, you can
        contact the Office of the Australian Information Commissioner at{" "}
        <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
          oaic.gov.au
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be available
        on this page, with the date it was last updated.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy policy"
      path="/privacy"
      updated={POLICY_UPDATED}
      intro="Your privacy matters as much as your time with us. Here's what we collect, why, and how we look after it."
      sections={sections}
    />
  );
}
