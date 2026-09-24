"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";
import { capacityStats } from "@/data/companyData";

export default function CapacitySection() {
  return (
    <section id="capacity" className="py-20 lg:py-28 bg-[#F7F7F3] relative overflow-hidden">
      {/* Background industrial architectural grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Production Scale"
          title="CAPACITY THAT KEEPS BUSINESS MOVING."
          subtitle="Engineered throughput designed to service volume orders with speed, lean line-balancing, and zero compromise on AQL quality standards."
          className="mb-14 lg:mb-20"
        />

        {/* Industrial Grid with Thin Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10 bg-white shadow-sm">
          {capacityStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 sm:p-10 border-r border-b border-black/10 hover:bg-[#FAF9F5] transition-colors group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#1B4332] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] bg-[#1B4332]/5 px-2.5 py-1 rounded-sm border border-[#1B4332]/10">
                    {stat.title}
                  </span>
                </div>

                {/* Animated large number */}
                <div className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#111111] tracking-tight pt-4 pb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </div>

                <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1B4332]">
                  {stat.unit}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 text-xs text-[#5A5A5A] font-medium leading-relaxed">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
