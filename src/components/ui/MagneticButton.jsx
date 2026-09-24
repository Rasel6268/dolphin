"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary", // primary, secondary, outline, text
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-300 relative group overflow-hidden cursor-pointer select-none text-sm uppercase px-7 py-3.5 rounded-sm";

  const variants = {
    primary:
      "bg-[#111111] text-white hover:bg-[#1B4332] shadow-sm hover:shadow-md border border-[#111111]",
    secondary:
      "bg-white text-[#111111] hover:bg-[#F7F7F3] border border-neutral-300 hover:border-neutral-400 shadow-sm",
    outline:
      "bg-transparent text-[#111111] border border-neutral-900/20 hover:border-neutral-900 hover:bg-[#111111] hover:text-white",
    green:
      "bg-[#1B4332] text-white hover:bg-[#2D6A4F] border border-[#1B4332] shadow-sm",
    white:
      "bg-white text-[#111111] hover:bg-neutral-100 border border-white",
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
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wider text-xs">
        {children}
      </span>
    </Component>
  );
}
