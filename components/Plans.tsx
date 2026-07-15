"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Zap,
  Crown,
  Search,
} from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Audit",
    oldPrice: "$59",
    price: "$24",
    save: "SAVE 59%",
    icon: Search,
    badge: "START HERE",
    featured: false,
    description:
      "Perfect if you're unsure what's holding your stream back.",
    features: [
      "Complete Stream Audit",
      "Growth Opportunity Report",
      "Pipeline Health Check",
      "OBS & Stream Review",
      "Audience Analysis",
      "Action Plan PDF",
      "48 Hour Delivery",
    ],
  },

  {
    name: "Basic",
    oldPrice: "$149",
    price: "$99",
    save: "SAVE 34%",
    icon: ShieldCheck,
    badge: "CREATOR",
    featured: false,
    description:
      "Perfect for streamers starting their growth journey.",
    features: [
      "Everything In Audit",
      "Basic Stream Alignment",
      "OBS Optimization",
      "Channel Review",
      "Growth Checklist",
      "Email Support",
      "Affiliate Preparation",
    ],
  },

  {
    name: "Standard",
    oldPrice: "$349",
    price: "$249",
    save: "SAVE 29%",
    icon: Zap,
    badge: "MOST POPULAR",
    featured: true,
    description:
      "Designed for creators serious about reaching Affiliate.",
    features: [
      "Everything In Basic",
      "20-50 Active Viewer Strategy",
      "Community Growth Plan",
      "Audience Retention",
      "Backend Alignment",
      "Affiliate Roadmap",
      "Priority Support",
    ],
  },

  {
    name: "Premium",
    oldPrice: "$699",
    price: "$499",
    save: "SAVE 29%",
    icon: Crown,
    badge: "BEST VALUE",
    featured: false,
    description:
      "For creators ready to scale and monetize seriously.",
    features: [
      "Everything In Standard",
      "Premium Growth Strategy",
      "Monetization Roadmap",
      "Community Scaling",
      "Priority Queue",
      "Direct Consultation",
      "VIP Support",
    ],
  },
];

export default function Plans() {

  const [loadingPackage, setLoadingPackage] =
    useState<string | null>(null);

  async function startCheckout(packageName: string) {

    try {

      setLoadingPackage(packageName);

      const response = await fetch(
        "/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            packageName,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {

        alert(data.message || "Unable to start checkout.");

        setLoadingPackage(null);

        return;

      }

      window.location.href = data.url;

    } catch (error) {

      console.error(error);

      alert("Unable to connect to Stripe.");

      setLoadingPackage(null);

    }

  }

  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed20,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="rounded-full border border-purple-600/20 bg-purple-600/10 px-5 py-2 text-sm font-semibold text-purple-300">
            SIMPLE PRICING
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Choose Your Growth Plan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
            Whether you're just getting started or ready to dominate Twitch,
            Kick or YouTube, there's a package built specifically for your goals.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (

              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-3 ${
                  plan.featured
                    ? "scale-105 border-purple-500 bg-gradient-to-b from-purple-600/20 to-black"
                    : "border-white/10 bg-white/5 hover:border-purple-500/40"
                }`}
              >                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 text-xs font-bold text-white">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600/15">
                  <Icon
                    size={30}
                    className="text-purple-400"
                  />
                </div>

                <span className="text-sm font-bold text-purple-300">
                  {plan.badge}
                </span>

                <h3 className="mt-4 text-3xl font-black text-white">
                  {plan.name}
                </h3>

                <div className="mt-5">

                  <span className="text-lg text-gray-500 line-through">
                    {plan.oldPrice}
                  </span>

                  <div className="mt-2 text-5xl font-black text-white">
                    {plan.price}
                  </div>

                  <span className="mt-4 inline-block rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-sm font-semibold text-green-300">
                    {plan.save}
                  </span>

                </div>

                <p className="mt-6 leading-7 text-gray-400">
                  {plan.description}
                </p>

                <div className="mt-8 space-y-4">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <Check
                        size={18}
                        className="mt-1 flex-shrink-0 text-green-400"
                      />

                      <span className="leading-6 text-gray-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="mt-10">

                  <button
                    type="button"
                    onClick={() =>
                      startCheckout(plan.name)
                    }
                    disabled={
                      loadingPackage === plan.name
                    }
                    className={`block w-full rounded-full py-4 text-center font-bold transition-all duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:scale-105"
                        : "bg-white text-black hover:bg-gray-200"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >

                    {loadingPackage === plan.name
                      ? "Redirecting..."
                      : "Secure Checkout →"}

                  </button>

                </div>

                <div className="mt-6 text-center">

                  <p className="text-xs text-gray-500">

                    🔒 Secure payment powered by Stripe

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 p-10"
        >          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h3 className="text-3xl font-black text-white">
                Not Sure Which Package Fits You?
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                Start with the{" "}
                <span className="font-bold text-purple-400">
                  Audit Package
                </span>.
                We'll identify what's slowing your growth and recommend the
                best next step based on your current stream.
              </p>

            </div>

            <button
              type="button"
              onClick={() => startCheckout("Audit")}
              disabled={loadingPackage === "Audit"}
              className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-10 py-5 font-bold text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingPackage === "Audit"
                ? "Redirecting..."
                : "Start With Audit →"}
            </button>

          </div>

        </motion.div>

      </div>

    </section>

  );

}