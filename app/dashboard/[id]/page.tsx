"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Project = {
  id: string;
  package: string;
  platform: string;
  email: string;
  discord: string | null;
  channel_url: string;
  status: string;
  payment_status: string | null;
  assigned_developer: string | null;
  estimated_completion: string | null;
  audit_url: string | null;
};

export default function DashboardPage() {
  const params = useParams();

  const id = params.id as string;

  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const res = await fetch(
          `/api/project?id=${id}`
        );

        const data = await res.json();

        if (data.success) {
          setProject(data.project);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProject();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">
        <h1 className="text-4xl font-bold">
          Loading Dashboard...
        </h1>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">
        <h1 className="text-4xl font-bold text-red-500">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090909] p-10 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-5xl font-black">

              StreamSurge Dashboard

            </h1>

            <p className="mt-4 text-gray-400">

              {project.email}

            </p>

          </div>

          <div
            className={`rounded-xl px-6 py-3 font-bold ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {project.status}
          </div>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-4">          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8">

            <h2 className="text-xl font-bold">
              Package
            </h2>

            <p className="mt-6 text-3xl font-black text-purple-400">
              {project.package}
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8">

            <h2 className="text-xl font-bold">
              Platform
            </h2>

            <p className="mt-6 text-3xl font-black text-cyan-400">
              {project.platform}
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8">

            <h2 className="text-xl font-bold">
              Assigned Developer
            </h2>

            <p className="mt-6 text-2xl font-black text-green-400">
              {project.assigned_developer ??
                "STREAMSURGE.DEV"}
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8">

            <h2 className="text-xl font-bold">
              Estimated Completion
            </h2>

            <p className="mt-6 text-lg font-bold text-yellow-400">

              {project.status === "Completed"
                ? "Delivered"
                : project.estimated_completion
                ? new Date(
                    project.estimated_completion
                  ).toLocaleString()
                : "Pending"}

            </p>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#141414] p-8">

          <h2 className="text-3xl font-bold">

            Project Timeline

          </h2>

          <div className="mt-10 space-y-8">

            <div className="flex items-start gap-5">

              <div className="mt-1 h-5 w-5 rounded-full bg-green-500"></div>

              <div>

                <h3 className="text-lg font-bold">

                  Requirements Submitted

                </h3>

                <p className="mt-2 text-gray-400">

                  Your project requirements have been received successfully.

                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="mt-1 h-5 w-5 rounded-full bg-blue-500"></div>

              <div>

                <h3 className="text-lg font-bold">

                  Assigned To Developer

                </h3>

                <p className="mt-2 text-gray-400">

                  {project.assigned_developer ??
                    "STREAMSURGE.DEV"}{" "}
                  is currently working on your project.

                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div
                className={`mt-1 h-5 w-5 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              ></div>

              <div>

                <h3 className="text-lg font-bold">

                  Current Status

                </h3>

                <p className="mt-2 text-gray-400">

                  {project.status}

                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div
                className={`mt-1 h-5 w-5 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500"
                    : "bg-gray-600"
                }`}
              ></div>

              <div>

                <h3 className="text-lg font-bold">

                  Delivery

                </h3>

                <p className="mt-2 text-gray-400">

                  {project.status === "Completed"
                    ? "Your project has been completed successfully."
                    : "Your report will appear here once completed."}

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-5">        {project.status === "Completed" &&
          project.audit_url && (

            <a
              href={project.audit_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              📄 Download My Report
            </a>

        )}

        {project.payment_status !== "Paid" && (

          <Link
            href={`/payment?package=${encodeURIComponent(project.package)}`}
            className="rounded-xl bg-purple-600 px-8 py-4 font-bold transition hover:bg-purple-700"
          >
            Complete Payment
          </Link>

        )}

        <a
          href="https://discord.gg/sdaACjhWx"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/10"
        >
          Join Community
        </a>

        <Link
          href="/"
          className="rounded-xl border border-purple-500 px-8 py-4 font-bold text-purple-400 transition hover:bg-purple-600 hover:text-white"
        >
          ← Back Home
        </Link>

      </div>

      <div className="mt-12 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 p-8">

        <h2 className="text-2xl font-black">

          Need Help?

        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-gray-300">

          If you have questions about your project, delivery, or report,
          our team is ready to help you inside our Discord community.

        </p>

        <a
          href="https://discord.gg/sdaACjhWx"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-bold text-white transition hover:scale-105"
        >
          Open Discord →
        </a>

      </div>

    </div>

  </main>

  );

}