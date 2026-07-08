"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    logo: "Vc",
  },
  {
    name: "GitHub",
    category: "Backend",
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
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
];

const categories = ["Frontend", "Backend", "AI & Automation", "Mobile"];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="relative section-padding"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(30,41,59,0.3) 50%, rgba(15,23,42,1) 100%)",
      }}
    >
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
            Powered by Industry-Leading
            <br />
            <span className="text-text-secondary">Architecture</span>
          </h2>
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
                      {/* Logo placeholder */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 tech-icon group-hover:!filter-none"
                        style={{
                          background: tech.bgColor,
                          color: tech.color,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {tech.logo}
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-white"
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
