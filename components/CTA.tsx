"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-32 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,#7c3aed30,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 p-14 text-center"
        >

          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-300">

            READY TO GROW?

          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black text-white leading-tight">

            Stop Guessing.

            <br />

            Start Growing.

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-300">

            Whether you're trying to reach Twitch Affiliate, grow your Kick
            community, or build a loyal YouTube Live audience, StreamSurge gives
            you the strategy and guidance to move forward with confidence.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a
              href="https://buy.stripe.com/6oUfZhg7f9cK5Yz8lVbAs06"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
            >
              Start With Stream Audit
            </a>

            <a
              href="#plans"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              Compare Packages
            </a>

          </div>

          <div className="mt-12 flex items-center justify-center gap-3">

            <ShieldCheck
              size={22}
              className="text-green-400"
            />

            <p className="text-gray-400">

              Secure payments powered by Stripe • No hidden fees

            </p>

          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-purple-300">

            <ArrowRight size={18} />

            <span className="font-semibold">

              Join creators building streams people come back to.

            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}