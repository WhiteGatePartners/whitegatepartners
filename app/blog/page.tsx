import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thought Leadership | Singapore Talent & Hiring Insights",
  description:
    "Perspectives from White Gate Partners on executive hiring, talent strategy and Singapore's employment market. Practical insights for employers and candidates across Southeast Asia.",
  keywords: [
    "executive search Singapore insights",
    "talent strategy Singapore",
    "hiring insights Singapore",
    "recruitment advice Singapore",
    "Singapore talent market",
    "Southeast Asia recruitment",
  ],
  openGraph: {
    title: "Thought Leadership | White Gate Partners",
    description:
      "Hiring insights and talent strategy perspectives from our Singapore executive search team.",
    url: "https://whitegatepartners.sg/blog",
  },
  alternates: { canonical: "https://whitegatepartners.sg/blog" },
};

const posts = [
  {
    slug: "singapore-finance-talent-2026",
    category: "Market Insights",
    title: "Singapore's Finance Talent Market in 2026: What the Numbers Aren't Telling You",
    excerpt:
      "Headline unemployment figures mask a quiet war for qualified finance professionals across banking, fintech and corporate treasury.",
    date: "5 June 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "hiring-strategy-startups",
    category: "Talent Advisory",
    title: "Why Your First 10 Hires Define the Next 100",
    excerpt:
      "The cultural and structural decisions embedded in early hires compound faster than almost any other operating choice a founder makes.",
    date: "28 May 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "compliance-hiring-mnc",
    category: "Recruitment",
    title: "The Compliance Hiring Crunch: How MNCs Are Adapting",
    excerpt:
      "Regulatory pressure is creating demand for compliance professionals that outpaces supply.",
    date: "19 May 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "employer-brand-singapore",
    category: "Talent Advisory",
    title: "Employer Brand in Singapore: More Than a Careers Page",
    excerpt:
      "Candidates do more research than most hiring managers realise. Your employer brand is what they find when they look.",
    date: "10 May 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "salary-benchmarking-guide",
    category: "Market Insights",
    title: "A Practical Guide to Salary Benchmarking in 2026",
    excerpt:
      "Benchmarking data is widely available but frequently misread. We walk through the methodology that actually tells you whether you are competitive.",
    date: "2 May 2026",
    readTime: "9 min read",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "retained-vs-contingency",
    category: "Recruitment",
    title: "Retained vs. Contingency Search: When Each Makes Sense",
    excerpt:
      "The choice between retained and contingency recruitment is often misunderstood. Here is a straightforward framework.",
    date: "22 April 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=900&q=80&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Thought Leadership</span>
          <h1>
            Thinking on talent, <em>strategy and people.</em>
          </h1>
          <p className="lede">
            Perspectives from the White Gate Partners team on hiring, workforce
            strategy and building organisations that last.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="block">
        <div className="wrap">
          <span className="kick" style={{ display: "block", marginBottom: 28 }}>
            Featured
          </span>
          <a
            className="blog-featured"
            href={`/blog/${featured.slug}`}
          >
            <div className="bc-photo">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                sizes="60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bc-body">
              <div className="bc-cat">{featured.category}</div>
              <div className="bc-title">{featured.title}</div>
              <p
                style={{
                  marginTop: 16,
                  color: "var(--ink-soft)",
                  fontSize: 17,
                  fontWeight: 300,
                  flex: 1,
                  lineHeight: 1.55,
                }}
              >
                {featured.excerpt}
              </p>
              <div className="bc-meta">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </a>

          <div className="blog-grid">
            {rest.map((post) => (
              <a
                className="blog-card"
                key={post.slug}
                href={`/blog/${post.slug}`}
              >
                <div className="bc-photo">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="bc-body">
                  <div className="bc-cat">{post.category}</div>
                  <div className="bc-title">{post.title}</div>
                  <div className="bc-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>
                Want to <em>talk through a challenge?</em>
              </h2>
              <p>
                Our team is always happy to have a candid conversation about
                your hiring or people strategy — with no obligation.
              </p>
            </div>
            <a
              className="biglink"
              href="/contact"
              style={{ maxWidth: 320, flexShrink: 0 }}
            >
              Get in touch <span className="ar">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
