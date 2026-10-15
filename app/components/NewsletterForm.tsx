"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to the mailing list provider.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-[380px] flex-col gap-2.5">
      <label htmlFor="news-email" className="text-sm">
        Seasonal offers &amp; new treatments, a few times a year.
      </label>
      {submitted ? (
        <p className="m-0 animate-fade-up text-sm text-gold">Thank you — you&apos;re on the list.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          <input
            id="news-email"
            type="email"
            required
            placeholder="Your email"
            className="box-border h-12 min-w-0 flex-[1_1_200px] rounded-full border border-muted bg-transparent px-4 text-canvas placeholder:text-ash focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 cursor-pointer rounded-full border-0 bg-gold px-[22px] font-semibold text-ink transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:bg-[#dcc08e] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)] active:translate-y-0"
          >
            Subscribe
          </button>
        </div>
      )}
    </form>
  );
}
