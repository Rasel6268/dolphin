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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/20 bg-white/10 text-neutral-200 text-[11px] font-semibold uppercase tracking-wider mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Global Sourcing & Direct Export
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-snug"
        >
          Let's Build Reliable Manufacturing Together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-neutral-300 max-w-lg mx-auto mt-4 font-normal leading-relaxed"
        >
          Looking for a dependable knitwear manufacturing partner in Bangladesh? Connect directly with our engineering and export team today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
        >
          <MagneticButton href="#contact" variant="green">
            Send an Inquiry
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            variant="outline"
            className="!text-white !border-white/30 hover:!bg-white hover:!text-neutral-900"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Our Team
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
