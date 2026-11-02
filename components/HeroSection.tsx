"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Network, Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top Status Indicators */}
      <div className="w-full flex items-center justify-between text-xs tracking-wider text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span className="uppercase text-sky-300 font-medium">Scroll-Linked Experience</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline">Background Sequence Active</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-slate-400">Status</span>
          <span className="text-emerald-400 font-semibold">Live Scrub</span>
        </div>
      </div>

      {/* Main Center Hero Block */}
      <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 backdrop-blur-md mb-6 shadow-xl shadow-sky-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-sky-300 font-medium font-mono">
            Industrial & Production Engineering • SUST
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase drop-shadow-2xl"
        >
          Ahmad Mahin <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-300">
            Nafis
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-xl text-slate-200 font-light leading-relaxed drop-shadow"
        >
          Campus Lead. Ergonomics Researcher. Event Architect.
          <br />
          <span className="text-slate-400 text-sm sm:text-base font-normal">
            Scroll to experience my journey as the background responds dynamically to your interaction.
          </span>
        </motion.p>

        {/* Parallax Feature Cards below Hero */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 text-left">
          {/* Card 1: Systems & Execution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all group"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Digital & Operational Systems</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
              I build dynamic experiences & lead high-impact teams.
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light">
              Spearheading nationwide student networks at <strong className="text-sky-300">LinkedIn Community Bangladesh</strong> and directing data courses with <strong className="text-amber-300">UNICEF-partnered</strong> programs.
            </p>
          </motion.div>

          {/* Card 2: Human-AI Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all group"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Network className="w-3.5 h-3.5" />
              <span>Industry 5.0 Research</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
              Human-AI Collaboration in Manufacturing & Ergonomics.
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light">
              Investigating operator interfaces and cognitive teaming at <strong className="text-amber-300">Research Nexus 2.0</strong> with the Ergonomics Society of SUST.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="flex flex-col items-center gap-2 pt-8">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Scroll down to explore case studies & track record
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-2 rounded-full bg-sky-400"
          />
        </div>
      </div>
    </section>
  );
}
