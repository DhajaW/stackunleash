import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, Shield, Code, Cpu, Award } from "lucide-react";

export const metadata = {
  title: "About Us | StackUnleash",
  description: "Meet StackUnleash - the premium technical agency designing custom AI workflows, portals, and mobile systems.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-navy text-white font-body" style={{ fontFamily: "var(--font-body)" }}>
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
            Our Mission & Credentials
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            We Build the <span className="gradient-text">Automated Systems</span> That Move Business Forward.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            StackUnleash is an engineering-first automation agency. We bridge the gap between complex backend systems, custom AI workflows, and premium client portals.
          </p>
        </section>

        {/* Value Pillars Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Engineering First
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We avoid restrictive proprietary builders. We compile and deploy robust code structures (React, Capacitor, Supabase) and pair them with open workflow systems (n8n).
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5">
              <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Metric-Driven (70-80% ROI)
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We design systems with clear goals: reducing manual tasks, speeding up processing cycles, and eliminating human errors by up to 80% with verified telemetry logs.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                100% IP Ownership
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                You own your data, keys, and code. Once developed, StackUnleash transfers full intellectual property ownership and direct database credentials to your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story & Vision/Mission Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Our Story (Left) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
                Our Origin
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Our Story
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                StackUnleash began with a simple observation: businesses were spending countless hours on repetitive, manual tasks like copying data between spreadsheets, chasing contractor approvals, and manually routing client messages. 
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Founded by Thusitha Weerasinghe, StackUnleash was built on a foundation of collective expertise. We brought together seasoned specialists in database architecture, enterprise cybersecurity, digital growth, and interactive UI/UX design to form a unified, engineering-first automation agency. Today, we work as a cohesive unit to build custom AI workflows, secure client portals, and hybrid mobile integrations.
              </p>
            </div>

            {/* Vision & Mission (Right) */}
            <div className="lg:col-span-5 space-y-8 lg:pl-6">
              {/* Vision */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Vision
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  To build a world where humans are liberated from digital assembly lines, enabling them to focus entirely on creative growth and strategic breakthroughs.
                </p>
              </div>

              {/* Mission */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-cyan mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Mission
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  To engineer robust, transparent, and high-performance automation ecosystems that eliminate operational bottlenecks, enforce zero-trust security standards, and guarantee 100% code ownership to our partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Trust Section */}
        <section className="bg-navy-light/40 border-y border-border py-20 mb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Enterprise-Grade Security & <span className="gradient-text">Trust Standards</span>
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  We treat data integrity as our highest priority. Our integration strategies are designed around zero-trust methodologies, securing your corporate endpoints at every step.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="mt-1 text-cyan flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Secure Secret Management</h4>
                      <p className="text-sm text-text-muted">We store all system credentials in encrypted cloud vaults, never hardcoding keys.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 text-cyan flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">n8n & AI Integration Certified</h4>
                      <p className="text-sm text-text-muted">We write clean loop limits and custom API error catchers preventing server loops.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-25 blur-lg"></div>
                <div className="relative glass p-8 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Our Technology Credentials
                  </h3>
                  <div className="space-y-4 text-sm text-text-secondary">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>Preferred Integration Platform:</span>
                      <span className="text-white font-medium">n8n / Node-Red</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>Serverless Database layer:</span>
                      <span className="text-white font-medium">Supabase / Firebase</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>Frontend & Portals runtime:</span>
                      <span className="text-white font-medium">Next.js / React</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>Hybrid Mobile Architecture:</span>
                      <span className="text-white font-medium">Capacitor Engine</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Pipeline Compliance:</span>
                      <span className="text-white font-medium">SSL / End-to-End Cryptography</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder & Lead Team Profile Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              The Team Behind the <span className="gradient-text">Automation</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our multidisciplinary team brings together seasoned experts in automation architecture, enterprise cybersecurity, growth strategy, and interactive UI/UX design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Thusitha */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative glass-card p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan to-orange mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black tracking-wider shadow-inner shadow-black/40 border-2 border-white/10">
                    TW
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Thusitha Weerasinghe
                  </h3>
                  <div className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
                    Founder & Lead Automation Architect
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Thusitha is a systems integrations specialist with a background in database architecture and corporate automation. He designs secure API systems and web-to-mobile infrastructure for enterprises worldwide.
                  </p>
                </div>
                <div className="flex justify-center gap-4 text-xs text-text-muted border-t border-white/5 pt-4">
                  <a href="mailto:thusitha@stackunleash.com" className="hover:text-cyan transition-colors duration-200 flex items-center gap-1">
                    Email Profile <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Asanka */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative glass-card p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan to-orange mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black tracking-wider shadow-inner shadow-black/40 border-2 border-white/10">
                    AU
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Asanka Udawatte
                  </h3>
                  <div className="text-orange text-sm font-semibold tracking-wider uppercase mb-4">
                    Director of Growth & AI Strategy
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Asanka is a digital growth director specializing in enterprise SEO, conversion copy, and prompt engineering architectures. He designs automated content pipelines and semantic search structures to drive B2B acquisition.
                  </p>
                </div>
                <div className="flex justify-center gap-4 text-xs text-text-muted border-t border-white/5 pt-4">
                  <a href="mailto:asanka@stackunleash.com" className="hover:text-orange transition-colors duration-200 flex items-center gap-1">
                    Email Profile <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Udaya */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative glass-card p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan to-orange mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black tracking-wider shadow-inner shadow-black/40 border-2 border-white/10">
                    UR
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Udaya Ranasinghe
                  </h3>
                  <div className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-4">
                    Director of Cyber Security
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Udaya is an information security expert specializing in enterprise threat defense, penetration testing, and zero-trust architectures. He audits and secures all custom cloud databases and automation API structures.
                  </p>
                </div>
                <div className="flex justify-center gap-4 text-xs text-text-muted border-t border-white/5 pt-4">
                  <a href="mailto:udaya@stackunleash.com" className="hover:text-violet-400 transition-colors duration-200 flex items-center gap-1">
                    Email Profile <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hiran */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative glass-card p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan to-orange mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black tracking-wider shadow-inner shadow-black/40 border-2 border-white/10">
                    HD
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Hiran De Silva
                  </h3>
                  <div className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
                    Director of Design & Creative Strategy
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Hiran is a creative design director specializing in interactive UI/UX prototypes, branding identity, and high-impact digital content. He crafts premium interfaces and engaging user experiences for our portal workflows.
                  </p>
                </div>
                <div className="flex justify-center gap-4 text-xs text-text-muted border-t border-white/5 pt-4">
                  <a href="mailto:hiran@stackunleash.com" className="hover:text-cyan transition-colors duration-200 flex items-center gap-1">
                    Email Profile <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-24 mb-12">
          <div className="relative glass-card p-10 sm:p-12 rounded-3xl border border-white/10 overflow-hidden bg-navy-light/40">
            {/* Glow effect */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan/10 to-orange/10 opacity-30 blur-2xl pointer-events-none"></div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Unleash Your Systems?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Get in touch with our expert engineering and integration team to review your automation roadmap and eliminate operational bottlenecks.
            </p>
            <a 
              href="/contact" 
              className="btn-primary px-8 py-4 text-base font-bold glow-orange inline-flex items-center gap-2"
            >
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
