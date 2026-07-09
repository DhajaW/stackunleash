"use client";

import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Enterprise Portals", href: "/#services" },
    { label: "AI Workflows", href: "/#services" },
    { label: "Mobile Apps", href: "/#services" },
    { label: "Consulting", href: "/#discovery" },
  ],
  company: [
    { label: "Our Stack", href: "/#stack" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Book a Call", href: "/#discovery" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border" role="contentinfo">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-orange/5 via-orange/10 to-orange/5 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s build something extraordinary.
            </h3>
            <p
              className="text-sm text-text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your automated future starts with a single conversation.
            </p>
          </div>
          <a
            href="/#discovery"
            className="btn-primary text-sm whitespace-nowrap glow-orange"
          >
            Book Strategy Call
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/#hero"
              className="flex items-center gap-2 mb-5 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                <img src="/logo-icon.png" alt="StackUnleash Icon" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col items-start">
                <span
                  className="text-base font-extrabold tracking-tight leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span className="text-white">STACK</span>
                  <span className="gradient-text">UNLEASH</span>
                </span>
                <span
                  className="text-[7px] font-extrabold tracking-[0.20em] uppercase mt-1 shine-text"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Build &bull; Automate &bull; Scale
                </span>
              </div>
            </a>
            <p
              className="text-sm text-text-muted leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Architecting automated digital ecosystems for forward-thinking
              global businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@stackunleash.com"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail className="w-4 h-4" />
                  hello@stackunleash.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="w-4 h-4" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  Sri Lanka
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/stackunleash/" },
                { icon: XIcon, label: "X (Twitter)", href: "https://x.com/StackUnleash" },
                { icon: YouTubeIcon, label: "YouTube", href: "https://www.youtube.com/@stackunleash" },
                { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/stackunleash/" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    id={`social-${social.label.toLowerCase().replace(/[\s()]/g, "")}`}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-border flex items-center justify-center text-text-muted hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} StackUnleash. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-text-muted hover:text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
