"use client";

import { useRef } from "react";
import {
  Globe,
  Workflow,
  Smartphone,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const coreSolutions = [
  {
    icon: Globe,
    title: "Custom Website Development & Personalized Websites",
    description:
      "Professional, high-conversion websites tailored to your brand and business processes. Whether you need a marketing site or a full client portal, we deliver personalized website experiences that stand out.",
    accentColor: "cyan",
    borderHover: "border-glow-cyan",
  },
  {
    icon: Workflow,
    title: "Workflow Automation & Workflow Management Software",
    description:
      "Automate repetitive tasks, approvals, notifications, and reporting. Reduce manual work dramatically with intelligent workflow automation systems built for your exact needs.",
    accentColor: "orange",
    borderHover: "border-glow-orange",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development – Get Your Own App",
    description:
      "Turn your ideas into reality with native Android & iOS apps. From internal tools to customer-facing applications, we help you get your own app that integrates seamlessly with your workflows.",
    accentColor: "cyan",
    borderHover: "border-glow-cyan",
  },
  {
    icon: Building2,
    title: "Enterprise Portals & Hybrid Solutions",
    description:
      "Secure, scalable internal systems that combine web + mobile capabilities. Built for businesses that need centralised control, role-based access, and real-time data across every touchpoint.",
    accentColor: "orange",
    borderHover: "border-glow-orange",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding bg-radial-orange"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">What We Build</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Custom Website Development,
            <br />
            <span className="text-text-secondary">Workflow Automation &amp; Mobile Apps</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-text-muted text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We engineer personalized websites, enterprise portals, workflow management
            software, and custom mobile app development solutions that transform how you
            operate, communicate, and grow.
          </p>
        </div>

        {/* Core Solutions label */}
        <div
          className={`text-center mb-10 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-xs font-semibold text-text-muted uppercase tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Core Solutions
          </span>
        </div>

        {/* Solution cards – 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreSolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className={`relative glass-card rounded-2xl p-8 ${solution.borderHover} flex flex-col transition-all duration-700 ${
                  solution.featured
                    ? "ring-1 ring-orange/20"
                    : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${(index + 1) * 150}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    solution.accentColor === "orange"
                      ? "bg-orange/10 text-orange"
                      : "bg-cyan/10 text-cyan"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {solution.title}
                </h3>

                <p
                  className="text-sm text-text-muted leading-relaxed mb-8 flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {solution.description}
                </p>

                {/* CTA */}
                <a
                  href="#discovery"
                  id={`service-cta-${index}`}
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    solution.featured
                      ? "btn-primary glow-orange"
                      : "border border-border-light text-white hover:bg-white/5 hover:border-white/20"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
