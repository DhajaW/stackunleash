"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === pathname) return true;
    if (href.startsWith("/#") && pathname === "/") return true;
    return false;
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 bg-navy/90 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/30"
            : "py-4 bg-navy/40 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[80px]">
          {/* Logo */}
          <a
            href="/#hero"
            id="logo-link"
            className="flex items-center gap-3.5 group"
            aria-label="StackUnleash Home"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img id="logo-icon-img" src="/logo-icon.png" alt="StackUnleash Icon" className="h-14 w-auto object-contain" />
            </div>
            <div className="flex flex-col items-start">
              <span
                className="text-2xl font-black tracking-tight leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="text-white">STACK</span>
                <span className="gradient-text">UNLEASH</span>
              </span>
              <span
                className="text-[8px] font-black tracking-[0.22em] uppercase mt-1.5 shine-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Build &bull; Automate &bull; Scale
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`text-base font-semibold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-orange after:transition-all after:duration-300 ${
                    active
                      ? "text-white after:w-full"
                      : "text-text-secondary hover:text-white after:w-0 hover:after:w-full"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="/contact"
              id="header-cta"
              className="btn-primary text-base px-6 py-3 glow-orange glow-orange-hover font-bold"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center gap-8 pt-36">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xl font-semibold text-text-secondary hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            id="mobile-cta"
            className="btn-primary text-base mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </>
  );
}