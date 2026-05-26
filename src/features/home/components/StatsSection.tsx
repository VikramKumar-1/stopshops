"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Countries Served" },
  { value: "500+", label: "Orders Delivered" },
  { value: "100%", label: "Quality Checked" },
  { value: "24h", label: "Quote Response" },
];

export const StatsSection = () => {
  return (
    <section className="py-10 md:py-12 section-glass-ambient ambient-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12 gradient-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <p className="text-4xl sm:text-5xl font-display font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-sm text-muted font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
