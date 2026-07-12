"use client";

import { useState } from "react";
import { Bot, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step =
  | "home"
  | "platform"
  | "viewers"
  | "goal"
  | "result";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("home");

  const [platform, setPlatform] = useState("");
  const [viewers, setViewers] = useState("");
  const [goal, setGoal] = useState("");

  function resetAI() {
    setStep("home");
    setPlatform("");
    setViewers("");
    setGoal("");
  }

  function recommendPackage() {
    if (goal === "Affiliate") {
      return {
        name: "Advanced Package",
        price: "$79",
        link:
          "https://buy.stripe.com/eVq00jf3b3Sq72D6dNbAs04",
        reason:
          "Perfect for creators aiming to reach Affiliate while improving engagement and retention.",
      };
    }

    if (viewers === "0-5") {
      return {
        name: "Audit Package",
        price: "$29",
        link:
          "https://buy.stripe.com/6oUfZhg7f9cK5Yz8lVbAs06",
        reason:
          "We'll identify exactly what's limiting your growth before you invest in a larger package.",
      };
    }

    return {
      name: "Premium Package",
      price: "$149",
      link:
        "https://buy.stripe.com/3cI4gz1clcoWdr1gSrbAs05",
      reason:
        "Our complete growth solution for creators ready to scale faster.",
    };
  }

  const recommendation = recommendPackage();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-[999] h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-2xl flex items-center justify-center"
      >
        <Bot className="text-white" />
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 left-6 z-[999] w-[390px] rounded-3xl border border-purple-500/20 bg-[#090909] shadow-2xl overflow-hidden"
          >            <div className="border-b border-white/10 p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-3">

                    <Sparkles
                      className="text-white"
                      size={20}
                    />

                  </div>

                  <div>

                    <h2 className="text-white text-xl font-bold">

                      Surge AI

                    </h2>

                    <p className="text-green-400 text-xs">

                      ● Online

                    </p>

                  </div>

                </div>

                <button
                  onClick={() => {
                    resetAI();
                    setOpen(false);
                  }}
                >

                  <X className="text-gray-400" />

                </button>

              </div>

            </div>

            <div className="p-6">

              {step === "home" && (

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    👋 Welcome!

                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">

                    I'm Surge AI.

                    Let me recommend the best package for your stream in less
                    than 30 seconds.

                  </p>

                  <button
                    onClick={() => setStep("platform")}
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold text-white"
                  >

                    🚀 Start AI Recommendation

                  </button>

                  <div className="mt-6 space-y-3">

                    <a
                      href="https://discord.gg/sdaACjhWx"
                      target="_blank"
                      className="block rounded-xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-white/10"
                    >

                      💬 Join Discord

                    </a>

                    <a
                      href="mailto:streamfixhub@gmail.com"
                      className="block rounded-xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-white/10"
                    >

                      📧 Email Support

                    </a>

                  </div>

                </div>

              )}              {step === "platform" && (

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    🎮 Which platform do you stream on?

                  </h3>

                  <p className="mt-2 text-gray-400">

                    Select your primary streaming platform.

                  </p>

                  <div className="mt-8 space-y-3">

                    <button
                      onClick={() => {
                        setPlatform("Twitch");
                        setStep("viewers");
                      }}
                      className="w-full rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-left font-semibold text-white transition hover:bg-purple-600/20"
                    >
                      💜 Twitch
                    </button>

                    <button
                      onClick={() => {
                        setPlatform("Kick");
                        setStep("viewers");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      🟢 Kick
                    </button>

                    <button
                      onClick={() => {
                        setPlatform("YouTube");
                        setStep("viewers");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      🔴 YouTube
                    </button>

                  </div>

                </div>

              )}

              {step === "viewers" && (

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    👀 Average Live Viewers?

                  </h3>

                  <p className="mt-2 text-gray-400">

                    This helps me recommend the best package.

                  </p>

                  <div className="mt-8 space-y-3">

                    <button
                      onClick={() => {
                        setViewers("0-5");
                        setStep("goal");
                      }}
                      className="w-full rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-left font-semibold text-white transition hover:bg-purple-600/20"
                    >
                      0 – 5 Viewers
                    </button>

                    <button
                      onClick={() => {
                        setViewers("5-20");
                        setStep("goal");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      5 – 20 Viewers
                    </button>

                    <button
                      onClick={() => {
                        setViewers("20+");
                        setStep("goal");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      20+ Viewers
                    </button>

                  </div>

                </div>

              )}              {step === "goal" && (

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    🎯 What's Your Main Goal?

                  </h3>

                  <p className="mt-2 text-gray-400">

                    Select your biggest priority.

                  </p>

                  <div className="mt-8 space-y-3">

                    <button
                      onClick={() => {
                        setGoal("Affiliate");
                        setStep("result");
                      }}
                      className="w-full rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-left font-semibold text-white transition hover:bg-purple-600/20"
                    >
                      ⭐ Reach Twitch Affiliate
                    </button>

                    <button
                      onClick={() => {
                        setGoal("More Viewers");
                        setStep("result");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      🚀 Increase Live Viewers
                    </button>

                    <button
                      onClick={() => {
                        setGoal("Community");
                        setStep("result");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      👥 Build A Strong Community
                    </button>

                    <button
                      onClick={() => {
                        setGoal("Monetization");
                        setStep("result");
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-semibold text-white transition hover:bg-white/10"
                    >
                      💰 Monetize My Channel
                    </button>

                  </div>

                </div>

              )}

              {step === "result" && (

                <div>

                  <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10 p-6">

                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">

                      AI RECOMMENDATION

                    </span>

                    <h3 className="mt-5 text-3xl font-black text-white">

                      {recommendation.name}

                    </h3>

                    <p className="mt-3 text-gray-300 leading-7">

                      {recommendation.reason}

                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">

                      <p className="text-sm text-gray-400">

                        Platform

                      </p>

                      <p className="mt-1 font-semibold text-white">

                        {platform}

                      </p>

                      <p className="mt-4 text-sm text-gray-400">

                        Average Viewers

                      </p>

                      <p className="mt-1 font-semibold text-white">

                        {viewers}

                      </p>

                      <p className="mt-4 text-sm text-gray-400">

                        Main Goal

                      </p>

                      <p className="mt-1 font-semibold text-white">

                        {goal}

                      </p>

                    </div>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-4xl font-black text-purple-400">

                        {recommendation.price}

                      </span>

                      <a
                        href={recommendation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 font-bold text-white transition hover:scale-105"
                      >
                        🚀 Start Project
                      </a>

                    </div>

                  </div>

                  <button
                    onClick={resetAI}
                    className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Start Over
                  </button>

                </div>

              )}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}