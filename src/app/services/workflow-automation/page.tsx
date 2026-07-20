import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, Workflow, AlertCircle, RefreshCw, Cpu, Layers } from "lucide-react";

export const metadata = {
  title: "Workflow Automation & Workflow Management Software | StackUnleash",
  description: "We build workflow automation systems and custom workflow management software that cut manual work by 70-80%. Powered by n8n and AI, built around your operations.",
};

export default function WorkflowAutomationPage() {
  const manualProblems = [
    {
      title: "Data Silos & Scattered Info",
      description: "Critical business data scattered across disconnected spreadsheets, requiring endless manual copying."
    },
    {
      title: "Approval Deadlocks",
      description: "Critical actions and sign-offs stuck waiting in someone's inbox because nobody received an alert."
    },
    {
      title: "Untracked Communications",
      description: "Operational updates lost between SMS, WhatsApp threads, phone calls, and messy inbox folders."
    },
    {
      title: "Human Error Risks",
      description: "Typographical mistakes causing major delays—like routing a complaint to the wrong staff or mismatching invoice totals."
    }
  ];

  const comparison = [
    {
      type: "Workflow Automation",
      focus: "Connecting Existing Systems",
      detail: "Links the tools you already rely on. Automates steps like approval routings, Slack alerts, and sheet syncs. Built mainly on n8n with light AI logic where it adds practical value."
    },
    {
      type: "Workflow Management Software",
      focus: "Custom Dedicated Platforms",
      detail: "A fully tailored system developed when off-the-shelf apps fail. Features central operations portals, role-based user access dashboards, and a singular, robust source of truth."
    }
  ];

  const whatsIncluded = [
    { title: "Process Audit", desc: "We audit and map out your actual workflow, uncovering the exact points where errors and bottlenecks occur." },
    { title: "Automation Blueprint", desc: "A logical flow design demonstrating how data will flow, trigger notifications, and integrate." },
    { title: "n8n & AI Integration", desc: "Developing secure automation loops using n8n and AI models to process complex natural language inputs." },
    { title: "Custom Software Development", desc: "Building responsive frontends and data portals around your automation loops, as needed." },
    { title: "Real-time Telemetry & Alerts", desc: "Setup alerts that reach the right person instantly via Slack, WhatsApp, or email." }
  ];

  const results = [
    { type: "E-commerce", what: "Order processing, inventory management, customer support routing", result: "Reduced manual processing by 80%" },
    { type: "Property Management", what: "Maintenance request dispatching, tenant notifications, staff routing", result: "Eliminated misrouted complaints completely" },
    { type: "Contractor Billing", what: "Mobilization verify against $3.97M, multi-level committee sign-offs", result: "Removed manual reconciliation errors entirely" }
  ];

  const techStack = [
    "n8n", "AI Studio", "Supabase", "Firebase", "GitHub", "WhatsApp API", "Stripe API", "Slack API"
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
            Operational Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            Workflow Automation & <span className="gradient-text">Workflow Management Software</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            If your team spends its day chasing approvals, copying data between spreadsheets, or hunting for updates across WhatsApp and email, the problem usually isn't your team. It's the lack of a system tying everything together.
          </p>
          <p className="text-base text-text-muted max-w-2xl mx-auto mt-4">
            That's what <strong>workflow automation</strong> fixes. We build systems that move information, trigger notifications, and route approvals automatically, so your team spends time on decisions instead of data entry.
          </p>
        </section>

        {/* The Problem section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <span className="text-orange text-sm font-semibold tracking-wider uppercase">Operational Friction</span>
            <h2 className="text-3xl font-extrabold text-white mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The problem with manual processes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manualProblems.map((problem, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-orange mb-4">
                    <AlertCircle className="w-6 h-6" />
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

          {/* Real Cases Card */}
          <div className="relative group mt-10 max-w-4xl mx-auto">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-orange/30 to-cyan/30 opacity-75 blur-[2px]"></div>
            <div className="relative glass p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold text-white mb-3 text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                Real-World Operational Risk Example
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                We've seen these breakdowns firsthand. In one contractor billing process, invoice details needed exact verification against a <strong>$3.97 million mobilization total</strong> before it could reach committee approval. In another maintenance system, a single mistyped house number meant a critical complaint went to the wrong staff member entirely. Manual processes don't just waste time; they create massive liabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-navy-light/40 border-y border-border py-20 mb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan text-sm font-semibold tracking-wider uppercase">Strategic Framework</span>
              <h2 className="text-3xl font-extrabold text-white mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                Automation vs. Custom Management Software
              </h2>
              <p className="text-text-muted text-sm max-w-xl mx-auto mt-2">
                These two architectures work together, but they address different operational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {comparison.map((c, i) => (
                <div key={i} className="glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-cyan mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {c.type}
                    </h3>
                    <div className="text-xs font-semibold text-orange uppercase tracking-wider mb-4">
                      {c.focus}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included & Results */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* What's Included (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              What's included in our delivery
            </h3>
            <div className="space-y-4">
              {whatsIncluded.map((item, i) => (
                <div key={i} className="flex gap-4 pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                  <div className="text-cyan font-bold mt-1 text-sm">
                    0{i + 1}.
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Table (Right) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Results our clients have seen
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-light/30">
              <table className="min-w-full divide-y divide-white/10 text-sm">
                <thead>
                  <tr className="bg-white/[0.02]">
                    <th className="px-6 py-4 text-left font-bold text-cyan" style={{ fontFamily: "var(--font-heading)" }}>Business Type</th>
                    <th className="px-6 py-4 text-left font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>What We Automated</th>
                    <th className="px-6 py-4 text-left font-bold text-orange" style={{ fontFamily: "var(--font-heading)" }}>Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {results.map((row, index) => (
                    <tr key={index} className="hover:bg-white/[0.01] transition-colors">
                      <td className="px-6 py-4 font-bold text-white align-top">{row.type}</td>
                      <td className="px-6 py-4 text-text-secondary align-top leading-relaxed">{row.what}</td>
                      <td className="px-6 py-4 font-semibold text-orange align-top">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Automation stack we use
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
              Ready to cut manual work by 70-80%?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Book a free strategy call. We'll audit your current process and show you exactly where automation makes the biggest difference.
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
