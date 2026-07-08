import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | StackUnleash",
  description: "Learn how StackUnleash collects, uses, and protects your business and personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-border-light pb-8 mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-sm text-text-secondary">
              Last Updated: July 8, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-text-secondary leading-relaxed font-body" style={{ fontFamily: "var(--font-body)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                1. Overview & Scope
              </h2>
              <p>
                At StackUnleash, we value the trust you place in us to build automated systems for your operations. This Privacy Policy details how we handle business and personal data when you interact with our platform, inquire about our consulting services, or hire us to construct AI workflows and custom portals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect information to deliver tailored development services and maintain operational efficiency:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Contact & Inquiry Information:</strong> Full name, corporate email address, phone number, and any details submitted via our strategy booking form.
                </li>
                <li>
                  <strong className="text-white">Development Data:</strong> API structures, automation configurations, and business process outlines required to construct your workflows (e.g. n8n mappings, Supabase tables).
                </li>
                <li>
                  <strong className="text-white">Technical logs:</strong> Device details, browser versions, and site interaction statistics collected automatically via cookies or basic server analysis.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                3. How We Use Your Data
              </h2>
              <p className="mb-3">
                Your data is exclusively utilized to construct and deploy the solutions you request. Specifically, we use the collected data to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Design, configure, and maintain custom workflows, cloud integrations, and mobile portals.</li>
                <li>Schedule discovery sessions and provide technical support.</li>
                <li>Verify platform performance and optimize visual layout responsive behaviors.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                4. Data Protection & Sharing
              </h2>
              <p>
                We do not sell, rent, or lease your business details or development configurations to third parties. Data is only shared with trusted cloud infrastructure providers (such as Vercel, Supabase, and GitHub) necessary to host and run your applications, under strict security standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                5. Your Rights
              </h2>
              <p>
                You retain complete control over your data. At any point, you may request the deletion or retrieval of your workflow configurations, contact history, or portal access keys by emailing us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                6. Contact Information
              </h2>
              <p>
                For questions regarding this policy or the security of your custom integrations, please reach out to us at:{" "}
                <a href="mailto:hello@stackunleash.com" className="text-cyan hover:underline">
                  hello@stackunleash.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
