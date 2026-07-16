"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();

  const packageName =
    searchParams.get("package") || "Audit";

  const sessionId =
    searchParams.get("session_id") || "";

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 text-white">

      <div className="w-full max-w-xl rounded-3xl border border-green-500/20 bg-[#101010] p-10 text-center">

        <CheckCircle2
          size={90}
          className="mx-auto text-green-400"
        />

        <h1 className="mt-8 text-4xl font-black">
          Payment Successful 🎉
        </h1>

        <p className="mt-6 leading-8 text-gray-300">
          Thank you!

          <br /><br />

          Your payment for the

          <span className="font-bold text-purple-400">
            {" "}{packageName}{" "}
          </span>

          package has been received successfully.
        </p>

        <p className="mt-6 text-gray-400">
          Continue to submit your project requirements.
        </p>

        <Link
          href={`/requirements?package=${encodeURIComponent(
            packageName
          )}&session_id=${encodeURIComponent(sessionId)}`}
          className="mt-10 block rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold text-white hover:opacity-90"
        >
          Continue →
        </Link>

      </div>

    </main>
  );
}