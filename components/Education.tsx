"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function Education() {
  const educationItems = [
    {
      institution: "Shahjalal University of Science and Technology (SUST)",
      degree: "B.Sc. in Industrial & Production Engineering (IPE)",
      location: "Sylhet, Bangladesh",
      period: "2024 – Present",
      session: "Session 2024–2025",
      status: "Currently Enrolled (Undergraduate)",
      description:
        "Pursuing comprehensive engineering curriculum centered on human factors engineering, operations research, manufacturing optimization, systems dynamics, and Industry 5.0 ergonomics.",
      highlights: [
        "Active member of Research Nexus 2.0 (Ergonomics Society of SUST)",
        "Executive Committee Member of IPE Association, SUST",
        "Executive Committee Member of KAIZEN SUST",
      ],
      badge: "Degree in Progress",
      color: "border-sky-500/30",
    },
    {
      institution: "Notre Dame College, Dhaka",
      degree: "Higher Secondary Certificate (HSC)",
      location: "Dhaka, Bangladesh",
      period: "Passed 2024",
      session: "Science Group",
      status: "Result: GPA 5.00 / 5.00",
      description:
        "Graduated from Bangladesh's premier collegiate institution with a perfect GPA 5.00 in Science, demonstrating rigorous academic consistency, leadership, and analytical prowess.",
      highlights: [
        "Perfect GPA 5.00 achievement",
        "Rigorous science & mathematics foundation",
        "Active participant in extracurricular science & language arenas",
      ],
      badge: "GPA 5.00 (Perfect Score)",
      color: "border-amber-500/30",
    },
    {
      institution: "Stanford University",
      degree: "Code in Place — Computer Science & Python",
      location: "Online / Global Cohort",
      period: "April 21 – June 6, 2025",
      session: "Global CS Education Initiative",
      status: "Certified Alumnus",
      description:
        "Selected for Stanford University's intensive online computer science program based on Stanford's flagship CS106A course. Mastered core algorithmic thinking, computational problem-solving, and Python fundamentals.",
      highlights: [
        "Rigorous algorithmic problem solving in Python",
        "Interactive peer code reviews and global community discussions",
        "Taught by Stanford University CS Faculty & Instructors",
      ],
      badge: "Stanford CS Certificate",
      color: "border-emerald-500/30",
    },
  ];

  return (
    <section id="education" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="flex flex-col items-start gap-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-sky-400">
          <GraduationCap className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">Academic Foundations</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Education & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
            Certified Training.
          </span>
        </h2>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationItems.map((item, idx) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-8 rounded-3xl border ${item.color} flex flex-col justify-between relative overflow-hidden group`}
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-6">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.badge}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {item.degree}
              </h3>

              <p className="text-sm font-semibold text-slate-200 mt-1">
                {item.institution}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                Program Highlights
              </span>
              {item.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
