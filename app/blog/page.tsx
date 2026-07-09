import Image from "next/image";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Talent Perspectives | Singapore Hiring & Recruitment Insights",
  description:
    "Perspectives from White Gate Partners on executive hiring, specialist recruitment, talent strategy and career topics for employers and candidates across Singapore and Southeast Asia.",
  keywords: [
    "hiring insights Singapore",
    "talent perspectives Singapore",
    "executive search Singapore insights",
    "specialist recruitment Singapore",
    "Singapore talent market",
    "Southeast Asia recruitment",
    "recruitment advice Singapore",
  ],
  openGraph: {
    title: "Talent Perspectives | White Gate Partners",
    description:
      "Hiring, recruitment and career perspectives from a Singapore-based executive search and specialist recruitment firm.",
    url: "https://whitegatepartners.sg/blog",
  },
  alternates: { canonical: "https://whitegatepartners.sg/blog" },
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  featured?: boolean;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);
  const [featured, ...rest] = posts;

  if (!featured) {
    return (
      <>
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
        <section className="block">
          <div className="wrap" style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ color: "var(--ink-soft)", fontSize: 18 }}>
              No posts published yet — check back soon.
            </p>
          </div>
        </section>
      </>
    );
  }

  const featuredImgSrc = featured.mainImage
    ? urlForImage(featured.mainImage).width(900).url()
    : null;

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
          <a className="blog-featured" href={`/blog/${featured.slug.current}`}>
            <div className="bc-photo">
              {featuredImgSrc && (
                <Image
                  src={featuredImgSrc}
                  alt={featured.mainImage?.alt ?? featured.title}
                  fill
                  sizes="60vw"
                  style={{ objectFit: "cover" }}
                />
              )}
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
                <span>{formatDate(featured.publishedAt)}</span>
                {featured.readTime && <span>{featured.readTime}</span>}
              </div>
            </div>
          </a>

          {rest.length > 0 && (
            <div className="blog-grid">
              {rest.map((post) => {
                const imgSrc = post.mainImage
                  ? urlForImage(post.mainImage).width(600).url()
                  : null;
                return (
                  <a
                    className="blog-card"
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                  >
                    <div className="bc-photo">
                      {imgSrc && (
                        <Image
                          src={imgSrc}
                          alt={post.mainImage?.alt ?? post.title}
                          fill
                          sizes="33vw"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div className="bc-body">
                      <div className="bc-cat">{post.category}</div>
                      <div className="bc-title">{post.title}</div>
                      <div className="bc-meta">
                        <span>{formatDate(post.publishedAt)}</span>
                        {post.readTime && <span>{post.readTime}</span>}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
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
