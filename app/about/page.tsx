import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { teamMembersQuery } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

export const metadata: Metadata = {
  title: "About Us | Boutique Executive Search Firm, Singapore",
  description:
    "White Gate Partners is a boutique executive search and talent solutions firm based at The Iveria, Singapore. We bring a recruiter's reach and a consultant's rigour to every engagement across Singapore and Southeast Asia.",
  keywords: [
    "executive search firm Singapore",
    "boutique recruitment Singapore",
    "talent advisory Singapore",
    "recruitment firm Singapore",
    "headhunter Singapore",
  ],
  openGraph: {
    title: "About Us | White Gate Partners",
    description:
      "A boutique executive search and specialist recruitment firm in Singapore, with regional coverage across Southeast Asia.",
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
          <span className="kick">The firm</span>
          <h1>
            Built on judgement, <em>not transaction.</em>
          </h1>
          <p className="lede">
            A Singapore-based partnership founded on the conviction that great
            hiring demands the same rigour as great strategy — and that the two
            should never be separated.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="block about-home">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-ph">
              <Image
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1100&q=80&auto=format&fit=crop"
                alt="White Gate Partners office"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="tab">Our story</span>
            </div>
            <div>
              <h2>
                A practice for the <em>next generation of teams.</em>
              </h2>
              <p>
                White Gate Partners was founded in January 2026 with a clear
                purpose: to offer Singapore&apos;s growing organisations a
                different kind of recruitment partner. One that asks harder
                questions, moves more deliberately, and stays longer.
              </p>
              <p>
                We work at the intersection of hiring and strategy — helping
                both startups finding their footing and multinationals
                navigating complexity to attract, structure and retain the
                people who carry them forward.
              </p>
              <p>
                Our name refers to the moment of judgement at the threshold —
                when the right person meets the right opportunity. We take that
                moment seriously.
              </p>
              <dl className="about-dl">
                <div>
                  <dt>Founded</dt>
                  <dd>1 January 2026</dd>
                </div>
                <div>
                  <dt>Headquarters</dt>
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
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="block" style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head">
            <span className="num">§ 01</span>
            <div>
              <h2>
                Partners and consultants who <em>know the market.</em>
              </h2>
              <p className="sub">
                Every member of our team has spent years embedded in
                Singapore&apos;s talent ecosystem — as recruiters, as HR
                leaders, or as the hiring managers themselves.
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
                        sizes="33vw"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className="tc-body">
                    <div className="tc-name">{member.name}</div>
                    <div className="tc-role">{member.role}</div>
                    <p className="tc-bio">{member.bio}</p>
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
            <span className="num">§ 02</span>
            <div>
              <h2>
                What we believe about hiring — <em>and people.</em>
              </h2>
              <p className="sub">
                Four principles that shape every search, every piece of advice,
                and every relationship we build.
              </p>
            </div>
          </div>
          <div className="vals">
            <div className="val-card">
              <div className="vn">i</div>
              <h3>Rigour before speed</h3>
              <p>
                A wrong hire costs far more than a longer search. We never
                sacrifice process to fill a deadline.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">ii</div>
              <h3>Honesty above comfort</h3>
              <p>
                We tell clients when a brief is unrealistic and candidates when
                a role isn&apos;t right. That&apos;s the only way trust
                compounds.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iii</div>
              <h3>Partnership, not transaction</h3>
              <p>
                We measure our success by where the people we place are in
                three years — not three weeks after joining.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iv</div>
              <h3>Singapore-first perspective</h3>
              <p>
                The nuances of this market — cultural, regulatory, competitive
                — are built into every recommendation we make.
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
                Work with a team that <em>knows the difference.</em>
              </h2>
              <p>
                Whether you are hiring, seeking career counsel, or need
                strategic HR support — we are ready to talk.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, flexShrink: 0 }}>
              <Link className="biglink" href="/contact" style={{ maxWidth: 320 }}>
                Get in touch <span className="ar">→</span>
              </Link>
              <Link className="biglink" href="/careers" style={{ maxWidth: 320 }}>
                Join our team <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
