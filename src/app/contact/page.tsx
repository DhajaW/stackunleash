"use client";

import React, { useState, useEffect, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Clock, MapPin, Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { useSearchParams } from "next/navigation";

// Form Content Component that reads search parameters
function ContactFormContent() {
  const searchParams = useSearchParams();

  // Form state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  // Validation & status states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-fill fields from query parameters
  useEffect(() => {
    const scopeParam = searchParams.get("scope");
    const priceParam = searchParams.get("price");

    if (scopeParam) {
      const bulletScope = scopeParam.split(", ").map(s => `- ${s}`).join("\n");
      setDetails(`Hi StackUnleash team,\n\nI am interested in building the following scope:\n${bulletScope}\n\nPlease review my requirements and let me know the next steps.`);
    }

    if (priceParam) {
      const price = parseInt(priceParam);
      if (!isNaN(price)) {
        if (price <= 3000) {
          setBudget("1k-3k");
        } else if (price <= 5000) {
          setBudget("3k-5k");
        } else {
          setBudget("5k-plus");
        }
      }
    }
  }, [searchParams]);

  // Simple form validator
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid work email";
    }
    if (!details.trim()) newErrors.details = "Please share some details about your project or stack";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API connection delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setBudget("");
    setDetails("");
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="relative">
      {/* Glowing border glow card effect */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan to-orange opacity-20 blur-md"></div>
      
      <div className="relative glass-card p-8 rounded-2xl border border-white/10 bg-navy-light/60">
        
        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="text-center py-10 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-cyan/15 border border-cyan/30 flex items-center justify-center text-cyan mx-auto mb-6 shadow-lg shadow-cyan/10 animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Connection Established!
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto mb-8">
              Thank you, <span className="text-white font-semibold">{name}</span>! Your automation scope parameters have been logged securely. Our expert engineering team will analyze your stack details and email you at <span className="text-white font-semibold">{email}</span> within the next 12 hours.
            </p>
            <button
              onClick={handleReset}
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold glow-orange"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Submit Another Scope
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Email Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full bg-navy border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    errors.name 
                      ? "border-red-500/50 focus:border-red-500 bg-red-950/10" 
                      : "border-white/10 focus:border-cyan focus:bg-navy-light"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full bg-navy border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    errors.email 
                      ? "border-red-500/50 focus:border-red-500 bg-red-950/10" 
                      : "border-white/10 focus:border-cyan focus:bg-navy-light"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Company & Budget Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan focus:bg-navy-light transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Project Budget (USD)
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan focus:bg-navy-light transition-all duration-300 text-text-secondary"
                >
                  <option value="">Select a range...</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k-plus">$5,000+</option>
                  <option value="undecided">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* Project Scope Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Project Scope & Bottleneck *
              </label>
              <textarea
                rows={5}
                placeholder="Please describe what process you want to automate (e.g., 'We want to sync HubSpot leads to custom n8n webhook and write to Supabase, then trigger email alerts...')"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                disabled={isSubmitting}
                className={`w-full bg-navy border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 resize-none ${
                  errors.details 
                    ? "border-red-500/50 focus:border-red-500 bg-red-950/10" 
                    : "border-white/10 focus:border-cyan focus:bg-navy-light"
                }`}
              ></textarea>
              {errors.details && (
                <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.details}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all duration-300 glow-orange cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Establishing Connection...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Project Scope
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-navy text-white font-body" style={{ fontFamily: "var(--font-body)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              Connect with Engineers
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Let&apos;s Build Your <span className="gradient-text">Automated Future</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Eliminate manual tasks, integrate API databases, and launch custom customer portals tailored for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Have an automation bottleneck?
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Fill out the project scope outline, and our core engineering team will run a comprehensive stack review. We specialize in connecting legacy infrastructure with modern automated pipelines.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Direct Inquiry Email</h4>
                    <a href="mailto:hello@stackunleash.com" className="text-sm text-text-secondary hover:text-cyan transition-colors duration-200">
                      hello@stackunleash.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center text-orange flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Typical Response Time</h4>
                    <p className="text-sm text-text-secondary">Under 12 Hours (Consulting days: Mon - Fri)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Global HQ & Operations</h4>
                    <p className="text-sm text-text-secondary">Colombo, Sri Lanka & Serving Clients Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl glass border border-white/5 bg-navy-light/20 text-xs text-text-muted">
                <h5 className="font-bold text-white mb-2 uppercase tracking-wider">Zero Lock-In Contract</h5>
                <p className="leading-relaxed">
                  All consulting deliverables come with 100% code ownership. Your third-party API configurations are encrypted, and we transfer all Supabase and Vercel structures directly to your custody.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Form Box */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="relative glass-card p-8 rounded-2xl border border-white/10 bg-navy-light/60 text-center py-20">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto text-cyan mb-4" />
                  <p className="text-text-secondary text-sm">Loading secure contact form...</p>
                </div>
              }>
                <ContactFormContent />
              </Suspense>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
