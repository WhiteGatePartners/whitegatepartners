import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { postBySlugQuery, postsQuery } from "@/sanity/queries";
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
};

type Props = {
  params: Promise<{ slug: string }>;
};

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
  return {
    title: `${post.title} | White Gate Partners`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://whitegatepartners.sg/blog/${slug}`,
    },
    alternates: { canonical: `https://whitegatepartners.sg/blog/${slug}` },
  };
}

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
      <section className="pg-hero">
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
            <span>{formatDate(post.publishedAt)}</span>
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </div>
      </section>

      {imgSrc && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 900,
            margin: "0 auto",
            height: 480,
          }}
        >
          <Image
            src={imgSrc}
            alt={post.mainImage?.alt ?? post.title}
            fill
            priority
            sizes="900px"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <section className="block">
        <div
          className="wrap"
          style={{ maxWidth: 720, margin: "0 auto" }}
        >
          {post.body ? (
            <div className="prose">
              <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} />
            </div>
          ) : (
            <p style={{ color: "var(--ink-soft)" }}>
              Full article coming soon.
            </p>
          )}

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
            <Link
              href="/blog"
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
