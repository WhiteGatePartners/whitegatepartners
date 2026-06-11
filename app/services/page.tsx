import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Executive Search, Specialist Recruitment & Talent Solutions",
  description:
    "Three solutions, one standard. Executive Search for senior leadership, Specialist Recruitment across Finance, Compliance and Sales, and Talent Solutions including HR advisory and org design — Singapore and Southeast Asia.",
  keywords: [
    "executive search Singapore",
    "specialist recruitment Singapore",
    "talent solutions Singapore",
    "recruitment firm Singapore",
    "headhunter Singapore",
    "HR consulting Singapore",
    "talent advisory Singapore",
  ],
  openGraph: {
    title: "Solutions | White Gate Partners",
    description:
      "Executive Search · Specialist Recruitment · Talent Solutions — Singapore and Southeast Asia.",
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
            Three solutions, <em>one standard.</em>
          </h1>
          <p className="lede">
            We pair the reach of a recruitment firm with the rigour of a
            consultancy — so the people we place and the strategies we shape
            move your organisation forward together.
          </p>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <div className="strip">
        <div className="wrap">
          <div className="strip-inner">
            <span className="strip-lead">Solutions covering —</span>
            <div className="strip-tags">
              <span>Accounting &amp; Finance</span>
              <span>Compliance &amp; Risk</span>
              <span>Sales &amp; Commercial</span>
              <span>HR &amp; Operations</span>
              <span>Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* SOLUTIONS LIST */}
      <section className="block">
        <div className="wrap">
          <div className="head">
            <span className="num">§ 01 — 03</span>
            <div>
              <h2>
                Three solutions that <em>answer to one another.</em>
              </h2>
              <p className="sub">
                Every engagement draws on all three disciplines. A search
                becomes advisory when the brief needs rethinking; advisory work
                leads to a search when the strategy is clear.
              </p>
            </div>
          </div>
          <div className="svc-list">
            <div className="svc-row" id="executive-search">
              <span className="rn">01</span>
              <h3>
                Executive <em>Search</em>
              </h3>
              <div className="body">
                <p>
                  Retained and exclusive searches for the leaders who define a
                  function — directors, department heads and C-suite
                  appointments. The best candidates are rarely looking; we find
                  them anyway.
                </p>
                <div className="ts">
                  <b>C-Suite &amp; Board</b>
                  <b>Functional Heads</b>
                  <b>Regional Mandates</b>
                  <b>Retained</b>
                  <b>Permanent</b>
                </div>
              </div>
            </div>
            <div className="svc-row" id="specialist-recruitment">
              <span className="rn">02</span>
              <h3>
                Specialist <em>Recruitment</em>
              </h3>
              <div className="body">
                <p>
                  Qualified professionals placed with the depth of assessment
                  that specialist roles demand — from mid-level practitioners to
                  senior individual contributors across our core practice areas.
                </p>
                <div className="ts">
                  <b>Accounting</b>
                  <b>Compliance</b>
                  <b>Sales &amp; commercial</b>
                  <b>Permanent</b>
                  <b>Contract</b>
                  <b>Interim</b>
                </div>
              </div>
            </div>
            <div className="svc-row" id="talent-solutions">
              <span className="rn">03</span>
              <h3>
                Talent <em>Solutions</em>
              </h3>
              <div className="body">
                <p>
                  Beyond the brief — hiring strategy, salary benchmarking,
                  employer brand and HR operating model design for organisations
                  that want to build deliberately, not reactively.
                </p>
                <div className="ts">
                  <b>Hiring strategy</b>
                  <b>Salary mapping</b>
                  <b>Employer brand</b>
                  <b>Org design</b>
                  <b>HR models</b>
                </div>
              </div>
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
                A closer look at <em>how we work.</em>
              </h2>
            </div>
          </div>

          <div className="svc-expanded">
            <div className="svc-expanded-grid">
              <div>
                <div className="svc-num">01</div>
                <h3>Executive Search</h3>
                <p>
                  At director level and above, the best candidates are not on
                  job boards. We run retained and exclusive searches, mapping
                  the available leadership talent across Singapore and the
                  region before approaching anyone.
                </p>
                <ul>
                  <li>C-Suite &amp; board-level appointments</li>
                  <li>Department &amp; function heads</li>
                  <li>Regional leadership roles</li>
                  <li>Divisional directors &amp; general managers</li>
                  <li>Confidential &amp; succession searches</li>
                  <li>Retained and exclusive mandates</li>
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

          <div className="svc-expanded">
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
                  The professionals who keep your organisation running — placed
                  with the rigour that specialist roles demand. We cover the
                  full spectrum of mid to senior appointments across our core
                  practice areas.
                </p>
                <ul>
                  <li>Accounting &amp; finance professionals</li>
                  <li>Compliance, legal &amp; risk specialists</li>
                  <li>Sales, commercial &amp; BD leaders</li>
                  <li>HR, people &amp; operations roles</li>
                  <li>Technology &amp; product specialists</li>
                  <li>Permanent, contract &amp; interim placements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="svc-expanded">
            <div className="svc-expanded-grid">
              <div>
                <div className="svc-num">03</div>
                <h3>Talent Solutions</h3>
                <p>
                  When the question is bigger than &ldquo;who do we hire
                  next?&rdquo; — from a focused hiring strategy sprint to a
                  multi-year people function advisory partnership, always with
                  a practitioner, not a generalist.
                </p>
                <ul>
                  <li>Hiring strategy &amp; workforce planning</li>
                  <li>Market &amp; salary benchmarking</li>
                  <li>Employer brand positioning &amp; audits</li>
                  <li>Organisation design &amp; restructuring</li>
                  <li>HR operating model design</li>
                  <li>Compensation &amp; benefits frameworks</li>
                  <li>Scale-up readiness &amp; people function build-outs</li>
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

      {/* APPROACH */}
      <section className="block approach-section">
        <div className="wrap">
          <div className="head">
            <span className="num">§ 05</span>
            <div>
              <h2>
                How a White Gate search <em>actually works.</em>
              </h2>
              <p className="sub">
                Every engagement follows a disciplined process — from brief to
                placement and beyond.
              </p>
            </div>
          </div>
          <div className="vals">
            <div className="val-card">
              <div className="vn">i</div>
              <h3>Brief &amp; discovery</h3>
              <p>
                We start by understanding not just the role, but the team, the
                culture and the trajectory.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">ii</div>
              <h3>Market mapping</h3>
              <p>
                We map the available talent before approaching anyone — giving
                you an honest picture of what&apos;s achievable.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iii</div>
              <h3>Considered shortlist</h3>
              <p>
                Three to five candidates, each thoroughly interviewed — never
                a stack of CVs forwarded without judgement.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iv</div>
              <h3>Placement &amp; beyond</h3>
              <p>
                We stay involved through offer, onboarding and the first three
                months — because that&apos;s when a placement either takes
                root or doesn&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE SPLIT */}
      <section className="block split-section">
        <div className="wrap">
          <div className="head">
            <span className="num">§ 06</span>
            <div>
              <h2>
                Whichever side of the gate <em>you stand on.</em>
              </h2>
            </div>
          </div>
          <div className="split-grid">
            <div className="aud" id="employers">
              <span className="t">For Employers</span>
              <h3>
                Build the team <em>behind the growth.</em>
              </h3>
              <p>
                Whether you need a single specialist or a full function, we
                bring a considered approach to every brief — qualifying
                candidates thoroughly and presenting only those worth your
                time.
              </p>
              <Link className="biglink" href="/contact">
                Start a search <span className="ar">→</span>
              </Link>
            </div>
            <div className="aud" id="candidates">
              <span className="t">For Candidates</span>
              <h3>
                Find the move <em>worth making.</em>
              </h3>
              <p>
                We represent professionals to organisations that match their
                ambition — always with honest counsel and total discretion,
                whether or not you are actively searching.
              </p>
              <Link className="biglink" href="/contact">
                Introduce yourself <span className="ar">→</span>
              </Link>
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
                Ready to <em>start a search?</em>
              </h2>
              <p>
                Tell us what you&apos;re looking for and we&apos;ll be in
                touch within one business day.
              </p>
            </div>
            <Link className="biglink" href="/contact" style={{ maxWidth: 320, flexShrink: 0 }}>
              Get in touch <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
