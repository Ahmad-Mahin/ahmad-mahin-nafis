"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillator1Ref = useRef<OscillatorNode | null>(null);
  const oscillator2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Ambient Drone 1 (Low C fundamental 65.41Hz)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(65.41, ctx.currentTime);

        // Ambient Drone 2 (Fifth 98.0Hz)
        const osc2 = ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(98.0, ctx.currentTime);

        // Filter for deep warm analog feel
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(180, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();

        oscillator1Ref.current = osc1;
        oscillator2Ref.current = osc2;

        setIsPlaying(true);
      } catch (e) {
        console.error("Audio initialization error:", e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          oscillator1Ref.current?.stop();
          oscillator2Ref.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 800);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute ambient atmosphere" : "Enable atmospheric audio"}
      aria-label="Toggle ambient soundtrack"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:border-sky-500/40 text-xs text-slate-300 hover:text-white transition-all backdrop-blur-md group"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span className="font-mono text-[11px] text-sky-400">ATMOSPHERE ON</span>
          <div className="flex items-center gap-0.5 h-2.5">
            <span className="w-0.5 h-2 bg-sky-400 animate-pulse" />
            <span className="w-0.5 h-3 bg-sky-400 animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-sky-400 animate-pulse delay-150" />
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300" />
          <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200">SOUND OFF</span>
        </>
      )}
    </button>
  );
}
