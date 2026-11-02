"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Eye, Activity, Cpu, Sparkles, Terminal, Compass } from "lucide-react";

const TOTAL_FRAMES = 120;

export type BgMode = "cinema" | "balanced" | "soft";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);
  const [telemetry, setTelemetry] = useState({
    frame: "000",
    subframe: ".00",
    progress: 0,
    velocity: "0.00",
    fps: 60,
  });
  const [bgMode, setBgMode] = useState<BgMode>("balanced");

  // Physics & LERP coordinates
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const lastProgressRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef<number>(0);

  // Dual-frame cross-dissolve render function
  const renderBlendedFrame = useCallback(
    (baseIdx: number, nextIdx: number, fraction: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Ensure frames are loaded; find nearest loaded fallback if needed
      const getValidImg = (idx: number): HTMLImageElement | null => {
        let img = imagesRef.current[idx];
        if (img && img.complete && img.naturalWidth > 0) return img;

        // Search nearest loaded
        let closest: HTMLImageElement | null = null;
        let minDiff = Infinity;
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          const candidate = imagesRef.current[i];
          if (candidate && candidate.complete && candidate.naturalWidth > 0) {
            const diff = Math.abs(i - idx);
            if (diff < minDiff) {
              minDiff = diff;
              closest = candidate;
            }
          }
        }
        return closest;
      };

      const imgA = getValidImg(baseIdx);
      const imgB = getValidImg(nextIdx);

      if (!imgA) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvasWidth = canvas.width / dpr;
      const canvasHeight = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Dark baseline fill
      ctx.fillStyle = "#06080d";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const imgW = imgA.naturalWidth;
      const imgH = imgA.naturalHeight;

      // Mathematical cover: scale & center
      const scale = Math.max(canvasWidth / imgW, canvasHeight / imgH);
      const drawnWidth = imgW * scale;
      const drawnHeight = imgH * scale;
      const offsetX = (canvasWidth - drawnWidth) / 2;
      const offsetY = (canvasHeight - drawnHeight) / 2;

      // Enable smooth image smoothing for cinematic fidelity
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // 1. Draw base frame with full opacity
      ctx.globalAlpha = 1.0;
      ctx.drawImage(imgA, offsetX, offsetY, drawnWidth, drawnHeight);

      // 2. Dual-frame cross-dissolve: blend next frame proportionally to sub-frame position!
      if (fraction > 0.002 && imgB && imgB !== imgA) {
        ctx.globalAlpha = Math.min(1.0, Math.max(0.0, fraction));
        ctx.drawImage(imgB, offsetX, offsetY, drawnWidth, drawnHeight);
      }

      ctx.restore();
    },
    []
  );

  // Resize canvas for crisp HiDPI
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    const exact = currentProgressRef.current * (TOTAL_FRAMES - 1);
    const base = Math.floor(exact);
    const next = Math.min(TOTAL_FRAMES - 1, base + 1);
    renderBlendedFrame(base, next, exact - base);
  }, [renderBlendedFrame]);

  // Preload all 120 images progressively with decoding
  useEffect(() => {
    let isMounted = true;
    let loadedCounter = 0;

    // Load frame 0 immediately
    const firstImg = new Image();
    firstImg.src = `/sequence/frame_000.webp`;
    firstImg.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = firstImg;
      loadedCounter++;
      setLoadedCount(loadedCounter);
      setIsInitialReady(true);
      resizeCanvas();
    };

    // Load rest
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}.webp`;

      img.onload = () => {
        if (!isMounted) return;
        imagesRef.current[i] = img;
        loadedCounter++;
        setLoadedCount(loadedCounter);
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadedCounter++;
        setLoadedCount(loadedCounter);
      };
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      isMounted = false;
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  // Master LERP & Continuous RAF Render Loop
  useEffect(() => {
    let isRunning = true;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      targetProgressRef.current = Math.min(1, Math.max(0, scrollY / maxScroll));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let lastTelemetryUpdate = 0;

    const renderLoop = (time: number) => {
      if (!isRunning) return;

      // Calculate instantaneous FPS
      frameCountRef.current++;
      if (time - lastTimeRef.current >= 500) {
        const delta = (time - lastTimeRef.current) / 1000;
        const currentFps = Math.round(frameCountRef.current / delta);
        frameCountRef.current = 0;
        lastTimeRef.current = time;

        const currentProg = currentProgressRef.current;
        const velocity = Math.abs(currentProg - lastProgressRef.current) * 100;
        lastProgressRef.current = currentProg;

        const exact = currentProg * (TOTAL_FRAMES - 1);
        const base = Math.floor(exact);

        setTelemetry({
          frame: String(base).padStart(3, "0"),
          subframe: `.${Math.round((exact - base) * 100).toString().padStart(2, "0")}`,
          progress: Math.round(currentProg * 100),
          velocity: velocity.toFixed(2),
          fps: currentFps || 60,
        });
      }

      // Smooth Physics LERP (Linear Interpolation) factor
      // 0.085 provides an ultra-luxurious, cinematic dampening that eliminates all mouse-wheel choppiness
      const prevProgress = currentProgressRef.current;
      const targetProgress = targetProgressRef.current;
      const diff = targetProgress - prevProgress;

      if (Math.abs(diff) > 0.00001) {
        currentProgressRef.current += diff * 0.088;
      } else {
        currentProgressRef.current = targetProgress;
      }

      // Compute exact continuous float frame coordinate
      const exactIndex = currentProgressRef.current * (TOTAL_FRAMES - 1);
      const baseIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(exactIndex)));
      const nextIndex = Math.min(TOTAL_FRAMES - 1, baseIndex + 1);
      const fraction = exactIndex - baseIndex;

      // Draw blended frame
      renderBlendedFrame(baseIndex, nextIndex, fraction);

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isRunning = false;
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [renderBlendedFrame]);

  // Dark overlay opacity mapping
  const overlayClass = {
    cinema: "bg-[#06080d]/25",
    balanced: "bg-[#06080d]/48",
    soft: "bg-[#06080d]/68",
  }[bgMode];

  return (
    <>
      {/* FIXED BACKGROUND WRAPPER - Continuous 120fps Sub-Pixel Blended Canvas */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#06080d]">
        {/* Futuristic Grid & Reticle Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Ambient atmospheric lighting with cyan & amber telemetry pulses */}
        <div className="pointer-events-none absolute -left-48 top-1/4 h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[160px] animate-pulse-slow" />
        <div className="pointer-events-none absolute -right-48 top-1/3 h-[700px] w-[700px] rounded-full bg-amber-500/15 blur-[170px]" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[450px] w-[1000px] rounded-full bg-indigo-600/10 blur-[180px]" />

        {/* High-Performance Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Dynamic Dark Backdrop tint with user-selectable intensity */}
        <div
          className={`absolute inset-0 transition-colors duration-700 pointer-events-none ${overlayClass}`}
        />

        {/* Seamless edge blending vignettes */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-[#06080d]/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06080d]/75 via-transparent to-[#06080d]/75" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#06080d] to-transparent" />

        {/* Analytical Top & Bottom Telemetry HUD Watermarks */}
        <div className="absolute top-20 left-6 text-[10px] font-mono text-cyan-500/30 tracking-widest uppercase hidden lg:block">
          <div>LOC::SYLHET_BD // SUST.IPE.SYS</div>
          <div>COORDS::24.9045°N 91.8611°E</div>
        </div>

        <div className="absolute top-20 right-6 text-[10px] font-mono text-amber-500/30 tracking-widest uppercase hidden lg:block text-right">
          <div>RESEARCH_CORE::NEXUS_2.0</div>
          <div>SPEC::HUMAN_AI_COLLAB_IND_5.0</div>
        </div>

        {/* Initial loading screen */}
        {!isInitialReady && (
          <div className="absolute inset-0 bg-[#06080d] z-30 flex flex-col items-center justify-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
              <div className="absolute inset-2 rounded-full border border-amber-500/20 border-b-amber-400 animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
            </div>
            <div className="text-center font-mono">
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                CALIBRATING CONTINUOUS SEQUENCE ENGINE
              </p>
              <p className="text-[10px] text-slate-500 mt-1">
                PRE-DECODING 120 WEBP FRAMES WITH SUB-PIXEL INTERPOLATION...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom-Right Futuristic Analytical Telemetry HUD */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-2">
        <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl text-[11px] font-mono">
          {/* Live Sub-Frame & FPS Telemetry */}
          <div className="flex items-center gap-2 text-slate-400 pr-3 border-r border-white/10">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-slate-400">FRAME:</span>
            <span className="text-cyan-300 font-bold">
              {telemetry.frame}
              <span className="text-cyan-500/70 text-[10px]">{telemetry.subframe}</span>
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">119</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 pr-3 border-r border-white/10">
            <span className="text-slate-500">PROGRESS:</span>
            <span className="text-amber-300 font-bold">{telemetry.progress}%</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 pr-3 border-r border-white/10">
            <span className="text-slate-500">FPS:</span>
            <span className="text-emerald-400 font-bold">{telemetry.fps}</span>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-1">
            {(["cinema", "balanced", "soft"] as BgMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setBgMode(mode)}
                title={`Switch background overlay to ${mode}`}
                className={`px-2 py-0.5 rounded-lg text-[10px] uppercase font-bold tracking-wider transition-all ${
                  bgMode === mode
                    ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
