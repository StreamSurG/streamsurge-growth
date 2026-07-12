"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  {
    name: "Alex",
    action: "started a Stream Audit",
    flag: "🇺🇸",
    time: "Just now",
  },
  {
    name: "James",
    action: "joined the Discord",
    flag: "🇨🇦",
    time: "2 min ago",
  },
  {
    name: "Oliver",
    action: "purchased the Advanced Package",
    flag: "🇬🇧",
    time: "5 min ago",
  },
  {
    name: "Ryan",
    action: "started a Premium Project",
    flag: "🇦🇺",
    time: "8 min ago",
  },
  {
    name: "Noah",
    action: "completed onboarding",
    flag: "🇩🇪",
    time: "12 min ago",
  },
];

export default function LiveActivity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const activity = activities[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 z-40 w-80 rounded-2xl border border-green-500/20 bg-[#101010]/95 p-4 shadow-2xl backdrop-blur"
      >
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-lg">
            {activity.flag}
          </div>

          <div>

            <p className="text-sm text-white">
              <span className="font-semibold">{activity.name}</span>{" "}
              {activity.action}
            </p>

            <p className="mt-1 text-xs text-green-400">
              {activity.time}
            </p>

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}