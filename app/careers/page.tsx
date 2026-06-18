import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join White Gate Partners Singapore",
  description:
    "Join White Gate Partners as a recruitment consultant or talent advisor in Singapore. Build your career in executive search and specialist recruitment with a growing boutique firm. Open roles based in Singapore.",
  keywords: [
    "recruitment consultant jobs Singapore",
    "talent advisor jobs Singapore",
    "executive search careers Singapore",
    "careers White Gate Partners",
    "headhunter jobs Singapore",
  ],
  openGraph: {
    title: "Careers at White Gate Partners",
    description:
      "Join our growing team in Singapore. Open roles in executive search and specialist recruitment.",
    url: "https://whitegatepartners.sg/careers",
  },
  alternates: { canonical: "https://whitegatepartners.sg/careers" },
};

const benefits = [
  {
    n: "01",
    title: "Partner-level mentorship",
    desc: "Every consultant works directly with a partner on live searches — you learn by doing, with someone alongside you.",
  },
  {
    n: "02",
    title: "Clear progression",
    desc: "From Consultant to Senior Consultant to Principal to Partner — a transparent path with defined milestones, not vague promises.",
  },
  {
    n: "03",
    title: "Competitive package",
    desc: "A strong base, performance-linked commission and benefits benchmarked against the top tier of Singapore's professional services market.",
  },
  {
    n: "04",
    title: "Small team, real impact",
    desc: "In a firm our size, your work is visible. Good ideas are heard and great work is noticed — by partners and clients alike.",
  },
  {
    n: "05",
    title: "Thoughtful culture",
    desc: "We work hard on interesting problems. We do not celebrate busyness for its own sake or reward volume over quality.",
  },
  {
    n: "06",
    title: "Singapore & beyond",
    desc: "Based in the heart of Singapore, with growing exposure to regional clients across Southeast Asia and the wider APAC market.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Join us</span>
          <h1>
            Shape the future of <em>work — from the inside.</em>
          </h1>
          <p className="lede">
            We are building a firm that thinks differently about talent. If you
            want to do recruitment and advisory work that actually matters, we
            would like to meet you.
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="block about-home">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-ph">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1100&q=80&auto=format&fit=crop"
                alt="The White Gate Partners team"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="tab">Our culture</span>
            </div>
            <div>
              <h2>
                Rigorous people doing <em>rigorous work.</em>
              </h2>
              <p>
                We hire consultants the same way we place them — deliberately.
                We are not looking for volume-driven recruiters who want to
                send as many CVs as possible. We are looking for people who
                find the work itself interesting.
              </p>
              <p>
                White Gate Partners is a small team, which means the work you
                do will be visible and the relationships you build will be
                real. There is no hiding in the middle of a 200-person desk.
              </p>
              <p>
                We value curiosity, intellectual honesty and the ability to
                disagree well. If that sounds like the kind of place you want
                to work, read on.
              </p>
              <Link
                className="biglink"
                href="/openings"
                style={{ display: "inline-flex", marginTop: 32 }}
              >
                See current openings <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="block" style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head">
            <span className="num">§ 01</span>
            <div>
              <h2>
                What we offer the <em>people who join us.</em>
              </h2>
              <p className="sub">
                We have tried to build the environment we would have wanted
                when we were starting out.
              </p>
            </div>
          </div>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div className="benefit" key={b.n}>
                <div className="bn">{b.n}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
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
                The qualities that <em>matter most here.</em>
              </h2>
            </div>
          </div>
          <div className="vals">
            <div className="val-card">
              <div className="vn">i</div>
              <h3>Intellectual curiosity</h3>
              <p>
                You want to understand the businesses and people you work with
                — not just fill a brief.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">ii</div>
              <h3>Commercial instinct</h3>
              <p>
                You understand that the firm needs to grow and you see your
                role in making that happen.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iii</div>
              <h3>Honest communication</h3>
              <p>
                You say what you think — to colleagues, clients and candidates
                — even when it is not the easy thing to say.
              </p>
            </div>
            <div className="val-card">
              <div className="vn">iv</div>
              <h3>Long-term thinking</h3>
              <p>
                You care about the reputation you build over years, not just
                the numbers you hit this quarter.
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
                Ready to <em>take a look?</em>
              </h2>
              <p>
                Browse our open roles or introduce yourself — we are always
                interested in exceptional people.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, flexShrink: 0 }}>
              <Link className="biglink" href="/openings" style={{ maxWidth: 340 }}>
                Current openings <span className="ar">→</span>
              </Link>
              <Link className="biglink" href="/contact" style={{ maxWidth: 340 }}>
                Introduce yourself <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
