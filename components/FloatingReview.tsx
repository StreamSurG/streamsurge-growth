"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Alex",
    country: "🇺🇸 USA",
    text: "Audit was delivered in under 5 hours. Highly recommended.",
  },
  {
    name: "Mason",
    country: "🇨🇦 Canada",
    text: "My Twitch engagement improved within a few streams.",
  },
  {
    name: "Oliver",
    country: "🇬🇧 UK",
    text: "Professional service and excellent communication.",
  },
  {
    name: "Ryan",
    country: "🇦🇺 Australia",
    text: "Worth every dollar. I'll definitely order again.",
  },
];

export default function FloatingReview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const review = reviews[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="fixed top-24 left-6 z-50 w-80 rounded-2xl border border-white/10 bg-[#101010]/95 p-4 shadow-2xl backdrop-blur"
      >
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        <p className="mt-3 text-sm leading-6 text-white">
          "{review.text}"
        </p>

        <p className="mt-3 text-xs text-gray-400">
          {review.name} • {review.country}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}