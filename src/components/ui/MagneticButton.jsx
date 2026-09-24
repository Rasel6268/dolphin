"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary", // primary, secondary, outline, green, white
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 relative group overflow-hidden cursor-pointer select-none text-xs uppercase px-5 py-2.5 sm:px-6 sm:py-3 rounded-md";

  const variants = {
    primary:
      "bg-[#0F172A] text-white hover:bg-[#1B4332] shadow-xs hover:shadow-sm border border-[#0F172A] hover:border-[#1B4332]",
    secondary:
      "bg-white text-[#0F172A] hover:bg-[#F8F9FA] border border-neutral-200 hover:border-neutral-300 shadow-xs",
    outline:
      "bg-transparent text-[#0F172A] border border-neutral-300 hover:border-[#0F172A] hover:bg-[#0F172A] hover:text-white",
    green:
      "bg-[#1B4332] text-white hover:bg-[#143427] border border-[#1B4332] shadow-xs",
    white:
      "bg-white text-[#0F172A] hover:bg-neutral-50 border border-neutral-200 shadow-xs",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.1 }}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wider text-xs">
        {children}
      </span>
    </Component>
  );
}
