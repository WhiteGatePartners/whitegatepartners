"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_znhhajw";
const TEMPLATE_ID = "template_bldjqrb";
const PUBLIC_KEY = "7cwVb7VTwrWaNw48w";

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setError("Please complete the reCAPTCHA check.");
      return;
    }

    setSending(true);

    try {
      const verify = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!verify.ok) {
        setError("reCAPTCHA verification failed. Please try again.");
        recaptchaRef.current?.reset();
        return;
      }

      const form = e.currentTarget;
      const data = new FormData(form);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.get("name") as string,
          email: data.get("email") as string,
          message: data.get("message") as string,
        },
        { publicKey: PUBLIC_KEY }
      );

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
      recaptchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="folio-form" onSubmit={handleSubmit}>
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

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      />

      {error && (
        <p style={{ color: "red", fontSize: 14, marginTop: 8 }}>{error}</p>
      )}

      <button className="folio-submit" type="submit" disabled={sending}>
        {sending ? "Sending…" : <>Send enquiry <span className="ar">→</span></>}
      </button>
    </form>
  );
}
