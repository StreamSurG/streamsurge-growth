"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can StreamSurge guarantee Twitch Affiliate?",
    answer:
      "If you fully implement every recommendation and follow the complete growth strategy we provide, you put yourself in the strongest possible position to reach Twitch Affiliate. However, Affiliate approval ultimately depends on Twitch's official requirements and your consistency. Our goal is to help you build a stream that attracts real viewers, increases engagement, and gives you the best opportunity to achieve Affiliate and long-term growth.",
  },
  {
    question: "Do you use bots or fake viewers?",
    answer:
      "No. StreamSurge focuses on genuine audience growth, better engagement, and improving the overall streaming experience. We do not provide fake viewers, artificial engagement, or anything that violates Twitch, Kick, or YouTube policies.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "We currently work with Twitch, Kick, and YouTube creators, helping them improve discoverability, viewer retention, community engagement, and long-term growth.",
  },
  {
    question: "Why should I start with the Audit package?",
    answer:
      "The Audit package is the best starting point if you're unsure what's holding your stream back. We identify growth blockers, review your stream, and provide a personalized action plan before you invest in a larger package.",
  },
  {
    question: "How quickly will I receive my delivery?",
    answer:
      "Delivery depends on the package you choose. Most orders begin within 24–48 hours, and you'll receive updates throughout the process.",
  },
  {
    question: "How do I pay?",
    answer:
      "All payments are processed securely through Stripe. Simply choose your preferred package, click the checkout button, and complete your payment using Stripe's secure payment system.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-32 bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need To Know
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Answers to the questions creators ask before getting started.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >

                <span className="text-white text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`text-purple-400 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >

                    <p className="px-6 pb-6 text-gray-400 leading-8">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}