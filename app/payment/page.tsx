import Link from "next/link";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{
    package?: string;
  }>;
}) {
  const params = await searchParams;

  const packageName = params.package || "Audit";

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-3xl border border-green-500/20 bg-[#101010] p-10 text-center">

        <h1 className="mt-8 text-4xl font-black">
          Payment Successful 🎉
        </h1>

        <p className="mt-6 leading-8 text-gray-300">
          Your payment has been received successfully.
          <br />
          <br />
          Click the button below to continue with your project requirements.
        </p>

        <Link
          href={`/requirements?package=${encodeURIComponent(packageName)}&paid=true`}
          className="mt-10 block rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold text-white hover:opacity-90"
        >
          Continue →
        </Link>

      </div>
    </main>
  );
}