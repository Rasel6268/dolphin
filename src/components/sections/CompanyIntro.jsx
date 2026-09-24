"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { allProductList } from "@/data/companyData";

export default function CompanyIntro() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Company Introduction"
          title="Built for Long-Term Partnerships."
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-5 space-y-4">
            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug tracking-tight border-l-3 border-[#1B4332] pl-5 py-1"
            >
              “Manufacturing with precision. Partnering with purpose.”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-5"
            >
              Engineered for international compliance, fast lead times, and seamless batch-to-batch repeatability from our modern facility in Narayanganj.
            </motion.p>
          </div>

          {/* Right Column: Company Description & Product Tags */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed"
            >
              <p>
                <strong className="text-[#0F172A] font-semibold">
                  Dolphin Generation Knitwear Limited
                </strong>{" "}
                is a 100% export-oriented knit garments manufacturer and exporter based in Bangladesh. Led by technical textile engineering leadership, we engineer every step of garment manufacturing to serve global apparel brands with integrity.
              </p>
              <p className="text-xs sm:text-sm text-[#475569]">
                The company produces a comprehensive range of premium circular knitwear, crafted using ethically sourced cottons, modal blends, and functional synthetics.
              </p>
            </motion.div>

            {/* Knit Garment Pills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-1"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1B4332] mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332]" />
                Full Knitwear Product Portfolio:
              </div>
              <div className="flex flex-wrap gap-2">
                {allProductList.map((product, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-neutral-700 bg-[#F8F9FA] rounded-md border border-neutral-200 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors cursor-default"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Discover Link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-2"
            >
              <a
                href="#manufacturing"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#1B4332] transition-colors group"
              >
                Discover Our Story & Process
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
