"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown, Cpu, Sparkles, Network, Activity } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
  loadedCount: number;
  totalFrames: number;
}

export default function Overlay({
  scrollYProgress,
  loadedCount,
  totalFrames,
}: OverlayProps) {
  // Section 1: Hero (0% - 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.03, 0.14, 0.22], [1, 1, 0.9, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -70]);
  const scale1 = useTransform(scrollYProgress, [0, 0.22], [1, 0.95]);

  // Section 2: Systems & Engineering (24% - 48%)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.28, 0.40, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.48], [60, -60]);

  // Section 3: Human-AI Collaboration (50% - 74%)
  const opacity3 = useTransform(scrollYProgress, [0.48, 0.55, 0.67, 0.74], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.74], [60, -60]);

  // Section 4: Leadership & Roadmap (76% - 98%)
  const opacity4 = useTransform(scrollYProgress, [0.74, 0.82, 0.94, 1.0], [0, 1, 1, 0.2]);
  const y4 = useTransform(scrollYProgress, [0.74, 1.0], [60, -20]);

  // Progress Bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between overflow-hidden">
      {/* Top subtle vignette & frame count badge */}
      <div className="w-full px-6 md:px-12 pt-28 flex items-center justify-between text-xs tracking-wider text-slate-400/80 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span className="uppercase text-sky-300 font-medium">Interactive Sequence</span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline">120 FPS Scrub Engine</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
          <span className="text-slate-400">FPS Sync</span>
          <span className="text-sky-400 font-semibold">Active</span>
        </div>
      </div>

      {/* Center content container with 4 parallax stages */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center">
        
        {/* SECTION 1: 0% Scroll - Hero (Center) */}
        <motion.div
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 border border-sky-500/20 backdrop-blur-md mb-6 shadow-lg shadow-sky-500/5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-sky-300 font-medium font-mono">
              Industrial & Production Engineering • SUST
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
            Ahmad Mahin <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-300">
              Nafis
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Campus Lead. Ergonomics Researcher. Event Architect.
            <br />
            <span className="text-slate-400 text-sm sm:text-base font-normal">
              Merging engineering discipline with creative technology & team leadership.
            </span>
          </p>

          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Scroll down to explore
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1.5 h-2 rounded-full bg-sky-400"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: ~30% Scroll - Left Aligned */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-6 md:left-12 max-w-xl text-left"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-500" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Digital & Operational Systems</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              I build dynamic experiences & lead high-impact teams.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              From spearheading nationwide student networks at <span className="text-sky-300 font-medium">LinkedIn Community Bangladesh</span> to instructing data courses with <span className="text-amber-300 font-medium">UNICEF-partnered</span> initiatives, I bridge academic rigor with strategic execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-white/5">#CampusLead</span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-white/5">#WorkplaceAI</span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-white/5">#DataAnalytics</span>
            </div>
          </div>
        </motion.div>

        {/* SECTION 3: ~60% Scroll - Right Aligned */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-6 md:right-12 max-w-xl text-right ml-auto"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Network className="w-3.5 h-3.5" />
                <span>Industry 5.0 Research</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Nexus 2.0</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Human-AI Collaboration in Manufacturing & Ergonomics.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              At the <span className="text-amber-300 font-medium">Ergonomics Society of SUST</span>, my research investigates how human decision-makers synergize with artificial intelligence in modern Industry 5.0 production floors.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-white/5">Human Factors</span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-white/5">AI Systems</span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-white/5">Process Optimization</span>
            </div>
          </div>
        </motion.div>

        {/* SECTION 4: ~85% Scroll - Center Callout */}
        <motion.div
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="glass-panel max-w-2xl p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-5">
              <Activity className="w-3.5 h-3.5" />
              <span>Scroll Milestone Complete</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Leading Communities. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300">
                Solving Complex Challenges.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
              Mobilized 150+ teams at HULT Prize SUST, Silver Medalist at IMO India, Stanford Code in Place alumnus. Scroll down for complete experience and case studies.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-2 rounded-full border border-sky-500/20">
                <ArrowDown className="w-4 h-4 animate-bounce" />
                <span>Deep Dive into Experience & Work</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Timeline scrubber progress bar */}
      <div className="w-full px-6 md:px-12 pb-6 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">SCROLL INTERACTION</span>
            <span className="text-sky-400">{(scrollYProgress.get() * 100).toFixed(0)}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span>PRELOAD CACHE:</span>
            <span className={loadedCount === totalFrames ? "text-emerald-400 font-semibold" : "text-amber-400"}>
              {loadedCount} / {totalFrames} FRAMES
            </span>
          </div>
        </div>

        {/* Scroll scrub track */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400"
          />
        </div>
      </div>
    </div>
  );
}
