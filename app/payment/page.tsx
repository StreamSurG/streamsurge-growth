"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

function PaymentContent() {
  const searchParams = useSearchParams();

  const packageName =
    searchParams.get("package") || "Audit";

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-3xl border border-green-500/20 bg-[#101010] p-10 text-center">

        <CheckCircle2
          size={90}
          className="mx-auto text-green-400"
        />

        <h1 className="mt-8 text-4xl font-black">
          Payment Successful 🎉
        </h1>

        <p className="mt-6 leading-8 text-gray-300">
          Your payment has been received successfully.

          <br />
          <br />

          Click the button below to continue with your project requirements.
        </p>

        <Link
          href={`/requirements?package=${encodeURIComponent(
            packageName
          )}&paid=true`}
          className="mt-10 block rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold text-white hover:opacity-90"
        >
          Continue →
        </Link>

      </div>
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black flex items-center justify-center text-white">
          Loading...
        </main>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}