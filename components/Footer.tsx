"use client";

import { MessageCircle, ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040404]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-black text-white">
              STREAM<span className="text-purple-500">SURGE</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Helping Twitch, Kick, and YouTube creators build stronger
              communities, increase real engagement, improve viewer retention,
              and move closer to monetization through sustainable creator
              growth strategies.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white font-bold text-xl mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition"
              >
                About
              </a>

              <a
                href="#why"
                className="block text-gray-400 hover:text-white transition"
              >
                Why StreamSurge
              </a>

              <a
                href="#plans"
                className="block text-gray-400 hover:text-white transition"
              >
                Growth Plans
              </a>

              <a
                href="#reviews"
                className="block text-gray-400 hover:text-white transition"
              >
                Success Stories
              </a>

              <a
                href="#faq"
                className="block text-gray-400 hover:text-white transition"
              >
                FAQ
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white font-bold text-xl mb-6">
              Contact & Community
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              Have questions about your stream or want to discuss the best
              growth plan for your channel? Reach out directly or join our
              Discord community.
            </p>

            <div className="space-y-4">

              <a
                href="mailto:streamfixhub@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <Mail className="text-purple-400" size={20} />
                streamfixhub@gmail.com
              </a>

              <a
                href="https://discord.gg/sdaACjhWx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 text-white font-bold hover:scale-105 transition"
              >
                <MessageCircle size={20} />
                Join Our Discord Community
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} StreamSurge. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3 text-green-400">

            <ShieldCheck size={18} />

            <span className="text-sm">
              Secure Checkout Powered by Stripe
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}