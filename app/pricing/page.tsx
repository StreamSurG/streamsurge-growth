import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Audit",
    price: "$29",
    color: "from-purple-600 to-fuchsia-600",
    description:
      "Professional stream audit with personalized growth recommendations.",
  },
  {
    name: "Basic",
    price: "$79",
    color: "from-green-500 to-emerald-600",
    description:
      "Everything in Audit plus optimization recommendations and channel review.",
  },
  {
    name: "Standard",
    price: "$149",
    color: "from-cyan-500 to-blue-600",
    description:
      "Advanced optimization, strategy, branding and engagement improvements.",
  },
  {
    name: "Premium",
    price: "$299",
    color: "from-yellow-500 to-orange-600",
    description:
      "Complete StreamSurge growth system with priority delivery and premium support.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-6xl font-black">
          Choose Your Package
        </h1>

        <p className="mt-6 text-center text-xl text-gray-400">
          Select the package that best fits your creator journey.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-4">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className="rounded-3xl border border-white/10 bg-[#101010] p-8 transition hover:scale-105"
            >

              <div
                className={`inline-block rounded-full bg-gradient-to-r ${pkg.color} px-4 py-2 text-sm font-bold`}
              >
                {pkg.name}
              </div>

              <h2 className="mt-8 text-5xl font-black">
                {pkg.price}
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                {pkg.description}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  Personalized Strategy
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  Creator Dashboard
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  Progress Tracking
                </div>

              </div>

              <Link
                href={`/payment?package=${encodeURIComponent(pkg.name)}`}
                className="mt-10 flex w-full items-center justify-center rounded-2xl bg-purple-600 py-4 font-bold transition hover:bg-purple-700"
              >
                Continue
              </Link>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}