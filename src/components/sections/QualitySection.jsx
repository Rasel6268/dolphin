"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { tqmPrinciples } from "@/data/companyData";

export default function QualitySection() {
  const [activeId, setActiveId] = useState(1);
  const activePrinciple = tqmPrinciples.find((p) => p.id === activeId) || tqmPrinciples[0];

  return (
    <section id="quality" className="py-16 lg:py-24 bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Total Quality Management (TQM)"
          title="Quality Is Not a Checkpoint. It's a Culture."
          subtitle="Our engineering-first quality culture ensures statistical inspection across every batch, ensuring seamless compliance with international buyers."
          align="center"
          className="mb-12 lg:mb-16"
        />

        {/* Desktop Interactive Circular Radial Diagram */}
        <div className="hidden lg:flex flex-col items-center justify-center relative min-h-[580px]">
          {/* Radial Outer Circle Guide Line */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-black/15 pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-black/5 pointer-events-none" />

          {/* SVG Animated Connections */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0"
            viewBox="0 0 800 600"
          >
            {tqmPrinciples.map((item, index) => {
              const total = tqmPrinciples.length;
              const angleRad = (index * (360 / total) - 90) * (Math.PI / 180);
              const cx = 400;
              const cy = 300;
              const radius = 230;
              const x = cx + radius * Math.cos(angleRad);
              const y = cy + radius * Math.sin(angleRad);
              const isActive = activeId === item.id;

              return (
                <line
                  key={item.id}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke={isActive ? "#1B4332" : "#E5E5E0"}
                  strokeWidth={isActive ? "2.5" : "1"}
                  strokeDasharray={isActive ? "none" : "3 3"}
                  className="transition-colors duration-300"
                />
              );
            })}
          </svg>

          {/* Center Hub: TOTAL QUALITY MANAGEMENT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative z-20 w-40 h-40 rounded-full bg-[#0F172A] text-white flex flex-col items-center justify-center p-4 text-center shadow-lg border-3 border-[#1B4332]"
          >
            <ShieldCheck className="w-7 h-7 text-emerald-400 mb-1" />
            <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              Core Framework
            </div>
            <div className="text-xs font-bold tracking-wider uppercase leading-tight mt-0.5">
              TOTAL<br />QUALITY<br />MANAGEMENT
            </div>
          </motion.div>

          {/* 8 Outer Nodes Placed Radially */}
          {tqmPrinciples.map((item, index) => {
            const total = tqmPrinciples.length;
            const angleRad = (index * (360 / total) - 90) * (Math.PI / 180);
            const radius = 230; // Radius in px
            const x = Math.round(radius * Math.cos(angleRad));
            const y = Math.round(radius * Math.sin(angleRad));
            const isActive = activeId === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute z-20 px-3.5 py-2 rounded-full border text-[11px] font-semibold tracking-wide transition-all duration-200 shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#1B4332] text-white border-[#1B4332] scale-105 shadow-md ring-3 ring-[#1B4332]/20"
                    : "bg-white text-neutral-800 border-neutral-200 hover:border-[#1B4332]"
                }`}
              >
                {item.title}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Principle Active Explainer Card */}
        <div className="mt-8 max-w-xl mx-auto text-center bg-[#F8F9FA] p-6 sm:p-7 rounded-xl border border-neutral-200/80 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePrinciple.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5"
            >
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1B4332]">
                <Sparkles className="w-3.5 h-3.5" />
                Principle {activePrinciple.id} of 08
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                {activePrinciple.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activePrinciple.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Grid Alternative for Accessibility and Small Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-8 lg:hidden">
          {tqmPrinciples.map((principle) => (
            <div
              key={principle.id}
              onClick={() => setActiveId(principle.id)}
              className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                activeId === principle.id
                  ? "bg-[#1B4332] text-white border-[#1B4332]"
                  : "bg-white text-neutral-800 border-neutral-200"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span>0{principle.id}</span>
                <Award className="w-4 h-4 opacity-75" />
              </div>
              <div className="text-sm font-bold">{principle.title}</div>
              <div
                className={`text-xs mt-1 ${
                  activeId === principle.id ? "text-neutral-200" : "text-[#5A5A5A]"
                }`}
              >
                {principle.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
