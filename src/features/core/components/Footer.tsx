import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-bronze-950 text-bronze-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bronze-400 to-bronze-600 flex items-center justify-center text-white font-display font-bold text-lg">
                S
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Stop<span className="text-bronze-400">Shops</span>
              </span>
            </Link>
            <p className="text-bronze-300 max-w-md leading-relaxed">
              We specialize in exporting premium Indian bronze cookware and
              bartan to the international market. Trusted by buyers across 20+
              countries.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-bronze-900 flex items-center justify-center text-bronze-400">
                <Globe size={16} />
              </div>
              <span className="text-sm text-bronze-400">
                Shipping to 20+ countries worldwide
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "How We Export" },
                { href: "/contact", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bronze-400 hover:text-bronze-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-bronze-400 flex-shrink-0" />
                <span className="text-bronze-300">export@stopshops.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-bronze-400 flex-shrink-0" />
                <span className="text-bronze-300">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bronze-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bronze-500">
            &copy; {new Date().getFullYear()} StopShops. All rights reserved.
          </p>
          <p className="text-xs text-bronze-500">
            Made with pride in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};
