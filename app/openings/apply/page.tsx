import Link from "next/link";
import type { Metadata } from "next";
import JobApplicationForm from "@/app/components/JobApplicationForm";

type Props = {
  searchParams: Promise<{ role?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { role } = await searchParams;
  const title = role ? `Apply — ${role}` : "Apply";
  return {
    title: `${title} | White Gate Partners`,
    description: "Submit your application to White Gate Partners.",
  };
}

export default async function ApplyPage({ searchParams }: Props) {
  const { role } = await searchParams;
  const roleTitle = role ? decodeURIComponent(role) : "Open Application";

  return (
    <>
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">
            <Link href="/openings" style={{ color: "inherit", textDecoration: "none" }}>
              ← Current openings
            </Link>
          </span>
          <h1>
            Apply — <em>{roleTitle}</em>
          </h1>
          <p className="lede">
            Fill in the form below and attach your CV. We review every
            application and will be in touch within a few business days.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <JobApplicationForm role={roleTitle} />
        </div>
      </section>
    </>
  );
}
