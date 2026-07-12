export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <div className="max-w-3xl w-full rounded-3xl border border-green-500/20 bg-[#101010] p-12 text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-bold text-white">
          Project Started Successfully
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Thank you for choosing StreamSurge.
        </p>

        <p className="mt-2 text-gray-400">
          Your project has officially been received and assigned to our team.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-[#181818] p-6 text-left">
            <h2 className="text-2xl font-bold text-white">
              Status
            </h2>

            <p className="mt-4 text-green-400 font-semibold">
              🟢 In Progress
            </p>

            <p className="mt-2 text-gray-400">
              Automatically marked completed after 6 hours.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#181818] p-6 text-left">
            <h2 className="text-2xl font-bold text-white">
              Assigned Developer
            </h2>

            <p className="mt-4 text-purple-400 font-semibold">
              STREAMSURGE TEAM (G.A.T)
            </p>

            <p className="mt-2 text-gray-400">
              Your audit is now in our production queue.
            </p>
          </div>

        </div>

        <a
          href="/dashboard"
          className="inline-block mt-10 rounded-xl bg-purple-600 px-8 py-4 font-bold text-white hover:bg-purple-700 transition"
        >
          Go to Dashboard
        </a>

      </div>
    </main>
  );
}