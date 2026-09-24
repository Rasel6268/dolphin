"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { factoryData } from "@/data/companyData";

export default function FactorySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background Factory Parallax Image */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src={factoryData.image}
          alt="Dolphin Generation Knitwear modern 7-story manufacturing facility in Narayanganj"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.40] contrast-110"
        />
      </motion.div>

      {/* Industrial geometric grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/20 bg-white/10 text-neutral-200 text-[11px] font-semibold uppercase tracking-wider mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Physical Infrastructure
        </motion.div>

        {/* Corporate Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-snug"
        >
          {factoryData.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mt-4 font-normal leading-relaxed"
        >
          {factoryData.subhead}
        </motion.p>

        {/* 4 Pillars Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-12 max-w-3xl mx-auto">
          {factoryData.metrics.slice(1).map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
              className="p-5 rounded-lg bg-white/8 backdrop-blur-md border border-white/15 text-center hover:bg-white/12 transition-all duration-300 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mt-1">
                {metric.unit}
              </div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1.5">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
