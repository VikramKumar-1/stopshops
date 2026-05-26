"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/bronze-hero.png",
    title: "Handcrafted Excellence",
    description: "Centuries-old Indian craftsmanship, exported globally.",
    tag: "Signature Collection"
  },
  {
    src: "/bronze-lota.png",
    title: "Traditional Lota",
    description: "Handcrafted pure bronze water vessel with warm golden reflections.",
    tag: "Premium Utensils"
  },
  {
    src: "/bronze-kadai.png",
    title: "Heritage Kadai",
    description: "Intricately detailed deep cooking pan built to last generations.",
    tag: "Traditional Cookware"
  }
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      handleNext();
    } else if (swipeDistance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Animation variants for premium slide transition (optimized for hardware acceleration on mobile)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", ease: "easeInOut", duration: 0.25 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "tween", ease: "easeInOut", duration: 0.25 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-bronze-500/[0.04] via-surface to-amber-500/[0.05]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-amber-500/[0.18] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-bronze-400/[0.15] rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bronze-600/[0.10] rounded-full blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(160,120,60,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(160,120,60,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-12 lg:pt-40 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-none">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-xs font-medium text-amber-700 dark:text-bronze-300 tracking-wider uppercase">
                <Sparkles size={14} className="text-bronze-500" />
                Premium Indian Bronze Export
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] text-heading">
              Finest Bronze
              <br />
              <span className="gradient-text">Bartan</span> to the
              <br />
              World
            </h1>

            <p className="text-lg text-body max-w-lg leading-relaxed">
              We source, quality-check, and export traditional Indian bronze
              cookware to international markets. Premium quality. Trusted
              globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-bronze-500 to-bronze-600 text-white font-semibold shadow-xl shadow-bronze-500/20 hover:shadow-bronze-500/40 hover:from-bronze-400 hover:to-bronze-500 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full glass text-heading font-semibold hover:bg-surface-hover transition-all duration-300"
              >
                See How We Export
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {["🇺🇸", "🇬🇧", "🇦🇪", "🇩🇪"].map((flag, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-bronze-300 to-bronze-500 border-2 border-surface flex items-center justify-center text-[10px]"
                  >
                    {flag}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                Trusted by buyers in{" "}
                <span className="text-amber-700 dark:text-bronze-400 font-semibold">20+ countries</span>
              </p>
            </div>
          </div>

          {/* Right — Bronze Product Showcase Slider */}
          <div className="relative w-full h-auto py-8 md:py-0 md:h-[550px] lg:h-[600px] flex items-center justify-center">
            {/* Main Interactive Slider */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-bronze-900/20 dark:shadow-black/30 bg-black/10"
            >
              {/* Preload only adjacent images dynamically to save bandwidth if admin adds many images */}
              <div className="hidden">
                {[
                  (current - 1 + slides.length) % slides.length,
                  (current + 1) % slides.length
                ].map((preloadIdx) => (
                  <Image
                    key={`preload-dynamic-${preloadIdx}`}
                    src={slides[preloadIdx].src}
                    alt="preload"
                    width={450}
                    height={562}
                    priority={true}
                  />
                ))}
              </div>

              {/* Hardware-accelerated sliding track */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].title}
                    fill
                    sizes="(max-w-[450px]) 100vw, 450px"
                    priority={true}
                    className="object-cover pointer-events-none"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Slide Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white pointer-events-none select-none z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-bronze-500/80 text-white mb-3 shadow-sm">
                      {slides[current].tag}
                    </span>
                    <h3 className="text-2xl font-display font-bold mb-1 shadow-sm">
                      {slides[current].title}
                    </h3>
                    <p className="text-sm text-white/90 shadow-sm">
                      {slides[current].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full flex items-center justify-center glass-light hover:bg-white/20 text-white transition-all active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full flex items-center justify-center glass-light hover:bg-white/20 text-white transition-all active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? "w-6 bg-bronze-400" : "w-2 bg-white/45"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge: Orders */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 sm:-left-4 lg:-left-8 top-1/4 glass rounded-2xl px-5 py-4 shadow-2xl z-20"
            >
              <p className="text-2xl font-display font-bold text-heading">500+</p>
              <p className="text-xs text-muted">Orders Shipped</p>
            </motion.div>

            {/* Floating badge: Quality */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-2 sm:-right-4 lg:-right-6 bottom-1/4 glass rounded-2xl px-5 py-4 shadow-2xl z-20"
            >
              <p className="text-2xl font-display font-bold gradient-text">100%</p>
              <p className="text-xs text-muted">Quality Assured</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
};

