"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Audience Alignment",
    text: "We help position your stream so it reaches viewers who are genuinely interested in your content instead of random traffic.",
  },
  {
    icon: TrendingUp,
    title: "Steady Organic Growth",
    text: "Our strategy focuses on sustainable growth, stronger retention, and viewers who keep coming back.",
  },
  {
    icon: Users,
    title: "Community Building",
    text: "Transform silent viewers into an active community that chats, follows, subscribes, and supports every stream.",
  },
  {
    icon: ShieldCheck,
    title: "Platform Best Practices",
    text: "Everything we recommend follows Twitch, Kick, and YouTube best practices to help you build long-term growth.",
  },
  {
    icon: Zap,
    title: "Stream Optimization",
    text: "We review the complete streaming experience to remove bottlenecks that reduce discoverability and viewer retention.",
  },
  {
    icon: CheckCircle2,
    title: "Growth Roadmap",
    text: "Receive a clear action plan with practical steps to improve engagement, consistency, and monetization potential.",
  },
];

export default function Solutions() {
  return (
    <section
      id="why"
      className="relative py-32 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#7c3aed25,transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-semibold">
            WHY STREAMSURGE?
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            We Don't Promise Overnight Success.
            <br />
            <span className="text-purple-500">
              We Build Sustainable Creator Growth.
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            StreamSurge is built for creators who want more than temporary
            spikes. Our focus is helping you attract the right audience,
            increase engagement, build a loyal community, and move toward
            monetization with confidence.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {solutions.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-purple-600/15 flex items-center justify-center mb-6">

                  <Icon
                    className="text-purple-400"
                    size={28}
                  />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}