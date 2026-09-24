"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { customerMarkets, allCustomers } from "@/data/companyData";

export default function GlobalCustomers() {
  return (
    <section id="customers" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80 relative overflow-hidden">
      {/* Subtle SVG World Coordinate / Grid Map Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center -z-0">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full max-w-6xl stroke-neutral-400"
          fill="none"
          strokeWidth="0.75"
        >
          {/* Latitude lines */}
          <line x1="50" y1="125" x2="950" y2="125" strokeDasharray="3 3" />
          <line x1="50" y1="250" x2="950" y2="250" />
          <line x1="50" y1="375" x2="950" y2="375" strokeDasharray="3 3" />
          {/* Longitude lines */}
          <ellipse cx="500" cy="250" rx="450" ry="200" />
          <ellipse cx="500" cy="250" rx="300" ry="200" />
          <ellipse cx="500" cy="250" rx="150" ry="200" />
          <line x1="500" y1="50" x2="500" y2="450" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="International Footprint"
          title="Trusted Across Global Markets."
          subtitle="Delivering reliable knitwear manufacturing for discerning apparel buyers across Europe, Scandinavia, the United Kingdom, and Japan."
          className="mb-12 lg:mb-14"
        />

        {/* Export Destination Countries Highlight */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {customerMarkets.map((market, idx) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs text-center group hover:border-[#1B4332] transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#1B4332] font-semibold">
                {market.region}
              </div>
              <div className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight mt-1 flex items-center justify-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1B4332] transition-colors" />
                {market.country}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typographic Luxury Brand Grid (Strictly Authentic Names Only) */}
        <div className="border border-neutral-200/80 rounded-xl bg-white shadow-xs overflow-hidden p-6 sm:p-8">
          <div className="text-[11px] uppercase font-semibold tracking-wider text-neutral-400 text-center pb-5 border-b border-neutral-100">
            Key Buyer & Sourcing Portfolios
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 pt-8 items-center justify-items-center">
            {allCustomers.map((brand, idx) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="w-full flex items-center justify-center p-2.5 text-center group"
              >
                <span className="font-bold text-sm sm:text-base tracking-wide text-neutral-700 uppercase group-hover:text-[#0F172A] transition-colors select-none">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-neutral-100 text-center text-xs text-neutral-400">
            * Direct and buying-house partnerships across Scandinavian, Western European, and Far East apparel retail networks.
          </div>
        </div>
      </div>
    </section>
  );
}
