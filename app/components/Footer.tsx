import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="wg-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Image
              src="/logo_grey_long2.png"
              alt="White Gate Partners"
              width={300}
              height={156}
              style={{ display: "block" }}
            />
            <p>
              Executive search, specialist recruitment and talent solutions
              for regional and cross-border hiring.
            </p>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Partnerships</Link>
            <Link href="/blog">Talent Perspectives</Link>
          </div>

          <div className="foot-col">
            <h4>Solutions</h4>
            <Link href="/services">Executive Search</Link>
            <Link href="/services">Specialist Recruitment</Link>
            <Link href="/services">Talent Solutions</Link>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <a href="mailto:asher@whitegatepartners.co">
              asher@whitegatepartners.co
            </a>
            <a href="tel:+6591682181">+65 9168 2181</a>
            <SocialIcons />
          </div>
        </div>

        <div className="foot-bot">
          <span>© 2026 White Gate Partners Pte. Ltd. · UEN 202600064K</span>
          <span>Employment Agency Licence: 26C3291</span>
        </div>
      </div>
    </footer>
  );
}
