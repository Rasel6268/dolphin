"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { manufacturingSteps } from "@/data/companyData";

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = manufacturingSteps[activeStepIndex];

  return (
    <section id="manufacturing" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="End-to-End Workflow"
          title="From Sample to Shipment."
          subtitle="Eight disciplined stages governed by textile engineering precision, guaranteeing zero defects and timely ocean/air freight handover."
          className="mb-12 lg:mb-14"
        />

        {/* Desktop Horizontal Step Navigation */}
        <div className="hidden lg:block mb-12 relative">
          {/* Progress Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-black/10 -z-0" />
          <motion.div
            className="absolute top-6 left-0 h-[2px] bg-[#1B4332] -z-0"
            initial={false}
            animate={{
              width: `${(activeStepIndex / (manufacturingSteps.length - 1)) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <div className="grid grid-cols-8 gap-2 relative z-10">
            {manufacturingSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex >= idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive ? "#1B4332" : isPassed ? "#111111" : "#FFFFFF",
                      color: isActive || isPassed ? "#FFFFFF" : "#5A5A5A",
                      borderColor: isActive ? "#1B4332" : "#D4D4D0",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs shadow-sm"
                  >
                    {step.step}
                  </motion.div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider mt-3 line-clamp-1 transition-colors ${
                      isActive ? "text-[#1B4332]" : "text-[#5A5A5A] group-hover:text-[#111111]"
                    }`}
                  >
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Pill Scroller */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {manufacturingSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-sm border text-xs font-bold uppercase tracking-wider ${
                  isActive
                    ? "bg-[#1B4332] text-white border-[#1B4332]"
                    : "bg-white text-[#5A5A5A] border-black/10"
                }`}
              >
                <span>{step.step}</span>
                <span>{step.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card (Split Image + Info) */}
        <div className="bg-white rounded-xl border border-neutral-200/80 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
            {/* Left: Interactive Image with Crossfade */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[440px] bg-neutral-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.step}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeStep.image}
                    alt={`${activeStep.title} at Dolphin Generation Knitwear`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge on photo */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-md border border-white/20 inline-block mb-1">
                      Step {activeStep.step} / 08
                    </span>
                    <h4 className="text-lg font-bold tracking-tight">{activeStep.title}</h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Detailed Stage Information */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono font-semibold tracking-wider text-[#1B4332] uppercase">
                      Stage {activeStep.step} — {activeStep.tagline}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {activeStep.desc}
                  </p>

                  {/* Stage Technical Specifications */}
                  <div className="space-y-2 pt-3 border-t border-neutral-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Standard Quality Benchmarks:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeStep.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-semibold text-[#111111] bg-[#F7F7F3] p-2.5 rounded-sm border border-black/5"
                        >
                          <CheckCircle className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-black/5">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-bold uppercase tracking-wider text-[#5A5A5A] hover:text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous Stage
                </button>
                <div className="text-xs font-mono text-neutral-400">
                  {activeStepIndex + 1} of {manufacturingSteps.length}
                </div>
                <button
                  disabled={activeStepIndex === manufacturingSteps.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) => Math.min(manufacturingSteps.length - 1, prev + 1))
                  }
                  className="text-xs font-bold uppercase tracking-wider text-[#1B4332] hover:text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  Next Stage <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
