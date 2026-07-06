"use client";

import { motion } from "framer-motion";
import Dashboard from "./Dashboard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-32 pb-24">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[160px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-300 font-semibold mb-8">

            Trusted By Twitch • Kick • YouTube Creators

          </span>

          <h1 className="text-white font-black leading-[0.92] text-5xl lg:text-7xl">

            You're Streaming...

            <br />

            <span className="text-purple-500">

              But You're Still Stuck.

            </span>

          </h1>

          <p className="mt-8 text-gray-400 text-xl leading-relaxed max-w-xl">

            If you're averaging 0–5 viewers, struggling to reach Affiliate,
            or wondering why your streams aren't growing, we'll help you
            improve your stream, attract the right audience, build an active
            community, and move closer to monetization.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#plans"
              className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 text-white font-bold hover:scale-105 transition-all"
            >
              Analyze My Stream
            </a>

            <a
              href="#reviews"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Success Stories
            </a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>

              <h3 className="text-4xl font-black text-white">

                120+

              </h3>

              <p className="text-gray-500 mt-2">

                Streamers Helped

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-white">

                3

              </h3>

              <p className="text-gray-500 mt-2">

                Platforms

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-white">

                24/7

              </h3>

              <p className="text-gray-500 mt-2">

                Support

              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <Dashboard />

      </div>

    </section>
  );
}