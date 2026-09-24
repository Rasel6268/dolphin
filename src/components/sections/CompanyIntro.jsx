"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { allProductList } from "@/data/companyData";

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Company Introduction"
          title="BUILT FOR LONG-TERM PARTNERSHIPS."
          className="mb-14 lg:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-5 space-y-6">
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] leading-tight tracking-tight border-l-4 border-[#1B4332] pl-6 py-2"
            >
              “Manufacturing with precision. Partnering with purpose.”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed pl-6"
            >
              Engineered for international compliance, fast lead times, and seamless batch-to-batch repeatability from our modern facility in Narayanganj.
            </motion.p>
          </div>

          {/* Right Column: Company Description & Product Tags */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-base sm:text-lg text-[#5A5A5A] leading-relaxed"
            >
              <p>
                <strong className="text-[#111111] font-bold">
                  Dolphin Generation Knitwear Limited
                </strong>{" "}
                is a 100% export-oriented knit garments manufacturer and exporter based in Bangladesh. Led by technical textile engineering leadership, we engineer every step of garment manufacturing to serve global apparel brands with integrity.
              </p>
              <p className="text-sm sm:text-base text-[#5A5A5A]">
                The company produces a comprehensive range of premium circular knitwear, crafted using ethically sourced cottons, modal blends, and functional synthetics.
              </p>
            </motion.div>

            {/* Knit Garment Pills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                Full Knitwear Product Portfolio:
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {allProductList.map((product, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 text-xs font-medium text-[#111111] bg-[#F7F7F3] rounded-sm border border-black/5 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors cursor-default"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Discover Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <a
                href="#manufacturing"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#111111] hover:text-[#1B4332] transition-colors group"
              >
                Discover Our Story & Process
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
