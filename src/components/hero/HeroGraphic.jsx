"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Globe2, Layers, Cpu } from "lucide-react";

export default function HeroGraphic() {
  const containerRef = useRef(null);
  const [activePillar, setActivePillar] = useState(0);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-speed parallax transforms
  const imageX = useTransform(smoothX, [-300, 300], [-12, 12]);
  const imageY = useTransform(smoothY, [-300, 300], [-12, 12]);

  const badge1X = useTransform(smoothX, [-300, 300], [18, -18]);
  const badge1Y = useTransform(smoothY, [-300, 300], [14, -14]);

  const badge2X = useTransform(smoothX, [-300, 300], [-16, 16]);
  const badge2Y = useTransform(smoothY, [-300, 300], [12, -12]);

  const badge3X = useTransform(smoothX, [-300, 300], [14, -14]);
  const badge3Y = useTransform(smoothY, [-300, 300], [-16, 16]);

  const badge4X = useTransform(smoothX, [-300, 300], [-12, 12]);
  const badge4Y = useTransform(smoothY, [-300, 300], [18, -18]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Rotating indicator timer
  const pillars = [
    { num: "01", label: "QUALITY", icon: ShieldCheck },
    { num: "02", label: "PRECISION", icon: Cpu },
    { num: "03", label: "CAPACITY", icon: Layers },
    { num: "04", label: "PARTNERSHIP", icon: Globe2 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [pillars.length]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg lg:max-w-none mx-auto lg:h-[580px] flex items-center justify-center select-none py-8 lg:py-0"
    >
      {/* Background architectural framing lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 hidden sm:block">
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-black/5 rounded-2xl" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      </div>

      {/* SVG Connecting Lines between badges */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-0 opacity-40"
        viewBox="0 0 500 500"
        fill="none"
      >
        <motion.path
          d="M 90 90 L 250 250 L 410 90 M 90 410 L 250 250 L 410 410"
          stroke="#1B4332"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Main Asymmetric Container & Image Reveal */}
      <motion.div
        style={{ x: imageX, y: imageY }}
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[300px] h-[380px] sm:w-[380px] sm:h-[460px] lg:w-[420px] lg:h-[490px] rounded-2xl overflow-hidden shadow-2xl border border-black/10 group bg-neutral-900"
      >
        <Image
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80"
          alt="Precision knitwear sewing production floor at Dolphin Generation Knitwear"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
        />

        {/* Sophisticated dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Internal caption on image */}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm text-[10px] uppercase font-bold tracking-widest text-emerald-300 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Narayanganj BSCIC Facility
          </div>
          <p className="text-xs text-neutral-200 font-medium leading-tight">
            High-efficiency lean sewing lines equipped for multi-gauge export knitwear.
          </p>
        </div>
      </motion.div>

      {/* Floating UI Badge 1: Top-Left */}
      <motion.div
        style={{ x: badge1X, y: badge1Y }}
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -top-2 left-2 sm:-top-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-md shadow-lg border border-black/10 flex items-center gap-2.5 group hover:border-[#1B4332] transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center font-bold">
          <Globe2 className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
            Trade Scope
          </span>
          <span className="block text-xs font-extrabold text-[#111111] tracking-tight">
            100% EXPORT ORIENTED
          </span>
        </div>
      </motion.div>

      {/* Floating UI Badge 2: Top-Right */}
      <motion.div
        style={{ x: badge2X, y: badge2Y }}
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute top-6 -right-2 sm:top-4 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-md shadow-lg border border-black/10 flex items-center gap-2.5 group hover:border-[#1B4332] transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-[#1B4332] flex items-center justify-center font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
            Manufacturing Standard
          </span>
          <span className="block text-xs font-extrabold text-[#111111] tracking-tight">
            QUALITY FIRST
          </span>
        </div>
      </motion.div>

      {/* Floating UI Badge 3: Bottom-Left */}
      <motion.div
        style={{ x: badge3X, y: badge3Y }}
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-6 -left-2 sm:bottom-8 sm:-left-4 z-20 bg-[#111111] text-white px-3.5 py-2.5 rounded-md shadow-xl border border-neutral-800 flex items-center gap-2.5"
      >
        <div className="w-7 h-7 rounded-full bg-white/10 text-emerald-400 flex items-center justify-center font-bold">
          <Layers className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
            Output Scale
          </span>
          <span className="block text-xs font-extrabold text-white tracking-tight">
            30K+ DOZEN / MONTH
          </span>
        </div>
      </motion.div>

      {/* Floating UI Badge 4: Bottom-Right */}
      <motion.div
        style={{ x: badge4X, y: badge4Y }}
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute -bottom-2 right-4 sm:-bottom-4 sm:right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-md shadow-lg border border-black/10 flex items-center gap-2.5 group hover:border-[#1B4332] transition-colors"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
            Manufacturing Hub
          </span>
          <span className="block text-xs font-extrabold text-[#111111] tracking-tight">
            BANGLADESH
          </span>
        </div>
      </motion.div>

      {/* Vertical Rotating Indicator (01 QUALITY, 02 PRECISION, 03 CAPACITY, 04 PARTNERSHIP) */}
      <div className="hidden xl:flex flex-col gap-2 absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-2 rounded-lg border border-black/10 shadow-md">
        {pillars.map((item, idx) => {
          const isActive = activePillar === idx;
          return (
            <button
              key={item.num}
              onClick={() => setActivePillar(idx)}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-left transition-all duration-300 ${
                isActive
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <span
                className={`text-[10px] font-mono font-bold ${
                  isActive ? "text-emerald-400" : "text-neutral-400"
                }`}
              >
                {item.num}
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
