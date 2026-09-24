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
    <section id="compliance" className="py-16 lg:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Workplace Ethics"
          title="People, Safety, and Responsibility."
          subtitle="Our factory operations prioritize human dignity, comprehensive occupational safety, and full compliance with Bangladesh labor law and international buyer codes."
          align="center"
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {complianceItems.map((item, idx) => {
            const Icon = complianceIcons[item.id] || Shield;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-6 rounded-xl border border-neutral-200/80 bg-[#F8F9FA] hover:bg-white hover:border-[#1B4332] hover:shadow-xs transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-200 mb-4 shadow-xs">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight mb-1.5">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
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
