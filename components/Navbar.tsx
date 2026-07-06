"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why" },
  { name: "Growth Plans", href: "#plans" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/70 border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="select-none">
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-white">STREAM</span>
              <span className="text-purple-500">SURGE</span>
            </h1>

            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              Creator Growth Systems
            </p>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#plans"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:scale-105 transition"
            >
              Analyze My Stream
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-28 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#plans"
                className="mt-8 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 text-center text-white font-bold"
              >
                Analyze My Stream
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}