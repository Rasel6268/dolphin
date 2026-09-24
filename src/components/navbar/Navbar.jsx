"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Quality", href: "#quality" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Customers", href: "#customers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section for active indicator
      const sections = navItems.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? "bg-[#F7F7F3]/90 backdrop-blur-md shadow-sm border-b border-black/5 py-3.5"
          : "bg-transparent py-5 lg:py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Lockup */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-sm bg-[#111111] text-white flex items-center justify-center font-bold text-xs tracking-tighter transition-colors group-hover:bg-[#1B4332]">
              DGK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111111] leading-tight">
                DOLPHIN
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#5A5A5A] uppercase -mt-0.5">
                GENERATION KNITWEAR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 ${isActive ? "text-[#111111]" : "text-[#5A5A5A] hover:text-[#111111]"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#1B4332]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <MagneticButton href="#contact" variant="primary" className="!px-5 !py-2.5">
              Start a Partnership
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 xl:hidden">
            <MagneticButton href="#contact" variant="primary" className="!px-3.5 !py-2 text-[11px] sm:hidden">
              Inquire
            </MagneticButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#111111] hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#F7F7F3] border-b border-black/10 shadow-xl px-6 py-8 xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#5A5A5A] font-bold pb-2 border-b border-black/5">
                Navigation
              </div>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold tracking-tight uppercase transition-colors ${activeSection === item.href.substring(1)
                    ? "text-[#1B4332]"
                    : "text-[#111111] hover:text-[#1B4332]"
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-6 border-t border-black/5 flex flex-col gap-3">
                <div className="text-xs text-[#5A5A5A]">
                  <span className="font-semibold text-[#111111]">Location:</span> Fatullah, Narayanganj, Bangladesh
                </div>
                <div className="text-xs text-[#5A5A5A]">
                  <span className="font-semibold text-[#111111]">Direct Contact:</span> +880 1711-015094
                </div>
                <MagneticButton
                  href="#contact"
                  variant="green"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full !py-3.5 mt-2"
                >
                  Start a Partnership
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
