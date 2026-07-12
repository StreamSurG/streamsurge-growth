import Link from "next/link";
import {
  CreditCard,
  Smartphone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-5xl font-black">

          Choose Your Payment Method

        </h1>

        <p className="mt-5 text-center text-gray-400 text-lg">

          Secure your project and begin immediately.

        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* STRIPE */}

          <div className="rounded-3xl border border-purple-500/20 bg-[#101010] p-10">

            <div className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-sm font-bold">

              ⭐ Recommended

            </div>

            <CreditCard
              size={55}
              className="mt-6 text-purple-400"
            />

            <h2 className="mt-6 text-3xl font-bold">

              Stripe Checkout

            </h2>

            <p className="mt-4 leading-8 text-gray-400">

              Secure payment using:

              <br />

              • Credit Card

              <br />

              • Debit Card

              <br />

              • Apple Pay

              <br />

              • Google Pay

            </p>

            <a
              href="YOUR_STRIPE_LINK"
              className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold"
            >

              Continue with Stripe

              <ArrowRight size={18} />

            </a>

          </div>

          {/* CASH APP */}

          <div className="rounded-3xl border border-green-500/20 bg-[#101010] p-10">

            <Smartphone
              size={55}
              className="text-green-400"
            />

            <h2 className="mt-6 text-3xl font-bold">

              Cash App

            </h2>

            <p className="mt-4 leading-8 text-gray-400">

              Send payment using Cash App.

            </p>

            <div className="mt-8 rounded-2xl bg-white/5 p-6">

              <p className="text-sm text-gray-400">

                Cash App Tag

              </p>

              <p className="mt-2 text-2xl font-bold text-green-400">

                $Nfamusty21

              </p>

            </div>

            <a
              href="https://cash.app/$Nfamusty21"
              target="_blank"
              className="mt-8 flex items-center justify-center rounded-2xl bg-green-600 py-4 font-bold"
            >

              Pay with Cash App

            </a>

            <Link
              href="/requirements"
              className="mt-4 flex items-center justify-center rounded-2xl border border-white/10 py-4"
            >

              I've Completed Payment

            </Link>

          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-[#101010] p-8">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-green-400" />

            <h3 className="text-xl font-bold">

              Secure Project Process

            </h3>

          </div>

          <ol className="mt-6 space-y-4 text-gray-300">

            <li>1. Choose your payment method.</li>

            <li>2. Complete your payment.</li>

            <li>3. Submit your project requirements.</li>

            <li>4. We begin work immediately.</li>

            <li>5. Stream Audit delivered within 4–6 hours.</li>

          </ol>

        </div>

      </div>

    </main>
  );
}