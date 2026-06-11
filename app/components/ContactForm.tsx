"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ paddingTop: 40 }}>
        <h2
          style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: "clamp(40px, 5.6vw, 72px)",
            fontWeight: 300,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          Thank <em style={{ fontStyle: "italic", color: "var(--accent)" }}>you.</em>
        </h2>
        <p
          style={{
            fontSize: 20,
            color: "var(--ink-soft)",
            marginTop: 24,
            fontWeight: 300,
          }}
        >
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="folio-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="fld">
        <label htmlFor="type">I am a&hellip;</label>
        <select id="type" name="type">
          <option>An employer looking to hire</option>
          <option>A candidate exploring opportunities</option>
          <option>Exploring advisory or consulting</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="fld">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="fld">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="fld">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          placeholder="Your organisation (optional)"
        />
      </div>

      <div className="fld">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          placeholder="A little about your team or your goals…"
          rows={3}
        />
      </div>

      <button className="folio-submit" type="submit">
        Send enquiry <span className="ar">→</span>
      </button>
    </form>
  );
}
