"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function RequirementHeader() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0b0b0b] to-[#141414] p-8 lg:p-12">

      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="relative z-10"
      >

        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2">

          <CheckCircle2
            size={18}
            className="text-green-400"
          />

          <span className="text-green-300 font-semibold">

            Payment Successful

          </span>

        </div>

        <h1 className="mt-8 text-4xl lg:text-6xl font-black text-white leading-tight">

          Welcome To

          <span className="text-purple-500">

            {" "}StreamSurge

          </span>

        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-300">

          Thank you for choosing StreamSurge.

          Your project has already been created.

          Complete the onboarding form below so we can begin working on your stream immediately.

        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <CheckCircle2
              className="text-green-400"
              size={32}
            />

            <h3 className="mt-4 text-xl font-bold text-white">

              Project Status

            </h3>

            <p className="mt-2 text-green-400 font-semibold">

              🟢 Started Immediately

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <Clock3
              className="text-purple-400"
              size={32}
            />

            <h3 className="mt-4 text-xl font-bold text-white">

              Stream Audit

            </h3>

            <p className="mt-2 text-purple-300 font-semibold">

              ⚡ 4–6 Hours

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <ShieldCheck
              className="text-blue-400"
              size={32}
            />

            <h3 className="mt-4 text-xl font-bold text-white">

              Secure Order

            </h3>

            <p className="mt-2 text-blue-300 font-semibold">

              Payment Verified

            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}