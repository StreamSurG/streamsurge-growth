import Link from "next/link";
import { CheckCircle, Clock, MessageCircle, Home } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl rounded-3xl border border-green-500/20 bg-[#101010] p-10 text-center">

        <CheckCircle
          size={80}
          className="mx-auto text-green-400"
        />

        <h1 className="mt-8 text-5xl font-bold text-white">
          Project Started Successfully
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-8">
          Thank you for choosing StreamSurge.
          <br />
          Your project requirements have been received successfully and
          your order is now in our production queue.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <Clock className="mx-auto text-purple-400" />

            <h3 className="mt-4 text-xl font-bold text-white">
              Estimated Delivery
            </h3>

            <p className="mt-2 text-gray-400">
              4–6 Hours
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <MessageCircle className="mx-auto text-blue-400" />

            <h3 className="mt-4 text-xl font-bold text-white">
              Need Help?
            </h3>

            <a
              href="https://discord.gg/YOUR_INVITE"
              target="_blank"
              className="mt-2 inline-block text-blue-400"
            >
              Join Discord
            </a>

          </div>

        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-bold text-white"
        >
          <Home size={20} />
          Return Home
        </Link>

      </div>
    </main>
  );
}