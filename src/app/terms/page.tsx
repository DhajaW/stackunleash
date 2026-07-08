import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | StackUnleash",
  description: "Read the terms and conditions governing the design, automation, and portal development services of StackUnleash.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-border-light pb-8 mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-sm text-text-secondary">
              Last Updated: July 8, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-text-secondary leading-relaxed font-body" style={{ fontFamily: "var(--font-body)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, booking a discovery strategy call, or engaging StackUnleash for custom software development and AI automation integrations, you agree to comply with and be bound by the following terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                2. Scope of Services
              </h2>
              <p>
                StackUnleash provides custom software development, cloud infrastructure setup, n8n/AI automation configurations, database design (e.g. Supabase), and cross-platform mobile portals (e.g. Capacitor/React). Project deliverables are defined strictly by individual written project agreements and statements of work (SOW).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                3. Intellectual Property & Code Ownership
              </h2>
              <p>
                Unless stated otherwise in your SOW SOW, upon final payment:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Clients retain full ownership of custom-developed databases, proprietary configurations, and system frontends.</li>
                <li>StackUnleash retains rights to use boilerplate modules, general utility functions, and reusable code frameworks constructed during development to deliver other general products.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                4. Client Obligations & API Third-Party Fees
              </h2>
              <p>
                Clients are responsible for providing necessary API access, sandbox environments, and business process mappings required to construct workflows. Clients are also responsible for all third-party subscription charges (including Vercel hosting, n8n cloud, OpenAI API keys, and Supabase database plans) required to run their custom applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                5. Limitation of Liability
              </h2>
              <p>
                StackUnleash designs and builds robust, high-performance automated solutions. However, we are not liable for any service disruptions, database overflows, API rate-limit suspensions, or business revenue losses resulting from third-party hosting platforms (Vercel, Supabase) or external API failures.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                6. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to conflicts of law principles. Any legal disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
