"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Users,
  MessageCircle,
  Trophy,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    icon: Activity,
    title: "Stream Quality",
    value: "98%",
    color: "text-green-400",
  },
  {
    icon: Users,
    title: "Community",
    value: "Growing",
    color: "text-purple-400",
  },
  {
    icon: MessageCircle,
    title: "Chat Activity",
    value: "Active",
    color: "text-blue-400",
  },
  {
    icon: Trophy,
    title: "Affiliate Goal",
    value: "82%",
    color: "text-yellow-400",
  },
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(139,92,246,0.15)]">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h3 className="text-white text-2xl font-bold">
              Stream Health
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Live Creator Performance
            </p>
          </div>

          <TrendingUp className="text-green-400" size={30} />

        </div>

        <div className="space-y-5">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                }}
                className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-5 py-4"
              >
                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">

                    <Icon className={item.color} size={22} />

                  </div>

                  <div>

                    <h4 className="text-white font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Optimized
                    </p>

                  </div>

                </div>

                <span className={`${item.color} font-bold text-lg`}>
                  {item.value}
                </span>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/20 p-5">

          <div className="flex items-center gap-3">

            <CheckCircle
              className="text-green-400"
              size={24}
            />

            <div>

              <h4 className="text-white font-semibold">
                Overall Status
              </h4>

              <p className="text-green-400 text-sm">
                Ready To Grow
              </p>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}