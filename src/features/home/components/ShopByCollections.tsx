"use client";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    id: "tableware",
    name: "Tableware",
    itemsCount: "18 Products",
    image: "/collection-tableware.png",
    color: "from-amber-500/10 to-bronze-500/10"
  },
  {
    id: "pooja-item",
    name: "Pooja Item",
    itemsCount: "12 Products",
    image: "/collection-pooja.png",
    color: "from-orange-500/10 to-bronze-500/10"
  },
  {
    id: "drinkware",
    name: "Drinkware",
    itemsCount: "15 Products",
    image: "/bronze-lota.png",
    color: "from-blue-500/10 to-bronze-500/10"
  },
  {
    id: "gifting",
    name: "Gifting",
    itemsCount: "9 Products",
    image: "/collection-tableware.png",
    color: "from-purple-500/10 to-bronze-500/10"
  },
  {
    id: "kitchenware",
    name: "Kitchenware",
    itemsCount: "24 Products",
    image: "/bronze-kadai.png",
    color: "from-emerald-500/10 to-bronze-500/10"
  }
];

export const ShopByCollections = () => {
  return (
    <section 
      className="py-10 md:py-12 relative overflow-hidden bg-[#1F1607] dark:bg-surface border-y border-bronze-500/20 dark:border-bronze-500/10"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(217, 119, 6, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(217, 119, 6, 0.15) 0%, transparent 40%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20' stroke='%23cda876' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Ccircle cx='40' cy='40' r='10' fill='none' stroke='%23cda876' stroke-width='0.5' stroke-opacity='0.12'/%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%23cda876' stroke-width='0.5' stroke-opacity='0.08' stroke-dasharray='2,2'/%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='%23cda876' stroke-width='0.5' stroke-opacity='0.06'/%3E%3Cpath d='M40 10 Q45 20 40 30 Q35 20 40 10 M40 50 Q45 60 40 70 Q35 60 40 50 M10 40 Q20 45 30 40 Q20 35 10 40 M50 40 Q60 45 70 40 Q60 35 50 40' fill='none' stroke='%23cda876' stroke-width='0.5' stroke-opacity='0.12'/%3E%3C/svg%3E")
        `,
        backgroundSize: "100% 100%, 100% 100%, 80px 80px"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 dark:bg-transparent dark:border-none dark:glass-light text-xs font-semibold text-bronze-300 dark:text-bronze-300 tracking-wider uppercase mb-4"
          >
            <Layers size={14} className="text-bronze-300" />
            Curated Categories
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#FAF7F2] dark:text-heading mb-4">
            Shop by <span className="gradient-text">Collections</span>
          </h2>
          
          <p className="text-[#E5DDD3] dark:text-body text-lg">
            Select a collection to view our handcrafted range of heritage export-grade products.
          </p>
        </div>

        {/* Categories Grid (5 columns on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
            >
              <Link
                href={`/contact?collection=${col.id}`}
                className="group relative flex flex-col items-center p-6 bg-[#2D210B] dark:bg-surface-card border border-bronze-500/20 dark:border-bronze-500/[0.14] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-bronze-500/15 dark:hover:shadow-bronze-500/8 hover:-translate-y-1 transition-all duration-300 text-center h-full"
              >
                {/* Background colored glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${col.color} opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`} />

                {/* Circular Image Container */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-bronze-500/10 mb-6 bg-white/5 dark:bg-white/5 shadow-md">
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    sizes="112px"
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-1 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#FAF7F2] dark:text-heading group-hover:text-bronze-400 dark:group-hover:text-bronze-500 transition-colors">
                      {col.name}
                    </h3>
                    <p className="text-xs text-[#9E948A] dark:text-muted font-medium">
                      {col.itemsCount}
                    </p>
                  </div>
                  
                  <div className="pt-4 flex items-center justify-center gap-1 text-[11px] text-bronze-300 dark:text-bronze-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

