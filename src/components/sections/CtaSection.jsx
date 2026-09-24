"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-neutral-950 text-white">
      {/* Background Garment / Factory Image with Dark Overlay */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80"
          alt="Garment production floor at Dolphin Generation Knitwear"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/50 text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Global Sourcing & Direct Export
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase max-w-4xl mx-auto leading-none"
        >
          LET'S BUILD SOMETHING BETTER TOGETHER.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mt-6 font-normal leading-relaxed"
        >
          Looking for a reliable knitwear manufacturing partner in Bangladesh? Connect directly with our engineering and export team today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <MagneticButton href="#contact" variant="green">
            Send an Inquiry
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton href="#contact" variant="outline" className="!text-white !border-white/30 hover:!bg-white hover:!text-black">
            <Mail className="w-4 h-4" />
            Contact Our Team
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
