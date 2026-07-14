import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Executive Search, Specialist Recruitment & Talent Solutions",
  description:
    "Explore White Gate Partners' executive search, specialist recruitment and talent solutions for companies hiring professional, specialist and leadership talent across Singapore, Southeast Asia and selected international markets.",
  keywords: [
    "executive search Singapore",
    "specialist recruitment Singapore",
    "talent solutions Singapore",
    "recruitment firm Singapore",
    "headhunter Singapore",
    "talent advisory Singapore",
    "regional recruitment Singapore",
    "Southeast Asia recruitment firm",
  ],
  openGraph: {
    title: "Solutions | White Gate Partners",
    description:
      "Executive Search · Specialist Recruitment · Talent Solutions across Singapore, Southeast Asia and selected international markets.",
    url: "https://whitegatepartners.sg/services",
  },
  alternates: { canonical: "https://whitegatepartners.sg/services" },
};

export default function SolutionsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">What we do</span>
          <h1>
            Three solutions, delivered with{" "}
            <em>experience and accountability.</em>
          </h1>
          <p className="lede">
            Across executive search, specialist recruitment and talent
            solutions, we bring the same standard of context, judgement and
            accountability to every engagement — whether supporting a
            leadership search, specialist role, market mapping exercise or
            broader talent project.
          </p>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="solution-cards">
            <div className="solution-card">
              <span className="sc-num">01</span>
              <h3>
                Executive <em>Search</em>
              </h3>
              <p>
                Bespoke search for senior, confidential and business-critical
                roles, supported by targeted market mapping, discreet
                outreach and careful assessment.
              </p>
              <a href="#executive-search" className="explore">
                Explore in detail <span className="ar">→</span>
              </a>
            </div>
            <div className="solution-card">
              <span className="sc-num">02</span>
              <h3>
                Specialist <em>Recruitment</em>
              </h3>
              <p>
                Structured specialist recruitment for professional,
                specialist and mid-to-senior roles, built around market
                knowledge, candidate pipelines and practical delivery
                models.
              </p>
              <a href="#specialist-recruitment" className="explore">
                Explore in detail <span className="ar">→</span>
              </a>
            </div>
            <div className="solution-card">
              <span className="sc-num">03</span>
              <h3>
                Talent <em>Solutions</em>
              </h3>
              <p>
                Agile and scalable talent solutions designed around evolving
                business needs, including contract hiring, project
                recruitment, market mapping, hiring advisory and regional
                talent intelligence.
              </p>
              <a href="#talent-solutions" className="explore">
                Explore in detail <span className="ar">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED DETAIL */}
      <section className="block" style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head">
            <span className="num">§ 04</span>
            <div>
              <h2>
                A closer look at <em>each solution.</em>
              </h2>
            </div>
          </div>

          <div className="svc-expanded" id="executive-search">
            <div className="svc-expanded-grid">
              <div>
                <div className="svc-num">01</div>
                <h3>Executive Search</h3>
                <p>
                  Bespoke search for senior, confidential and
                  business-critical appointments where targeted market
                  mapping, discreet outreach and careful assessment matter.
                  We help clients identify, engage and assess leaders and
                  senior professionals who may not be actively visible in the
                  market.
                </p>
                <ul>
                  <li>C-suite and leadership appointments</li>
                  <li>Functional heads and senior individual contributors</li>
                  <li>Country, regional and general management roles</li>
                  <li>Confidential and succession-related searches</li>
                  <li>Market mapping and targeted candidate outreach</li>
                  <li>Retained, exclusive or tailored search arrangements</li>
                </ul>
              </div>
              <div className="svc-expanded-photo">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop"
                  alt="Executive Search"
                  fill
                  sizes="40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="svc-expanded" id="specialist-recruitment">
            <div className="svc-expanded-grid">
              <div className="svc-expanded-photo">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80&auto=format&fit=crop"
                  alt="Specialist Recruitment"
                  fill
                  sizes="40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div className="svc-num">02</div>
                <h3>Specialist Recruitment</h3>
                <p>
                  Structured recruitment for professional, specialist and
                  mid-to-senior roles where market knowledge, candidate
                  engagement and role fit are critical. We support clients
                  through targeted sourcing, practical assessment and
                  sustainable candidate pipelines across business-critical
                  functions.
                </p>
                <ul>
                  <li>Professional, specialist and mid-to-senior appointments</li>
                  <li>Technology, engineering and product specialists</li>
                  <li>Sales, marketing, commercial and business development roles</li>
                  <li>Supply chain, logistics and procurement roles</li>
                  <li>Regulatory, quality, clinical and medical affairs roles</li>
                  <li>Finance, accounting and corporate functions</li>
                  <li>Legal, compliance, HR and people operations roles</li>
                  <li>Permanent, contract and interim hiring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="svc-expanded" id="talent-solutions">
            <div className="svc-expanded-grid">
              <div>
                <div className="svc-num">03</div>
                <h3>Talent Solutions</h3>
                <p>
                  Agile and scalable talent solutions designed around
                  evolving business needs, including contract hiring, project
                  recruitment, market mapping, hiring advisory and regional
                  talent intelligence. We structure each engagement around
                  the client&apos;s priorities, timeline and level of support
                  required.
                </p>
                <ul>
                  <li>Contract hiring and project recruitment support</li>
                  <li>Market mapping and regional talent intelligence</li>
                  <li>Hiring advisory, role calibration and talent pipeline planning</li>
                  <li>
                    Fractional HR support through our network of experienced
                    HR leaders and practitioners
                  </li>
                  <li>
                    Flexible engagement models based on project scope,
                    timeline and business priorities
                  </li>
                </ul>
              </div>
              <div className="svc-expanded-photo">
                <Image
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=900&q=80&auto=format&fit=crop"
                  alt="Talent Solutions"
                  fill
                  sizes="40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="block process-section" id="how-we-work">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow on-dark">How we work</span>
              <h2>
                A clear <em>process</em>, adapted to each search or talent
                project.
              </h2>
              <p className="sub">
                Every engagement starts with context. We define what success
                looks like, map the relevant market, engage the right talent
                and stay close to the process from briefing to decision.
              </p>
            </div>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="pn">01</span>
              <h3>Understand the Context</h3>
              <p>
                We clarify the business need, role requirements, team
                structure, reporting line, compensation range, success
                profile and organisational context before starting the work.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">02</span>
              <h3>Map the Market</h3>
              <p>
                We identify relevant companies, talent pools, candidate
                segments and market conditions across Singapore, Southeast
                Asia or selected international markets.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">03</span>
              <h3>Engage the Right Talent</h3>
              <p>
                We approach suitable candidates directly and professionally,
                including passive talent who may not be actively looking.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">04</span>
              <h3>Assess Fit and Motivation</h3>
              <p>
                We evaluate experience, capability, motivation, communication
                style, compensation expectations, cultural alignment and fit
                with the organisation&apos;s environment.
              </p>
            </div>
            <div className="process-step">
              <span className="pn">05</span>
              <h3>Support the Decision</h3>
              <p>
                We manage feedback, interview coordination, offer discussions
                and practical follow-through until the assignment or project
                reaches a clear outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TALENT COVERAGE */}
      <section className="block coverage-section" id="talent-coverage">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">Talent coverage</span>
              <h2>
                Hiring and talent coverage across selected markets, sectors
                and functions.
              </h2>
              <p className="sub">
                White Gate Partners supports search, recruitment and talent
                assignments across selected markets, business-critical
                sectors and specialist functions where targeted talent access
                and market understanding matter.
              </p>
            </div>
          </div>
          <div className="coverage-grid">
            <div className="coverage-col">
              <h3>Markets</h3>
              <ul>
                <li>Singapore</li>
                <li>Malaysia</li>
                <li>Southeast Asia</li>
                <li>China</li>
                <li>Europe</li>
                <li>Selected international markets</li>
              </ul>
            </div>
            <div className="coverage-col">
              <h3>Sector Coverage</h3>
              <ul>
                <li>Technology &amp; AI</li>
                <li>Life Sciences &amp; Healthcare</li>
                <li>Manufacturing &amp; Semiconductor</li>
                <li>Supply Chain &amp; Logistics</li>
                <li>Financial Services &amp; Insurance</li>
                <li>Professional Services</li>
                <li>Chemicals &amp; Specialty Materials</li>
                <li>Energy &amp; Renewables</li>
              </ul>
            </div>
            <div className="coverage-col">
              <h3>Functional Coverage</h3>
              <ul>
                <li>Leadership &amp; General Management</li>
                <li>Sales &amp; Commercial</li>
                <li>Finance &amp; Accounting</li>
                <li>Legal, Compliance &amp; Risk</li>
                <li>HR &amp; Operations</li>
                <li>Technology &amp; Engineering</li>
                <li>Supply Chain &amp; Procurement</li>
                <li>Regulatory, Quality &amp; Clinical</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>
                Let&apos;s talk about <em>who you need next.</em>
              </h2>
              <p>
                Whether you are planning a leadership search, scaling a
                function or reviewing broader talent needs, we&apos;d
                welcome the conversation.
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
