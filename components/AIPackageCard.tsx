"use client";

import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  price: string;
  link: string;
};

export default function AIPackageCard({
  title,
  description,
  price,
  link,
}: Props) {
  return (
    <div className="mt-5 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10 p-5">

      <span className="inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">
        AI RECOMMENDATION
      </span>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-300">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-3xl font-black text-purple-400">
          {price}
        </span>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 font-bold text-white transition hover:scale-105"
        >
          Start Now
          <ArrowRight size={18} />
        </a>

      </div>

    </div>
  );
}