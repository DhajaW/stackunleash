"use client";

import { useRef } from "react";
import {
  LayoutDashboard,
  Bot,
  Smartphone,
  Check,
  ArrowRight,
  Star,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: LayoutDashboard,
    title: "Enterprise Community & Operations Portals",
    price: "$2,500",
    description:
      "End-to-end operational management systems built for scale. From community management to financial oversight.",
    features: [
      "Secure dashboards",
      "Resident portals",
      "Automated billing",
      "Financial audits",
      "Reporting systems",
    ],
    featured: false,
    borderHover: "border-glow-cyan",
    accentColor: "cyan",
  },
  {
    icon: Bot,
    title: "AI-Driven Workflow Ecosystems",
    price: "$1,500",
    description:
      "Intelligent automation pipelines that eliminate repetitive tasks and supercharge your team's productivity.",
    features: [
      "n8n automation",
      "CRM synchronization",
      "AI content generation",
      "Workflow orchestration",
    ],
    featured: true,
    borderHover: "border-glow-orange",
    accentColor: "orange",
  },
  {
    icon: Smartphone,
    title: "Hybrid Web-to-Mobile Applications",
    price: "$3,500",
    description:
      "Deploy to Android and iOS from a single codebase. Native performance with web development speed.",
    features: [
      "React & Capacitor framework",
      "High performance",
      "Shared codebase",
      "Single backend architecture",
    ],
    featured: false,
    borderHover: "border-glow-cyan",
    accentColor: "cyan",
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
            Engineering Next-Level
            <br />
            <span className="text-text-secondary">Operational Success</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-text-muted text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Comprehensive solutions designed to transform how you operate,
            communicate, and grow.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`relative glass-card rounded-2xl p-8 ${service.borderHover} flex flex-col transition-all duration-700 ${
                  service.featured
                    ? "lg:scale-105 lg:-my-4 ring-1 ring-orange/20"
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
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-recommended flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Recommended
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    service.accentColor === "orange"
                      ? "bg-orange/10 text-orange"
                      : "bg-cyan/10 text-cyan"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className="text-xs text-text-muted uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Starting at
                  </span>
                  <span
                    className={`text-2xl font-extrabold ${
                      service.accentColor === "orange"
                        ? "text-orange"
                        : "text-cyan"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.price}
                  </span>
                </div>

                <p
                  className="text-sm text-text-muted leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          service.accentColor === "orange"
                            ? "bg-orange/10 text-orange"
                            : "bg-cyan/10 text-cyan"
                        }`}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span
                        className="text-sm text-text-secondary"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#discovery"
                  id={`service-cta-${index}`}
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    service.featured
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
