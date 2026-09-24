"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { whyDolphinReasons } from "@/data/companyData";

export default function WhyDolphin() {
  return (
    <section id="why-dolphin" className="py-20 lg:py-32 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Strategic Value"
          title="WHY PARTNER WITH DOLPHIN?"
          subtitle="A fusion of textile engineering discipline, industrial scalability, and transparent B2B collaboration from Bangladesh's textile heartland."
          className="mb-14 lg:mb-20"
        />

        {/* Asymmetric 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyDolphinReasons.map((reason, idx) => {
            const isFeatured = idx === 0 || idx === 5;

            return (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? "bg-[#111111] text-white border-[#111111] shadow-xl hover:bg-neutral-900"
                    : "bg-[#F7F7F3] text-[#111111] border-black/10 hover:bg-white hover:border-[#1B4332] hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-sm font-mono font-bold tracking-widest ${
                        isFeatured ? "text-emerald-400" : "text-[#1B4332]"
                      }`}
                    >
                      {reason.num}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        isFeatured ? "bg-white/10 text-white" : "bg-black/5 text-[#111111]"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-3 ${
                      isFeatured ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isFeatured ? "text-neutral-300" : "text-[#5A5A5A]"
                    }`}
                  >
                    {reason.desc}
                  </p>
                </div>

                <div
                  className={`pt-6 mt-8 border-t text-[11px] font-mono uppercase tracking-widest ${
                    isFeatured ? "border-white/15 text-emerald-400" : "border-black/5 text-neutral-400"
                  }`}
                >
                  Advantage {reason.num} / 06
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
