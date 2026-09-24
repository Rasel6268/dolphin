"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";
import { capacityStats } from "@/data/companyData";

export default function CapacitySection() {
  return (
    <section id="capacity" className="py-16 lg:py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Background industrial architectural grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Production Scale"
          title="Capacity That Keeps Business Moving."
          subtitle="Engineered throughput designed to service volume orders with speed, lean line-balancing, and zero compromise on AQL quality standards."
          className="mb-12 lg:mb-16"
        />

        {/* Industrial Grid with Thin Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-200/80 bg-white shadow-xs rounded-lg overflow-hidden">
          {capacityStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 sm:p-8 border-r border-b border-neutral-200/80 hover:bg-[#F8F9FA] transition-colors group flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-neutral-400 group-hover:text-[#1B4332] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B4332] bg-[#1B4332]/5 px-2 py-0.5 rounded border border-[#1B4332]/10">
                    {stat.title}
                  </span>
                </div>

                {/* Animated number */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight pt-3 pb-0.5">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#1B4332]">
                  {stat.unit}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-100 text-xs text-[#475569] font-normal leading-relaxed">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
