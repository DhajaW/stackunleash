import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, Shield, Eye, Database, Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: "CMS Enterprise Portal Development | StackUnleash",
  description: "We design and build CMS enterprise portals with role-based access, centralized data, and real-time visibility across your entire organization.",
};

export default function EnterprisePortalsPage() {
  const problemsSolved = [
    {
      title: "Fragmented Operations",
      description: "Replaces scattered spreadsheets and disconnected apps with one singular source of truth."
    },
    {
      title: "Lack of Access Controls",
      description: "Solves the risk of unauthorized data edits by introducing strict role-based editing permissions."
    },
    {
      title: "Delayed Business Reporting",
      description: "No more spending days compiling reports manually. Real-time dashboards keep telemetry visible."
    },
    {
      title: "Developer Dependency",
      description: "Gives non-technical staff direct control over copywriting, content uploads, and data entries."
    }
  ];

  const whatsIncluded = [
    {
      title: "Role-Based Access Control (RBAC)",
      description: "Granular editing permissions so employees only view and edit what they need to see."
    },
    {
      title: "Centralized Content Architecture",
      description: "Flexible, decoupled headless CMS interfaces allowing fast updates without developer dependencies."
    },
    {
      title: "Real-time Telemetry & Data",
      description: "Operational dashboards aggregating live statistics to help stakeholders make informed decisions."
    },
    {
      title: "Web & Mobile Hybrid Access",
      description: "Portals optimized for standard browser sizes that sync seamlessly with field mobile tools."
    },
    {
      title: "Zero-Trust Infrastructure",
      description: "Secure API gateway validations and encryptions keeping corporate data protected."
    }
  ];

  const targetAudiences = [
    "Businesses managing multiple branches, field teams, or separate divisions.",
    "Companies wanting internal workflow tools hosted on the same platform as their public website.",
    "Operations that have outgrown Excel sheets as their primary system of record.",
    "Leadership teams requiring centralized compliance auditing and instant telemetry logs."
  ];

  const steps = [
    { num: "01", name: "Systems Audit", desc: "Mapping your current applications, data endpoints, and user clearance requirements." },
    { num: "02", name: "Portal Architecture", desc: "Structuring secure databases, API schemas, user roles, and access boundaries." },
    { num: "03", name: "CMS Integration", desc: "Developing custom editing forms, text modules, and media libraries." },
    { num: "04", name: "Workflow Integration", desc: "Connecting backend portals directly to live n8n workflow systems." },
    { num: "05", name: "Staged Rollout & Training", desc: "Rolling out the system incrementally to departments, backed by clear documentation." }
  ];

  const techStack = [
    "Next.js", "Supabase", "Firebase", "Vercel", "n8n", "PostgreSQL", "Tailwind CSS", "React"
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
            Unified Systems
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            CMS Enterprise Portals & <span className="gradient-text">Hybrid Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Once a business grows past a certain size, a website and an app stop being enough on their own. Different departments need different access. Data needs one central home instead of five different tools.
          </p>
          <p className="text-base text-text-muted max-w-2xl mx-auto mt-4">
            That's where a <strong>CMS enterprise portal</strong> comes in. It's a centralized system—part website, part application—that gives every part of your business a single, secure place to manage data, content, and workflows.
          </p>
        </section>

        {/* What a Portal Solves */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase">Operational Control</span>
            <h2 className="text-3xl font-extrabold text-white mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              What a CMS enterprise portal actually solves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemsSolved.map((problem, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-cyan mb-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {problem.title}
                  </h4>
                </div>
                <p className="text-xs text-text-muted leading-relaxed mt-2">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features & target audience */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Features (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              What's included in our portal systems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whatsIncluded.map((feature, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {feature.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who this is for (Right) */}
          <div className="lg:col-span-5 glass p-8 rounded-2xl border border-white/10 lg:pl-6">
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
        </section>

        {/* Process Section */}
        <section className="bg-navy-light/40 border-y border-border py-20 mb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange text-sm font-semibold tracking-wider uppercase">Rollout Blueprint</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                Our Portal Delivery Process
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
            Portal stack we use
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
              Ready to bring your operations into one system?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Book a free strategy call and we'll map out what a CMS enterprise portal would look like for your business.
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
