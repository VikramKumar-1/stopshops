"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactForm = () => {
  return (
    <section className="py-24 relative min-h-screen">
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-bronze-500/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-bronze-400 font-medium">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-6xl font-display font-bold text-heading">
            B2B <span className="gradient-text">Inquiry</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-body max-w-xl mx-auto text-lg">
            Interested in bulk orders or international distribution? Send us your requirements and we will get back within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email Us", value: "export@stopshop.com" },
              { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
              { icon: MapPin, label: "Headquarters", value: "Moradabad, Uttar Pradesh, India" },
            ].map((item, index) => (
              <div key={index} className="glass rounded-2xl p-6 gradient-border flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-bronze-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-bronze-500 dark:text-bronze-400" />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-heading">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 sm:p-10 gradient-border">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-surface-card border border-border focus:border-bronze-500/50 focus:ring-1 focus:ring-bronze-500/20 outline-none text-heading placeholder-subtle text-sm transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-surface-card border border-border focus:border-bronze-500/50 focus:ring-1 focus:ring-bronze-500/20 outline-none text-heading placeholder-subtle text-sm transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted uppercase tracking-wider">Company Name</label>
                  <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-surface-card border border-border focus:border-bronze-500/50 focus:ring-1 focus:ring-bronze-500/20 outline-none text-heading placeholder-subtle text-sm transition-all" placeholder="Acme Exports Ltd." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-surface-card border border-border focus:border-bronze-500/50 focus:ring-1 focus:ring-bronze-500/20 outline-none text-heading placeholder-subtle text-sm transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted uppercase tracking-wider">Message / Inquiry Details</label>
                  <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl bg-surface-card border border-border focus:border-bronze-500/50 focus:ring-1 focus:ring-bronze-500/20 outline-none text-heading placeholder-subtle text-sm resize-none transition-all" placeholder="Tell us about the products you need, quantities, and destination country..." />
                </div>
                <button type="submit" className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-bronze-500 to-bronze-600 text-white font-semibold hover:from-bronze-400 hover:to-bronze-500 transition-all duration-300 shadow-lg shadow-bronze-500/20 hover:shadow-bronze-500/40">
                  Send Inquiry
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
