import Link from "next/link";
import Image from "next/image";
import { SocialIcons, WHATSAPP_URL } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="wg-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Image
              src="/Picture1.png"
              alt="White Gate Partners"
              width={72}
              height={72}
              style={{ display: "block" }}
            />
            <p>
              Recruitment, talent advisory and management consulting for the
              organisations building Singapore&apos;s next chapter.
            </p>
            <SocialIcons />
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/openings">Current Openings</Link>
            <Link href="/blog">Thought Leadership</Link>
          </div>

          <div className="foot-col">
            <h4>Solutions</h4>
            <Link href="/services">Executive Search</Link>
            <Link href="/services">Specialist Recruitment</Link>
            <Link href="/services">Talent Solutions</Link>
            <Link href="/services#employers">For Employers</Link>
            <Link href="/services#candidates">For Candidates</Link>
          </div>

          <div className="foot-col">
            <h4>Office</h4>
            <Link href="/contact">The Iveria</Link>
            <Link href="/contact">2 Kim Yam Road</Link>
            <Link href="/contact">Singapore 239366</Link>
            <a href="mailto:hello@whitegatepartners.sg">
              hello@whitegatepartners.sg
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              +65 9451 5714
            </a>
          </div>
        </div>

        <div className="foot-bot">
          <span>© 2026 White Gate Partners Pte. Ltd. · UEN 202600064K</span>
          <span>Employment Agency License: 26C3291</span>
        </div>
      </div>
    </footer>
  );
}
