"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function RequirementForm() {
  const searchParams = useSearchParams();

  const selectedPackage =
    searchParams.get("package") || "Audit";

  const sessionId =
    searchParams.get("session_id") || "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    package: selectedPackage,
    platform: "",
    channel_url: "",
    email: "",
    discord: "",
    followers: "",
    average_viewers: "",
    goal: "",
    biggest_challenge: "",
    notes: "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      package: selectedPackage,
    }));
  }, [selectedPackage]);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          session_id: sessionId,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(
          result.message || "Something went wrong."
        );
        setLoading(false);
        return;
      }

      window.location.href = `/requirements/success?dashboard=${encodeURIComponent(
        result.dashboardUrl
      )}`;
    } catch (error) {
      console.error(error);
      setError("Unable to connect to the server.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 rounded-3xl border border-white/10 bg-[#101010] p-8"
    >
      <h2 className="text-3xl font-bold">
        Project Requirements
      </h2>

      <p className="mt-3 text-gray-400">
        Complete this form so we can begin immediately.
      </p>

      {error && (
        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="rounded-xl bg-white/5 p-4 text-white outline-none"
          required
        />

        <input
          name="discord"
          value={form.discord}
          onChange={handleChange}
          placeholder="Discord Username"
          className="rounded-xl bg-white/5 p-4 text-white outline-none"
        />

        <select
          name="platform"
          value={form.platform}
          onChange={handleChange}
          className="rounded-xl bg-white/5 p-4 text-white outline-none"
          required
        >
          <option value="">Select Platform</option>
          <option value="Twitch">Twitch</option>
          <option value="Kick">Kick</option>
          <option value="YouTube">YouTube</option>
        </select>

        <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
          <p className="text-sm text-gray-400">
            Selected Package
          </p>

          <h2 className="mt-2 text-2xl font-bold text-purple-400">
            {selectedPackage}
          </h2>

          {sessionId && (
            <p className="mt-3 text-xs text-green-400">
              ✅ Stripe payment verified
            </p>
          )}
        </div>

        <input
          name="channel_url"
          value={form.channel_url}
          onChange={handleChange}
          placeholder="Channel URL"
          className="md:col-span-2 rounded-xl bg-white/5 p-4 text-white outline-none"
          required
        />

        <input
          name="followers"
          value={form.followers}
          onChange={handleChange}
          placeholder="Current Followers"
          type="number"
          className="rounded-xl bg-white/5 p-4 text-white outline-none"
        />

        <input
          name="average_viewers"
          value={form.average_viewers}
          onChange={handleChange}
          placeholder="Average Live Viewers"
          type="number"
          className="rounded-xl bg-white/5 p-4 text-white outline-none"
        />

        <input
          name="goal"
          value={form.goal}
          onChange={handleChange}
          placeholder="Main Goal"
          className="md:col-span-2 rounded-xl bg-white/5 p-4 text-white outline-none"
        />

        <input
          name="biggest_challenge"
          value={form.biggest_challenge}
          onChange={handleChange}
          placeholder="Biggest Challenge"
          className="md:col-span-2 rounded-xl bg-white/5 p-4 text-white outline-none"
        />

        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional Notes..."
          rows={5}
          className="md:col-span-2 resize-none rounded-xl bg-white/5 p-4 text-white outline-none"
        />

      </div>

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
        <h3 className="text-lg font-bold text-green-400">
          Package Confirmation
        </h3>

        <p className="mt-2 text-gray-300">
          You are submitting requirements for the
          <span className="ml-2 font-bold text-white">
            {" "}
            {selectedPackage}
          </span>{" "}
          package.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "🚀 Saving Your Project..."
          : `🚀 Submit ${selectedPackage} Requirements`}
      </button>
    </form>
  );
}