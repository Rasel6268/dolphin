"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { productCategories } from "@/data/companyData";

export default function ProductGallery() {
  const [activeCategoryId, setActiveCategoryId] = useState("mens-wear");

  return (
    <section id="products" className="py-20 lg:py-28 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-14 gap-6">
          <SectionHeading
            label="Product Capabilities"
            title="Knitwear for Every Global Market."
            subtitle="Precision-constructed garments designed to meet strict international retailer sizing, fabric tolerances, and quality standards."
          />

          {/* Category Tabs for Mobile / Quick Click */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-md transition-all duration-200 border cursor-pointer ${
                  activeCategoryId === cat.id
                    ? "bg-[#1B4332] text-white border-[#1B4332] shadow-xs"
                    : "bg-[#F8F9FA] text-[#475569] border-neutral-200 hover:text-neutral-900 hover:border-neutral-300"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Horizontal Accordion / Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 min-h-[500px]">
          {productCategories.map((category) => {
            const isActive = activeCategoryId === category.id;

            return (
              <motion.div
                key={category.id}
                onMouseEnter={() => setActiveCategoryId(category.id)}
                onClick={() => setActiveCategoryId(category.id)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border border-neutral-200/60 group ${
                  isActive
                    ? "lg:col-span-2 shadow-xl ring-1 ring-[#1B4332]"
                    : "lg:col-span-1 shadow-xs opacity-90 hover:opacity-100"
                }`}
                layout
              >
                {/* Background Editorial Image */}
                <Image
                  src={category.image}
                  alt={`${category.title} knitwear manufacturing by Dolphin Generation Knitwear`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
                      ? "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
                      : "bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85"
                  }`}
                />

                {/* Content Container */}
                <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between text-white z-10">
                  {/* Top: Category Tag & Arrow Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md border border-white/20">
                      {category.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white text-neutral-900 rotate-45 scale-105"
                          : "bg-black/40 text-white group-hover:bg-white group-hover:text-black"
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom: Information & Items List */}
                  <div className="space-y-3">
                    <div>
                      <motion.h3
                        className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1"
                        animate={{ y: isActive ? 0 : 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.title}
                      </motion.h3>
                      <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2">
                        {category.subtitle}
                      </p>
                    </div>

                    {/* Detailed info visible when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-2 border-t border-white/15"
                        >
                          <p className="text-xs text-neutral-300 leading-relaxed hidden sm:block">
                            {category.description}
                          </p>

                          {/* Product line items */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {category.items.map((item, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white/15 backdrop-blur-sm rounded-sm text-white"
                              >
                                <Check className="w-3 h-3 text-emerald-400" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
