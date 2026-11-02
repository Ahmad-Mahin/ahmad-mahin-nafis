"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle2,
  Sparkles,
  Layers,
  Clock,
  ArrowUpRight,
} from "lucide-react";

interface RoleExperience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  isCurrent: boolean;
  category: "Leadership" | "Research" | "Event Operations" | "Digital Marketing";
  bullets: string[];
  skills: string[];
}

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const experiences: RoleExperience[] = [
    {
      id: "exp-1",
      role: "Campus Lead",
      organization: "LinkedIn Community Bangladesh (LCB)",
      duration: "October 2026 – Present",
      isCurrent: true,
      category: "Leadership",
      bullets: [
        "Represent LinkedIn Community Bangladesh on campus and build and manage a student network focused on career growth and professional development.",
        "Organize career-readiness workshops and webinars to help students prepare for competitive professional opportunities.",
        "Promote LCB initiatives campus-wide and coordinate strategic activities directly with the central team.",
      ],
      skills: ["Campus Leadership", "Networking", "Career Workshops", "Public Relations"],
    },
    {
      id: "exp-2",
      role: "Campus Lead",
      organization: "Data Solution-360 Ltd.",
      duration: "September 2026 – Present",
      isCurrent: true,
      category: "Leadership",
      bullets: [
        "Promote company programs and learning opportunities across online social media channels and student networks.",
        "Contribute to a UNICEF-partnered 10-day online course covering Excel, Power BI, Canva, and AI for workplace productivity.",
        "Collaborate with fellow Campus Leaders on cross-institutional rollouts.",
        "Organize, mentor, and instruct a dedicated team of three Campus Ambassadors.",
      ],
      skills: ["Power BI", "Excel", "Workplace AI", "Mentorship", "Team Instruction"],
    },
    {
      id: "exp-3",
      role: "Campus Ambassador",
      organization: "Eksathe.com",
      duration: "October 2026 – Present",
      isCurrent: true,
      category: "Leadership",
      bullets: [
        "Conduct outreach activities within the university and regional community to publicize the organization.",
        "Arrange the organization's programs by liaising and coordinating with clubs at Shahjalal University of Science and Technology (SUST).",
      ],
      skills: ["Outreach", "Club Liaison", "Community Building"],
    },
    {
      id: "exp-4",
      role: "Executive Organizing Member",
      organization: "HULT PRIZE at SUST",
      duration: "February 2026",
      isCurrent: false,
      category: "Event Operations",
      bullets: [
        "Promoted the program and mobilized more than 150 team registrations, achieving one of the highest registration figures in HULT Prize history.",
        "Managed stage decoration, VIP guest reception, and seamless crowd flow during the multi-stage event.",
      ],
      skills: ["150+ Registrations Record", "Crowd Logistics", "Stage Design", "VIP Relations"],
    },
    {
      id: "exp-5",
      role: "Executive Committee Member",
      organization: "IPE Association, SUST",
      duration: "August 2025 – August 2026",
      isCurrent: false,
      category: "Leadership",
      bullets: [
        "Organized academic, professional, cultural, and sports events for Industrial & Production Engineering students.",
        "Contributed to organizing farewell programs, felicitation ceremonies, and leadership transition summits.",
        "Participated in organizing the Legendary IFL Football Tournament 2025.",
        "Contributed directly to organizing Case Quest 2.0.",
        "Helped organize seminars on Data Analysis, Case Competitions, and BCS preparation.",
      ],
      skills: ["Event Operations", "Case Quest 2.0", "Data Seminars", "IFL 2025"],
    },
    {
      id: "exp-6",
      role: "Executive Committee Member",
      organization: "KAIZEN SUST",
      duration: "September 2026 – Present",
      isCurrent: true,
      category: "Leadership",
      bullets: [
        "Organize continuous improvement programs and industrial seminars for the club.",
        "Gather audiences and participants to support club events, technical competitions, and workshops.",
      ],
      skills: ["Kaizen Principles", "Seminar Management", "Participant Engagement"],
    },
    {
      id: "exp-7",
      role: "Executive Member",
      organization: "Ergonomics Society of SUST",
      duration: "August 2026 – Present",
      isCurrent: true,
      category: "Research",
      bullets: [
        "Serve as an active member of the Research Nexus 2.0 team, studying the topic “Human-AI Collaboration in Industry 5.0 Manufacturing.”",
        "Mentor a novice research assistant as part of the team's ongoing research-related methodology and data collection activities.",
      ],
      skills: ["Academic Research", "Industry 5.0", "Human-AI Collaboration", "Mentorship"],
    },
    {
      id: "exp-8",
      role: "Volunteer",
      organization: "TEDxSUST",
      duration: "November 2025",
      isCurrent: false,
      category: "Event Operations",
      bullets: [
        "Arranged audience seating to support event organization and high-capacity crowd management.",
        "Welcomed guests and presented them with official gifts and credentials.",
        "Operated the stage lighting system in coordination with speakers during the live conference.",
      ],
      skills: ["Stage Lighting", "Crowd Flow", "Guest Reception", "TEDx Operations"],
    },
    {
      id: "exp-9",
      role: "Page Manager (Business Page)",
      organization: "Golden Market, Local Supershop",
      duration: "2019 – 2022",
      isCurrent: false,
      category: "Digital Marketing",
      bullets: [
        "Managed the supershop's official social media page to engage with local and regional customer bases.",
        "Oversaw digital advertisements and targeted marketing campaigns to drive foot traffic and customer outreach.",
      ],
      skills: ["Digital Ads", "Social Media Management", "Customer Engagement"],
    },
  ];

  const categories = ["All", "Leadership", "Research", "Event Operations", "Digital Marketing"];

  const filteredExperiences =
    activeFilter === "All"
      ? experiences
      : experiences.filter((e) => e.category === activeFilter);

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">Track Record & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Experience & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-300">
              Organizational Involvement.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-light mt-2">
            Every position showcased in full detail with complete responsibilities, achievements, and technical scope.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Symmetrical Rectangular Experience Grid (No click required, complete descriptions directly visible) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between h-full group"
          >
            {/* Top Header Row */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {exp.category}
                  </span>
                </div>

                {exp.isCurrent ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-wider font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Role</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-white/5 text-slate-400 text-[10px] font-mono">
                    Completed
                  </span>
                )}
              </div>

              {/* Role Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {exp.role}
              </h3>

              {/* Organization */}
              <p className="text-sm text-cyan-300/90 font-medium mt-1">
                {exp.organization}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-2 mb-4">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{exp.duration}</span>
              </div>

              {/* Complete Description Bullets (Directly Visible, Symmetrical) */}
              <div className="pt-3 border-t border-white/5 space-y-2.5">
                {exp.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Competencies Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
              {exp.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-white/5 text-[11px] font-mono text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
