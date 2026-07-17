import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import TestimonialCarousel from "./components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "White Gate Partners | Regional Executive Search & Specialist Recruitment",
  description:
    "White Gate Partners is a Singapore-based executive search, specialist recruitment and talent solutions firm supporting regional hiring across Southeast Asia, with cross-border experience spanning Malaysia, Thailand, the Philippines, Australia and Europe.",
  keywords: [
    "Southeast Asia recruitment firm",
    "regional recruitment firm Singapore",
    "Malaysia recruitment support",
    "executive search Southeast Asia",
    "specialist recruitment Southeast Asia",
    "cross-border recruitment Singapore",
    "recruitment firm Singapore",
    "headhunter Singapore",
  ],
  openGraph: {
    title: "White Gate Partners | Regional Executive Search & Specialist Recruitment",
    description:
      "Singapore-based executive search, specialist recruitment and talent solutions for regional and cross-border hiring across Southeast Asia and selected international markets.",
    url: "https://whitegatepartners.co",
  },
  alternates: { canonical: "https://whitegatepartners.co" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-top">
            {/* <span className="kick">White Gate Partners — Singapore</span> */}
            <span className="idx">Executive Search | Specialist Recruitment | Talent Solutions</span>
          </div>
          <h1>
            Talent,
            <br />
            <span className="it ac">with</span>{" "}
            <span className="it">intention.</span>
          </h1>
          <div className="hero-lower">
            <p className="lede">
              White Gate Partners is a Singapore-based executive search, specialist recruitment and talent solutions firm
              supporting regional and cross-border hiring across Southeast Asia and selected international markets.
            </p>
            <div className="hero-actions">
              <Link className="biglink" href="/contact">
                Get in touch <span className="ar">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-img">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1900&q=80&auto=format&fit=crop"
              alt="A considered workplace"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="block" id="services">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>
                Three solutions, delivered with{" "}
                <em>experience and accountability.</em>
              </h2>
              <p className="sub">
                We begin by understanding each client&apos;s business and
                talent needs clearly. Once engaged, we stay close to the work
                and follow through with market insight, targeted outreach and
                clear communication.
              </p>
            </div>
          </div>
          <div className="svc-list">
            <div className="svc-row">
              <span className="rn">01</span>
              <h3>
                Executive <em>Search</em>
              </h3>
              <div className="body">
                <p>
                  Bespoke search for senior, confidential and business-critical
                  roles, supported by targeted market mapping, discreet
                  outreach and careful assessment.
                </p>
                <div className="ts">
                  <b>Leadership Hiring</b>
                  <b>Functional Heads</b>
                  <b>C-suite Search</b>
                  <b>Confidential Search</b>
                  <b>Regional Search</b>
                </div>
              </div>
            </div>
            <div className="svc-row">
              <span className="rn">02</span>
              <h3>
                Specialist <em>Recruitment</em>
              </h3>
              <div className="body">
                <p>
                  Structured specialist recruitment for professional,
                  specialist and mid-to-senior roles, built around market
                  knowledge, candidate pipelines and practical delivery
                  models.
                </p>
                <div className="ts">
                  <b>Professional Hiring</b>
                  <b>Specialist Talent</b>
                  <b>Mid-to-Senior Roles</b>
                  <b>Commercial &amp; Corporate</b>
                  <b>Technical Functions</b>
                </div>
              </div>
            </div>
            <div className="svc-row">
              <span className="rn">03</span>
              <h3>
                Talent <em>Solutions</em>
              </h3>
              <div className="body">
                <p>
                  Agile and scalable talent solutions designed around
                  evolving business needs, including contract hiring, project
                  recruitment, market mapping, hiring advisory and regional
                  talent intelligence.
                </p>
                <div className="ts">
                  <b>Contract Hiring</b>
                  <b>Project Recruitment</b>
                  <b>Market Mapping</b>
                  <b>Hiring Advisory</b>
                  <b>Talent Intelligence</b>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48 }}>
            <Link
              className="biglink"
              href="/solutions"
              style={{ maxWidth: 400 }}
            >
              Explore our solutions <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="block support-section" id="who-we-support">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">Who we support</span>
              <h2>
                Supporting companies across growth stages, markets and{" "}
                <em>expansion</em> needs.
              </h2>
              <p className="sub">
                We work with startups, SMEs, regional businesses,
                multinational companies, and China-linked or international
                companies expanding across Southeast Asia and selected
                cross-border markets to identify and secure professional,
                specialist and leadership talent.
              </p>
            </div>
          </div>
          <div className="support-grid">
            <div className="support-card">
              <span className="sn">01</span>
              <h3>Startups &amp; Scale-ups</h3>
              <p>
                For growing companies building early leadership, commercial,
                operational or specialist teams where every hire has direct
                business impact.
              </p>
            </div>
            <div className="support-card">
              <span className="sn">02</span>
              <h3>SMEs &amp; Founder-led Businesses</h3>
              <p>
                For established local and regional businesses strengthening
                management teams, professionalising functions or hiring for
                business-critical roles.
              </p>
            </div>
            <div className="support-card">
              <span className="sn">03</span>
              <h3>New Market Entrants &amp; Regional Expansion</h3>
              <p>
                For companies entering or scaling across Southeast Asia that
                need local market understanding, cross-border hiring support
                and access to regional talent.
              </p>
            </div>
            <div className="support-card">
              <span className="sn">04</span>
              <h3>Regional Businesses &amp; Multinational Organisations</h3>
              <p>
                For larger or multi-market organisations seeking discreet
                search, specialist recruitment or targeted support for
                leadership, functional and niche professional roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WHITE GATE PARTNERS */}
      <section className="block why-section" id="why-white-gate">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-ph">
              <Image
                src="/business.jpeg"
                alt="White Gate Partners team at work"
                fill
                sizes="45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow">Why White Gate Partners</span>
              <h2 className="why-h2">
                Experience, market insight and accountable{" "}
                <em>follow-through.</em>
              </h2>
              <p className="why-lede">
                We bring senior-level talent experience, practical market
                understanding and regional hiring exposure to each client
                engagement. Whether supporting a leadership search, specialist
                role or broader talent project, we take time to understand the
                business context, engage the right talent and communicate
                clearly throughout the process.
              </p>
              <div className="why-points">
                <div className="why-point">
                  <span className="wn">01</span>
                  <div>
                    <h4>Experienced Talent Professionals</h4>
                    <p>
                      Senior-level experience across search, recruitment and
                      talent solutions.
                    </p>
                  </div>
                </div>
                <div className="why-point">
                  <span className="wn">02</span>
                  <div>
                    <h4>Regional &amp; Cross-Border Reach</h4>
                    <p>
                      Singapore-based, with hiring experience and partner
                      reach across Southeast Asia, China and selected
                      international markets.
                    </p>
                  </div>
                </div>
                <div className="why-point">
                  <span className="wn">03</span>
                  <div>
                    <h4>Practical Market Understanding</h4>
                    <p>
                      Guidance informed by candidate conversations, market
                      mapping, compensation expectations and local hiring
                      conditions.
                    </p>
                  </div>
                </div>
                <div className="why-point">
                  <span className="wn">04</span>
                  <div>
                    <h4>Accountable Follow-Through</h4>
                    <p>
                      Once engaged, we stay close to the work with clear
                      communication, targeted outreach and practical
                      feedback.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-cta">
                <span className="t">For employers</span>
                <Link className="biglink" href="/contact" style={{ maxWidth: 320 }}>
                  Discuss your talent needs <span className="ar">→</span>
                </Link>
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

      {/* WHAT CLIENTS SAY */}
      <section className="block quotes-section">
        <div className="wrap">
          <div className="tc-head">
            <span className="eyebrow">What clients say</span>
            <h2>Built on trust, proven through delivery.</h2>
          </div>
          <TestimonialCarousel />
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
