"use client";

import { motion } from "framer-motion";
import {
  Check,
  Star,
  ShieldCheck,
  Zap,
  Crown,
  Search,
} from "lucide-react";

const plans = [
  {
    name: "Audit",
    oldPrice: "$59",
    price: "$29",
    save: "SAVE 51%",
    icon: Search,
    badge: "START HERE",
    featured: false,
    link: "https://buy.stripe.com/6oUfZhg7f9cK5Yz8lVbAs06",
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
    link: "https://buy.stripe.com/bJe3cv2gp0Ge9aLeKjbAs03",
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
    name: "Advanced",
    oldPrice: "$349",
    price: "$249",
    save: "SAVE 29%",
    icon: Zap,
    badge: "MOST POPULAR",
    featured: true,
    link: "https://buy.stripe.com/eVq00jf3b3Sq72D6dNbAs04",
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
    link: "https://buy.stripe.com/3cI4gz1clcoWdr1gSrbAs05",
    description:
      "For creators ready to scale and monetize seriously.",
    features: [
      "Everything In Advanced",
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
  return (
    <section
      id="plans"
      className="relative py-32 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed20,transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="px-5 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-300 text-sm font-semibold">

            SIMPLE PRICING

          </span>

          <h2 className="mt-6 text-5xl font-black text-white">

            Choose Your Growth Plan

          </h2>

          <p className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto">

            Whether you're just getting started or ready to dominate Twitch,
            Kick or YouTube, there's a package built for your goals.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (

              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .08 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 ${
                  plan.featured
                    ? "border-purple-500 bg-gradient-to-b from-purple-600/20 to-black scale-105"
                    : "border-white/10 bg-white/5 hover:border-purple-500/40"
                }`}
              >

                {plan.featured && (

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 text-xs font-bold text-white">

                    ⭐ MOST POPULAR

                  </div>

                )}

                <div className="w-16 h-16 rounded-2xl bg-purple-600/15 flex items-center justify-center mb-6">

                  <Icon
                    className="text-purple-400"
                    size={30}
                  />

                </div>

                <span className="text-purple-300 text-sm font-bold">

                  {plan.badge}

                </span>

                <h3 className="mt-4 text-3xl font-black text-white">

                  {plan.name}

                </h3>

                <div className="mt-5">

                  <span className="text-gray-500 line-through text-lg">

                    {plan.oldPrice}

                  </span>

                  <div className="text-5xl font-black text-white mt-2">

                    {plan.price}

                  </div>

                  <span className="inline-block mt-4 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1 text-green-300 text-sm font-semibold">

                    {plan.save}

                  </span>

                </div>

                <p className="mt-6 text-gray-400 leading-7">

                  {plan.description}

                </p>

                <div className="mt-8 space-y-4"></div>                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >

                    <Check
                      size={18}
                      className="mt-1 text-green-400 flex-shrink-0"
                    />

                    <span className="text-gray-300 leading-6">
                      {feature}
                    </span>

                  </div>

                ))}

                <div className="mt-10">

                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-full py-4 text-center font-bold transition-all duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:scale-105"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >

                    Secure Checkout

                  </a>

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
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 p-10"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h3 className="text-3xl font-black text-white">

                Not Sure Which Package Fits You?

              </h3>

              <p className="mt-4 text-gray-300 text-lg max-w-2xl leading-8">

                Start with the <span className="font-bold text-purple-400">Audit Package</span>.
                We'll identify what's slowing your growth and recommend the
                best next step based on your current stream.

              </p>

            </div>

            <a
              href="https://buy.stripe.com/6oUfZhg7f9cK5Yz8lVbAs06"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-10 py-5 font-bold text-white hover:scale-105 transition-all"
            >

              Start With Audit →

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}