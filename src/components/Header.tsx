"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Stack", href: "#stack" },
  { label: "Case Studies", href: "#case-studies" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <a
          href="#hero"
          id="logo-link"
          className="flex items-center gap-3.5 group"
          aria-label="StackUnleash Home"
        >
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img src="/logo-icon.png" alt="StackUnleash Icon" className="h-14 w-auto object-contain" />
          </div>
          <span
            className="text-2xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white">STACK</span>
            <span className="gradient-text">UNLEASH</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-base font-semibold text-text-secondary hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#discovery"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[112px] z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center gap-8 pt-16">
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
            href="#discovery"
            id="mobile-cta"
            className="btn-primary text-base mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
}
