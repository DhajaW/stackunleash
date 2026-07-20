"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function TechIcon({ name, fallback }: { name: string; fallback: string }) {
  const normName = name.toLowerCase();

  if (normName.includes("next.js") || normName.includes("next")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10.5 5.5V9.5L11.5 9V5.5H10.5ZM9.5 5.5H8.5L5 10.5H6L9.5 5.5ZM4.5 5.5C4.5 5.22386 4.27614 5 4 5C3.72386 5 3.5 5.22386 3.5 5.5V9.5C3.5 9.77614 3.72386 10 4 10C4.27614 10 4.5 9.77614 4.5 9.5V5.5Z" fill="currentColor"/>
      </svg>
    );
  }
  if (normName.includes("wordpress")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.158 12.786l-2.698 7.84h-.051l-2.672-7.84H6.73c.026.18.038.385.038.616 0 1.258-.244 2.825-.976 4.7l2.846 8.525a11.9 11.9 0 0 0 6.55-.745l2.646-7.91h-.051l-2.672 7.84h-.051l-2.698-7.84h-.231zm8.013-4.238c-.026-.051-.039-.128-.039-.205 0-.539.462-1.001.975-1.001.513 0 .976.462.976 1.001 0 .539-.463 1.001-.976 1.001-.513 0-.976-.462-.976-1.001zm-3.082 10.45l3.205-9.617c.59-.103 1.156-.257 1.695-.462l-4.9 14.7a11.921 11.921 0 0 0 2.273-3.69c.128-.359.256-.719.359-1.053l-2.632.122zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.158c5.992 0 10.842 4.85 10.842 10.842 0 1.513-.308 2.953-.872 4.262l-3.324-9.972c.462-.128.847-.282 1.129-.462h.103V5.7h-3.41v.128c.282.103.564.205.821.308.256.103.359.256.359.59 0 .436-.18.975-.539 2.052L14.28 17.5l-2.282-6.843 1.564-4.69c.282-.846.564-1.282 1.001-1.282.436 0 .769.385.769.847a1.006 1.006 0 0 1-.975 1.001c-.538 0-1.001-.462-1.001-1.001 0-.539.463-1.001.976-1.001.205 0 .385.051.538.154l-.41.821L12.44 11.2h-.872L9.568 5.7c.308-.103.616-.205.923-.308h.077c.436 0 .719.41.719.821 0 .41-.283.821-.692 1.642L7.336 17.5l-3.231-9.693c.487-.154.949-.333 1.359-.538V5.7H2.025v.128c.41.103.82.205 1.179.359l3.385 10.155c-.564 1.308-.872 2.748-.872 4.262l-2.616-7.848C1.539 12.35 1.158 10.709 1.158 9c0 1.258.244 2.825.976 4.7L4.98 22.225A10.8 10.8 0 0 1 1.158 12c0-5.992 4.85-10.842 10.842-10.842z"/>
      </svg>
    );
  }
  if (normName.includes("tailwind")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.036c-2.402 0-4.08 1.201-5.042 3.602 1.201-1.201 2.642-1.682 4.323-1.442.96.14 1.643.818 2.4 1.577C14.93 11.025 16.432 12.5 19.2 12.5c2.402 0 4.08-1.201 5.042-3.602-1.201 1.201-2.642 1.682-4.323 1.442-.96-.14-1.643-.818-2.4-1.577C16.27 7.513 14.768 6.036 12 6.036zm-7.2 6.464c-2.402 0-4.08 1.201-5.042 3.602 1.201-1.201 2.642-1.682 4.323-1.442.96.14 1.643.818 2.4 1.577 1.25 1.25 2.753 2.727 5.52 2.727 2.402 0 4.08-1.201 5.042-3.602-1.201 1.201-2.642 1.682-4.323 1.442-.96-.14-1.643-.818-2.4-1.577-1.25-1.25-2.753-2.727-5.52-2.727z"/>
      </svg>
    );
  }
  if (normName.includes("figma")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-3.314 0-6 2.686-6 6v12c0 3.314 2.686 6 6 6s6-2.686 6-6V6c0-3.314-2.686-6-6-6zm-3 6c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm3 15c-1.657 0-3-1.343-3-3s1.343-3 3-3V21zm3-6c0-1.657-1.343-3-3-3V9h3v6z"/>
      </svg>
    );
  }
  if (normName.includes("supabase")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 10.404H12.44v-8.82c0-.528-.426-.957-.954-.957a.952.952 0 0 0-.825.474L2.098 12.982c-.368.513-.001 1.229.625 1.229h8.922v8.82c0 .528.426.957.954.957a.952.952 0 0 0 .825-.474l8.563-11.881c.368-.513.001-1.229-.625-1.229z"/>
      </svg>
    );
  }
  if (normName.includes("firebase")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.572L6.012 2.193a.547.547 0 0 1 .986-.234l3.14 5.869-10.248 7.744zM20.11 15.572L12.56 1.309a.547.547 0 0 0-.965.02L8.98 7.185l11.13 8.387zM20.17 16.14l-2.316-14.73a.546.546 0 0 0-.923-.33L1.084 17.585a.547.547 0 0 0 .393.931h17.135l1.558-2.376z"/>
      </svg>
    );
  }
  if (normName.includes("vercel")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0L12 1.475l12 21.05z"/>
      </svg>
    );
  }
  if (normName.includes("github")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    );
  }
  if (normName.includes("n8n")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" fill="currentColor"/>
        <circle cx="18" cy="18" r="3" fill="currentColor"/>
        <line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/>
        <line x1="6" y1="9" x2="6" y2="18" strokeDasharray="2 2"/>
        <circle cx="6" cy="18" r="1.5"/>
      </svg>
    );
  }
  if (normName.includes("ai studio")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" fill="currentColor"/>
        <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill="currentColor"/>
      </svg>
    );
  }
  if (normName.includes("capacitor")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 9h8M8 15h8" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
      </svg>
    );
  }
  if (normName.includes("react")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <ellipse rx="10" ry="3.8" transform="translate(12 12) rotate(0)"/>
        <ellipse rx="10" ry="3.8" transform="translate(12 12) rotate(60)"/>
        <ellipse rx="10" ry="3.8" transform="translate(12 12) rotate(120)"/>
      </svg>
    );
  }

  return <>{fallback}</>;
}

interface TechItem {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  logo: string;
}

const techStack: TechItem[] = [
  // Frontend
  {
    name: "Next.js / React",
    category: "Frontend",
    color: "#00D8FF",
    bgColor: "rgba(0, 216, 255, 0.12)",
    logo: "Nx",
  },
  {
    name: "WordPress",
    category: "Frontend",
    color: "#21759B",
    bgColor: "rgba(33, 117, 155, 0.12)",
    logo: "W",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.12)",
    logo: "Tw",
  },
  {
    name: "Figma",
    category: "Frontend",
    color: "#F24E1E",
    bgColor: "rgba(242, 78, 30, 0.12)",
    logo: "Fg",
  },
  // Backend
  {
    name: "Supabase",
    category: "Backend",
    color: "#3FCF8E",
    bgColor: "rgba(63, 207, 142, 0.12)",
    logo: "Sb",
  },
  {
    name: "Firebase",
    category: "Backend",
    color: "#FFCA28",
    bgColor: "rgba(255, 202, 40, 0.12)",
    logo: "Fb",
  },
  {
    name: "Vercel",
    category: "Backend",
    color: "var(--color-foreground)",
    bgColor: "var(--color-border-light)",
    logo: "Vc",
  },
  {
    name: "GitHub",
    category: "Backend",
    color: "var(--color-foreground)",
    bgColor: "var(--color-border-light)",
    logo: "Gh",
  },
  // AI & Automation
  {
    name: "n8n",
    category: "AI & Automation",
    color: "#EA4B71",
    bgColor: "rgba(234, 75, 113, 0.12)",
    logo: "n8",
  },
  {
    name: "AI Studio",
    category: "AI & Automation",
    color: "#8B5CF6",
    bgColor: "rgba(139, 92, 246, 0.12)",
    logo: "AI",
  },
  // Mobile
  {
    name: "Capacitor",
    category: "Mobile",
    color: "#53B9FF",
    bgColor: "rgba(83, 185, 255, 0.12)",
    logo: "Cp",
  },
  {
    name: "React",
    category: "Mobile",
    color: "#00D8FF",
    bgColor: "rgba(0, 216, 255, 0.12)",
    logo: "Re",
  },
  // SEO
  {
    name: "Yoast SEO",
    category: "SEO",
    color: "#A4286A",
    bgColor: "rgba(164, 40, 106, 0.12)",
    logo: "Yo",
  },
  {
    name: "Semrush",
    category: "SEO",
    color: "#FF642D",
    bgColor: "rgba(255, 100, 45, 0.12)",
    logo: "Sm",
  },
  {
    name: "Ahrefs",
    category: "SEO",
    color: "#F99E1D",
    bgColor: "rgba(249, 158, 29, 0.12)",
    logo: "Ah",
  },
  {
    name: "Google Search Console",
    category: "SEO",
    color: "#4285F4",
    bgColor: "rgba(66, 133, 244, 0.12)",
    logo: "Gsc",
  },
  {
    name: "Surfer SEO",
    category: "SEO",
    color: "#00C4B4",
    bgColor: "rgba(0, 196, 180, 0.12)",
    logo: "Sf",
  },
];

const categories = ["Frontend", "Backend", "AI & Automation", "Mobile", "SEO"];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">Technology</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Powered by Industry-Leading Tools
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">for Custom Development</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-text-muted text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We use modern, reliable technologies to deliver fast, scalable custom website
            development and custom mobile app development solutions.
          </p>
        </div>

        {/* Tech grid by category */}
        <div className="space-y-10">
          {categories.map((category, catIdx) => {
            const items = techStack.filter((t) => t.category === category);
            return (
              <div
                key={category}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(catIdx + 1) * 150}ms` }}
              >
                <p
                  className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4 pl-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {category}
                </p>
                <div className="flex flex-wrap gap-4">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative glass-card rounded-2xl px-6 py-5 flex items-center gap-4 cursor-default"
                    >
                      {/* Logo icon */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 tech-icon group-hover:!filter-none"
                        style={{
                          background: tech.bgColor,
                          color: tech.color,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        <TechIcon name={tech.name} fallback={tech.logo} />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-text-primary"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {tech.name}
                        </p>
                        <p
                          className="text-xs text-text-muted"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {tech.category}
                        </p>
                      </div>
                      {/* Glow on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          boxShadow: `0 0 30px ${tech.bgColor}, inset 0 0 20px ${tech.bgColor}`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
