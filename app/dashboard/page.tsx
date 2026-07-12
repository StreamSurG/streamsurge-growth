import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold">
              StreamSurge Dashboard
            </h1>

            <p className="mt-3 text-gray-400">
              Welcome to your project dashboard.
            </p>
          </div>

          <div className="rounded-xl bg-green-500/20 px-5 py-3 text-green-400 font-bold">
            🟢 Project In Progress
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="rounded-3xl bg-[#141414] p-8 border border-white/10">
            <h2 className="text-xl font-bold">
              Estimated Completion
            </h2>

            <p className="mt-6 text-4xl font-bold text-purple-400">
              6 Hours
            </p>
          </div>

          <div className="rounded-3xl bg-[#141414] p-8 border border-white/10">
            <h2 className="text-xl font-bold">
              Assigned Developer
            </h2>

            <p className="mt-6 text-2xl font-bold text-cyan-400">
              STREAMSURGE.DEV
            </p>
          </div>

          <div className="rounded-3xl bg-[#141414] p-8 border border-white/10">
            <h2 className="text-xl font-bold">
              Status
            </h2>

            <p className="mt-6 text-3xl font-bold text-green-400">
              In Progress
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-[#141414] border border-white/10 p-8">

          <h2 className="text-3xl font-bold">
            Project Timeline
          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-5">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>

              <div>
                <h3 className="font-semibold">
                  Project Received
                </h3>

                <p className="text-gray-400">
                  Your requirements have been submitted successfully.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-5 h-5 rounded-full bg-blue-500"></div>

              <div>
                <h3 className="font-semibold">
                  Assigned to Developer
                </h3>

                <p className="text-gray-400">
                  STREAMSURGE.DEV is reviewing your project.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-5 h-5 rounded-full bg-yellow-500"></div>

              <div>
                <h3 className="font-semibold">
                  Development
                </h3>

                <p className="text-gray-400">
                  Currently building your project.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-5 h-5 rounded-full bg-gray-600"></div>

              <div>
                <h3 className="font-semibold">
                  Delivery
                </h3>

                <p className="text-gray-400">
                  Expected within 6 hours.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-10 flex gap-5">

          <Link
            href="/payment"
            className="rounded-xl bg-purple-600 px-8 py-4 font-bold hover:bg-purple-700 transition"
          >
            Payment
          </Link>

          <a
            href="https://discord.gg/"
            target="_blank"
            className="rounded-xl border border-white/10 px-8 py-4 hover:bg-white/10 transition"
          >
            Join Discord
          </a>

        </div>

      </div>

    </main>
  );
}