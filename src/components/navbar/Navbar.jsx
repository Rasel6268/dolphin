"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
      setScrolled(window.scrollY > 60);

      // Active section tracking
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

  // Color tokens that flip based on scroll state
  const isLight = scrolled; // white bg = light mode; transparent = dark mode (over hero image)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo / Brand Lockup */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs tracking-tight transition-all duration-500 shadow-sm ${
                scrolled
                  ? "bg-[#1B4332] text-white group-hover:bg-[#143427]"
                  : "bg-white/20 text-white backdrop-blur-sm border border-white/30 group-hover:bg-white/30"
              }`}
            >
              DGK
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-sm sm:text-base tracking-tight leading-tight transition-colors duration-500 ${
                  scrolled ? "text-neutral-900" : "text-white drop-shadow-md"
                }`}
              >
                DOLPHIN
              </span>
              <span
                className={`text-[10px] font-semibold tracking-[0.16em] uppercase -mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-neutral-500" : "text-white/75 drop-shadow-sm"
                }`}
              >
                GENERATION KNITWEAR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 lg:space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 rounded-md ${
                    isActive
                      ? scrolled
                        ? "text-[#1B4332] bg-[#1B4332]/8 font-bold"
                        : "text-white bg-white/15 font-bold"
                      : scrolled
                      ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-colors duration-500 ${
                        scrolled ? "bg-[#1B4332]" : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="hidden 2xl:flex flex-col text-right">
              <span
                className={`text-[10px] tracking-wider font-semibold uppercase transition-colors duration-500 ${
                  scrolled ? "text-neutral-400" : "text-white/60"
                }`}
              >
                Export Capacity
              </span>
              <span
                className={`text-xs font-bold transition-colors duration-500 ${
                  scrolled ? "text-[#1B4332]" : "text-white/90"
                }`}
              >
                30,000+ Doz / Month
              </span>
            </div>
            <a
              href="#contact"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-500 shadow-sm ${
                scrolled
                  ? "bg-[#1B4332] hover:bg-[#143427] text-white"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              Start a Partnership
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="#contact"
              className={`px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wide sm:hidden shadow-sm transition-all duration-500 ${
                scrolled
                  ? "bg-[#1B4332] text-white"
                  : "bg-white/15 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              Inquire
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 focus:outline-none ${
                scrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] z-40 bg-white border-b border-neutral-200 shadow-xl px-6 py-6 xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold pb-2 border-b border-neutral-100">
                Navigation
              </div>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold tracking-tight transition-colors py-1 ${
                    activeSection === item.href.substring(1)
                      ? "text-[#1B4332]"
                      : "text-neutral-700 hover:text-[#1B4332]"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
                <div className="text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800">Location:</span> BSCIC, Narayanganj, Bangladesh
                </div>
                <div className="text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800">Direct Contact:</span> +880 1711-015094
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 mt-2 rounded-md bg-[#1B4332] text-white text-xs font-semibold tracking-wide shadow-sm flex items-center justify-center gap-1.5"
                >
                  Start a Partnership
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
