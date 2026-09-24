"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { whyDolphinReasons } from "@/data/companyData";

export default function WhyDolphin() {
  return (
    <section id="why-dolphin" className="py-16 lg:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Strategic Value"
          title="Why Partner with Dolphin?"
          subtitle="A fusion of textile engineering discipline, industrial scalability, and transparent B2B collaboration from Bangladesh's textile heartland."
          className="mb-12 lg:mb-16"
        />

        {/* Asymmetric 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyDolphinReasons.map((reason, idx) => {
            const isFeatured = idx === 0 || idx === 5;

            return (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-6 sm:p-8 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                  isFeatured
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md"
                    : "bg-[#F8F9FA] text-[#0F172A] border-neutral-200/80 hover:bg-white hover:border-[#1B4332] hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isFeatured ? "text-emerald-300" : "text-[#1B4332]"
                      }`}
                    >
                      {reason.num}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isFeatured ? "bg-white/10 text-white" : "bg-black/5 text-[#0F172A]"
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 ${
                      isFeatured ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isFeatured ? "text-neutral-300" : "text-[#475569]"
                    }`}
                  >
                    {reason.desc}
                  </p>
                </div>

                <div
                  className={`pt-5 mt-6 border-t text-[11px] font-mono uppercase tracking-wider ${
                    isFeatured ? "border-white/15 text-emerald-300" : "border-neutral-100 text-neutral-400"
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
