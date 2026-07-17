import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships | Collaborate with White Gate Partners Singapore",
  description:
    "Partner with White Gate Partners as a client referrer, CEI-certified independent recruiter or fractional HR and talent leader. Collaborate on client introductions, specialist recruitment delivery and talent solutions projects across Singapore and Southeast Asia.",
  keywords: [
    "recruitment partnership Singapore",
    "client referral programme Singapore",
    "independent recruiter collaboration Singapore",
    "fractional HR Singapore",
    "recruitment referral incentive Singapore",
  ],
  openGraph: {
    title: "Partnerships | White Gate Partners",
    description:
      "Collaborate through trusted referrals, independent recruitment delivery and fractional talent expertise.",
    url: "https://whitegatepartners.sg/partnerships",
  },
  alternates: { canonical: "https://whitegatepartners.sg/partnerships" },
};

const routes = [
  {
    n: "01",
    title: "Client Referral Incentives",
    body: "For senior professionals, HR practitioners, advisors and well-connected individuals who can introduce companies with hiring or talent needs.",
    body2:
      "Eligible referrals may qualify for a referral incentive, subject to prior agreement, eligibility and successful engagement terms.",
    fit: "Trusted introducers with employer, leadership or HR contacts.",
  },
  {
    n: "02",
    title: "Independent Recruiter Collaborations",
    body: "For CEI-certified independent recruiters with specialist market knowledge, candidate access or recruitment delivery capability.",
    body2:
      "This may suit recruiters seeking greater flexibility, discretion and ownership, including those looking to move away from more KPI-driven or highly structured environments.",
    fit: "Experienced recruiters who want to collaborate on selected mandates without a traditional agency structure.",
  },
  {
    n: "03",
    title: "Fractional HR & Talent Leaders",
    body: "For senior HR, talent acquisition and people leaders open to supporting future talent solutions projects on a fractional, advisory or project basis.",
    body2:
      "This may include hiring advisory, talent market mapping, recruitment project support, TA process review, workforce planning or broader talent-related initiatives where experienced practitioner input is required.",
    fit: "Senior HR, TA or talent leaders open to project-based or fractional advisory work.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Partner with us</span>
          <h1>
            Collaborate through trusted referrals and{" "}
            <em>talent partnerships.</em>
          </h1>
          <p className="lede">
            White Gate Partners works with trusted referrers, CEI-certified
            independent recruiters and senior HR or talent practitioners who
            can support client introductions, selected search assignments and
            future talent solutions projects across Singapore, Southeast Asia
            and selected international markets.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP ROUTES INTRO */}
      <section className="block about-home">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-ph">
              <Image
                src="/room.jpeg"
                alt="White Gate Partners office"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h2>Three partnership routes.</h2>
              <p>
                White Gate Partners collaborates with trusted referrers,
                CEI-certified independent recruiters and senior HR or talent
                practitioners who can add value through client introductions,
                specialist recruitment delivery or project-based talent
                support. Each arrangement is governed by a signed agreement
                that sets out the scope, expectations and commercial terms
                before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP ROUTES CARDS */}
      <section className="block" style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="route-cards">
            {routes.map((r) => (
              <div className="route-card" key={r.n}>
                <span className="sc-num">{r.n}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <p>{r.body2}</p>
                <div className="route-fit">
                  <span className="label">Best suited for</span>
                  <p>{r.fit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PARTNERSHIPS WORK */}
      <section className="block process-section">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow on-dark">How it works</span>
              <h2>How partnership arrangements work.</h2>
              <p className="sub">
                Partnership arrangements are discussed upfront, documented
                clearly and managed with professional expectations on both
                sides.
              </p>
            </div>
          </div>
          <div className="process-grid cols-4">
            <div className="process-step">
              <span className="pn">i</span>
              <h3>Initial conversation</h3>
              <p>
                We understand the referral, recruiter collaboration or
                talent solutions opportunity, including the background,
                market focus and potential fit with White Gate Partners.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">ii</span>
              <h3>Agree the arrangement</h3>
              <p>
                Scope, responsibilities, eligibility, confidentiality
                expectations and commercial terms are agreed upfront through
                a signed agreement.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">iii</span>
              <h3>Deliver the collaboration</h3>
              <p>
                Each partner contributes according to the agreed
                arrangement, whether through client introductions, client
                ownership, candidate delivery or project-based support.
                Roles, communication standards and responsibilities are kept
                clear throughout the process.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">iv</span>
              <h3>Follow through clearly</h3>
              <p>
                Referral incentives, recruiter collaboration fees or
                project-related terms are handled according to the signed
                agreement and agreed milestones.
              </p>
            </div>
          </div>
          <p className="legal-fineprint">
            All partnership arrangements are subject to eligibility, prior
            agreement and signed terms. Referral incentives, recruiter
            collaboration fees and project-related payments must not create
            any conflict of interest, improper inducement, bribery or breach
            of duty with any referred organisation, client, candidate or
            third party. Partners are expected to maintain confidentiality,
            handle information appropriately, communicate professionally,
            act only within the agreed scope and comply with applicable
            laws, regulations, employment agency requirements, data
            protection obligations and market-specific compliance standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>
                Let&apos;s explore how we can <em>collaborate.</em>
              </h2>
              <p>
                Whether you are introducing a company with hiring needs,
                collaborating as an independent recruiter or open to
                supporting future HR and talent projects, we&apos;d welcome
                the conversation.
              </p>
            </div>
            <Link className="biglink" href="/contact" style={{ maxWidth: 340, flexShrink: 0 }}>
              Get in touch <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
