"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import AnimatedCounter from "../ui/AnimatedCounter";
import HeroGraphic from "./HeroGraphic";
import { heroData } from "@/data/companyData";

export default function Hero() {
  const words = heroData.headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-industrial-grid"
    >
      {/* Subtle architectural gradient background */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-gradient-to-bl from-[#1B4332]/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT SIDE: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Supporting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1B4332]/20 bg-[#1B4332]/5 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1B4332]" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#1B4332]">
                {heroData.subtext}
              </span>
            </motion.div>

            {/* Staggered Word Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hero-headline text-[#111111]"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em] last:mr-0"
                >
                  {word === "QUALITY" ? (
                    <span className="text-[#1B4332] relative underline decoration-[#1B4332]/30 decoration-wavy decoration-2">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[#5A5A5A] max-w-2xl leading-relaxed font-normal"
            >
              {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <MagneticButton href="#manufacturing" variant="primary">
                Explore Our Capabilities
                <ArrowDown className="w-3.5 h-3.5" />
              </MagneticButton>

              <MagneticButton href="#contact" variant="outline">
                Start a Partnership
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </motion.div>

            {/* Mobile-only hero graphic position for stacked order requirements */}
            <div className="lg:hidden my-4">
              <HeroGraphic />
            </div>

            {/* Small Trust Indicators Grid */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-6 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {heroData.trustMetrics.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#1B4332]">
                    {item.unit}
                  </div>
                  <div className="text-[11px] text-[#5A5A5A] font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Desktop Interactive Graphic */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <HeroGraphic />
          </div>
        </div>
      </div>

      {/* Vertical Right-Side Scroll Indicator */}
      <div className="hidden 2xl:flex flex-col items-center gap-3 fixed right-8 bottom-12 z-30 pointer-events-none opacity-60">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-500 rotate-90 origin-right translate-x-3 mb-8">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-neutral-400"
        />
      </div>
    </section>
  );
}
