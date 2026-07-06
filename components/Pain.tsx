"use client";

import { motion } from "framer-motion";
import {
  Eye,
  MessageCircle,
  Users,
  TrendingDown,
  Tv,
  Play,
} from "lucide-react";

const pains = [
  {
    icon: Eye,
    title: "0–5 Live Viewers",
    text: "You stream consistently but still average only a few viewers every broadcast.",
  },
  {
    icon: MessageCircle,
    title: "Silent Chat",
    text: "Your chat stays empty, making every stream feel lonely and difficult to enjoy.",
  },
  {
    icon: TrendingDown,
    title: "No Consistent Growth",
    text: "Followers come occasionally, but your streams never seem to gain momentum.",
  },
  {
    icon: Users,
    title: "No Returning Audience",
    text: "People stop by once but rarely return for your next stream.",
  },
  {
    icon: Tv,
    title: "Affiliate Feels Impossible",
    text: "Months of streaming and you're still chasing Twitch Affiliate or Kick growth.",
  },
  {
    icon: Play,
    title: "Content Isn't The Problem",
    text: "You know your content is good, but something is preventing it from reaching the right audience.",
  },
];

export default function Pain() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#070707] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed20,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-semibold">
            DOES THIS SOUND LIKE YOU?
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            You're Working Hard...
            <br />
            <span className="text-purple-500">
              But The Growth Never Comes.
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Thousands of Twitch, Kick and YouTube creators experience the same
            frustration every day. If any of these sound familiar, you're not
            alone.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {pains.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="h-14 w-14 rounded-2xl bg-purple-600/15 flex items-center justify-center mb-6">
                  <Icon
                    className="text-purple-400"
                    size={28}
                  />
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            You're Not The Problem.
          </h3>

          <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Most streamers assume they're failing because of bad content.
            In reality, many creators never identify the issues that prevent
            their streams from reaching the right audience and building lasting
            communities.
          </p>

        </motion.div>

      </div>
    </section>
  );
}