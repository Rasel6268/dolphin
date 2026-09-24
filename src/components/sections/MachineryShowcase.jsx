"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Settings2, Cpu } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { machineryList } from "@/data/companyData";

const categories = ["ALL", "CUTTING", "SEWING", "FINISHING"];

export default function MachineryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredMachines =
    selectedCategory === "ALL"
      ? machineryList
      : machineryList.filter((m) => m.category === selectedCategory);

  return (
    <section id="machinery" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-14 gap-6">
          <SectionHeading
            label="Industrial Hardware"
            title="Precision Industrial Machinery."
            subtitle="Equipped with specialized high-speed sewing machines, automated attachments, and precision finishing units to meet international export tolerance."
          />

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-neutral-200 rounded-md shadow-xs self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-md transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1B4332] text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid of Machinery Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredMachines.map((machine) => (
              <motion.div
                key={machine.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 sm:p-7 rounded-xl border border-neutral-200/80 hover:border-[#1B4332] shadow-xs hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-mono uppercase font-semibold tracking-wider px-2 py-0.5 bg-[#1B4332]/5 text-[#1B4332] rounded border border-[#1B4332]/15">
                      {machine.category}
                    </span>
                    <span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-700 transition-colors">
                      {machine.count}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#1B4332] transition-colors mb-1.5">
                    {machine.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {machine.role}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#1B4332]" />
                    Export Calibrated
                  </span>
                  <span className="font-mono text-[10px] uppercase">Daily Maintenance</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
