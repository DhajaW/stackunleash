"use client";

import { useRef } from "react";
import {
  ShoppingCart,
  Globe,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Building2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    icon: ShoppingCart,
    title: "E-Commerce AI Automation",
    category: "Workflow Automation",
    result: "Reduced manual processing by 80%",
    resultIcon: TrendingUp,
    description:
      "Integrated n8n workflows with Supabase and AI to automate order processing, inventory management, and customer communications.",
    tags: ["n8n", "Supabase", "AI Studio"],
    color: "orange",
  },
  {
    icon: Globe,
    title: "Eco-Tourism Booking Portal",
    category: "Enterprise Portal",
    result: "Increased direct bookings by 55%",
    resultIcon: TrendingUp,
    description:
      "Built a complete booking and operations platform with real-time availability, automated confirmations, and integrated payment processing.",
    tags: ["WordPress", "Firebase", "Capacitor"],
    color: "cyan",
  },
  {
    icon: GraduationCap,
    title: "Web-to-Mobile EdTech Platform",
    category: "Hybrid Application",
    result: "Deployed to Android & iOS from unified backend",
    resultIcon: TrendingUp,
    description:
      "Developed a comprehensive learning management system with offline capabilities, push notifications, and real-time content synchronization.",
    tags: ["React", "Capacitor", "Supabase"],
    color: "violet",
  },
];

const banks = [
  { name: "HNB", initials: "HNB" },
  { name: "NTB", initials: "NTB" },
  { name: "Commercial Bank", initials: "CB" },
  { name: "Sampath Bank", initials: "SB" },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative section-padding bg-radial-top"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">Results</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Proven Results for
            <br />
            <span className="text-text-secondary">
              Forward-Thinking Businesses
            </span>
          </h2>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const colorMap: Record<string, { text: string; bg: string; border: string }> = {
              orange: {
                text: "text-orange",
                bg: "bg-orange/10",
                border: "border-orange/20",
              },
              cyan: {
                text: "text-cyan",
                bg: "bg-cyan/10",
                border: "border-cyan/20",
              },
              violet: {
                text: "text-violet-400",
                bg: "bg-violet-400/10",
                border: "border-violet-400/20",
              },
            };
            const colors = colorMap[study.color];

            return (
              <div
                key={study.title}
                className={`glass-card rounded-2xl p-8 flex flex-col transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Category */}
                <span
                  className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium mb-5 ${colors.text} ${colors.bg} border ${colors.border}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {study.category}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.bg} ${colors.text}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {study.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-text-muted leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {study.description}
                </p>

                {/* Result */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-border mb-5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                    <span
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {study.result}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-text-muted bg-white/[0.04] border border-border"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banking Authority Section */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-light via-navy-lighter/20 to-navy-light" />
            <div className="relative p-8 sm:p-10 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Building2 className="w-5 h-5 text-cyan" />
                    <p
                      className="text-xs font-semibold text-cyan uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Trusted Banking Infrastructure Experience
                    </p>
                  </div>
                  <p
                    className="text-text-secondary text-sm max-w-md"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Our team brings enterprise-grade reliability honed through
                    years of working with major financial institutions.
                  </p>
                </div>
                <div className="flex items-center gap-6 flex-wrap justify-center">
                  {banks.map((bank) => (
                    <div
                      key={bank.name}
                      className="group w-20 h-20 rounded-2xl glass-card flex items-center justify-center cursor-default"
                      title={bank.name}
                    >
                      <span
                        className="text-lg font-bold text-text-muted/40 group-hover:text-white transition-all duration-300"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {bank.initials}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
