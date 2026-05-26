"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Truck, Award, Headphones, Package } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Every piece is inspected to meet international quality and safety standards before shipping.",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "We deliver to 20+ countries with reliable logistics partners and real-time tracking.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Premium, damage-proof packaging tailored for international transit and a great unboxing.",
  },
  {
    icon: Award,
    title: "Authentic Craftsmanship",
    description: "Sourced directly from skilled Indian artisans preserving centuries-old bronze traditions.",
  },
  {
    icon: Truck,
    title: "Bulk & Wholesale",
    description: "Flexible order sizes for retailers, wholesalers, and hospitality businesses worldwide.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "End-to-end assistance from order placement to customs clearance and final delivery.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-12 section-glass-ambient ambient-bronze">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-bronze-500/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-600 dark:text-bronze-400 font-medium"
          >
            Why StopShops
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-heading"
          >
            Built for Global <span className="gradient-text">Export Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body max-w-xl mx-auto"
          >
            From sourcing authentic bronze bartan to doorstep delivery across continents — we handle every step with precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group glass rounded-2xl p-8 hover-lift cursor-default gradient-border"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bronze-500/[0.12] to-bronze-600/[0.06] ring-1 ring-bronze-500/10 flex items-center justify-center mb-6 group-hover:from-bronze-500/20 group-hover:to-bronze-600/10 transition-all">
                <feature.icon size={24} className="text-bronze-500 dark:text-bronze-400 group-hover:text-bronze-400 dark:group-hover:text-bronze-300 transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold text-heading mb-3">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
