"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, X } from "lucide-react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[95vw] rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-2xl">

      <button
        onClick={() => setOpen(false)}
        className="absolute right-5 top-5 text-gray-400 hover:text-white"
      >
        <X size={22} />
      </button>

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
          <Sparkles className="text-white" size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-black text-white">
            Ready To Grow?
          </h2>

          <p className="text-gray-400">
            Your project starts immediately.
          </p>
        </div>

      </div>

      <p className="mt-8 text-lg leading-9 text-gray-300">
        Start with a professional Stream Audit and discover what's
        holding your stream back before investing in a larger package.
      </p>

      <a
        href="https://buy.stripe.com/test_bJeaEXbQZ88Gdr16dNbAs00"
        target="_self"
        rel="noopener noreferrer"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105"
      >
        Start My Project
        <ArrowRight size={20} />
      </a>

      <p className="mt-5 text-center text-sm text-gray-500">
        🔒 Secure payment powered by Stripe
      </p>

    </div>
  );
}