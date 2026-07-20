import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Workflow, Smartphone, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Services | Custom Websites, Automation & Apps – StackUnleash",
  description: "Explore StackUnleash's core services: custom website development, workflow automation, custom mobile app development, and CMS enterprise portals built for growing businesses.",
};

const serviceCards = [
  {
    icon: Globe,
    title: "Custom Website Development & Personalized Websites",
    description: "Your website should do more than look good. It should convert visitors, reflect your brand, and connect to the systems you already run behind the scenes.",
    detailText: "We build fully custom, personalized websites for businesses that have outgrown templates, from marketing sites to client portals with booking, payments, and automated confirmations baked in.",
    href: "/services/custom-website-development",
    accentColor: "cyan",
    borderHover: "border-glow-cyan",
  },
  {
    icon: Workflow,
    title: "Workflow Automation & Workflow Management Software",
    description: "Spreadsheets, WhatsApp threads, and manual approvals eat up hours every week. Multiply that across a whole team, and it adds up to a lot of lost time.",
    detailText: "Our workflow automation systems, built primarily on n8n, connect your tools, trigger notifications, and route approvals automatically. We also build custom workflow management software when off-the-shelf tools can't handle how your business actually operates.",
    href: "/services/workflow-automation",
    accentColor: "orange",
    borderHover: "border-glow-orange",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    description: "Sometimes a website isn't enough, and you need something people can carry in their pocket.",
    detailText: "We handle custom mobile app development for Android and iOS, from internal staff tools to customer-facing apps. If you've been putting off the decision to get your own app, this is where that starts.",
    href: "/services/custom-mobile-app-development",
    accentColor: "cyan",
    borderHover: "border-glow-cyan",
  },
  {
    icon: Building2,
    title: "CMS Enterprise Portals & Hybrid Solutions",
    description: "Bigger operations need more than a website and an app working separately. They need one system that ties everything together.",
    detailText: "We design CMS enterprise portals with role-based access, centralized data, and real-time visibility across departments. It's CMS development built for teams that need control, not just content.",
    href: "/services/enterprise-portals",
    accentColor: "orange",
    borderHover: "border-glow-orange",
  },
];

export default function ServicesPage() {
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
            What We Focus On
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Most businesses don't need more software. They need software that actually fits how they work.
          </p>
          <p className="text-base text-text-muted max-w-3xl mx-auto mt-4 leading-relaxed">
            That's what we build at StackUnleash. Every project starts with the same question: what's slowing you down right now? From there, we design a <strong>personalized website</strong>, an automated workflow, a mobile app, or a full enterprise portal that removes the bottleneck instead of adding another tool to manage.
          </p>
        </section>

        {/* Services Showcase Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`relative glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${service.borderHover} ${
                    service.featured ? "ring-1 ring-orange/20" : ""
                  }`}
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        service.accentColor === "orange" ? "bg-orange/10 text-orange" : "bg-cyan/10 text-cyan"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      {service.featured && (
                        <span className="badge-recommended">Highly Requested</span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
                      {service.title}
                    </h2>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4 font-semibold">
                      {service.description}
                    </p>

                    <p className="text-text-muted text-sm leading-relaxed mb-8">
                      {service.detailText}
                    </p>
                  </div>

                  <a
                    href={service.href}
                    id={`hub-service-cta-${index}`}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 group ${
                      service.featured ? "btn-primary glow-orange" : "btn-secondary"
                    }`}
                  >
                    See how we build this →
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action: Not sure? */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <div className="relative glass-card p-10 sm:p-12 rounded-3xl border border-white/10 overflow-hidden bg-navy-light/40">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan/10 to-orange/10 opacity-30 blur-2xl pointer-events-none"></div>
            
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Not sure which one you need?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Most projects touch more than one of these areas, and that's normal. Book a free strategy call and we'll map out what actually makes sense for your business before you commit to anything.
            </p>
            <a 
              href="/contact" 
              className="btn-primary px-8 py-4 text-base font-bold glow-orange inline-flex items-center gap-2"
            >
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
