import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";
import { EMAIL, PHONE, POLICY_UPDATED } from "../content";

export const metadata: Metadata = {
  title: "Cancellation policy",
  description: "How to reschedule or cancel an appointment at Elysium Day Spa, and the fees that apply.",
};

const fees = [
  { when: "24 hours' notice or more", single: "No charge", packages: "48 hours' notice — no charge" },
  { when: "Less than 24 hours' notice", single: "50% of the treatment price", packages: "50% of the package price" },
  { when: "No-show", single: "100% of the treatment price", packages: "100% of the package price" },
];

const sections: PolicySection[] = [
  {
    id: "why",
    title: "Why we have a policy",
    body: (
      <p>
        When you book, we set aside a room and a therapist just for you. Late cancellations and
        missed appointments are hard for us to fill and mean another guest misses out. This policy
        keeps things fair for everyone — and we always try to apply it with kindness.
      </p>
    ),
  },
  {
    id: "fees",
    title: "Notice periods and fees",
    body: (
      <>
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="bg-band text-ink">
                <th className="px-5 py-3.5 font-semibold">When you cancel</th>
                <th className="px-5 py-3.5 font-semibold">Single treatments</th>
                <th className="px-5 py-3.5 font-semibold">Packages &amp; groups</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row) => (
                <tr key={row.when} className="border-t border-divider transition-colors hover:bg-canvas">
                  <td className="px-5 py-3.5 font-medium text-ink">{row.when}</td>
                  <td className="px-5 py-3.5">{row.single}</td>
                  <td className="px-5 py-3.5">{row.packages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4!">
          Packages (including The Elysium Ritual) and bookings for three or more guests need 48
          hours&apos; notice to cancel or reschedule without a fee.
        </p>
      </>
    ),
  },
  {
    id: "rescheduling",
    title: "Rescheduling",
    body: (
      <p>
        Moving your appointment is treated the same as cancelling it. With enough notice, you can
        reschedule as often as you need at no cost. Within the notice period, we&apos;ll do our
        best to find a new time — if we can rebook your slot, we&apos;ll waive the fee.
      </p>
    ),
  },
  {
    id: "late-arrivals",
    title: "Late arrivals",
    body: (
      <p>
        If you arrive late, we&apos;ll still look after you, but your treatment may need to finish
        on time so the next guest isn&apos;t kept waiting. The full treatment price applies.
        Arriving more than 20 minutes late may be treated as a no-show.
      </p>
    ),
  },
  {
    id: "gift-cards-memberships",
    title: "Gift cards and memberships",
    body: (
      <ul>
        <li>
          <strong>Gift card bookings</strong> — late cancellation or no-show fees are deducted from
          the gift card balance.
        </li>
        <li>
          <strong>Membership treatments</strong> — a late cancellation or no-show uses that
          month&apos;s included treatment.
        </li>
      </ul>
    ),
  },
  {
    id: "illness",
    title: "Illness and unexpected events",
    body: (
      <p>
        Please don&apos;t come in if you&apos;re unwell — it&apos;s better for you, our
        therapists and other guests. Let us know as soon as you can. We understand that life
        happens, and we&apos;ll consider waiving fees for genuine illness or emergencies.
      </p>
    ),
  },
  {
    id: "if-we-cancel",
    title: "If we need to cancel",
    body: (
      <p>
        Occasionally we may need to reschedule, for example if a therapist is unwell. We&apos;ll
        contact you as early as possible to offer a new time or a full refund of anything
        you&apos;ve paid.
      </p>
    ),
  },
  {
    id: "how-to-cancel",
    title: "How to cancel or reschedule",
    body: (
      <ul>
        <li>
          Call us on <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`}>{PHONE}</a> during opening
          hours.
        </li>
        <li>
          Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> — notice is counted from when we receive
          your email.
        </li>
        <li>Use the link in your booking confirmation email.</li>
      </ul>
    ),
  },
];

export default function CancellationPolicyPage() {
  return (
    <PolicyPage
      title="Cancellation policy"
      path="/cancellation-policy"
      updated={POLICY_UPDATED}
      intro="Plans change — we get it. Here's how to move or cancel your appointment, and when a fee applies."
      sections={sections}
    />
  );
}
