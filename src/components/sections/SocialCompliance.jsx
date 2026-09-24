"use client";

import { motion } from "framer-motion";
import {
  Flame,
  HeartPulse,
  Lightbulb,
  BellRing,
  Shield,
  UserCheck,
  Wind,
  DoorOpen,
  HandHeart,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { complianceItems } from "@/data/companyData";

const complianceIcons = {
  "fire-safety": Flame,
  "emergency-evacuation": DoorOpen,
  "emergency-lighting": Lightbulb,
  "fire-drills": BellRing,
  "first-aid": HeartPulse,
  "worker-safety": Shield,
  "no-child-labour": UserCheck,
  ventilation: Wind,
  "employee-benefits": HandHeart,
};

export default function SocialCompliance() {
  return (
    <section id="compliance" className="py-20 lg:py-28 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Workplace Ethics"
          title="PEOPLE. SAFETY. RESPONSIBILITY."
          subtitle="Our factory operations prioritize human dignity, comprehensive occupational safety, and full compliance with Bangladesh labor law and international buyer codes."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceItems.map((item, idx) => {
            const Icon = complianceIcons[item.id] || Shield;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-7 rounded-xl border border-black/10 bg-[#F7F7F3] hover:bg-white hover:border-[#1B4332] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-black/5 flex items-center justify-center text-[#111111] group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-300 mb-5">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>

                <h4 className="text-base font-extrabold text-[#111111] tracking-tight mb-2">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
