import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | White Gate Partners",
  description:
    "Privacy Policy for White Gate Partners Pte. Ltd. — how we collect, use and protect personal data.",
  alternates: { canonical: "https://whitegatepartners.sg/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="lede">
            Our Privacy Policy is currently being finalised and will be
            published here shortly. In the meantime, if you have any
            questions about how we handle personal data, please contact us at{" "}
            <a href="mailto:hello@whitegatepartners.sg">
              hello@whitegatepartners.sg
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
