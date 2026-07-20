import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, Smartphone, Users, Zap, CloudLightning, Shield } from "lucide-react";

export const metadata = {
  title: "Custom Mobile App Development | Get Your Own App – StackUnleash",
  description: "Get your own custom mobile app for Android and iOS. We build internal tools and customer-facing apps that connect directly to your existing workflows.",
};

export default function CustomMobileAppDevelopmentPage() {
  const comparison = [
    {
      title: "Internal Tools & Staff Apps",
      purpose: "Empowering field teams & drivers",
      description: "Designed to help teams work faster on the go. Field staff logging job reports, delivery drivers updating route progress, and managers verifying approvals without ever opening a laptop."
    },
    {
      title: "Customer-Facing Apps",
      purpose: "Direct presence in pockets",
      description: "Put your services directly in your customers' pockets. Custom reservation systems, loyalty programs, direct service tickets, or complete e-commerce checkout experiences."
    }
  ];

  const whatsIncluded = [
    { title: "Discovery & Scoping", desc: "We evaluate whether you need a native app, a hybrid app, or if a mobile-optimized site fits better. We prioritize cost-effectiveness." },
    { title: "Figma UI/UX Design", desc: "Designed strictly for mobile ergonomics and thumb layouts rather than just a scaled-down desktop screen." },
    { title: "Capacitor Hybrid Build", desc: "Deploying to both Android & iOS from a single robust React codebase, slashing code development and maintenance budgets in half." },
    { title: "Unified Cloud Backend", desc: "Connecting your mobile app to the exact same database and automated workflows as your website." },
    { title: "Offline Storage & Sync", desc: "Building local caching mechanisms so the app works reliably in low-signal areas, syncing when connection returns." },
    { title: "Store Submission Support", desc: "We handle the complete compiling, signing, and submission processes for both Apple App Store and Google Play." }
  ];

  const techStack = [
    "React", "Capacitor", "Supabase", "Firebase", "Node.js", "Tailwind CSS", "App Store Connect", "Google Play Console"
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
            Cross-Platform Apps
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            Custom Mobile App Development & <span className="gradient-text">Get Your Own App</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A website works when someone's sitting at a desk or scrolling on a break. An app works everywhere else—on a job site, in a delivery van, at 11pm when a customer wants to check their order status.
          </p>
          <p className="text-base text-text-muted max-w-2xl mx-auto mt-4">
            We handle <strong>custom mobile app development</strong> for businesses that need something more than a website can offer. Whether it's an internal tool for your team or a customer-facing app, this is how you get your own app built around what your business actually needs.
          </p>
        </section>

        {/* Comparison section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-16">
            <span className="text-orange text-sm font-semibold tracking-wider uppercase">Strategic Options</span>
            <h2 className="text-3xl font-extrabold text-white mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Internal operations vs. customer-facing products
            </h2>
            <p className="text-text-muted text-sm max-w-xl mx-auto mt-2">
              Either way, the app connects directly to the same backend and workflows as the rest of your systems. Nothing sits in isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comparison.map((c, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {c.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan uppercase tracking-wider mb-4">
                    {c.purpose}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-navy-light/40 border-y border-border py-20 mb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange text-sm font-semibold tracking-wider uppercase">Deliverables</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                What's included in mobile app development
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatsIncluded.map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-cyan uppercase tracking-wider mb-3 block">Feature 0{i + 1}</span>
                    <h4 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Snippet Case */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="relative group">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan/30 to-orange/30 opacity-75 blur-[2px]"></div>
            <div className="relative glass p-10 rounded-3xl border border-white/10 text-center">
              <span className="text-xs font-semibold text-cyan uppercase tracking-widest block mb-2">Featured Project</span>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Case Example: Learning Management App
              </h3>
              <p className="text-text-secondary text-sm max-w-2xl mx-auto leading-relaxed">
                One of our recent builds was a full learning management system featuring complete offline access capability, push notification triggers, and real-time content synchronization. The entire system was compiled and deployed to both Android and iOS from a single backend, preserving developer velocity and operational budgets.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Mobile stack we use
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
              Ready to get your own app?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Book a free strategy call and we'll help you figure out exactly what kind of app makes sense, and what it would take to build it.
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
