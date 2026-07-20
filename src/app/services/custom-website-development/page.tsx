import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, Laptop, Code, Cpu, HelpCircle, Layers, Globe, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Custom Website Development & Personalized Websites | StackUnleash",
  description: "We design and build custom, personalized websites that convert visitors and connect to your business systems. Marketing sites, client portals, and booking platforms.",
};

export default function CustomWebsiteDevelopmentPage() {
  const personalizationFactors = [
    {
      title: "User-Centric Architecture",
      description: "Content and layouts structured specifically around how your target customers search, read, and browse."
    },
    {
      title: "Custom Functional Flows",
      description: "Tailored booking engines, invoicing pipelines, or customer portal inquiries built for your exact operational flow."
    },
    {
      title: "Automated Workflows",
      description: "Automated confirmations, email follow-ups, and calendar sync operations replacing manual administration."
    },
    {
      title: "Bespoke Design Systems",
      description: "A tailored visual language built around your unique brand identity, completely bypassing off-the-shelf templates."
    }
  ];

  const targetAudiences = [
    "Businesses that have outgrown restrictive template themes or drag-and-drop builders.",
    "Companies requiring secure client-facing portals rather than just a static brochure website.",
    "Internal teams looking to eliminate manual processing of bookings, forms, or invoice payments.",
    "Organizations wanting their web interfaces to hook directly into CRM, ERP, or internal database systems."
  ];

  const whatsIncluded = [
    {
      phase: "Discovery & Planning",
      desc: "We analyze your business goals, target audience, competitors, and backend bottlenecks before writing code."
    },
    {
      phase: "Figma UI/UX Design",
      desc: "Interactive wireframes and high-fidelity mockups are generated in Figma, giving you visual sign-off."
    },
    {
      phase: "Frontend Development",
      desc: "Developed using modern, high-speed architectures like Next.js and React, ensuring rapid loading times."
    },
    {
      phase: "Third-Party Integration",
      desc: "Direct connections to your Stripe billing, CRMs, email servers, and custom database endpoints."
    },
    {
      phase: "Launch & SEO Foundation",
      desc: "Rigorous testing and deployment paired with full technical search engine optimization (SEO) configurations."
    }
  ];

  const steps = [
    { num: "01", name: "Discovery Call", desc: "Aligning on your business metrics and current interface limitations." },
    { num: "02", name: "Design Phase", desc: "Collaborating on user flows and high-fidelity layouts in Figma." },
    { num: "03", name: "Build Phase", desc: "Translating layouts into responsive, light-speed code structures with regular check-ins." },
    { num: "04", name: "Testing", desc: "Thorough cross-browser, cross-device, and lighthouse performance optimization." },
    { num: "05", name: "Launch", desc: "Go-live deployment with server health logs and automated alerts set up." }
  ];

  const techStack = [
    "Next.js", "React", "WordPress", "Tailwind CSS", "Figma", "Supabase", "Firebase", "Vercel"
  ];

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-navy text-white font-body" style={{ fontFamily: "var(--font-body)" }}>
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-radial-top -z-10 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
            Scalable Web Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            Custom Website Development & <span className="gradient-text">Personalized Websites</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A template site can only take you so far. At some point, you need a website built around your actual business, not a layout someone else designed for a different one.
          </p>
          <p className="text-base text-text-muted max-w-2xl mx-auto mt-4">
            That's the gap we fill. Our <strong>custom website development</strong> work is built from scratch around your brand, your customers, and how you already operate, not squeezed into a pre-made theme.
          </p>
        </section>

        {/* What makes it Personalized */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-cyan text-sm font-semibold tracking-wider uppercase">Deep Personalization</span>
              <h2 className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                What makes a website "personalized"
              </h2>
              <p className="text-text-secondary leading-relaxed">
                A <strong>personalized website</strong> isn't just custom design. It's an engineered ecosystem reflecting real decisions about your business:
              </p>
              
              {/* Highlight Card */}
              <div className="relative group mt-6">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan/30 to-orange/30 opacity-75 blur-[2px]"></div>
                <div className="relative glass p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Case In Point
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    One of our recent projects used this approach to increase direct bookings by <strong>55%</strong>, by combining a personalized website with an automated booking portal and integrated payments.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalizationFactors.map((factor, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5">
                  <h3 className="text-lg font-bold text-cyan mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {factor.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for & What's included */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Who this is for */}
          <div className="glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Who this is for
              </h3>
              <ul className="space-y-4">
                {targetAudiences.map((audience, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What's included */}
          <div className="glass p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              What's included
            </h3>
            <div className="space-y-6">
              {whatsIncluded.map((item, i) => (
                <div key={i} className="flex gap-4 pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                  <div className="text-cyan text-sm font-bold mt-1">
                    [0{i + 1}]
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">{item.phase}</h4>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-navy-light/40 border-y border-border py-20 mb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange text-sm font-semibold tracking-wider uppercase">Our Process</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                How We Bring it to Life
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-black text-white/10 mb-4 block">{step.num}</span>
                    <h4 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {step.name}
                    </h4>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed mt-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Technology stack we use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-text-secondary hover:text-white hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Book Call CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative glass-card p-10 sm:p-12 rounded-3xl border border-white/10 overflow-hidden bg-navy-light/40">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan/10 to-orange/10 opacity-30 blur-2xl pointer-events-none"></div>
            
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to build a website that works as hard as you do?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Book a free strategy call and we'll walk through what a custom, personalized website could look like for your business.
            </p>
            <a 
              href="/contact" 
              className="btn-primary px-8 py-4 text-base font-bold glow-orange inline-flex items-center gap-2"
            >
              Book Strategy Call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
