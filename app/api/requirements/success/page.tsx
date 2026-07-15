"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle,
  Clock,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  const dashboardUrl =
    searchParams.get("dashboard") || "/";

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-3xl rounded-3xl border border-green-500/20 bg-[#101010] p-10 text-center">

        <CheckCircle
          size={80}
          className="mx-auto text-green-400"
        />

        <h1 className="mt-8 text-5xl font-black text-white">
          Project Started Successfully
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Thank you for choosing StreamSurge.
          <br />
          Your project has been created successfully and is now in our
          production queue.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <Clock
              className="mx-auto text-purple-400"
            />

            <h3 className="mt-4 text-xl font-bold">
              Estimated Delivery
            </h3>

            <p className="mt-2 text-gray-400">
              4–6 Hours
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <MessageCircle
              className="mx-auto text-blue-400"
            />

            <h3 className="mt-4 text-xl font-bold">
              Need Help?
            </h3>

            <a
              href="https://discord.gg/sdaACjhWx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-400"
            >
              Join Discord
            </a>

          </div>

        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">

          <Link
            href={dashboardUrl}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-bold text-white"
          >
            <LayoutDashboard size={20} />
            Go To Dashboard
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 font-bold text-white hover:bg-white/5"
          >
            Return Home
          </Link>

        </div>

      </div>

    </main>
  );
}