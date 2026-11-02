"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Sparkles, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const [bdTime, setBdTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setBdTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#08090d]/80 backdrop-blur-xl pt-16 pb-12 px-6 md:px-12 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-lg text-white">AMN.</span>
              <span className="text-slate-600">|</span>
              <span className="text-sm text-slate-300 font-medium">Ahmad Mahin Nafis</span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Industrial & Production Engineering Undergraduate • Shahjalal University of Science and Technology (SUST).
            </p>
          </div>

          {/* Time & Location badge */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>SYLHET, BD: {bdTime || "Loading..."}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/5 hover:border-sky-500/30 text-slate-300 hover:text-white transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-white/5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Ahmad Mahin Nafis. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 14, Framer Motion & Canvas Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
