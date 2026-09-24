"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/companyData";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleTabClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Factory Showcase Slider"
      className="relative w-full overflow-hidden bg-neutral-950 select-none h-[56svh] sm:h-[68svh] md:h-[78svh] lg:h-[86svh] xl:h-[90svh] min-h-[340px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[600px] max-h-[980px] landscape:min-h-[300px]"
    >
      {/* ─── BACKGROUND SWIPER: Full bleed imagery ─── */}
      <div className="absolute inset-0 z-0">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1100}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id || index} className="relative w-full h-full">
              {/* Full-bleed factory photograph */}
              <Image
                src={slide.image}
                alt={`Dolphin Generation Knitwear factory showcase ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center w-full h-full transition-transform duration-1000 ease-out"
                quality={90}
              />

              {/* Elegant soft vignettes preserving photo clarity & providing contrast for controls/navbar */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ─── MINIMALIST NAVIGATION ARROWS (NO TEXT) ─── */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-black/35 hover:bg-black/65 text-white/90 hover:text-white backdrop-blur-md border border-white/20 hover:border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-black/35 hover:bg-black/65 text-white/90 hover:text-white backdrop-blur-md border border-white/20 hover:border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* ─── CLEAN PAGINATION INDICATOR (NO TEXT) ─── */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-lg">
        {heroSlides.map((slide, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={slide.id || idx}
              onClick={() => handleTabClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? "w-7 sm:w-9 h-2 sm:h-2.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>

      {/* ─── SLIDE DURATION PROGRESS BAR ─── */}
      <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-white/10 z-30 overflow-hidden pointer-events-none">
        <motion.div
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
        />
      </div>
    </section>
  );
}
