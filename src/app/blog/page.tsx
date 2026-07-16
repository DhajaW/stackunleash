"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
  Sun,
  Moon,
  TrendingUp,
  Zap,
  Code2,
  Layers,
  Smartphone,
  Globe,
  ChevronRight,
  BookOpen,
  Tag,
} from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const categories = [
  { label: "All", icon: Layers },
  { label: "Workflow Automation", icon: Zap },
  { label: "Web Development", icon: Globe },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "Dev Insights", icon: Code2 },
  { label: "Case Studies", icon: TrendingUp },
];

const posts = [
  {
    id: 1,
    slug: "cut-manual-work-workflow-automation",
    featured: true,
    category: "Workflow Automation",
    categoryColor: "#06B6D4",
    categoryBg: "rgba(6,182,212,0.12)",
    title: "How We Cut Manual Work by 80% Using n8n Workflow Automation",
    excerpt:
      "A deep-dive into how we replaced 14 hours of weekly manual data entry with a fully automated n8n pipeline — zero human intervention, real-time alerts, and seamless Supabase integration.",
    author: { name: "StackUnleash Team", avatar: "SU" },
    date: "Jul 12, 2026",
    readTime: "8 min read",
    tags: ["n8n", "Automation", "Supabase"],
    gradient: "from-cyan/20 via-navy-light to-navy",
    accentColor: "#06B6D4",
    size: "featured",
    image: "/blog-automation.png",
  },
  {
    id: 2,
    slug: "custom-website-vs-template",
    featured: false,
    category: "Web Development",
    categoryColor: "#FF6B00",
    categoryBg: "rgba(255,107,0,0.12)",
    title: "Custom Website vs. Template: Why Personalized Wins Every Time",
    excerpt:
      "Templates save time, but cost you conversions. Here's the data-backed case for investing in a custom website built around your exact business processes.",
    author: { name: "StackUnleash Team", avatar: "SU" },
    date: "Jul 8, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "WordPress", "SEO"],
    accentColor: "#FF6B00",
    size: "tall",
    image: "/blog-website.png",
  },
  {
    id: 3,
    slug: "get-your-own-app-guide",
    featured: false,
    category: "Mobile Apps",
    categoryColor: "#8B5CF6",
    categoryBg: "rgba(139,92,246,0.12)",
    title: "Get Your Own App: From Idea to Android & iOS in 6 Weeks",
    excerpt:
      "A practical playbook for businesses ready to launch their first mobile app — without the $100K+ enterprise price tag.",
    author: { name: "StackUnleash Team", avatar: "SU" },
    date: "Jul 3, 2026",
    readTime: "6 min read",
    tags: ["React", "Capacitor", "iOS", "Android"],
    accentColor: "#8B5CF6",
    size: "normal",
    image: "/blog-mobile.png",
  },
  {
    id: 4,
    slug: "n8n-vs-zapier-2026",
    featured: false,
    category: "Workflow Automation",
    categoryColor: "#06B6D4",
    categoryBg: "rgba(6,182,212,0.12)",
    title: "n8n vs Zapier in 2026: The Definitive Comparison for Growing Businesses",
    excerpt:
      "Both tools automate workflows — but one gives you full control, self-hosting, and unlimited executions. We break down when to use each.",
    author: { name: "StackUnleash Team", avatar: "SU" },
    date: "Jun 27, 2026",
    readTime: "7 min read",
    tags: ["n8n", "Zapier", "Automation"],
    accentColor: "#06B6D4",
    size: "wide",
    image: "/blog-automation.png",
  },
  {
    id: 5,
    slug: "workflow-management-software-guide",
    featured: false,
    category: "Dev Insights",
    categoryColor: "#10B981",
    categoryBg: "rgba(16,185,129,0.12)",
    title: "Workflow Management Software: What Every Business Owner Should Know",
    excerpt:
      "From approval chains to automated reporting — a non-technical guide to understanding what workflow management software actually does.",
    author: { name: "StackUnleash Team", avatar: "SU" },
    date: "Jun 20, 2026",
    readTime: "4 min read",
    tags: ["Automation", "Business", "Productivity"],
    accentColor: "#10B981",
    size: "normal",
    image: "/blog-website.png",
  },
  {
    id: 6,
    slug: "ecommerce-automation-case-study",
    featured: false,
    category: "Case Studies",
    categoryColor: "#F59E0B",
    categoryBg: "rgba(245,158,11,0.12)",
    title: "Case Study: E-Commerce AI Automation That Reduced Processing by 80%",
    excerpt:
      "How we integrated n8n, Supabase, and AI Studio to fully automate order management, inventory sync, and customer comms for a growing e-commerce brand.",
    author: { name: "StackUnleash Team", avatar: "SU" },
    date: "Jun 14, 2026",
    readTime: "9 min read",
    tags: ["n8n", "AI Studio", "E-Commerce"],
    accentColor: "#F59E0B",
    size: "tall",
    image: "/blog-automation.png",
  },
];

/* ─────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────── */

/** Animated section fade-in on scroll */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/** Category badge chip */
function CategoryBadge({
  label,
  color,
  bg,
  small = false,
}: {
  label: string;
  color: string;
  bg: string;
  small?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide ${
        small ? "text-[10px] px-2.5 py-1" : "text-xs px-3 py-1.5"
      }`}
      style={{
        color,
        background: bg,
        border: `1px solid ${color}30`,
        fontFamily: "var(--font-heading)",
      }}
    >
      <Tag className={small ? "w-2.5 h-2.5" : "w-3 h-3"} />
      {label}
    </span>
  );
}

/** Author + meta row with conditional theme styles */
function PostMeta({
  author,
  date,
  readTime,
  darkMode = true,
}: {
  author: { name: string; avatar: string };
  date: string;
  readTime: string;
  darkMode?: boolean;
}) {
  const textClass = darkMode ? "text-text-muted" : "text-slate-500";
  const authorClass = darkMode ? "text-text-secondary" : "text-slate-700";
  return (
    <div className={`flex items-center gap-3 text-xs ${textClass}`} style={{ fontFamily: "var(--font-body)" }}>
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
        style={{
          background: "linear-gradient(135deg,#FF6B00,#06B6D4)",
          color: "#fff",
          fontFamily: "var(--font-heading)",
        }}
      >
        {author.avatar}
      </span>
      <span className={`${authorClass} font-medium`}>
        {author.name}
      </span>
      <span className={textClass}>·</span>
      <Calendar className="w-3 h-3" />
      <span>{date}</span>
      <span className={textClass}>·</span>
      <Clock className="w-3 h-3" />
      <span>{readTime}</span>
    </div>
  );
}

/** Tag pills row */
function TagRow({ tags, light = false }: { tags: string[]; light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg border ${
            light
              ? "text-white/60 bg-white/[0.06] border-white/10"
              : "text-text-muted bg-white/[0.04] border-white/[0.08]"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/** FEATURED POST — full-width hero card */
function FeaturedCard({ post }: { post: typeof posts[0] }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(30,41,59,0.9) 50%, rgba(15,23,42,1) 100%)",
        border: "1px solid rgba(6,182,212,0.15)",
        boxShadow: "0 0 60px rgba(6,182,212,0.05), 0 40px 80px -20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Glow orb top-right */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)" }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left — high-end artistic visual panel */}
        <div className="relative h-64 lg:h-auto min-h-[360px] overflow-hidden lg:col-span-6">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle gradient overlay to mesh with text */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-navy/10 to-navy-light/90" />

          {/* Featured badge */}
          <div className="absolute top-5 left-5">
            <span
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg,#FF6B00,#E55F00)",
                color: "#fff",
                fontFamily: "var(--font-heading)",
              }}
            >
              ★ Featured Post
            </span>
          </div>
        </div>

        {/* Right — content panel */}
        <div className="p-8 sm:p-10 flex flex-col justify-center gap-5 bg-navy-light/40 lg:col-span-6">
          <CategoryBadge label={post.category} color={post.categoryColor} bg={post.categoryBg} />

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white group-hover:text-cyan transition-colors duration-300 animate-pulse-slow"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            {post.title}
          </h2>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed line-clamp-3" style={{ fontFamily: "var(--font-body)" }}>
            {post.excerpt}
          </p>

          <TagRow tags={post.tags} />
          <PostMeta author={post.author} date={post.date} readTime={post.readTime} darkMode={true} />

          <a
            href={`/blog/${post.slug}`}
            id="blog-featured-cta"
            className="btn-primary w-fit text-sm glow-orange group/btn"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

/** BENTO CARD — standard grid card */
function BlogCard({
  post,
  index,
  darkMode,
}: {
  post: typeof posts[0];
  index: number;
  darkMode: boolean;
}) {
  const { ref, visible } = useFadeIn();
  const isWide = post.size === "wide";
  const isTall = post.size === "tall";

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 ${
        isWide ? "md:col-span-2" : ""
      } ${isTall ? "row-span-2" : ""} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${
        darkMode
          ? "glass-card"
          : "bg-white border border-slate-200 shadow-sm hover:shadow-xl"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        ...(darkMode ? {} : { background: "#ffffff" }),
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${post.accentColor}20, inset 0 0 30px ${post.accentColor}06`,
          border: `1px solid ${post.accentColor}30`,
        }}
      />

      {/* Top accent stripe */}
      <div
        className="h-[3px] w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${post.accentColor}, transparent)` }}
      />

      {/* Card Image Header */}
      <div className={`relative overflow-hidden flex-shrink-0 ${isTall ? "h-64" : "h-48"}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${darkMode ? "bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" : "bg-gradient-to-t from-black/20 to-transparent"}`} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <CategoryBadge label={post.category} color={post.categoryColor} bg={post.categoryBg} small />
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
            style={{ background: `${post.accentColor}15`, color: post.accentColor }}
          >
            <BookOpen className="w-4 h-4" />
          </div>
        </div>

        <h3
          className={`font-extrabold leading-snug transition-colors duration-300 group-hover:opacity-90 ${
            isWide ? "text-xl sm:text-2xl" : "text-lg"
          } ${darkMode ? "text-white" : "text-slate-900"}`}
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
        >
          {post.title}
        </h3>

        <p
          className={`text-sm leading-relaxed line-clamp-3 ${
            darkMode ? "text-text-muted" : "text-slate-500"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-col gap-3">
          <TagRow tags={post.tags} light={darkMode} />
          <PostMeta author={post.author} date={post.date} readTime={post.readTime} darkMode={darkMode} />
        </div>
      </div>

      {/* Read more footer */}
      <div
        className={`px-6 py-4 border-t flex items-center justify-between ${
          darkMode ? "border-white/[0.06]" : "border-slate-100"
        }`}
      >
        <a
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5"
          style={{ color: post.accentColor, fontFamily: "var(--font-heading)" }}
        >
          Read More <ChevronRight className="w-3.5 h-3.5" />
        </a>
        <span
          className={`text-[10px] flex items-center gap-1 ${
            darkMode ? "text-text-muted" : "text-slate-400"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  // Initialize theme from localStorage on client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  const featuredPost = posts.find((p) => p.featured)!;
  const gridPosts = posts.filter((p) => !p.featured);

  const filtered = gridPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const bg = darkMode ? "bg-navy min-h-screen text-white" : "bg-slate-50 min-h-screen text-slate-800";

  return (
    <>
      <Header />
      <div className={`${bg} transition-colors duration-300`} style={{ fontFamily: "var(--font-body)" }}>
        {/* ── PAGE HEADER ── */}
        <div
          className="relative pt-36 pb-20 px-4 sm:px-6 overflow-hidden"
          style={
            darkMode
              ? {
                  background:
                    "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,182,212,0.1), transparent 60%)",
                }
              : {
                  background:
                    "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,182,212,0.06), transparent 60%)",
                }
          }
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              opacity: darkMode ? 1 : 0.3,
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            {/* Theme toggle — hardware-accelerated translation animation */}
            <div className="absolute top-0 right-0">
              <button
                id="blog-theme-toggle"
                onClick={toggleTheme}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/40 cursor-pointer ${
                  darkMode ? "bg-slate-800 border border-white/10" : "bg-cyan/10 border border-cyan/20"
                }`}
                aria-label="Toggle theme"
              >
                <span
                  className={`absolute top-[3px] w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 shadow-md ${
                    darkMode ? "translate-x-7" : "translate-x-1"
                  }`}
                  style={{
                    background: darkMode
                      ? "linear-gradient(135deg,#1e3a5f,#0891b2)"
                      : "linear-gradient(135deg,#fbbf24,#f59e0b)",
                    boxShadow: darkMode
                      ? "0 0 10px rgba(6,182,212,0.4)"
                      : "0 0 10px rgba(251,191,36,0.5)",
                  }}
                >
                  {darkMode ? (
                    <Moon className="w-3.5 h-3.5 text-cyan" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-white" />
                  )}
                </span>
              </button>
            </div>

            {/* Section label */}
            <p className="section-label animate-fade-up">The StackUnleash Journal</p>

            {/* Artistic Main Heading with Watermark */}
            <div className="relative mb-6">
              {/* Massive futuristic background watermark */}
              <div className="absolute -left-4 -top-14 text-7xl sm:text-[10rem] font-black opacity-[0.03] select-none pointer-events-none tracking-tighter text-cyan font-mono">
                BLOG//01
              </div>
              
              <h1
                className={`relative animate-fade-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}
              >
                The StackUnleash{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Blog</span>
                  <span className="absolute -bottom-1.5 left-0 w-full h-[4px] bg-gradient-to-r from-cyan via-orange to-violet-500 rounded-full animate-pulse"></span>
                </span>
              </h1>
            </div>

            <p
              className={`animate-fade-up animate-delay-200 max-w-2xl text-base sm:text-lg leading-relaxed mb-10 transition-colors duration-300 ${
                darkMode ? "text-text-muted" : "text-slate-500"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              Practical guides, real case studies, and deep technical breakdowns
              from the team building custom websites, workflow automation, and mobile
              apps for ambitious businesses.
            </p>

            {/* Search bar */}
            <div
              className={`animate-fade-up animate-delay-300 relative flex items-center max-w-lg transition-all duration-300 rounded-2xl overflow-hidden ${
                searchFocused ? "ring-2 ring-cyan/50" : "ring-1 ring-white/10"
              }`}
              style={
                darkMode
                  ? { background: "rgba(30,41,59,0.7)", backdropFilter: "blur(12px)" }
                  : { background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)" }
              }
            >
              <Search
                className={`absolute left-4 w-4 h-4 transition-colors duration-300 ${
                  searchFocused ? "text-cyan" : darkMode ? "text-text-muted" : "text-slate-400"
                }`}
              />
              <input
                id="blog-search"
                type="text"
                placeholder="Search articles, tags…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-11 pr-5 py-4 bg-transparent text-sm outline-none transition-colors duration-300 ${
                  darkMode
                    ? "text-white placeholder:text-text-muted"
                    : "text-slate-900 placeholder:text-slate-400"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
          </div>
        </div>

        {/* ── CATEGORY FILTER ── */}
        <div
          className={`sticky top-[80px] z-40 px-4 sm:px-6 py-4 transition-all duration-300 ${
            darkMode
              ? "bg-navy/80 backdrop-blur-xl border-b border-white/[0.06]"
              : "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const active = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    id={`blog-cat-${cat.label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      active
                        ? "text-white scale-[1.02]"
                        : darkMode
                        ? "text-text-muted hover:text-white hover:bg-white/[0.06]"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                    style={{
                      fontFamily: "var(--font-heading)",
                      ...(active
                        ? {
                            background: "linear-gradient(135deg,#FF6B00,#E55F00)",
                            boxShadow: "0 0 20px rgba(255,107,0,0.25)",
                          }
                        : {}),
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          {/* Featured Post */}
          {activeCategory === "All" && searchQuery === "" && (
            <section>
              <FeaturedCard post={featuredPost} />
            </section>
          )}

          {/* Bento Grid */}
          <section>
            {/* Section label row */}
            {activeCategory === "All" && searchQuery === "" && (
              <div className="flex items-center justify-between mb-8">
                <h2
                  className={`text-xl font-extrabold transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Latest Articles
                </h2>
                <span
                  className={`text-xs transition-colors duration-300 ${
                    darkMode ? "text-text-muted" : "text-slate-400"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {filtered.length} articles
                </span>
              </div>
            )}

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 lg:gap-6">
                {filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} darkMode={darkMode} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <BookOpen className={`w-12 h-12 ${darkMode ? "text-text-muted" : "text-slate-300"}`} />
                <p
                  className={`text-sm ${darkMode ? "text-text-muted" : "text-slate-400"}`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  No articles found. Try a different search or category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-xs font-semibold text-cyan hover:underline cursor-pointer"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

          {/* ── Newsletter CTA ── */}
          <section>
            <NewsletterCTA darkMode={darkMode} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

/** Newsletter sign-up banner */
function NewsletterCTA({ darkMode }: { darkMode: boolean }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: darkMode
          ? "linear-gradient(135deg, rgba(255,107,0,0.08) 0%, rgba(6,182,212,0.06) 100%)"
          : "linear-gradient(135deg, rgba(255,107,0,0.06) 0%, rgba(6,182,212,0.04) 100%)",
        border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Glow orbs */}
      <div
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.1), transparent 70%)" }}
      />
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)" }}
      />

      <div className="relative p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
        <div className="flex-1">
          <p className="section-label mb-3">Stay Sharp</p>
          <h3
            className={`text-2xl sm:text-3xl font-extrabold mb-3 transition-colors duration-300 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Get automation insights{" "}
            <span className="gradient-text">straight to your inbox</span>
          </h3>
          <p
            className={`text-sm leading-relaxed max-w-md transition-colors duration-300 ${
              darkMode ? "text-text-muted" : "text-slate-500"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            No spam. Just real guides on workflow automation, custom website development,
            and mobile apps — every two weeks.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
          <div
            className={`flex items-center rounded-xl overflow-hidden w-full sm:w-[400px] transition-all duration-300 ${
              darkMode
                ? "bg-navy-light/80 border border-white/10"
                : "bg-white border border-slate-200 shadow-sm"
            }`}
          >
            <input
              id="blog-newsletter-email"
              type="email"
              placeholder="your@email.com"
              className={`flex-grow min-w-0 px-4 py-3.5 bg-transparent text-sm outline-none transition-colors duration-300 ${
                darkMode ? "text-white placeholder:text-text-muted" : "text-slate-900 placeholder:text-slate-400"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              id="blog-newsletter-cta"
              className="flex-shrink-0 bg-gradient-to-r from-orange to-orange-dark text-white font-bold px-6 py-3.5 text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p
            className={`text-[10px] transition-colors duration-300 ${darkMode ? "text-text-muted" : "text-slate-400"}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Join 500+ founders & devs. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
