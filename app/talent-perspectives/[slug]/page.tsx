import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/client";
import { postBySlugQuery } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body?: unknown[];
  author?: string;
  seoTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  supportingKeywords?: string[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Re-fetch from Sanity at most once a minute so Studio edits reach the live
// site without a redeploy. Without this the HTML is frozen at build time.
export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Pick<Post, "slug">[] = await client.fetch(
    `*[_type == "post"]{ slug }`
  );
  return posts.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};
  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const keywords = [post.primaryKeyword, ...(post.supportingKeywords ?? [])].filter(
    (k): k is string => Boolean(k)
  );
  return {
    title: `${title} | White Gate Partners`,
    description,
    keywords: keywords.length ? keywords : undefined,
    openGraph: {
      title,
      description,
      url: `https://whitegatepartners.sg/talent-perspectives/${slug}`,
    },
    alternates: { canonical: `https://whitegatepartners.sg/talent-perspectives/${slug}` },
  };
}

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = urlForImage(value).width(1200).url();
      return (
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
          <Image
            src={src}
            alt={value.alt ?? ""}
            fill
            sizes="900px"
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    },
    // Author-placed CTA — editors drop this into the body wherever it fits.
    ctaBlock: ({ value }) => {
      const href = value?.href || "/contact";
      const label = value?.label || "Get in touch";
      const external = /^https?:\/\//.test(href);
      return (
        <div className="cta-inline">
          {value?.text && <p>{value.text}</p>}
          {external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label} <span className="ar">→</span>
            </a>
          ) : (
            <Link href={href}>
              {label} <span className="ar">→</span>
            </Link>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  const imgSrc = post.mainImage
    ? urlForImage(post.mainImage).width(1200).url()
    : null;

  return (
    <>
      <section className="pg-hero blog-post-hero">
        <div className="wrap">
          <span className="kick">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 24,
              color: "var(--ink-soft)",
              fontSize: 15,
            }}
          >
            {post.author && <span>By {post.author}</span>}
            <span>{formatDate(post.publishedAt)}</span>
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </div>
      </section>

      {imgSrc && (
        <div className="wrap article-wrap">
          <div className="article-hero-img">
            <Image
              src={imgSrc}
              alt={post.mainImage?.alt ?? post.title}
              fill
              priority
              sizes="900px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}

      <section className="block">
        <div className="wrap article-wrap">
          {post.body ? (
            <div className="prose">
              <PortableText
                value={post.body as Parameters<typeof PortableText>[0]["value"]}
                components={ptComponents}
              />
            </div>
          ) : (
            <p style={{ color: "var(--ink-soft)" }}>
              Full article coming soon.
            </p>
          )}

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
            <Link
              href="/talent-perspectives"
              style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

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
