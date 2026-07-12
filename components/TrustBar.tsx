"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Clock3, Star, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    icon: Clock3,
    text: "⚡ Average Audit Delivery: 4–6 Hours",
  },
  {
    icon: Star,
    text: "⭐ Trusted by Streamers Worldwide",
  },
  {
    icon: ShieldCheck,
    text: "🔒 Secure Payments Powered by Stripe",
  },
  {
    icon: MessageCircle,
    text: "💬 Discord Support Available",
  },
];

export default function TrustBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const Item = items[index];
  const Icon = Item.icon;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-purple-700 to-fuchsia-600 py-2 shadow-lg">

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="flex items-center justify-center gap-3 text-center text-sm font-semibold text-white"
        >
          <Icon size={18} />

          <span>{Item.text}</span>

        </motion.div>

      </AnimatePresence>

    </div>
  );
}