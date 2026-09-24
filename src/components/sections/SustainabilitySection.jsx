"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Wind, Droplets, Sun, HeartHandshake } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { sustainabilityData } from "@/data/companyData";

const pillarIcons = [Leaf, Recycle, HeartHandshake, Sun, Wind, Droplets];

export default function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="py-16 lg:py-24 bg-[#1B4332] text-white relative overflow-hidden"
    >
      {/* Subtle animated textile fiber grid background */}
      <div className="absolute inset-0 bg-textile-pattern opacity-10 pointer-events-none" />

      {/* Atmospheric green ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-5 space-y-5">
            <SectionHeading
              label="Environmental Commitment"
              title={sustainabilityData.headline}
              light={true}
            />

            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg font-medium text-emerald-100/90 leading-relaxed border-l-2 border-emerald-400 pl-4 py-0.5"
            >
              “{sustainabilityData.vision}”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-xs sm:text-sm text-emerald-200/75 leading-relaxed pl-4"
            >
              We integrate ecological preservation with technical textile performance, aligning our facility with global brands striving for measurable environmental accountability.
            </motion.p>
          </div>

          {/* Right Column: 6 Sustainable Pillars Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {sustainabilityData.pillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-400/40 hover:bg-white/8 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-400/15 text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1.5">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-emerald-100/70 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
