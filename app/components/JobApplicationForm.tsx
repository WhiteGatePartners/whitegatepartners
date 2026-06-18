"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_znhhajw";
const PUBLIC_KEY = "7cwVb7VTwrWaNw48w";
// Replace with the template ID you create in EmailJS for job applications
const TEMPLATE_ID = "template_application";

const MAX_FILE_MB = 3;

type Props = { role: string };

export default function JobApplicationForm({ role }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File must be under ${MAX_FILE_MB} MB.`);
      e.target.value = "";
    } else {
      setFileError(null);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fileError || !formRef.current) return;
    setError(null);
    setSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

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
          Application{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>received.</em>
        </h2>
        <p style={{ fontSize: 20, color: "var(--ink-soft)", marginTop: 24, fontWeight: 300 }}>
          Thank you for applying. We&apos;ll review your application and be in
          touch within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form className="folio-form" ref={formRef} onSubmit={handleSubmit}>
      {/* Hidden field carries the role name into the EmailJS template */}
      <input type="hidden" name="role" value={role} />

      <div className="fld">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your full name"
          required
        />
      </div>

      <div className="fld">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@email.com"
          required
        />
      </div>

      <div className="fld">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="+65 9000 0000"
          required
        />
      </div>

      <div className="fld">
        <label htmlFor="resume">
          Resume{" "}
          <span style={{ fontWeight: 300, color: "var(--ink-soft)" }}>
            (PDF or image, max {MAX_FILE_MB} MB)
          </span>
        </label>
        <input
          id="resume"
          type="file"
          name="resume"
          accept="application/pdf,image/*"
          required
          onChange={handleFileChange}
          style={{ padding: "10px 0" }}
        />
        {fileError && (
          <p style={{ color: "red", fontSize: 13, marginTop: 4 }}>{fileError}</p>
        )}
      </div>

      {error && (
        <p style={{ color: "red", fontSize: 14, marginBottom: 8 }}>{error}</p>
      )}

      <button
        className="folio-submit"
        type="submit"
        disabled={sending || !!fileError}
      >
        {sending ? "Sending…" : <>Submit application <span className="ar">→</span></>}
      </button>
    </form>
  );
}
