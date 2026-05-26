"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "StopShops delivered exactly what we needed — authentic Indian bronze bartan, beautifully packaged and on time. Exceptional quality.",
    name: "James Carter",
    role: "Wholesale Buyer, UK",
    flag: "🇬🇧",
  },
  {
    quote: "The quality control is outstanding. Every shipment arrives in perfect condition. They truly understand international export standards.",
    name: "Sarah Al-Rashid",
    role: "Hospitality Procurement, UAE",
    flag: "🇦🇪",
  },
  {
    quote: "Our customers in Germany love these products. StopShops makes the entire import process seamless and stress-free.",
    name: "Klaus Weber",
    role: "Retail Chain Manager, Germany",
    flag: "🇩🇪",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden section-glass-ambient ambient-indigo">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-bronze-500/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-600 dark:text-bronze-400 font-medium"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-heading"
          >
            Trusted <span className="gradient-text">Globally</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 gradient-border hover-lift flex flex-col justify-between"
            >
              <div className="space-y-6">
                <Quote size={28} className="text-bronze-500/30" />
                <p className="text-body leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bronze-400/20 to-bronze-600/20 flex items-center justify-center text-lg">
                  {t.flag}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
