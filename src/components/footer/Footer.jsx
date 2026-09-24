"use client";

import { ArrowUp, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "@/data/companyData";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Quality", href: "#quality" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Customers", href: "#customers" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800">
          {/* Column 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#1B4332] text-white flex items-center justify-center font-bold text-xs tracking-tighter">
                DGK
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-tight">
                  DOLPHIN
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                  GENERATION KNITWEAR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed pt-2">
              100% export-oriented knit garments manufacturer and exporter in Bangladesh. Delivering precision knitwear solutions for international buyers.
            </p>

            <div className="pt-2 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
              {companyInfo.establishedNotice}
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-300">
              Quick Navigation
            </div>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Communication Channels & Leadership (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-300">
              Direct Channels
            </div>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                <span>Narayanganj, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                <a href="tel:+8801711015094" className="hover:text-emerald-300 transition-colors">
                  +880 1711-015094
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                <a href="mailto:emdad@dolphin-bd.com" className="hover:text-emerald-300 transition-colors">
                  emdad@dolphin-bd.com
                </a>
              </div>
            </div>

            {/* Instant Messaging Channels */}
            <div className="pt-3">
              <div className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 mb-2">
                B2B Messenger Channels:
              </div>
              <div className="flex flex-wrap gap-2">
                {companyInfo.contact.channels.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-[11px] bg-neutral-900 rounded-sm border border-neutral-800 hover:border-emerald-500 hover:text-emerald-300 text-neutral-300 transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    <span>{ch.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Dolphin Generation Knitwear Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400">
              BSCIC Industrial Area, Fatullah, Narayanganj
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-neutral-900 hover:bg-[#1B4332] text-white transition-colors flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
