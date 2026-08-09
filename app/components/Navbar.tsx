"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/talent-perspectives", label: "Talent Perspectives" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`wg-header${scrolled ? " scrolled" : ""}`} id="hdr">
      <div className="wrap">
        <nav className="wg-nav">
          <Link className="brand" href="/" aria-label="White Gate Partners">
            {/* width/height are the SVG's intrinsic size. The rendered width
                lives in CSS (.brand img) so the responsive overrides win. */}
            <Image
              src="/logo-wordmark-grey.svg"
              alt="White Gate Partners"
              width={329}
              height={32}
              priority
              style={{ display: "block", height: "auto" }}
            />
          </Link>

          <div className={`navlinks${menuOpen ? " open" : ""}`}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? "active" : ""}
              >
                {label}
              </Link>
            ))}
            <Link className="navcta" href="/contact">
              Get in touch →
            </Link>
          </div>

          <button
            className="burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
}
