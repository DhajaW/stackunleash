"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { useTheme } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import { Post } from "@/data/posts";

export default function PostClient({ post }: { post: Post }) {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const bg = darkMode ? "bg-navy min-h-screen text-white" : "bg-slate-50 min-h-screen text-slate-800";

  return (
    <>
      <Header />
      <div className={`${bg} transition-colors duration-300`} style={{ fontFamily: "var(--font-body)" }}>
        {/* Page Header */}
        <article className="pt-36 pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <Link
                href="/blog"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  darkMode ? "text-cyan hover:text-text-primary" : "text-cyan hover:text-cyan-dark"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <ArrowLeft className="w-4 h-4" /> Back to Articles
              </Link>
            </div>

            {/* Category tag */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold tracking-wide px-3 py-1.5"
                style={{
                  color: post.categoryColor,
                  background: post.categoryBg,
                  border: `1px solid ${post.categoryColor}30`,
                  fontFamily: "var(--font-heading)",
                }}
              >
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </span>
            </div>

            {/* Main Title */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}
            >
              {post.title}
            </h1>

            {/* Post meta / author row */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b ${
                darkMode ? "border-white/[0.08]" : "border-slate-200"
              } mb-10`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#FF6B00,#06B6D4)",
                    color: "#fff",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {post.author.avatar}
                </span>
                <div>
                  <p
                    className={`text-sm font-bold leading-none ${darkMode ? "text-white" : "text-slate-900"}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.author.name}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{post.author.role}</p>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 text-xs ${
                  darkMode ? "text-text-muted" : "text-slate-500"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[460px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none mb-16">{post.content}</div>

            {/* Tags row */}
            <div
              className={`pt-8 border-t flex flex-wrap gap-2 ${
                darkMode ? "border-white/[0.08]" : "border-slate-200"
              } mb-16`}
            >
              {post.tags.map((t) => (
                <span
                  key={t}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                    darkMode
                      ? "text-white/60 bg-white/[0.04] border-white/10"
                      : "text-slate-600 bg-slate-100 border-slate-200"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Share / CTA panel */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan/5 to-orange/5 border border-white/[0.06] p-8 text-center max-w-2xl mx-auto">
              <Zap className="w-8 h-8 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to Unleash Your Operations?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-md mx-auto">
                We build customized database portals, Next.js web applications, and n8n AI workflows that cut manual tasks by 70–80%.
              </p>
              <Link href="/contact" className="btn-primary text-sm glow-orange">
                Schedule a Free Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
