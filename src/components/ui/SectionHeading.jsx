"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md border ${
            light
              ? "text-neutral-200 border-white/20 bg-white/10"
              : "text-[#1B4332] border-[#1B4332]/15 bg-[#1B4332]/5"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              light ? "bg-white" : "bg-[#1B4332]"
            }`}
          />
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.06 }}
        className={`section-title ${light ? "text-white" : "text-[#0F172A]"}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={`text-sm sm:text-base leading-relaxed ${
            light ? "text-neutral-300" : "text-[#475569]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
