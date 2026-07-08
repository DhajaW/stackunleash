import React from "react";

export default function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cyan-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#22D3EE" />
          <stop offset="100%" stop-color="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Layered Hex-Stack (Infrastructure) */}
      {/* Top Slab */}
      <path d="M50 15 L80 30 L50 45 L20 30 Z" fill="#334155" stroke="#475569" strokeWidth="0.5" />
      {/* Middle Slab */}
      <path d="M20 38 L50 53 L80 38 V46 L50 61 L20 46 Z" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
      {/* Bottom Slab */}
      <path d="M20 54 L50 69 L80 54 V62 L50 77 L20 62 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="0.5" />
      
      {/* Central Cyan Breakout Arrow Burst */}
      <path d="M38 58 L54 42 H46 L62 26 L58 46 H66 L38 58 Z" fill="url(#cyan-glow)" />
    </svg>
  );
}
