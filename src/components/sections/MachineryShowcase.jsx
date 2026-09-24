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
    <section id="machinery" className="py-20 lg:py-28 bg-[#F7F7F3] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            label="Industrial Hardware"
            title="PRECISION INDUSTRIAL MACHINERY."
            subtitle="Equipped with specialized high-speed sewing machines, automated attachments, and precision finishing units to meet international export tolerance."
          />

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-black/10 rounded-sm shadow-sm self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-[#5A5A5A] hover:text-[#111111] hover:bg-black/5"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-7 rounded-xl border border-black/10 hover:border-[#1B4332] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 bg-[#1B4332]/5 text-[#1B4332] rounded-sm border border-[#1B4332]/15">
                      {machine.category}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#111111] transition-colors">
                      {machine.count}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-[#111111] tracking-tight group-hover:text-[#1B4332] transition-colors mb-2">
                    {machine.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                    {machine.role}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-[11px] text-neutral-400 font-medium">
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
