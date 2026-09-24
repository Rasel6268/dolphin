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
      className={`space-y-4 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full border ${
            light
              ? "text-emerald-300 border-white/20 bg-white/5"
              : "text-[#1B4332] border-[#1B4332]/20 bg-[#1B4332]/5"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              light ? "bg-emerald-400" : "bg-[#1B4332]"
            }`}
          />
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`section-title ${light ? "text-white" : "text-[#111111]"}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-neutral-300" : "text-[#5A5A5A]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
