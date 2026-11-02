"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Globe,
  Code,
  Star,
  Check,
  Video,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Maximize2,
  Flame,
} from "lucide-react";

export default function Achievements() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const achievements = [
    {
      title: "Top 30 Finalist — Talent Hunt Competition",
      organization: "Career Club SUST",
      year: "2026",
      category: "Talent & Leadership",
      award: "Top 30 Selection",
      description:
        "Selected among the Top 30 participants across the entire university in the prestigious annual Talent Hunt Competition organized by Career Club SUST.",
      icon: Star,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Silver Medal — International Mathematical Olympiad (IMO)",
      organization: "IMO India Organizers",
      year: "2018",
      category: "Mathematics & Analytical",
      award: "Silver Medalist",
      description:
        "Achieved a Silver Medal in the International Mathematical Olympiad (IMO) organized by India, competing with international students on advanced mathematics and problem solving.",
      icon: Medal,
      accent: "text-slate-200 bg-slate-300/10 border-slate-300/20",
    },
    {
      title: "Gold Medal — Bangladesh Mathematical Olympiad (BDMO)",
      organization: "BDMO Regional Committee",
      year: "2017",
      category: "Mathematics & Analytical",
      award: "Gold Medalist",
      description:
        "Secured the Gold Medal in the Bangladesh Mathematical Olympiad (BDMO) Regional Competition, demonstrating exceptional logical and problem-solving aptitude.",
      icon: Trophy,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Multi-Category Champion — National Children's Day",
      organization: "National Children's Day Competition",
      year: "2020",
      category: "Public Speaking, Writing & Tech",
      award: "Multiple 1st & 2nd Places",
      description:
        "Demonstrated multifaceted talent across regional and divisional levels:",
      subAwards: [
        "Divisional Stage: 1st Place in Paragraph Writing",
        "Regional Stage: 1st Place in Paragraph Writing",
        "Regional Stage: 1st Place in English Speaking",
        "Regional Stage: 1st Place in Science Project",
        "Regional Stage: 1st Place in Cultural Dance",
        "Regional Stage: 2nd Place in Computer Skills",
      ],
      icon: Award,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Stanford University — Code in Place Graduate",
      organization: "Stanford Online Education",
      year: "2025",
      category: "Computer Science",
      award: "Certified Alumnus",
      description:
        "Completed Stanford University's intensive Code in Place computer science course (April 21 – June 6, 2025), mastering fundamental Python programming and computational structures.",
      icon: Code,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "3rd International SAANSO Scout Jamboree",
      organization: "SAANSO Scouting Federation",
      year: "International",
      category: "Scouting & Global Fellowship",
      award: "Official Delegate",
      description:
        "Participated as a delegate in the 3rd International SAANSO Scout Jamboree, developing crisis leadership, wilderness survival, team collaboration, and global youth camaraderie.",
      icon: Globe,
      accent: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
  ];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="achievements" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-10 bottom-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute right-10 top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="flex flex-col items-start gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-amber-400">
          <Trophy className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">Extracurriculars & Honors</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Extracurricular Activities <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-cyan-300">
            & Competitive Achievements.
          </span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-light">
          Showcasing applied engineering thinking in creative campaigns, international mathematical Olympiads, leadership contests, and campus innovation.
        </p>
      </div>

      {/* FEATURED EXTRACURRICULAR SPOTLIGHT: The FOGG Squad 2026 Video */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 mb-16 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/15 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Featured Extracurricular Project</span>
              </div>
              <p className="text-xs text-slate-400 font-mono">The FOGG Squad Campaign 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-amber-300">
              Industrial Waste Audit
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              1080p HD Video
            </span>
          </div>
        </div>

        {/* Grid: Video Player + Context Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Video Player Column */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl group">
              <video
                ref={videoRef}
                src="/videos/the_foggsquad_2.mp4"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={() => {
                  if (videoRef.current) {
                    setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
                  }
                }}
                className="w-full h-auto aspect-video object-cover block"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Quick helper controls hint */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Play Video</span>
                    </>
                  )}
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={handleToggleMute}
                  className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Volume Slider</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-slate-500 hidden sm:inline">
                Full player controls: start/pause, volume slider & fullscreen
              </span>
            </div>
          </div>

          {/* Description & Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-3">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Creative Engineering Video</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                Video for TheFOGGSquad 2026
              </h3>

              <div className="mt-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                  &ldquo;As an Industrial & Production Engineering student, my job is to spot waste and eliminate it. So I audited my own day, and found one waste I could cut straight away: gas in my deodorant.
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                  For The FOGG Squad, I turned that idea into a short video on how FOGG’s no-gas, all-perfume approach fits a student’s daily routine.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                Core Concepts Applied
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300">
                  #WasteElimination
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300">
                  #LeanThinking
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300">
                  #TheFOGGSquad2026
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300">
                  #StudentRoutine
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section Sub-heading for Competitions & Honors */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>Honors, Competitions & Global Milestones</span>
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-1">
          Academic excellence, international Olympiads, and university honors
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-7 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-amber-500/30"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-2xl border ${item.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/80 border border-white/5 text-slate-300">
                    {item.year}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-1 font-semibold">
                  {item.award}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                  {item.organization}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {item.subAwards && (
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    {item.subAwards.map((sa, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{sa}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-slate-400">
                  Category: {item.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
