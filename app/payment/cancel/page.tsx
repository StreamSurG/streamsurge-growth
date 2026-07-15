"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-xl rounded-3xl border border-red-500/20 bg-[#101010] p-10 text-center">

        <XCircle
          size={90}
          className="mx-auto text-red-400"
        />

        <h1 className="mt-8 text-4xl font-black">
          Payment Cancelled
        </h1>

        <p className="mt-6 leading-8 text-gray-300">
          No payment was taken.

          <br /><br />

          If this was a mistake, you can return to the pricing page
          and complete your purchase at any time.
        </p>

        <div className="mt-10 flex flex-col gap-4">

          <Link
            href="/pricing"
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold text-white hover:opacity-90"
          >
            Return To Pricing
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-white/10 py-4 hover:bg-white/5"
          >
            Back Home
          </Link>

        </div>

      </div>

    </main>
  );
}