"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Calculator, Sparkles, Cpu, Database, Smartphone, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface CalculatorItem {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const calculatorOptions: CalculatorItem[] = [
  {
    id: "n8n-sync",
    name: "n8n Core Workflow Sync",
    price: 750,
    description: "Connect APIs, map fields, sync databases, and automate background scripts.",
    icon: Cpu,
  },
  {
    id: "ai-agents",
    name: "AI & Prompt Orchestration",
    price: 1200,
    description: "Build custom LLM prompt chains, integrate OpenAI API keys, and setup vector search.",
    icon: Sparkles,
  },
  {
    id: "supabase-db",
    name: "Supabase Portal & Database",
    price: 1800,
    description: "Design custom PostgreSQL database tables, secure row-level auth, and build client portals.",
    icon: Database,
  },
  {
    id: "capacitor-mobile",
    name: "Capacitor Mobile App Wrapper",
    price: 1500,
    description: "Compile and wrap frontends into native iOS & Android applications for app store deployment.",
    icon: Smartphone,
  },
];

const packages = [
  {
    name: "Starter Setup",
    price: 1100,
    promo: 770,
    description: "Perfect for automating core backend routines and simple database syncing.",
    features: [
      "Up to 3 core n8n workflow syncs",
      "API keys & secrets configuration",
      "Basic email/slack logging integration",
      "Post-delivery support (14 days)",
      "100% Code & IP ownership",
    ],
    cta: "basic-sync",
    popular: false,
  },
  {
    name: "Growth System",
    price: 2800,
    promo: 1960,
    description: "Ideal for startups needing admin portals, user authentication, and multi-app syncing.",
    features: [
      "Up to 6 n8n workflows + Supabase Database",
      "Premium React/Next.js client portal",
      "Google/Email User authentication logs",
      "Advanced custom error-catch scripts",
      "Post-delivery support (30 days)",
      "100% Code & IP ownership",
    ],
    cta: "n8n-sync,supabase-db",
    popular: true,
  },
  {
    name: "Enterprise Platform",
    price: 5700,
    promo: 3990,
    description: "Built for companies requiring custom AI pipelines, mobile apps, and absolute compliance.",
    features: [
      "Unlimited n8n syncs + AI integrations",
      "Capacitor wrapper for iOS/Android stores",
      "Zero-Trust SSL security audits",
      "OpenAI Agent & prompt vector setups",
      "Priority 24/7 dedicated support (90 days)",
      "100% Code & IP ownership",
    ],
    cta: "n8n-sync,ai-agents,supabase-db,capacitor-mobile",
    popular: false,
  },
];

export default function PricingPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>(["n8n-sync"]);

  const handleToggle = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Math Calculations
  const subtotal = selectedItems.reduce((acc, itemId) => {
    const item = calculatorOptions.find((o) => o.id === itemId);
    return acc + (item ? item.price : 0);
  }, 0);

  const discountRate = 0.3; // 30% Early Bird
  const discount = Math.round(subtotal * discountRate);
  const total = subtotal - discount;

  // Build redirect URL
  const selectedNames = selectedItems
    .map((id) => calculatorOptions.find((o) => o.id === id)?.name)
    .filter(Boolean)
    .join(", ");
  const contactUrl = `/contact?scope=${encodeURIComponent(selectedNames)}&price=${total}`;

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-navy text-white font-body" style={{ fontFamily: "var(--font-body)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
              30% Early Bird Launch Discount Active
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Transparent, <span className="gradient-text">Value-Driven</span> Pricing
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Select the features you need or choose a packaged tier. Price includes full code handover and zero monthly agency retainers.
            </p>
          </div>

          {/* Interactive Calculator Section */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Custom Project Cost Calculator
              </h2>
              <p className="text-text-muted text-sm max-w-lg mx-auto">
                Toggle options below to dynamically calculate your launch discount and total project estimate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Checkboxes Panel (Left) */}
              <div className="lg:col-span-7 space-y-4">
                {calculatorOptions.map((option) => {
                  const Icon = option.icon;
                  const isChecked = selectedItems.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => handleToggle(option.id)}
                      className={`glass p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start select-none ${
                        isChecked
                          ? "border-cyan/40 bg-cyan/5 shadow-md shadow-cyan/5"
                          : "border-white/5 hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border mt-1 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isChecked 
                          ? "bg-cyan border-cyan text-navy" 
                          : "border-white/20"
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                      </div>

                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <h4 className="font-bold text-white text-base" style={{ fontFamily: "var(--font-heading)" }}>
                            {option.name}
                          </h4>
                          <span className="text-white font-mono font-bold whitespace-nowrap">
                            +${option.price}
                          </span>
                        </div>
                        <p className="text-text-secondary text-xs leading-relaxed max-w-md">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total Invoice Card (Right) */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 relative">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan/30 to-orange/30 opacity-75 blur-[3px]"></div>
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-r from-cyan/5 to-orange/5 blur-2xl -z-10"></div>
                  
                  <div className="relative glass-card p-8 rounded-2xl border border-white/10 bg-navy-light/60">
                    <div className="flex items-center gap-2 text-cyan font-bold text-xs uppercase tracking-wider mb-6">
                      <Calculator className="w-4 h-4" /> Scope Estimate Details
                    </div>

                    {selectedItems.length === 0 ? (
                      <div className="text-center py-8 text-text-muted text-sm">
                        Select one or more features on the left to compute the pricing.
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="space-y-3 text-sm text-text-secondary border-b border-white/5 pb-4">
                          <div className="flex justify-between">
                            <span>Selected modules ({selectedItems.length}):</span>
                            <span className="text-white font-mono font-bold">${subtotal}</span>
                          </div>
                          <div className="flex justify-between text-orange">
                            <span className="flex items-center gap-1.5">
                              Launch Discount (30% off):
                            </span>
                            <span className="font-mono font-bold">-${discount}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-baseline mb-6">
                          <span className="text-sm text-text-muted font-medium">Estimated Project Cost:</span>
                          <div className="text-right">
                            <span className="text-xs text-text-muted line-through font-mono mr-2">${subtotal}</span>
                            <span className="text-3xl sm:text-4xl font-black text-cyan font-mono">${total}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 p-3 rounded-xl bg-cyan/5 border border-cyan/15 text-xs text-cyan">
                          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                          <span>Includes 100% IP rights & handover deployment.</span>
                        </div>

                        <Link
                          href={contactUrl}
                          className="w-full btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 glow-orange hover:gap-3 transition-all duration-300"
                        >
                          Submit this Project Scope <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Standard Pricing Packages Table */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Packaged Enterprise Tiers
              </h2>
              <p className="text-text-muted text-sm max-w-lg mx-auto">
                Select a pre-packaged tier configured around the most common business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`glass-card p-8 rounded-2xl relative border flex flex-col justify-between ${
                    pkg.popular
                      ? "border-cyan/40 shadow-lg shadow-cyan/5 scale-100 lg:scale-[1.03] bg-navy-light/40"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan text-navy text-[10px] font-black tracking-wider uppercase">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {pkg.name}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-sm text-text-muted line-through font-mono">${pkg.price}</span>
                      <span className="text-3xl font-black text-white font-mono">${pkg.promo}</span>
                      <span className="text-xs text-text-muted font-medium">/ flat cost</span>
                    </div>

                    <ul className="space-y-3.5 mb-8 text-sm text-text-secondary border-t border-white/5 pt-6">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex gap-2.5 items-start">
                          <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?scope=${encodeURIComponent(pkg.name)}&price=${pkg.promo}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-300 ${
                      pkg.popular
                        ? "btn-primary glow-orange"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                    }`}
                  >
                    Select {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
