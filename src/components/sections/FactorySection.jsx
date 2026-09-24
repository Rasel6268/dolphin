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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-950/40 text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Physical Infrastructure
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white max-w-5xl mx-auto leading-none"
        >
          {factoryData.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mt-6 font-normal leading-relaxed"
        >
          {factoryData.subhead}
        </motion.p>

        {/* 4 Pillars Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-4xl mx-auto">
          {factoryData.metrics.slice(1).map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 hover:border-emerald-400/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mt-1">
                {metric.unit}
              </div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider mt-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
