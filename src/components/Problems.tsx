"use client";

import { useRef } from "react";
import {
  Database,
  Workflow,
  MessageSquare,
  LayoutDashboard,
  Bot,
  Bell,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: Database,
    title: "The Spreadsheet Trap",
    description:
      "Critical business data scattered across disconnected spreadsheets.",
    color: "text-red-400",
    borderColor: "hover:border-red-400/30",
    bgGlow: "rgba(248, 113, 113, 0.04)",
  },
  {
    icon: Workflow,
    title: "Chasing Contractors",
    description:
      "Manual approvals, billing delays, and operational bottlenecks. e.g., automatically verifying contractor mobilization totals exactly match Rs. 3,970,540.00 before committee approval.",
    color: "text-amber-400",
    borderColor: "hover:border-amber-400/30",
    bgGlow: "rgba(251, 191, 36, 0.04)",
  },
  {
    icon: MessageSquare,
    title: "Communication Breakdown",
    description:
      "Important updates lost across WhatsApp, email, and phone calls. e.g., ensuring a maintenance complaint for House No. 514 is never mistakenly logged as 513 and routes directly to the right staff.",
    color: "text-rose-400",
    borderColor: "hover:border-rose-400/30",
    bgGlow: "rgba(251, 113, 133, 0.04)",
  },
];

const solutions = [
  {
    icon: LayoutDashboard,
    label: "Centralized Portals",
    desc: "One source of truth for all your operations",
  },
  {
    icon: Bot,
    label: "Intelligent Automation",
    desc: "Powered by n8n workflow orchestration",
  },
  {
    icon: Bell,
    label: "Instant Alerts",
    desc: "Real-time notifications to the right people",
  },
];

export default function Problems() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="problems"
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
          <p className="section-label">The Challenge</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Is Manual Work Slowing Down
            <br />
            <span className="text-text-secondary">Your Growth?</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className={`glass-card rounded-2xl p-8 ${problem.borderColor} transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${(index + 1) * 150}ms`,
                  background: `linear-gradient(135deg, rgba(30, 41, 59, 0.4), ${problem.bgGlow})`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${problem.color}`}
                  style={{
                    background: `${problem.bgGlow}`,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-sm text-text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Solution block */}
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange/20 via-cyan/20 to-orange/20 p-[1px]">
            <div className="w-full h-full rounded-2xl bg-navy-light" />
          </div>

          <div className="relative p-8 sm:p-10 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-1">
                <p className="section-label mb-2">Our Approach</p>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  We turn operational chaos into{" "}
                  <span className="gradient-text">automated precision</span>.
                </h3>
                <p
                  className="text-text-secondary text-base leading-relaxed max-w-xl"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  From scattered spreadsheets to centralized intelligence. We
                  architect systems that work while you sleep.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto">
                {solutions.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="flex items-start gap-4 px-5 py-4 rounded-xl bg-white/[0.02] border border-border hover:border-cyan/20 transition-all duration-300 hover:bg-white/[0.04]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {s.label}
                        </p>
                        <p
                          className="text-xs text-text-muted mt-0.5"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="#services"
                id="problems-cta"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-white transition-colors duration-300 group"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                See how we solve this
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
