"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Solutions" },
  { href: "/blog", label: "Talent Perspectives" },
  { href: "/careers", label: "Partnerships" },
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
            <Image
              src="/logo_black_long.png"
              alt="White Gate Partners"
              width={200}
              height={46}
              priority
              style={{ display: "block" }}
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
