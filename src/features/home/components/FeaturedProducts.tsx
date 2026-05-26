"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "Heritage Bronze Kadai",
    category: "Cookware",
    tag: "Best Seller",
    tagColor: "from-amber-500 to-bronze-500",
    description: "Heavy-duty pure bronze cooking kadai, hand-beaten by traditional coppersmiths for uniform heating.",
    specs: "Weight: 2.4 kg | Hand-Hammered",
    image: "/bronze-kadai.png",
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "Artisanal Bronze Lota",
    category: "Wellness",
    tag: "Trending",
    tagColor: "from-blue-500 to-bronze-500",
    description: "Traditional wellness water vessel designed to naturally purify and alkaline drinking water overnight.",
    specs: "Capacity: 1.5 Litres | Pure Kansa",
    image: "/bronze-lota.png",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Royal Bronze Thali Set",
    category: "Serveware",
    tag: "Limited Edition",
    tagColor: "from-purple-500 to-bronze-500",
    description: "An exquisite multi-piece dining set fit for royalty, featuring intricate hand-etched rims on pure bronze plates.",
    specs: "7-Piece Set | Velvet Case Included",
    image: "/bronze-hero.png",
    rating: 5.0,
    reviews: 42
  },
  {
    id: 4,
    name: "Handcrafted Bronze Handi",
    category: "Cookware",
    tag: "Traditional",
    tagColor: "from-emerald-500 to-bronze-500",
    description: "Elegant deep-cooking pot with lid, perfect for slow-cooking biryanis and traditional curries while retaining nutrition.",
    specs: "Capacity: 3 Litres | Heavy Bottom",
    image: "/bronze-hero.png",
    rating: 4.7,
    reviews: 67
  },
  {
    id: 5,
    name: "Premium Bronze Urli Bowl",
    category: "Wellness",
    tag: "New Arrival",
    tagColor: "from-rose-500 to-bronze-500",
    description: "Decorative urli bowl used for wellness floating flowers or preparing traditional Ayurvedic oil baths.",
    specs: "Diameter: 12 inches | Solid Cast",
    image: "/bronze-kadai.png",
    rating: 4.9,
    reviews: 31
  },
  {
    id: 6,
    name: "Traditional Bronze Tumbler Set",
    category: "Serveware",
    tag: "Value Pack",
    tagColor: "from-cyan-500 to-bronze-500",
    description: "Set of premium bronze tumblers for serving lassi, water, or traditional drinks with natural cooling benefits.",
    specs: "Set of 4 | 350ml each",
    image: "/bronze-lota.png",
    rating: 4.6,
    reviews: 58
  },
  {
    id: 7,
    name: "Classic Bronze Patila",
    category: "Cookware",
    tag: "Everyday Use",
    tagColor: "from-orange-500 to-bronze-500",
    description: "Flat-bottomed classic bronze cooking vessel designed for boiling milk, preparing tea, and day-to-day culinary needs.",
    specs: "Weight: 1.8 kg | Pure Bronze",
    image: "/bronze-hero.png",
    rating: 4.8,
    reviews: 73
  }
];

export const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const dragThreshold = 8;
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isScrollingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (deltaX > dragThreshold || deltaY > dragThreshold) {
      isScrollingRef.current = true;
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isScrollingRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
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

  return (
    <section className="pt-10 md:pt-12 pb-3 md:pb-4 relative overflow-hidden section-glass-ambient ambient-bronze">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-xs font-semibold text-amber-700 dark:text-bronze-300 tracking-wider uppercase mb-4"
            >
              <ShoppingBag size={14} className="text-bronze-500" />
              Exquisite Craftsmanship
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-heading">
              Our <span className="gradient-text">Best Sellers</span>
            </h2>
          </div>

          {/* Navigation controls (Arrows) */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-bronze-500/20 bg-surface-card hover:bg-surface-hover text-heading shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-bronze-500/20 bg-surface-card hover:bg-surface-hover text-heading shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Product Container */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="flex overflow-x-auto gap-6 pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start snap-always shrink-0 w-[290px] sm:w-[330px] flex flex-col justify-between bg-surface-card border border-bronze-500/[0.14] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-bronze-500/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-amber-50 dark:bg-white/5">
                <div className={`absolute top-4 left-4 z-20 bg-gradient-to-r ${product.tagColor} text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg`}>
                  {product.tag}
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-w-330px) 100vw, 330px"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5 text-[11px]">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>
                    <span className="font-semibold text-heading">{product.rating}</span>
                    <span className="text-muted">({product.reviews})</span>
                  </div>

                  <h3 className="text-lg font-bold text-heading mb-2 leading-snug line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-body line-clamp-2 mb-4 leading-relaxed h-[36px]">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-bronze-400 font-semibold mb-5">
                    <ShieldCheck size={13} />
                    <span className="line-clamp-1">{product.specs}</span>
                  </div>

                  <Link
                    href="/contact"
                    onClickCapture={handleLinkClick}
                    className="group/btn inline-flex items-center justify-center gap-1.5 px-5 py-3 w-full rounded-full bg-gradient-to-r from-bronze-500 to-bronze-600 hover:from-bronze-400 hover:to-bronze-500 text-white font-semibold shadow-md shadow-bronze-500/10 hover:shadow-lg hover:shadow-bronze-500/25 transition-all duration-300 text-xs"
                  >
                    Inquire Price
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Hide Scrollbar Style Inject */}
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
