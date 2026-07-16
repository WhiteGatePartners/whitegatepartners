import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { teamMembersQuery } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import TeamBio from "@/app/components/TeamBio";

export const metadata: Metadata = {
  title: "About White Gate Partners | Regional Executive Search & Specialist Recruitment",
  description:
    "Learn about White Gate Partners, a Singapore-based executive search, specialist recruitment and talent solutions firm with regional hiring experience across Malaysia, Thailand, the Philippines, Australia and Europe.",
  keywords: [
    "regional recruitment firm Singapore",
    "Southeast Asia recruitment firm",
    "Malaysia recruitment support",
    "executive search firm Singapore",
    "specialist recruitment Singapore",
    "talent solutions Singapore",
    "cross-border recruitment Singapore",
  ],
  openGraph: {
    title: "About White Gate Partners | Regional Executive Search & Specialist Recruitment",
    description:
      "A Singapore-based executive search, specialist recruitment and talent solutions firm supporting regional and cross-border hiring.",
    url: "https://whitegatepartners.sg/about",
  },
  alternates: { canonical: "https://whitegatepartners.sg/about" },
};

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo?: { asset: { _ref: string }; alt?: string };
};

export default async function AboutPage() {
  const team: TeamMember[] = await client.fetch(teamMembersQuery);
  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Who we are</span>
          <h1>
            Built on judgement, <em>not transaction.</em>
          </h1>
          <p className="lede">
            A Singapore-based partnership founded on the conviction that great
            hiring demands the same rigour as great strategy — and that the two
            should never be separated.
          </p>
          <p className="lede">
            White Gate Partners is a Singapore-based executive search,
            specialist recruitment and talent solutions firm established on a
            simple belief: great hiring requires business context, market
            understanding and careful judgement — not transactional
            recruitment.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="block about-home">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-ph">
              <Image
                src="/aboutus.jpeg"
                alt="White Gate Partners office"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="tab">Our story</span>
            </div>
            <div>
              <h2>Beyond the Brief, Into the Business.</h2>
              <p>
                White Gate Partners is a Singapore-based executive search,
                specialist recruitment and talent solutions firm established
                to offer companies a more considered recruitment partner —
                one that asks better questions, moves with purpose and
                maintains hands-on involvement from briefing to outcome.
              </p>
              <p>
                We work with clients beyond single transactions, building
                long-term partnerships that support different stages of
                growth, hiring and talent needs. With a lean boutique model,
                we are able to keep senior-level involvement close to each
                engagement while remaining commercially flexible in how we
                structure our work around client priorities, business context
                and market realities.
              </p>
              <p>
                Our name refers to the moment of judgement at the threshold —
                when the right person meets the right opportunity. We take that
                moment seriously.
              </p>
              <dl className="about-dl">
                <div>
                  <dt>Licensed</dt>
                  <dd>EA Comprehensive Licence</dd>
                </div>
                <div>
                  <dt>Solutions</dt>
                  <dd>Executive search · Specialist recruitment · Talent solutions</dd>
                </div>
                <div>
                  <dt>Partnership</dt>
                  <dd>Building long term client relationships</dd>
                </div>
                <div>
                  <dt>Engagement</dt>
                  <dd>Clear ownership from briefing through delivery</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="block" style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head">
            <div>
              <h2>
                Experienced talent professionals with{" "}
                <em>market depth.</em>
              </h2>
              <p className="sub">
                Our work is shaped by years of client delivery, candidate
                engagement and regional market experience across different
                sectors, functions and stages of growth. We look beyond the
                role brief to understand the wider business context, whether
                supporting leadership hiring, specialist recruitment, market
                mapping, project recruitment or broader talent needs.
              </p>
              <p className="sub">
                Clients work directly with the people leading each
                engagement, not layers of junior consultants removed from the
                brief.
              </p>
            </div>
          </div>
          <div className="team-grid">
            {team.map((member) => {
              const photoSrc = member.photo
                ? urlForImage(member.photo).width(600).url()
                : null;
              return (
                <div className="team-card" key={member._id}>
                  <div className="tc-photo">
                    {photoSrc && (
                      <Image
                        src={photoSrc}
                        alt={member.photo?.alt ?? member.name}
                        fill
                        sizes="20vw"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className="tc-body">
                    <div className="tc-name">{member.name}</div>
                    <div className="tc-role">{member.role}</div>
                    <TeamBio bio={member.bio} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="block approach-section">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>
                What we believe about hiring — <em>and people.</em>
              </h2>
              <p className="sub">
                Four principles that shape the way we approach search,
                recruitment, talent advice and long-term client
                relationships.
              </p>
            </div>
          </div>
          <div className="vals">
            <div className="val-card">
              <div className="vn">i</div>
              <h3>Judgement before volume</h3>
              <p>
                We do not measure value by the number of CVs sent. We focus
                on relevance, context and the quality of each conversation.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">ii</div>
              <h3>Candour over comfort</h3>
              <p>
                We give practical feedback when a brief, salary range or
                candidate fit needs to be reconsidered. Honest advice helps
                clients make better decisions.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iii</div>
              <h3>Partnership beyond the hire</h3>
              <p>
                We aim to build long-term client relationships, supporting
                hiring and talent needs across different stages of growth.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iv</div>
              <h3>Market context in every recommendation</h3>
              <p>
                Every recommendation is shaped by real market conditions —
                candidate availability, compensation expectations, cultural
                fit and regional hiring dynamics.
              </p>
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
                Work with people who <em>understand the difference.</em>
              </h2>
              <p>
                Whether you are hiring, reviewing broader talent needs or
                exploring client referral incentives or independent recruiter
                collaborations, we&apos;d welcome the conversation.
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
