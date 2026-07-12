"use client";

import {
  Search,
  Rocket,
  Users,
  Star,
  MessageCircle,
  Mail,
} from "lucide-react";

type Props = {
  onSelect: (text: string) => void;
};

const actions = [
  {
    title: "Audit My Stream",
    subtitle: "Get a professional stream analysis",
    icon: Search,
    value: "audit",
  },
  {
    title: "Reach Affiliate",
    subtitle: "Grow faster on Twitch",
    icon: Star,
    value: "affiliate",
  },
  {
    title: "Choose My Package",
    subtitle: "Find the best option",
    icon: Rocket,
    value: "package",
  },
  {
    title: "Grow Community",
    subtitle: "Increase engagement",
    icon: Users,
    value: "community",
  },
];

export default function AISuggestions({
  onSelect,
}: Props) {
  return (
    <>

      <div className="mb-4">

        <h3 className="text-white text-lg font-bold">

          👋 Welcome to Surge AI

        </h3>

        <p className="text-gray-400 text-sm mt-2">

          Select an option below or ask me anything.

        </p>

      </div>

      <div className="space-y-3">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.value}
              onClick={() => onSelect(item.value)}
              className="group w-full rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-purple-500 hover:bg-purple-600/10"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-purple-600/20 p-3">

                  <Icon
                    className="text-purple-400"
                    size={20}
                  />

                </div>

                <div className="text-left">

                  <h4 className="font-semibold text-white">

                    {item.title}

                  </h4>

                  <p className="text-sm text-gray-400">

                    {item.subtitle}

                  </p>

                </div>

              </div>

            </button>

          );

        })}

      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">

        <a
          href="https://discord.gg/sdaACjhWx"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 py-3 text-purple-300 transition hover:bg-purple-600 hover:text-white"
        >

          <MessageCircle size={18} />

          Discord

        </a>

        <a
          href="mailto:streamfixhub@gmail.com"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10"
        >

          <Mail size={18} />

          Email

        </a>

      </div>

    </>
  );
}