"use client";

import { useRef } from "react";
import {
  CheckCircle2,
  Calendar,
  ClipboardCheck,
  Workflow,
  DollarSign,
  Lightbulb,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const checklistItems = [
  {
    icon: ClipboardCheck,
    title: "System Audit",
    description: "We analyze your current workflows, tools, and pain points.",
  },
  {
    icon: Workflow,
    title: "Workflow Blueprint",
    description:
      "A custom automation roadmap tailored to your business operations.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Clear, fixed-scope pricing with no hidden fees or surprises.",
  },
];

export default function Discovery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="discovery"
      ref={sectionRef}
      className="relative section-padding"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 107, 0, 0.03), transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">Get Started</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Architect Your
            <br />
            <span className="gradient-text">Automated Future</span>?
          </h2>
          <p
            className="max-w-2xl mx-auto text-text-muted text-base mt-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Discuss your needs for custom website development, workflow automation,
            custom mobile app development, or get your own app.
          </p>
        </div>

        {/* Two column layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Checklist */}
          <div>
            <h3
              className="text-xl font-bold mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Calendar className="w-5 h-5 text-orange" />
              What to Expect from This Strategy Call
            </h3>

            <div className="space-y-6">
              {checklistItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-border hover:border-orange/20 transition-all duration-500 hover:bg-white/[0.04] ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <p
                          className="text-sm font-semibold text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <p
                        className="text-sm text-text-muted leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro-copy */}
            <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-orange/5 to-cyan/5 border border-border">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <p
                  className="text-sm text-text-secondary leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <strong className="text-white">Experience our tech firsthand:</strong>{" "}
                  When you book this call, our automated n8n workflow instantly
                  provisions your CRM profile, generates a secure Google Meet
                  link, and sends you a personalized confirmation—all in zero
                  seconds.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Booking widget placeholder */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="glass-card rounded-2xl p-8 sm:p-10 h-full flex flex-col items-center justify-center min-h-[480px] border-dashed border-2 border-border-light hover:border-orange/20 transition-all duration-300">
              {/* Placeholder content */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-7 h-7 text-orange" />
                </div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Schedule Your Free Strategy Call
                </h4>
                <p
                  className="text-sm text-text-muted mb-8 max-w-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Select a time that works for you. Typically 30 minutes to
                  discuss your automation needs.
                </p>

                {/* Simulated calendar widget */}
                <div className="w-full max-w-sm mx-auto">
                  <div className="glass-card rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-sm font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        July 2026
                      </span>
                      <div className="flex gap-1">
                        <button className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted">
                          ‹
                        </button>
                        <button className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted">
                          ›
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span
                          key={i}
                          className="text-xs text-text-muted py-1"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {d}
                        </span>
                      ))}
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(
                        (day) => (
                          <button
                            key={day}
                            className={`text-xs py-1.5 rounded-lg transition-all duration-200 ${
                              day === 10
                                ? "bg-orange text-white font-bold"
                                : day > 6 && day < 25 && day % 3 !== 0
                                ? "text-text-secondary hover:bg-white/5"
                                : "text-text-muted/30 cursor-default"
                            }`}
                          >
                            {day}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <a
                    href="mailto:hello@stackunleash.com"
                    id="discovery-book-cta"
                    className="btn-primary w-full justify-center text-base glow-orange"
                  >
                    Book Your Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p
                  className="text-xs text-text-muted mt-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Calendly / Cal.com widget integration ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
