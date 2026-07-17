import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { jobListingsQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Current Openings | White Gate Partners Singapore",
  description:
    "Open roles at White Gate Partners — recruitment consultants, talent advisors and research associates based in Singapore. Join a boutique executive search firm doing work that matters.",
  keywords: [
    "recruitment consultant jobs Singapore",
    "talent advisor jobs Singapore",
    "executive search careers Singapore",
    "careers White Gate Partners",
    "headhunter jobs Singapore",
  ],
  openGraph: {
    title: "Current Openings | White Gate Partners",
    description:
      "Open roles in executive search and specialist recruitment, based in Singapore.",
    url: "https://whitegatepartners.sg/openings",
  },
  alternates: { canonical: "https://whitegatepartners.sg/openings" },
};

type JobListing = {
  _id: string;
  title: string;
  type: string;
  level?: string;
};

export default async function OpeningsPage() {
  const roles: JobListing[] = await client.fetch(jobListingsQuery);

  return (
    <>
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Join us</span>
          <h1>
            Current <em>openings.</em>
          </h1>
          <p className="lede">
            All roles are based in Singapore. We hire deliberately — for people
            who find the work itself interesting, not just the title.
          </p>
        </div>
      </section>

      <section
        className="block"
        style={{ background: "var(--ivory)", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          {roles.length > 0 ? (
            <div className="roles-list">
              {roles.map((role) => (
                <div className="role-item" key={role._id}>
                  <div>
                    <div className="role-title">{role.title}</div>
                    <div className="role-meta">
                      <span>{role.type}</span>
                      {role.level && <span>{role.level}</span>}
                    </div>
                  </div>
                  <Link
                    className="apply-link"
                    href={`/openings/apply?role=${encodeURIComponent(role.title)}`}
                  >
                    Apply →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: "64px 0", textAlign: "center" }}>
              <p style={{ color: "var(--ink-soft)", fontSize: 18 }}>
                No roles are listed right now — but we are always interested in
                exceptional people.
              </p>
              <Link
                className="biglink"
                href="/contact"
                style={{ display: "inline-flex", marginTop: 32 }}
              >
                Introduce yourself <span className="ar">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>
                Don&apos;t see the right role?{" "}
                <em>Reach out anyway.</em>
              </h2>
              <p>
                We make exceptions for exceptional people. Tell us who you are
                and what you are looking for.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, flexShrink: 0 }}>
              <Link className="biglink" href="/contact" style={{ maxWidth: 340 }}>
                Introduce yourself <span className="ar">→</span>
              </Link>
              <Link className="biglink" href="/partnerships" style={{ maxWidth: 340 }}>
                About working here <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
