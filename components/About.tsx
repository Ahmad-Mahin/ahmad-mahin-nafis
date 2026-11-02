"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Sparkles, Award, Target, Users, BookOpen, Layers } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Teams Mobilized", value: "150+", subtext: "HULT Prize SUST History" },
    { label: "Math Olympiad", value: "Silver", subtext: "IMO India & BDMO Gold" },
    { label: "Talent Hunt", value: "Top 30", subtext: "Career Club SUST" },
    { label: "Academic Standing", value: "5.00", subtext: "Notre Dame College HSC" },
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />

      {/* Header Badge */}
      <div className="flex flex-col items-start gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-sky-400">
          <User className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">Professional Identity</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineering Mindset. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
            People-First Execution.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Summary */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Professional Summary</span>
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              A creative and professional individual with a strong sense of responsibility and a consistent drive for self-improvement. Combines academic discipline with hands-on leadership experience in organizing events, building public relations, and managing teams.
            </p>

            <div className="my-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 mt-1">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Systems Optimization</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Analyzing manufacturing workflows and human-machine efficiency in Industry 5.0.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mt-1">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">High-Impact Leadership</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Coordinating student campus networks, ambassadors, and multi-department teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mt-1">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Continuous Learning</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Stanford Code in Place alumnus; expanding skills across AI and Data Analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-1">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Crowd & Event Logistics</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Proven track record in crowd management, staging, and nationwide competitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics Bento Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                {stat.label}
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-sky-300">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">
                  {stat.subtext}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Location & Status Card */}
          <div className="col-span-2 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Location</span>
                <p className="text-sm font-semibold text-white">Sylhet & Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Current Focus</span>
              <p className="text-sm font-semibold text-sky-400">Undergrad IPE • Research Nexus 2.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
