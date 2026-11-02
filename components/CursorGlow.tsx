"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop pointer devices
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-40 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.04] blur-[80px]"
      animate={{
        x: mousePos.x,
        y: mousePos.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 250,
        mass: 0.5,
      }}
    />
  );
}
