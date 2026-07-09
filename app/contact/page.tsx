import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import { SocialChips } from "../components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact White Gate Partners | Executive Search & Recruitment Singapore",
  description:
    "Contact White Gate Partners to discuss executive search, specialist recruitment or talent solutions across Singapore, Southeast Asia and selected international markets. We respond within one business day.",
  keywords: [
    "contact White Gate Partners",
    "executive search Singapore contact",
    "recruitment agency Singapore contact",
    "headhunter Singapore contact",
    "specialist recruitment Singapore",
  ],
  openGraph: {
    title: "Contact White Gate Partners",
    description:
      "Get in touch with White Gate Partners to discuss hiring needs, executive search, specialist recruitment or talent solutions.",
    url: "https://whitegatepartners.sg/contact",
  },
  alternates: { canonical: "https://whitegatepartners.sg/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Get in touch</span>
          <h1>
            Let&apos;s talk about <em>who you need next.</em>
          </h1>
          <p className="lede">
            Hiring, scaling a function, or weighing your own next move — we
            would welcome the conversation.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="block contact-section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2>
                A conversation costs <em>nothing.</em>
              </h2>
              <p className="lede">
                We respond to all enquiries within one business day and are
                always happy to have an exploratory call — even if you&apos;re
                not sure yet what you need.
              </p>
              <div className="contact-info">
                <div className="r">
                  <div className="k">Office</div>
                  <b>The Iveria, 2 Kim Yam Road, Singapore 239366</b>
                </div>
                <div className="r">
                  <div className="k">Email</div>
                  <b>
                    <a href="mailto:hello@whitegatepartners.sg">
                      hello@whitegatepartners.sg
                    </a>
                  </b>
                </div>
                <div className="r">
                  <div className="k">Hours</div>
                  <b>Monday – Friday, 9 am – 6 pm SGT</b>
                </div>
                <div className="r">
                  <div className="k">Entity</div>
                  <b>White Gate Partners Pte. Ltd. · UEN 202600064K</b>
                </div>
                <div className="r">
                  <div className="k">Connect</div>
                  <SocialChips />
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        className="block"
        style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="head">
            <span className="num">§ 01</span>
            <div>
              <h2>
                Find us at <em>The Iveria.</em>
              </h2>
              <p className="sub">
                We are in the River Valley district of Singapore, a short walk
                from Clarke Quay MRT. Visitor parking is available in the
                building.
              </p>
            </div>
          </div>
          <div
            style={{
              background: "var(--grey-mid)",
              height: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                The Iveria · 2 Kim Yam Road · Singapore 239366
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
