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
            Start the <em>right conversation.</em>
          </h1>
          <p className="lede">
            We welcome hiring, business and partnership enquiries, and are
            always open to an exploratory conversation — even if you are
            still shaping what you need.
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
                We aim to respond to all enquiries within one business day
                and are happy to have an exploratory conversation — even if
                you are still shaping what you need.
              </p>
              <div className="contact-info">
                <div className="r">
                  <div className="k">Location</div>
                  <b>Singapore-based · Meetings by appointment</b>
                </div>
                <div className="r">
                  <div className="k">Email</div>
                  <b>
                    <a href="mailto:asher@whitegatepartners.co">
                      asher@whitegatepartners.co
                    </a>
                  </b>
                </div>
                <div className="r">
                  <div className="k">Hours</div>
                  <b>Monday – Friday, 9 am – 6 pm SGT</b>
                </div>
                <div className="r">
                  <div className="k">Entity</div>
                  <b>
                    White Gate Partners Pte. Ltd. · UEN 202600064K
                    <br />
                    EA Licence No. 26C3291
                  </b>
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
    </>
  );
}
