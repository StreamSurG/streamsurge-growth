"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jordan M.",
    platform: "Twitch Creator",
    review:
      "I was averaging 2 viewers for months. After working with StreamSurge, I consistently reached 40–60 live viewers, my chat became active, and I finally achieved Affiliate.",
  },
  {
    name: "Alex R.",
    platform: "Kick Streamer",
    review:
      "The stream audit alone showed me problems I never knew existed. Within weeks my returning viewers increased and people started chatting naturally.",
  },
  {
    name: "Brandon T.",
    platform: "YouTube Live",
    review:
      "My streams finally started reaching the right audience. Viewer retention improved dramatically and subscribers started coming in consistently.",
  },
  {
    name: "Emily S.",
    platform: "Twitch Partner Path",
    review:
      "The Advanced package completely changed my growth strategy. Instead of chasing random viewers, I built an active community that keeps coming back.",
  },
  {
    name: "Nathan P.",
    platform: "Content Creator",
    review:
      "I honestly thought my content was the problem. It wasn't. StreamSurge helped me fix what was stopping my growth behind the scenes.",
  },
  {
    name: "Chris D.",
    platform: "Gaming Streamer",
    review:
      "Professional, fast and worth every dollar. I gained real followers, better engagement and a clear roadmap toward monetization.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-32 bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-semibold">
            SUCCESS STORIES
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Trusted By Growing Creators
          </h2>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            StreamSurge has helped creators build stronger communities,
            improve engagement and move closer to monetization.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-purple-500/40 transition-all"
            >

              <Quote
                className="text-purple-400 mb-6"
                size={34}
              />

              <div className="flex mb-5">

                {[1,2,3,4,5].map((star)=>(

                  <Star
                    key={star}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />

                ))}

              </div>

              <p className="text-gray-300 leading-8">

                "{review.review}"

              </p>

              <div className="mt-8">

                <h4 className="text-white font-bold">

                  {review.name}

                </h4>

                <p className="text-purple-400 text-sm">

                  {review.platform}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}