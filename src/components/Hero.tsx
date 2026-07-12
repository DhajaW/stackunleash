"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function drawTechIcon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  techName: string,
  color: string
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  
  switch (techName) {
    case "react":
      ctx.translate(x, y);
      ctx.lineWidth = size * 0.15;
      // Central nucleus
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.18, 0, Math.PI * 2);
      ctx.fill();
      // Orbit ellipses
      for (let a = 0; a < 3; a++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.65, size * 0.22, (a * Math.PI) / 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
      
    case "vercel":
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.55);
      ctx.lineTo(size * 0.55, size * 0.45);
      ctx.lineTo(-size * 0.55, size * 0.45);
      ctx.closePath();
      ctx.fill();
      break;
      
    case "nextjs":
      ctx.translate(x, y);
      // Background circle
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0a0a";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = size * 0.06;
      ctx.stroke();
      // Letter 'N'
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = size * 0.13;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(-size * 0.28, size * 0.3);
      ctx.lineTo(-size * 0.28, -size * 0.3);
      ctx.lineTo(size * 0.22, size * 0.3);
      ctx.moveTo(size * 0.22, -size * 0.3);
      ctx.lineTo(size * 0.22, size * 0.3);
      ctx.stroke();
      // Diagonal slash gradient effect overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
      ctx.beginPath();
      ctx.moveTo(-size * 0.28, -size * 0.15);
      ctx.lineTo(size * 0.22, size * 0.3);
      ctx.stroke();
      break;
      
    case "n8n":
      ctx.translate(x, y);
      ctx.lineWidth = size * 0.14;
      // Connect nodes
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, -size * 0.2);
      ctx.lineTo(0, size * 0.2);
      ctx.lineTo(size * 0.35, -size * 0.2);
      ctx.stroke();
      // Helper to draw node circles
      const drawN8nNode = (nx: number, ny: number, isCore: boolean) => {
        ctx.beginPath();
        ctx.arc(nx, ny, size * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = isCore ? color : "#0a0a0a";
        ctx.fill();
        ctx.stroke();
      };
      drawN8nNode(-size * 0.35, -size * 0.2, false);
      drawN8nNode(0, size * 0.2, true);
      drawN8nNode(size * 0.35, -size * 0.2, false);
      break;
      
    case "capacitor":
      ctx.translate(x, y);
      // Lightning bolt
      ctx.beginPath();
      ctx.moveTo(size * 0.1, -size * 0.65);
      ctx.lineTo(-size * 0.35, 0);
      ctx.lineTo(-size * 0.05, 0);
      ctx.lineTo(-size * 0.15, size * 0.65);
      ctx.lineTo(size * 0.35, 0);
      ctx.lineTo(size * 0.05, 0);
      ctx.closePath();
      ctx.fill();
      break;
      
    case "tailwind":
      ctx.translate(x, y);
      const drawTailwindWave = (ox: number, oy: number) => {
        ctx.beginPath();
        ctx.moveTo(ox - size * 0.45, oy);
        ctx.bezierCurveTo(ox - size * 0.2, oy - size * 0.35, ox + size * 0.2, oy - size * 0.35, ox + size * 0.45, oy);
        ctx.bezierCurveTo(ox + size * 0.2, oy + size * 0.35, ox - size * 0.2, oy + size * 0.35, ox - size * 0.45, oy);
        ctx.closePath();
        ctx.fill();
      };
      ctx.globalAlpha = 0.6;
      drawTailwindWave(-size * 0.12, -size * 0.12);
      ctx.globalAlpha = 0.95;
      drawTailwindWave(size * 0.12, size * 0.12);
      break;
      
    case "github":
      ctx.translate(x, y);
      ctx.lineWidth = size * 0.14;
      ctx.lineCap = "round";
      // Git branch line
      ctx.beginPath();
      ctx.moveTo(-size * 0.2, -size * 0.45);
      ctx.lineTo(-size * 0.2, size * 0.45);
      ctx.moveTo(-size * 0.2, 0);
      ctx.bezierCurveTo(0, 0, size * 0.25, 0, size * 0.25, -size * 0.15);
      ctx.lineTo(size * 0.25, -size * 0.35);
      ctx.stroke();
      // Draw 3 node dots
      const drawBranchDot = (bx: number, by: number) => {
        ctx.beginPath();
        ctx.arc(bx, by, size * 0.16, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      };
      drawBranchDot(-size * 0.2, -size * 0.45);
      drawBranchDot(-size * 0.2, size * 0.45);
      drawBranchDot(size * 0.25, -size * 0.35);
      break;
      
    case "wordpress":
      ctx.translate(x, y);
      // WordPress blue circle
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
      ctx.fillStyle = "#21759b";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
      // 'W' letter inside
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = size * 0.11;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(-size * 0.35, -size * 0.28);
      ctx.lineTo(-size * 0.18, size * 0.3);
      ctx.lineTo(0, -size * 0.08);
      ctx.lineTo(size * 0.18, size * 0.3);
      ctx.lineTo(size * 0.35, -size * 0.28);
      ctx.stroke();
      break;
  }
  ctx.restore();
}

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
      maxOpacity: number;
      color: string;
      life: number;
      maxLife: number;
      type: "circle" | "text" | "tech";
      char?: string;
      techName?: string;
      isStream: boolean;
      phase?: number;
      waveAmp?: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Emitter coordinates
    let emitterX = 80;
    let emitterY = 48;

    const updateEmitter = () => {
      const iconImg = document.getElementById("logo-icon-img");
      if (iconImg) {
        const iconRect = iconImg.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        emitterX = iconRect.right - canvasRect.left;
        emitterY = (iconRect.top + iconRect.height / 2) - canvasRect.top;
      }
    };

    const resetParticle = (p: any, isStream: boolean) => {
      p.isStream = isStream;
      if (isStream) {
        updateEmitter();
        p.x = emitterX;
        p.y = emitterY;
        // Direction: flow rightwards and sweep downwards (slower!)
        p.vx = Math.random() * 0.8 + 0.4;
        p.vy = (Math.random() - 0.15) * 0.15;
        p.life = 0;
        p.maxLife = Math.random() * 300 + 200;
        p.phase = Math.random() * Math.PI * 2;
        p.waveAmp = Math.random() * 1.2 + 0.3;

        // Emitter particles: 20% brand tech icons, 25% code text, 55% stream circles
        const roll = Math.random();
        if (roll < 0.20) {
          p.type = "tech";
          const techs = ["react", "vercel", "nextjs", "n8n", "capacitor", "tailwind", "github", "wordpress"];
          p.techName = techs[Math.floor(Math.random() * techs.length)];
          
          const techData: Record<string, { color: string; size: number }> = {
            react: { color: "rgba(97, 218, 251, ", size: Math.random() * 4.0 + 10.0 },
            vercel: { color: "rgba(255, 255, 255, ", size: Math.random() * 3.0 + 8.0 },
            nextjs: { color: "rgba(255, 255, 255, ", size: Math.random() * 4.0 + 10.0 },
            n8n: { color: "rgba(255, 109, 90, ", size: Math.random() * 4.0 + 10.0 },
            capacitor: { color: "rgba(17, 158, 255, ", size: Math.random() * 4.0 + 9.0 },
            tailwind: { color: "rgba(56, 178, 172, ", size: Math.random() * 4.0 + 9.0 },
            github: { color: "rgba(240, 246, 252, ", size: Math.random() * 3.0 + 9.0 },
            wordpress: { color: "rgba(33, 117, 155, ", size: Math.random() * 4.0 + 10.0 }
          };
          const data = techData[p.techName];
          p.color = data.color;
          p.size = data.size;
          p.maxOpacity = Math.random() * 0.5 + 0.45;
        } else if (roll < 0.45) {
          p.type = "text";
          const chars = ["0", "1", "{", "}", "<", ">", "+", "*", ";"];
          p.char = chars[Math.floor(Math.random() * chars.length)];
          p.color = "rgba(34, 211, 238, ";
          p.size = Math.random() * 2.0 + 0.8;
          p.maxOpacity = Math.random() * 0.6 + 0.2;
        } else {
          p.type = "circle";
          const streamColors = [
            "rgba(34, 211, 238, ",
            "rgba(56, 189, 248, ",
            "rgba(251, 146, 60, ",
            "rgba(245, 158, 11, ",
          ];
          p.color = streamColors[Math.floor(Math.random() * streamColors.length)];
          p.size = Math.random() * 2.0 + 0.7;
          p.maxOpacity = Math.random() * 0.6 + 0.2;
        }
        p.opacity = 0;
      } else {
        // Ambient background stars and ghosted tech particles
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
        p.vx = (Math.random() - 0.5) * 0.08; // Slower float speed
        p.vy = (Math.random() - 0.5) * 0.08;
        p.life = Math.random() * 200;
        p.maxLife = Math.random() * 400 + 300; // Longer lifecycle
        p.phase = Math.random() * Math.PI * 2;

        const ambientRoll = Math.random();
        if (ambientRoll < 0.15) {
          // 15% Ambient ghosted tech icons
          p.type = "tech";
          const techs = ["react", "vercel", "nextjs", "n8n", "capacitor", "tailwind", "github", "wordpress"];
          p.techName = techs[Math.floor(Math.random() * techs.length)];
          
          const techColors = [
            "rgba(255, 255, 255, ", // Subtle white glow
            "rgba(6, 182, 212, ",   // Subtle cyan glow
            "rgba(251, 146, 60, ",   // Subtle orange glow
          ];
          p.color = techColors[Math.floor(Math.random() * techColors.length)];
          p.size = Math.random() * 8.0 + 12.0; // Fills 12px to 20px
          p.maxOpacity = Math.random() * 0.10 + 0.03; // Very low opacity (3% to 13%) for clean UI focus
        } else {
          // 85% Ambient stars (circles)
          p.type = "circle";
          const ambientColors = [
            "rgba(148, 163, 184, ",
            "rgba(203, 213, 225, ",
            "rgba(6, 182, 212, ",
            "rgba(251, 146, 60, ",
          ];
          p.color = ambientColors[Math.floor(Math.random() * ambientColors.length)];
          p.size = Math.random() * 2.2 + 0.8; // Various sizes: 0.8px to 3.0px
          p.maxOpacity = Math.random() * 0.35 + 0.1; // Better visibility
        }
        p.opacity = 0; // Fade-in initial state
      }
    };

    // Initialize: 45 ambient stars and 45 logo stream particles
    for (let i = 0; i < 90; i++) {
      const p = {} as any;
      const isStream = i >= 45;
      resetParticle(p, isStream);
      if (isStream) {
        // Stagger along movement path
        const stagger = Math.random() * 120;
        p.x += p.vx * stagger;
        p.y += p.vy * stagger;
        p.opacity = p.maxOpacity * Math.min(1, stagger / 50);
      }
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateEmitter();

      particles.forEach((p) => {
        p.life++;

        if (p.isStream) {
          p.x += p.vx;
          // Soft gravity pull to cascade downwards across typography (much smaller value)
          p.vy += 0.0006;
          p.y += p.vy + Math.sin(p.x * 0.003 + (p.phase ?? 0)) * (p.waveAmp ?? 0);

          // Slow down and float gently as they disperse (further to the right)
          if (p.x > emitterX + 600 || p.x > canvas.width * 0.5) {
            p.vx = p.vx * 0.992 + (Math.random() - 0.5) * 0.005;
            p.vy = p.vy * 0.992 + (Math.random() - 0.5) * 0.01;
          }

          // Fade-in / Fade-out bounds
          if (p.life < 50) {
            p.opacity = (p.life / 50) * p.maxOpacity;
          } else if (p.life > p.maxLife - 50) {
            p.opacity = ((p.maxLife - p.life) / 50) * p.maxOpacity;
          } else {
            p.opacity = p.maxOpacity;
          }

          // Reset if off-screen or dead
          if (
            p.x > canvas.width + 50 ||
            p.y > canvas.height + 50 ||
            p.life >= p.maxLife
          ) {
            resetParticle(p, true);
          }
        } else {
          // Ambient stars float and wrap
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          // Fade-in, Twinkle, and Fade-out logic
          let currentMaxOpacity = p.maxOpacity;
          
          // Organic twinkle effect (sine wave oscillation between 30% and 100% maxOpacity)
          const twinkle = 0.65 + 0.35 * Math.sin(p.life * 0.015 + (p.phase ?? 0));
          currentMaxOpacity *= twinkle;

          if (p.life < 80) {
            // Smooth fade-in
            p.opacity = (p.life / 80) * currentMaxOpacity;
          } else if (p.life > p.maxLife - 80) {
            // Smooth fade-out
            p.opacity = ((p.maxLife - p.life) / 80) * currentMaxOpacity;
          } else {
            p.opacity = currentMaxOpacity;
          }

          if (p.life >= p.maxLife) {
            resetParticle(p, false);
          }
        }

        // Draw particle shape
        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.max(0, p.opacity) + ")";
          ctx.fill();
        } else if (p.type === "text") {
          ctx.font = `bold ${Math.round(p.size * 5.5 + 7)}px monospace`;
          ctx.fillStyle = p.color + Math.max(0, p.opacity) + ")";
          ctx.fillText(p.char || "", p.x, p.y);
        } else if (p.type === "tech") {
          // Enable glowing effect for tech icons
          ctx.save();
          // Use current opacity for shadowColor to make fade transitions smooth
          ctx.shadowColor = p.color + Math.max(0, p.opacity) + ")";
          ctx.shadowBlur = p.size * 1.2;
          drawTechIcon(ctx, p.x, p.y, p.size, p.techName || "", p.color + Math.max(0, p.opacity) + ")");
          ctx.restore();
        }
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          // Connect stream particles or ambient stars nearby
          if (!particles[i].isStream && !particles[j].isStream) continue;

          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const avgX = (particles[i].x + particles[j].x) / 2;
            const distFromEmitter = Math.abs(avgX - emitterX);
            const connectionAlphaFactor = distFromEmitter < 200 ? 0.12 : 0.05;

            ctx.strokeStyle = `rgba(6, 182, 212, ${
              connectionAlphaFactor *
              (1 - dist / 100) *
              Math.min(particles[i].opacity, particles[j].opacity)
            })`;
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
          Cut Manual Work
          <br />
          <span className="mt-2 block">
            By <span className="gradient-text">70-80%</span>.
          </span>
        </h1>

        {/* Sub-heading */}
        <p
          className="animate-fade-up animate-delay-200 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          We build custom AI workflows, enterprise portals, commercial/professional websites, and mobile apps
          custom-tailored for your business.
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
        <div className="animate-fade-up animate-delay-500 mt-12 sm:mt-16 relative">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Satisfied clients", value: "48", change: "+12%", color: "text-cyan" },
                  { label: "Active workflows", value: "128", change: "+18%", color: "text-green-400" },
                  { label: "Tasks automated", value: "3,847", change: "+24%", color: "text-orange" },
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
