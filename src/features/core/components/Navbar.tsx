"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "How We Export" },
  { href: "/contact", label: "Get a Quote" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const marqueeItems = [
    "CASH ON DELIVERY AVAILABLE",
    "FREE SHIPPING ON BULK ORDERS",
    "SHIPPING WORLDWIDE"
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Traditional Indian Pattern Announcement Bar */}
      <div 
        className="relative h-9 w-full bg-gradient-to-r from-bronze-950 via-bronze-900 to-bronze-950 border-b border-bronze-800/40 flex items-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26, 15, 8, 0.96), rgba(26, 15, 8, 0.96)), 
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='20' viewBox='0 0 60 20'%3E%3Cpath d='M0 10 C 15 0, 15 20, 30 10 C 45 0, 45 20, 60 10 L 60 20 L 0 20 Z' fill='%23cda876' fill-opacity='0.1'/%3E%3C/svg%3E")
          `,
          backgroundSize: "auto, 60px 20px"
        }}
      >
        {/* Repeating text container for infinite marquee effect */}
        <div className="flex whitespace-nowrap w-full">
          <div className="flex animate-marquee text-[9px] sm:text-[10px] font-medium tracking-[0.25em] text-bronze-200/90 uppercase items-center gap-16">
            {[1, 2, 3, 4].map((groupIndex) => (
              <div key={groupIndex} className="flex gap-16 items-center shrink-0 pr-16">
                {marqueeItems.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-16">
                    <span className="text-bronze-500">✦</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CSS animation inline overlay to guarantee smooth motion across all pages */}
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* Main Navbar — solid bg to avoid Chrome Android backdrop-filter glitch */}
      <nav
        className="w-full border-b border-border bg-[var(--surface)] supports-[backdrop-filter]:bg-[var(--glass-bg)] supports-[backdrop-filter]:backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bronze-400 to-bronze-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-bronze-500/20 group-hover:shadow-bronze-500/40 transition-shadow">
                S
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-heading">
                Stop<span className="gradient-text">Shops</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-heading transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="/contact"
                className="ml-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-bronze-500 to-bronze-600 text-white text-sm font-semibold hover:from-bronze-400 hover:to-bronze-500 transition-all duration-300 shadow-lg shadow-bronze-500/20 hover:shadow-bronze-500/40"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-muted hover:text-heading"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-[var(--surface)]"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-body hover:text-heading hover:bg-surface-hover transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-bronze-500 to-bronze-600 text-white font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
