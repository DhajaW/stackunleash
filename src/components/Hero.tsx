"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "rgba(6, 182, 212, ",
      "rgba(255, 107, 0, ",
      "rgba(148, 163, 184, ",
    ];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ")";
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6, 182, 212, 0.08), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255, 107, 0, 0.04), transparent 50%)",
        }}
      />
      <Particles />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Trust badge */}
        <div className="animate-fade-up mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light bg-glass-light">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span
            className="text-xs font-medium text-text-secondary tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Enterprise-Grade Solutions • Sri Lanka → Global
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="animate-fade-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          We Don&apos;t Just Build Websites.
          <br />
          <span className="mt-2 block">
            We Build{" "}
            <span className="gradient-text">
              Automated Business Systems
            </span>
            .
          </span>
        </h1>

        {/* Sub-heading */}
        <p
          className="animate-fade-up animate-delay-200 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Empowering your business with AI-driven workflows, smart portals,
          and seamless web-to-mobile solutions.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#discovery" id="hero-cta-primary" className="btn-primary text-base glow-orange">
            Unleash Your Potential
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#stack" id="hero-cta-secondary" className="btn-secondary text-base">
            Explore Our Stack
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="animate-fade-up animate-delay-500 mt-16 sm:mt-20 relative">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-border-light overflow-hidden shadow-2xl shadow-black/40">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-navy-light border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-navy/80 border border-border text-xs text-text-muted flex items-center gap-2">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  app.stackunleash.com/dashboard
                </div>
              </div>
            </div>
            {/* Dashboard content */}
            <div className="bg-navy-light p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Active Workflows", value: "128", change: "+12%", color: "text-cyan" },
                  { label: "Tasks Automated", value: "3,847", change: "+28%", color: "text-green-400" },
                  { label: "Avg Response", value: "0.3s", change: "-45%", color: "text-orange" },
                  { label: "Uptime", value: "99.98%", change: "+0.1%", color: "text-cyan" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4"
                  >
                    <p className="text-xs text-text-muted mb-1" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</p>
                    <p className={`text-xl sm:text-2xl font-bold ${stat.color}`} style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                    <p className="text-xs text-green-400 mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>
              {/* Chart placeholder */}
              <div className="glass-card rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-text-secondary" style={{ fontFamily: "var(--font-heading)" }}>Automation Performance</p>
                  <div className="flex gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange" />Workflows</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan" />Tasks</span>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-24 sm:h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-1">
                      <div
                        className="w-full rounded-sm bg-gradient-to-t from-orange/60 to-orange/20"
                        style={{ height: `${h * 0.8}%` }}
                      />
                      <div
                        className="w-full rounded-sm bg-gradient-to-t from-cyan/60 to-cyan/20"
                        style={{ height: `${h * 0.5}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow behind mockup */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-40 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,107,0,0.15), rgba(6,182,212,0.15))",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problems"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors z-10"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
