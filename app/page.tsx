import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Gate Partners | Executive Search & Recruitment Singapore",
  description:
    "Talent with intention. White Gate Partners is a boutique executive search and specialist recruitment firm in Singapore. We place leaders and specialists across Finance, Compliance, Sales and HR for startups and MNCs throughout Southeast Asia.",
  keywords: [
    "executive search Singapore",
    "recruitment agency Singapore",
    "headhunter Singapore",
    "specialist recruitment Singapore",
    "talent solutions Singapore",
    "recruitment firm Singapore",
  ],
  openGraph: {
    title: "White Gate Partners | Executive Search & Recruitment Singapore",
    description:
      "Boutique executive search and specialist recruitment in Singapore. Talent, with intention.",
    url: "https://whitegatepartners.sg",
  },
  alternates: { canonical: "https://whitegatepartners.sg" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-top">
            <span className="kick">White Gate Partners — Singapore</span>
            <span className="idx">Recruitment / Advisory / Consulting</span>
          </div>
          <h1>
            Talent,
            <br />
            <span className="it ac">with</span>{" "}
            <span className="it">intention.</span>
          </h1>
          <div className="hero-lower">
            <p className="lede">
              A Singapore recruitment, talent advisory and management consulting
              practice for the startups and multinationals shaping what comes
              next.
            </p>
            <div className="hero-actions">
              <Link className="biglink" href="/services">
                For employers <span className="ar">→</span>
              </Link>
              <Link className="biglink" href="/contact">
                For candidates <span className="ar">→</span>
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
            <span className="cap">The work of building a team</span>
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <div className="strip">
        <div className="wrap">
          <div className="strip-inner">
            <span className="strip-lead">Searches we run across —</span>
            <div className="strip-tags">
              <span>Accounting &amp; Finance</span>
              <span>Compliance &amp; Risk</span>
              <span>Sales &amp; Commercial</span>
              <span>Startups to MNCs</span>
              <span>HR &amp; Operations</span>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="block" id="services">
        <div className="wrap">
          <div className="head">
            <span className="num">§ 01 — 03</span>
            <div>
              <h2>
                Three practices that{" "}
                <em>answer to one another.</em>
              </h2>
              <p className="sub">
                We pair a recruiter&apos;s reach with a consultant&apos;s
                rigour — so the people we place and the strategy we shape pull
                in the same direction.
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
                  Retained and exclusive searches for the leaders who define a
                  function — directors, department heads and C-suite
                  appointments.
                </p>
                <div className="ts">
                  <b>C-Suite &amp; Board</b>
                  <b>Functional Heads</b>
                  <b>Retained</b>
                  <b>Permanent</b>
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
                  Qualified professionals placed with precision — from
                  mid-level practitioners to senior specialists across Finance,
                  Compliance, Sales and more.
                </p>
                <div className="ts">
                  <b>Accounting</b>
                  <b>Compliance</b>
                  <b>Sales</b>
                  <b>Permanent</b>
                  <b>Contract</b>
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
                  Advisory and consulting beyond the brief — hiring strategy,
                  org design, salary benchmarking and HR operating models for
                  scaling teams.
                </p>
                <div className="ts">
                  <b>Hiring strategy</b>
                  <b>Salary mapping</b>
                  <b>Org design</b>
                  <b>HR models</b>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48 }}>
            <Link
              className="biglink"
              href="/services"
              style={{ maxWidth: 400 }}
            >
              Explore our solutions <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="block approach-section" id="approach">
        <div className="wrap">
          <div className="head">
            <span className="num">§ 04</span>
            <div>
              <h2>
                How we <em>work.</em>
              </h2>
              <p className="sub">
                We measure ourselves by the careers we shape and the teams that
                endure — not by the volume of CVs we send.
              </p>
            </div>
          </div>
          <div className="vals">
            <div className="val-card">
              <div className="vn">i</div>
              <h3>Precision over volume</h3>
              <p>
                The right few, not the available many. Every introduction is
                deliberate.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">ii</div>
              <h3>Local depth, global reach</h3>
              <p>
                Rooted in Singapore&apos;s market, fluent in multinational
                expectations.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iii</div>
              <h3>Long-term partnership</h3>
              <p>
                We learn your business so each hire compounds your momentum.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iv</div>
              <h3>Discretion &amp; integrity</h3>
              <p>
                Confidential searches; candidates treated as peers, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="block about-home" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-ph">
              <Image
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1100&q=80&auto=format&fit=crop"
                alt="A White Gate professional"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="tab">The firm</span>
            </div>
            <div>
              <h2>
                A Singapore practice for the{" "}
                <em>next generation of teams.</em>
              </h2>
              <p>
                White Gate Partners works at the seam between hiring and
                strategy — helping growing startups and established
                multinationals attract, structure and keep the people who carry
                them forward.
              </p>
              <p>
                We were founded on a simple conviction: great hiring is an act
                of judgement, not transaction. So we operate as a partner, not
                a vendor.
              </p>
              <dl className="about-dl">
                <div>
                  <dt>Founded</dt>
                  <dd>1 January 2026</dd>
                </div>
                <div>
                  <dt>Located</dt>
                  <dd>The Iveria · Kim Yam Road</dd>
                </div>
                <div>
                  <dt>Entity</dt>
                  <dd>White Gate Partners Pte. Ltd.</dd>
                </div>
                <div>
                  <dt>UEN</dt>
                  <dd>202600064K</dd>
                </div>
              </dl>
              <div style={{ marginTop: 36 }}>
                <Link
                  className="biglink"
                  href="/about"
                  style={{ maxWidth: 340 }}
                >
                  Meet the team <span className="ar">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE SPLIT */}
      <section className="block split-section" id="audience">
        <div className="wrap">
          <div className="head">
            <span className="num">§ 05</span>
            <div>
              <h2>
                Whichever side of the gate{" "}
                <em>you stand on.</em>
              </h2>
            </div>
          </div>
          <div className="split-grid">
            <div className="aud">
              <span className="t">For Employers</span>
              <h3>
                Build the team <em>behind the growth.</em>
              </h3>
              <p>
                From a first compliance lead to a full commercial function —
                people who fit the role and the future, plus the counsel to keep
                them.
              </p>
              <Link className="biglink" href="/contact">
                Start a search <span className="ar">→</span>
              </Link>
            </div>
            <div className="aud">
              <span className="t">For Candidates</span>
              <h3>
                Find the move <em>worth making.</em>
              </h3>
              <p>
                We represent you to organisations worth your ambition — honest
                counsel, total discretion, a real read on where you&apos;ll do
                your best work.
              </p>
              <Link className="biglink" href="/contact">
                Introduce yourself <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="block quotes-section">
        <div className="wrap">
          <div className="pull">
            <span className="qmark">&ldquo;</span>
            <blockquote>
              They understood our compliance function before we did.
            </blockquote>
            <div className="who">
              <b>Rachel Tan</b>
              <span>Chief Operating Officer · Regional FinTech scale-up</span>
            </div>
          </div>
          <div className="mini">
            <div className="m">
              <blockquote>
                &ldquo;The most honest recruiter I&apos;ve worked with — they
                told me which roles weren&apos;t right, so I trusted the one
                that was.&rdquo;
              </blockquote>
              <div className="who">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop"
                  alt="Daniel Lim"
                  width={46}
                  height={46}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <b>Daniel Lim</b>
                  <span>Finance Director · Placed candidate</span>
                </div>
              </div>
            </div>
            <div className="m">
              <blockquote>
                &ldquo;We came for one hire and stayed for the advisory. White
                Gate reshaped how our whole team is structured.&rdquo;
              </blockquote>
              <div className="who">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=crop"
                  alt="Priya Menon"
                  width={46}
                  height={46}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <b>Priya Menon</b>
                  <span>Founder · Logistics startup</span>
                </div>
              </div>
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
                Hiring, scaling a function, or weighing your own next move —
                we&apos;d welcome the conversation.
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
