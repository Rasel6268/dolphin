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
      className="py-20 lg:py-32 bg-[#1B4332] text-white relative overflow-hidden"
    >
      {/* Subtle animated textile fiber grid background */}
      <div className="absolute inset-0 bg-textile-pattern opacity-15 pointer-events-none" />

      {/* Atmospheric green ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              label="Environmental Commitment"
              title={sustainabilityData.headline}
              light={true}
            />

            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-emerald-100/90 leading-relaxed border-l-2 border-emerald-400 pl-5 py-1"
            >
              “{sustainabilityData.vision}”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-emerald-200/75 leading-relaxed pl-5"
            >
              We integrate ecological preservation with technical textile performance, aligning our facility with global brands striving for measurable environmental accountability.
            </motion.p>
          </div>

          {/* Right Column: 6 Sustainable Pillars Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sustainabilityData.pillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/15 text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h4 className="text-base font-extrabold text-white tracking-tight mb-2">
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
