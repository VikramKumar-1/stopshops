"use client";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Box, Plane, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Sourcing & Manufacturing",
    description: "We partner with skilled artisans and certified manufacturers across India's bronze heartlands. Every supplier is vetted for authenticity, ethical practices, and consistency.",
    details: ["Direct artisan partnerships", "Certified manufacturing facilities", "Traditional & modern techniques"],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Assurance",
    description: "Our multi-stage inspection process ensures every piece meets international food-grade safety standards, durability benchmarks, and finish quality.",
    details: ["Material composition testing", "Finish & polish inspection", "International safety compliance"],
  },
  {
    icon: Box,
    number: "03",
    title: "Custom Packaging",
    description: "Products are wrapped in premium, damage-proof packaging designed for long-distance international shipping with full customs documentation.",
    details: ["Multi-layer damage protection", "Custom branding options", "Complete customs documentation"],
  },
  {
    icon: Plane,
    number: "04",
    title: "International Delivery",
    description: "We work with top-tier logistics partners to ship your order via sea or air freight with real-time tracking from dispatch to your doorstep.",
    details: ["Sea & air freight options", "Real-time order tracking", "Customs clearance assistance"],
  },
];

export const ExportTimeline = () => {
  return (
    <section className="py-24 relative min-h-screen">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-bronze-500/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-bronze-400/5 rounded-full blur-[160px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm uppercase tracking-[0.2em] text-amber-600 dark:text-bronze-400 font-medium">
            Our Export Pipeline
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-6xl font-display font-bold text-heading">
            How We <span className="gradient-text">Do It</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-body max-w-xl mx-auto text-lg">
            A transparent, streamlined export process from artisan workshop to your international doorstep.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-bronze-500/30 via-bronze-500/10 to-transparent hidden sm:block" />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} className="relative flex gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl glass gradient-border flex items-center justify-center">
                    <step.icon size={28} className="text-bronze-500 dark:text-bronze-400" />
                  </div>
                </div>
                <div className="glass rounded-2xl p-8 gradient-border flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-bronze-600 dark:text-bronze-500 bg-bronze-500/10 px-2 py-1 rounded-md">Step {step.number}</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-heading mb-3">{step.title}</h3>
                  <p className="text-body leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-body">
                        <CheckCircle2 size={14} className="text-bronze-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
