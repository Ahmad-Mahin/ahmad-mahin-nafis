"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Users,
  MessageSquare,
  Microscope,
  Code2,
  Languages,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Leadership & Management",
      icon: Users,
      description: "Proven capacity to orchestrate large student networks, direct events, and guide teams.",
      skills: [
        "Team Leadership",
        "Mentoring & Training",
        "Event Organizing",
        "Crowd Management",
        "Situational Analysis",
      ],
      accent: "from-sky-500/20 to-indigo-500/5",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Communication & Outreach",
      icon: MessageSquare,
      description: "Strategic liaison, community evangelism, and university club diplomacy.",
      skills: [
        "Public Relations",
        "Negotiation",
        "Social Media Promotion",
        "Stakeholder Coordination",
        "Public Speaking",
      ],
      accent: "from-amber-500/20 to-orange-500/5",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Research & Analytical",
      icon: Microscope,
      description: "Investigating the technological frontier of human-centric industrial systems.",
      skills: [
        "Academic Research",
        "Human-AI Collaboration",
        "Industry 5.0 Ergonomics",
        "Problem Solving",
        "AI Tools for Workplace Tasks",
      ],
      accent: "from-emerald-500/20 to-teal-500/5",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Technical & Software",
      icon: Code2,
      description: "Data analysis, workplace productivity software, programming, and creative tools.",
      skills: [
        "MS Excel (Advanced)",
        "Power BI (Data Modeling)",
        "MS Word",
        "Canva",
        "Adobe Lightroom",
        "Python (CS Fundamentals)",
        "HTML5 / CSS3",
      ],
      accent: "from-purple-500/20 to-pink-500/5",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  const languages = [
    { name: "Bangla", level: "Native / Fluent", status: "100%" },
    { name: "English", level: "Professional / Fluent", status: "95%" },
    { name: "Hindi", level: "Conversational", status: "75%" },
  ];

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="flex flex-col items-start gap-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-sky-400">
          <Wrench className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">Capabilities & Tooling</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Multidisciplinary <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
            Skills & Proficiencies.
          </span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.accent} pointer-events-none opacity-40`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${cat.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-200 hover:border-sky-500/30 hover:text-white transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Language Proficiency Bar */}
      <div className="mt-8 glass-panel p-8 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Languages className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Language Proficiencies</h3>
            <p className="text-xs text-slate-400">Global and regional communication fluency</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white text-sm">{lang.name}</span>
                <span className="text-xs font-mono text-sky-400">{lang.status}</span>
              </div>
              <span className="text-xs text-slate-400">{lang.level}</span>
              <div className="w-full h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                  style={{ width: lang.status }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
