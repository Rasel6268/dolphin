"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { customerMarkets, allCustomers } from "@/data/companyData";

export default function GlobalCustomers() {
  return (
    <section id="customers" className="py-20 lg:py-32 bg-[#F7F7F3] border-b border-black/5 relative overflow-hidden">
      {/* Subtle SVG World Coordinate / Grid Map Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 flex items-center justify-center -z-0">
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
          title="TRUSTED ACROSS GLOBAL MARKETS."
          subtitle="Delivering reliable knitwear manufacturing for discerning apparel buyers across Europe, Scandinavia, the United Kingdom, and Japan."
          className="mb-14 lg:mb-16"
        />

        {/* Export Destination Countries Highlight */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {customerMarkets.map((market, idx) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-4 sm:p-5 rounded-lg bg-white border border-black/10 shadow-sm text-center group hover:border-[#1B4332] transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#1B4332] font-bold">
                {market.region}
              </div>
              <div className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight mt-1 flex items-center justify-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1B4332] transition-colors" />
                {market.country}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typographic Luxury Brand Grid (Strictly Authentic Names Only) */}
        <div className="border border-black/10 rounded-2xl bg-white shadow-sm overflow-hidden p-6 sm:p-10">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#5A5A5A] text-center pb-8 border-b border-black/5">
            Key Buyer & Sourcing Portfolios
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 pt-10 items-center justify-items-center">
            {allCustomers.map((brand, idx) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="w-full flex items-center justify-center p-3 text-center group"
              >
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-neutral-700 uppercase group-hover:text-[#111111] group-hover:scale-105 transition-all duration-300 select-none">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-black/5 text-center text-xs text-neutral-400">
            * Direct and buying-house partnerships across Scandinavian, Western European, and Far East apparel retail networks.
          </div>
        </div>
      </div>
    </section>
  );
}
