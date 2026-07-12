"use client";

import { CheckCircle2, Clock3, MessageCircle } from "lucide-react";

export default function RequirementSuccess() {
  return (
    <section className="mx-auto max-w-4xl rounded-3xl border border-green-500/20 bg-[#101010] p-10">

      <div className="flex justify-center">

        <CheckCircle2
          size={70}
          className="text-green-400"
        />

      </div>

      <h1 className="mt-6 text-center text-4xl font-black text-white">

        Project Started Successfully

      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-400">

        Thank you for choosing StreamSurge.

        We've received your project requirements and your stream audit has officially started.

      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <Clock3
            className="text-purple-400"
            size={30}
          />

          <h3 className="mt-4 text-xl font-bold text-white">

            Estimated Delivery

          </h3>

          <p className="mt-2 text-purple-300">

            ⚡ 4–6 Hours

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <MessageCircle
            className="text-blue-400"
            size={30}
          />

          <h3 className="mt-4 text-xl font-bold text-white">

            Need Assistance?

          </h3>

          <a
            href="https://discord.gg/sdaACjhWx"
            target="_blank"
            className="mt-3 inline-block text-blue-400 hover:underline"
          >
            Join our Discord Community
          </a>

        </div>

      </div>

    </section>
  );
}