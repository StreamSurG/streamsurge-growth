"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <div className="relative w-[340px] rounded-3xl border border-purple-500/30 bg-[#090909]/95 backdrop-blur-2xl shadow-2xl">

        <button
          onClick={() => setClosed(true)}
          className="absolute right-4 top-4 text-gray-500 hover:text-white transition"
        >
          <X size={18} />
        </button>

        <div className="p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600">

              <Sparkles className="text-white" size={22} />

            </div>

            <div>

              <h3 className="font-bold text-white text-lg">
                Ready To Grow?
              </h3>

              <p className="text-sm text-gray-400">
                Your project starts immediately.
              </p>

            </div>

          </div>

          <p className="mt-5 text-gray-300 leading-7">
            Start with a professional Stream Audit and discover what's holding
            your stream back before investing in a larger package.
          </p>

          <a
            href="https://buy.stripe.com/6oUfZhg7f9cK5Yz8lVbAs06"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 font-bold text-white transition hover:scale-105"
          >
            Start My Project
            <ArrowRight size={18} />
          </a>

          <p className="mt-4 text-center text-xs text-gray-500">
            🔒 Secure payment powered by Stripe
          </p>

        </div>

      </div>
    </motion.div>
  );
}