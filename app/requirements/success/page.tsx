"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  const dashboardUrl =
    searchParams.get("dashboard") || "/";

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-xl rounded-3xl border border-green-500/20 bg-[#101010] p-10 text-center">

        <h1 className="text-5xl font-bold">
          ✅ Project Started
        </h1>

        <p className="mt-6 text-gray-400">
          Your project has been created successfully.
        </p>

        <Link
          href={dashboardUrl}
          className="mt-10 inline-block rounded-xl bg-purple-600 px-8 py-4 font-bold"
        >
          Go To Dashboard
        </Link>

      </div>
    </main>
  );
}