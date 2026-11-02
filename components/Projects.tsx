"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BarChart3,
  Bot,
  Users2,
  Trophy,
  X,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  category: "Research" | "Data & Tech" | "Leadership" | "Event Architecture";
  description: string;
  highlights: string[];
  metrics: { label: string; value: string };
  tags: string[];
  icon: React.ElementType;
  gradient: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "human-ai-collab",
      title: "Human-AI Collaboration in Industry 5.0 Manufacturing",
      subtitle: "Ergonomics & Cognitive Teaming Research",
      organization: "Ergonomics Society of SUST • Research Nexus 2.0",
      period: "August 2026 – Present",
      category: "Research",
      description:
        "An academic investigation into cognitive workloads, safety metrics, and human-in-the-loop decision processes when operating side-by-side with autonomous artificial intelligence on modern production lines.",
      highlights: [
        "Studying operator interface ergonomics and adaptive workload allocation in smart manufacturing.",
        "Mentoring apprentice researchers on academic methodology and ergonomic instrumentation.",
        "Synthesizing Industry 5.0 paradigms that prioritize human well-being alongside automated efficiency.",
      ],
      metrics: { label: "Research Focus", value: "Industry 5.0" },
      tags: ["Human Factors", "Industry 5.0", "AI Ergonomics", "Research Nexus 2.0"],
      icon: Bot,
      gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    },
    {
      id: "unicef-data-solution",
      title: "UNICEF-Partnered Workplace Productivity Program",
      subtitle: "Curriculum Contribution & Ambassador Leadership",
      organization: "Data Solution-360 Ltd.",
      period: "September 2026 – Present",
      category: "Data & Tech",
      description:
        "Contributed to an impactful 10-day online masterclass curriculum partnered with UNICEF, empowering young professionals with modern data and workplace AI competencies.",
      highlights: [
        "Curated instructional modules covering Microsoft Excel, Microsoft Power BI, Canva, and practical AI tools.",
        "Supervised and directed a cohort of 3 Campus Ambassadors to drive outreach across student platforms.",
        "Engaged and facilitated collaborative learning sessions for prospective data professionals.",
      ],
      metrics: { label: "Curriculum Length", value: "10 Days" },
      tags: ["Power BI", "Excel", "Workplace AI", "UNICEF Partnered"],
      icon: BarChart3,
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    {
      id: "hult-prize-mobilization",
      title: "HULT PRIZE at SUST 2026 Mobilization Campaign",
      subtitle: "Record-Breaking Campus Innovation Drive",
      organization: "HULT PRIZE at SUST",
      period: "February 2026",
      category: "Event Architecture",
      description:
        "Orchestrated grassroots engagement, university-wide outreach, and ground logistics for one of the most successful HULT Prize editions hosted at SUST.",
      highlights: [
        "Mobilized more than 150 team registrations, setting one of the highest registration milestones in HULT Prize SUST history.",
        "Managed physical stage architecture, VIP speaker welcoming, and dynamic crowd flow management.",
        "Coordinated with student societies to maximize reach and cross-faculty social impact submissions.",
      ],
      metrics: { label: "Teams Mobilized", value: "150+ Teams" },
      tags: ["150+ Teams", "Stage Architecture", "Crowd Flow", "Social Impact"],
      icon: Trophy,
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
      id: "ipe-association-casequest",
      title: "Case Quest 2.0 & Data Seminars Pipeline",
      subtitle: "Academic, Competition & Sports Operations",
      organization: "IPE Association, SUST",
      period: "August 2025 – August 2026",
      category: "Leadership",
      description:
        "Directed operational, promotional, and logistical lifecycles for major engineering association events, spanning analytical case competitions to sports leagues.",
      highlights: [
        "Co-organized Case Quest 2.0, providing engineering students with real-world problem-solving scenarios.",
        "Coordinated expert seminars focused on Data Analysis, Case Competition Mastery, and BCS preparation.",
        "Managed logistics for the Legendary IFL Football Tournament 2025 and annual student leadership transitions.",
      ],
      metrics: { label: "Major Initiatives", value: "5+ Programs" },
      tags: ["Case Quest 2.0", "Data Analysis", "IFL 2025", "Operations"],
      icon: Users2,
      gradient: "from-purple-500/20 via-sky-500/10 to-transparent",
    },
  ];

  const categories = ["All", "Research", "Data & Tech", "Leadership", "Event Architecture"];

  const filteredCases =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-10 top-20 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -left-10 bottom-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[130px]" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-sky-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">Selected Works & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Impact Initiatives <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
              & Applied Research.
            </span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Glass-morphism Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCases.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              onClick={() => setSelectedCase(item)}
              className="glass-card group relative p-8 rounded-3xl border border-white/10 hover:border-sky-500/30 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Subtle gradient backdrop glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Top bar with category & metric badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-slate-800/80 border border-white/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {item.category}
                      </span>
                      <p className="text-xs text-slate-500">{item.period}</p>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-amber-400 font-semibold">
                    {item.metrics.value}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  {item.organization}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tags & View Details */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/5 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Case</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0d111a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
                <span>{selectedCase.category}</span>
                <span>•</span>
                <span>{selectedCase.period}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedCase.title}
              </h3>

              <p className="text-sm font-mono text-amber-300 mt-1 mb-6">
                {selectedCase.organization}
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Executive Brief
                </span>
                <p className="mt-1 text-sm text-slate-200 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-3">
                  Key Milestones & Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {selectedCase.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Sparkles className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {selectedCase.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
