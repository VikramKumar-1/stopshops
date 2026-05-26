"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  specs: string;
  image: string;
  rating: number;
  reviews: number;
}

interface CategoryProductGridProps {
  title: string;
  tagLine: string;
  products: Product[];
  viewAllLink: string;
  accentColor: string; // e.g. "bronze" | "rose" | "emerald"
}

export const CategoryProductGrid = ({
  title,
  tagLine,
  products,
  viewAllLink,
  accentColor
}: CategoryProductGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const renderTitle = (titleText: string) => {
    const words = titleText.split(" ");
    if (words.length > 1) {
      const firstWord = words[0];
      const rest = words.slice(1).join(" ");
      let accentTextClass = "";
      if (accentColor === "emerald" || accentColor === "bronze") {
        accentTextClass = "bg-gradient-to-r from-bronze-600 via-bronze-500 to-amber-600 bg-clip-text text-transparent dark:from-bronze-400 dark:via-bronze-300 dark:to-amber-400";
      } else if (accentColor === "rose") {
        accentTextClass = "bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent";
      } else {
        accentTextClass = "gradient-text";
      }

      return (
        <>
          <span className={accentTextClass}>{firstWord}</span>{" "}
          <span className={accentColor === "rose" ? "text-amber-100" : "text-heading"}>
            {rest}
          </span>
        </>
      );
    }
    return titleText;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const ambientClass = 
    accentColor === "emerald" 
      ? "ambient-emerald" 
      : accentColor === "rose" 
        ? "ambient-rose" 
        : "ambient-gold";

  return (
    <section className={`py-10 md:py-12 relative overflow-hidden ${
      accentColor === "rose" 
        ? "bg-premium-maroon" 
        : `section-glass-ambient ${ambientClass}`
    } border-b border-bronze-500/10`}>
      {/* Traditional Pooja Mandala Top Hanging Ornament Drawing */}
      {accentColor === "rose" && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[250px] pointer-events-none z-0 overflow-hidden select-none opacity-90">
          <svg 
            className="w-full h-full text-amber-500/80" 
            viewBox="0 0 400 200" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          >
            <defs>
              <radialGradient id="goldGlow" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#D97706" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#7D4B2C" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="maroonPetal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#800B1A" />
                <stop offset="100%" stopColor="#4A050E" />
              </linearGradient>
              <linearGradient id="goldOutline" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>

            {/* Gold Ambient Glow behind Mandala */}
            <circle cx="200" cy="0" r="180" fill="url(#goldGlow)" stroke="none" />

            {/* Concentric Decorative Rings */}
            <circle cx="200" cy="0" r="170" stroke="url(#goldOutline)" strokeOpacity="0.3" strokeDasharray="2,4" />
            <circle cx="200" cy="0" r="158" stroke="url(#goldOutline)" strokeOpacity="0.2" />
            <circle cx="200" cy="0" r="148" stroke="url(#goldOutline)" strokeOpacity="0.4" strokeDasharray="3,3" />

            {/* Outer Layer: Golden Flame-Like Petals (Radiating from 200,0) */}
            <g stroke="url(#goldOutline)" strokeWidth="1.2" strokeOpacity="0.85">
              <path d="M 200 0 L 180 135 C 190 160, 210 160, 220 135 Z" fill="none" />
              <path d="M 200 0 L 105 110 C 117 132, 137 122, 142 98 Z" fill="none" />
              <path d="M 200 0 L 295 110 C 283 132, 263 122, 258 98 Z" fill="none" />
              
              <path d="M 200 0 L 52 75 C 67 95, 85 82, 85 58 Z" fill="none" />
              <path d="M 200 0 L 348 75 C 333 95, 315 82, 315 58 Z" fill="none" />
              
              <path d="M 200 0 L 12 28 C 27 45, 45 28, 40 5 Z" fill="none" />
              <path d="M 200 0 L 388 28 C 373 45, 355 28, 360 5 Z" fill="none" />

              {/* Intermediate Outer Petals */}
              <path d="M 200 0 L 142 128 C 152 150, 168 142, 172 118 Z" fill="none" />
              <path d="M 200 0 L 258 128 C 248 150, 232 142, 228 118 Z" fill="none" />

              <path d="M 200 0 L 78 98 C 92 118, 108 108, 110 82 Z" fill="none" />
              <path d="M 200 0 L 322 98 C 308 118, 292 108, 290 82 Z" fill="none" />
            </g>

            {/* Middle Layer: Ornate Maroon Petals with Gold Borders */}
            <g stroke="url(#goldOutline)" strokeWidth="1" fill="url(#maroonPetal)">
              <path d="M 200 0 L 185 95 C 191 113, 209 113, 215 95 Z" />
              <path d="M 200 0 L 132 85 C 141 100, 155 93, 157 75 Z" />
              <path d="M 200 0 L 268 85 C 259 100, 245 93, 243 75 Z" />
              
              <path d="M 200 0 L 88 60 C 98 73, 111 63, 111 45 Z" />
              <path d="M 200 0 L 312 60 C 302 73, 289 63, 289 45 Z" />

              <path d="M 200 0 L 45 25 C 55 35, 68 25, 66 8 Z" />
              <path d="M 200 0 L 355 25 C 345 35, 332 25, 334 8 Z" />

              {/* Intermediate Maroon Petals */}
              <path d="M 200 0 L 160 92 C 168 108, 180 100, 183 82 Z" />
              <path d="M 200 0 L 240 92 C 232 108, 220 100, 217 82 Z" />

              <path d="M 200 0 L 110 75 C 119 88, 131 80, 133 62 Z" />
              <path d="M 200 0 L 290 75 C 281 88, 269 80, 267 62 Z" />
            </g>

            {/* Inner Ring Details */}
            <circle cx="200" cy="0" r="58" stroke="url(#goldOutline)" strokeWidth="1.2" />
            <circle cx="200" cy="0" r="50" stroke="url(#goldOutline)" strokeWidth="0.8" strokeDasharray="2,2" />

            {/* Central Radiating Gold Starburst lines */}
            <g stroke="#FBBF24" strokeWidth="1.5">
              <line x1="200" y1="0" x2="200" y2="42" />
              <line x1="200" y1="0" x2="158" y2="28" />
              <line x1="200" y1="0" x2="242" y2="28" />
              <line x1="200" y1="0" x2="175" y2="38" />
              <line x1="200" y1="0" x2="225" y2="38" />
              <line x1="200" y1="0" x2="135" y2="18" />
              <line x1="200" y1="0" x2="265" y2="18" />
              <line x1="200" y1="0" x2="115" y2="0" strokeWidth="2.5" />
              <line x1="200" y1="0" x2="285" y2="0" strokeWidth="2.5" />
            </g>

            {/* Center Core Cap */}
            <circle cx="200" cy="0" r="24" fill="#6B0914" stroke="url(#goldOutline)" strokeWidth="1.5" />
            <circle cx="200" cy="0" r="15" fill="#FBBF24" stroke="none" />
            <circle cx="200" cy="0" r="7" fill="#2D0A11" stroke="none" />
          </svg>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                accentColor === "rose" 
                  ? "bg-white/10 text-amber-200 border border-amber-500/20" 
                  : "glass-light text-amber-700 dark:text-bronze-300"
              } text-xs font-semibold tracking-wider uppercase mb-4`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                accentColor === "rose" ? "bg-amber-400" : accentColor === "emerald" ? "bg-emerald-500" : "bg-bronze-500"
              }`} />
              {tagLine}
            </motion.div>
            
            <h2 className={`text-4xl sm:text-5xl font-display font-bold ${
              accentColor === "rose" ? "text-amber-100" : "text-heading"
            }`}>
              {renderTitle(title)}
            </h2>
          </div>
        </div>

        {/* Static Responsive Grid (4 Columns on Desktop, creating a 4x2 layout for 8 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between bg-surface-card border border-bronze-500/[0.14] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-bronze-500/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-amber-50 dark:bg-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-2 text-[10px] sm:text-[11px]">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>
                    <span className="font-semibold text-heading">{product.rating}</span>
                    <span className="text-muted">({product.reviews})</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-heading mb-1.5 leading-snug line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-body line-clamp-2 mb-4 leading-relaxed h-[36px]">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-amber-700 dark:text-bronze-400 font-semibold mb-5">
                    <ShieldCheck size={12} />
                    <span className="line-clamp-1">{product.specs}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="group/btn inline-flex items-center justify-center gap-1.5 px-4 py-2.5 w-full rounded-full bg-gradient-to-r from-bronze-500 to-bronze-600 hover:from-bronze-400 hover:to-bronze-500 text-white font-semibold shadow-md shadow-bronze-500/10 hover:shadow-lg hover:shadow-bronze-500/25 transition-all duration-300 text-xs"
                  >
                    Inquire Price
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center View All Button */}
        <div className="mt-12 text-center">
          <Link
            href={viewAllLink}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full ${
              accentColor === "rose"
                ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border-amber-500/40"
                : "glass text-heading hover:bg-surface-hover border-bronze-500/20"
            } font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-md border`}
          >
            Show More {title}
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};
