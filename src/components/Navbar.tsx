"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-copper-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-copper-900 tracking-tighter">
              Stop<span className="text-copper-500">Shops</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-copper-600 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-copper-600 transition-colors">How We Do It</Link>
            <Link href="/contact" className="text-gray-700 hover:text-copper-600 transition-colors">B2B Inquiry</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
