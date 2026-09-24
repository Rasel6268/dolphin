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
    <footer className="bg-[#0F172A] text-white pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1B4332] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                DGK
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-white leading-tight">
                  DOLPHIN
                </span>
                <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                  GENERATION KNITWEAR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed pt-1 font-normal">
              100% export-oriented knit garments manufacturer and exporter in Bangladesh. Delivering precision knitwear solutions for international buyers.
            </p>

            <div className="pt-1 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
              {companyInfo.establishedNotice}
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-[11px] uppercase font-semibold tracking-wider text-slate-300">
              Quick Navigation
            </div>
            <ul className="space-y-1.5">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Communication Channels & Leadership (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="text-[11px] uppercase font-semibold tracking-wider text-slate-300">
              Direct Channels
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Narayanganj, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+8801711015094" className="hover:text-emerald-300 transition-colors">
                  +880 1711-015094
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:emdad@dolphin-bd.com" className="hover:text-emerald-300 transition-colors">
                  emdad@dolphin-bd.com
                </a>
              </div>
            </div>

            {/* Instant Messaging Channels */}
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                B2B Messenger Channels:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {companyInfo.contact.channels.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-[11px] bg-slate-800/80 rounded border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 text-slate-300 transition-colors flex items-center gap-1.5"
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2026 Dolphin Generation Knitwear Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[11px] tracking-wide text-slate-400">
              BSCIC Industrial Area, Fatullah, Narayanganj
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-800 hover:bg-[#1B4332] text-white transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
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
