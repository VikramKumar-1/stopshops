"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  GlassWater,
  Bell,
  Boxes,
  Coffee,
  UtensilsCrossed,
  Grid,
  Soup,
} from "lucide-react";

const categories = [
  {
    id: "copper",
    name: "Copper",
    icon: GlassWater,
    href: "/contact?collection=copper",
    bgColor: "bg-orange-50/70 dark:bg-orange-950/20",
    borderColor: "border-orange-100 dark:border-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    shadowColor: "group-hover:shadow-orange-200/40 dark:group-hover:shadow-orange-950/40",
  },
  {
    id: "brass",
    name: "Brass",
    icon: Bell,
    href: "/contact?collection=brass",
    bgColor: "bg-amber-50/70 dark:bg-amber-950/20",
    borderColor: "border-amber-100 dark:border-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    shadowColor: "group-hover:shadow-amber-200/40 dark:group-hover:shadow-amber-950/40",
  },
  {
    id: "steel",
    name: "Steel",
    icon: Boxes,
    href: "/contact?collection=steel",
    bgColor: "bg-slate-50/70 dark:bg-slate-900/20",
    borderColor: "border-slate-100 dark:border-slate-800/30",
    iconColor: "text-slate-600 dark:text-slate-400",
    shadowColor: "group-hover:shadow-slate-200/40 dark:group-hover:shadow-slate-950/40",
  },
  {
    id: "ceramic",
    name: "Ceramic",
    icon: Coffee,
    href: "/contact?collection=ceramic",
    bgColor: "bg-stone-50/70 dark:bg-stone-900/20",
    borderColor: "border-stone-100 dark:border-stone-850/30",
    iconColor: "text-stone-600 dark:text-stone-400",
    shadowColor: "group-hover:shadow-stone-200/40 dark:group-hover:shadow-stone-950/40",
  },
  {
    id: "kitchen-utility",
    name: "Kitchen Utility",
    icon: UtensilsCrossed,
    href: "/contact?collection=kitchen-utility",
    bgColor: "bg-emerald-50/70 dark:bg-emerald-950/20",
    borderColor: "border-emerald-100 dark:border-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    shadowColor: "group-hover:shadow-emerald-200/40 dark:group-hover:shadow-emerald-950/40",
  },
  {
    id: "kitchen-racks",
    name: "Kitchen Racks",
    icon: Grid,
    href: "/contact?collection=kitchen-racks",
    bgColor: "bg-purple-50/70 dark:bg-purple-950/20",
    borderColor: "border-purple-100 dark:border-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    shadowColor: "group-hover:shadow-purple-200/40 dark:group-hover:shadow-purple-950/40",
  },
  {
    id: "dinner-sets",
    name: "Dinner Sets",
    icon: Soup,
    href: "/contact?collection=dinner-sets",
    bgColor: "bg-rose-50/70 dark:bg-rose-950/20",
    borderColor: "border-rose-100 dark:border-rose-900/30",
    iconColor: "text-rose-600 dark:text-rose-400",
    shadowColor: "group-hover:shadow-rose-200/40 dark:group-hover:shadow-rose-950/40",
  },
];

export const CategoryStrip = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1024) return;
      const currentScrollY = window.scrollY;
      
      // Stick CategoryStrip to top-[36px] only when scrolled down (scrolled >= 20px)
      const isScrolledPast = currentScrollY >= 20;
      setScrollingDown(isScrolledPast);
    };

    // Initialize state on mount
    if (window.innerWidth > 1024) {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className={`z-40 w-full border-t border-b border-orange-500/30 dark:border-orange-500/40 bg-[var(--surface)] supports-[backdrop-filter]:bg-[var(--glass-bg)] supports-[backdrop-filter]:backdrop-blur-md shadow-sm lg:transition-[top] lg:duration-300 lg:mt-[132px] ${scrollingDown ? "lg:sticky lg:top-[36px]" : "fixed top-[88px] md:top-[132px] lg:sticky lg:top-[132px]"}`}>
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        
        {/* Left Scroll Fade Indicator (only visible on mobile overflow) */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--surface)] to-transparent pointer-events-none z-10 md:hidden" />
        
        {/* Right Scroll Fade Indicator (only visible on mobile overflow) */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--surface)] to-transparent pointer-events-none z-10 md:hidden" />

        <div className="flex items-center justify-between py-1.5 sm:py-2 w-full gap-1 transition-all duration-300">
          {/* Left: Logo (scrollingDown only) */}
          <div className={`flex items-center justify-start shrink-0 transition-all duration-300 ${scrollingDown ? "min-w-[140px] sm:min-w-[160px] border-r border-orange-500/30 dark:border-orange-500/40 pr-3 mr-1.5 sm:pr-4 sm:mr-2" : "w-0 overflow-hidden"}`}>
            {scrollingDown && (
              <Link href="/" className="flex items-center gap-2 transition-all duration-300">
                <img 
                  src="/logo.jpeg" 
                  alt="StopShop Logo" 
                  className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl object-cover border border-border shadow-sm animate-in fade-in scale-in duration-300"
                />
                <span className="text-xs sm:text-lg font-display font-bold tracking-tight text-heading hidden sm:inline">
                  Stop<span className="gradient-text">Shop</span>
                </span>
              </Link>
            )}
          </div>

          {/* Center: Category Scroll Container */}
          <div className={`flex overflow-x-auto scrollbar-none items-center gap-3 sm:gap-6 flex-grow transition-all duration-300 ${scrollingDown ? "justify-start md:justify-center" : "justify-start md:justify-evenly"}`}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group flex flex-col items-center gap-1.5 shrink-0 transition-all duration-300 w-[64px] sm:w-[92px] text-center"
                >
                  {/* Comfortable rounded tile on mobile */}
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 shadow-sm group-hover:shadow-md ${cat.bgColor} ${cat.borderColor} ${cat.shadowColor}`}>
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className={`${cat.iconColor} sm:hidden transition-transform duration-300 group-hover:scale-110`}
                    />
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className={`hidden sm:block ${cat.iconColor} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Clean readable labels */}
                  <span className="text-[9px] sm:text-[10px] font-semibold text-muted group-hover:text-heading whitespace-nowrap transition-colors duration-300 tracking-wide block w-full truncate">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right: ThemeToggle & Contact Us (scrollingDown only) */}
          <div className={`flex items-center justify-end gap-1.5 sm:gap-3 shrink-0 transition-all duration-300 ${scrollingDown ? "min-w-[140px] sm:min-w-[160px] border-l border-orange-500/30 dark:border-orange-500/40 pl-3 ml-1.5 sm:pl-4 sm:ml-2" : "w-0 overflow-hidden"}`}>
            {scrollingDown && (
              <>
                <ThemeToggle />
                <Link 
                  href="/contact" 
                  className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] sm:text-sm font-semibold hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
