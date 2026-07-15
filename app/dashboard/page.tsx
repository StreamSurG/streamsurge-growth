"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Project = {
  id: string;
  package: string;
  platform: string;
  email: string;
  discord: string | null;
  channel_url: string;
  status: string;
  payment_status: string;
  assigned_developer: string | null;
  estimated_completion: string | null;
  audit_url: string | null;
};

export default function DashboardPage() {

  const searchParams = useSearchParams();

  const projectId = searchParams.get("id");

  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadProject() {

      if (!projectId) {

        setLoading(false);

        return;

      }

      try {

        const res = await fetch(
          `/api/project?id=${projectId}`
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

    loadProject();

  }, [projectId]);

  if (loading) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">

        <h1 className="text-3xl font-bold">

          Loading Dashboard...

        </h1>

      </main>

    );

  }

  if (!project) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">

        <h1 className="text-3xl font-bold text-red-400">

          Project Not Found

        </h1>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-[#090909] p-10 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black">

              StreamSurge Dashboard

            </h1>

            <p className="mt-3 text-gray-400">

              Welcome back, {project.email}

            </p>

          </div>

          <div
            className={`rounded-xl px-5 py-3 font-bold ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >

            {project.status}

          </div>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-4">        <div className="rounded-3xl border border-white/10 bg-[#141414] p-8">

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
            {project.assigned_developer ||
              "STREAMSURGE.DEV"}
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#141414] p-8">

          <h2 className="text-xl font-bold">
            Estimated Completion
          </h2>

          <p className="mt-6 text-xl font-bold text-yellow-400">
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

        <div className="mt-8 space-y-6">

          <div className="flex items-center gap-5">

            <div className="h-5 w-5 rounded-full bg-green-500"></div>

            <div>

              <h3 className="font-semibold">
                Requirements Submitted
              </h3>

              <p className="text-gray-400">
                Your project requirements have been
                received successfully.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="h-5 w-5 rounded-full bg-blue-500"></div>

            <div>

              <h3 className="font-semibold">
                Developer Assigned
              </h3>

              <p className="text-gray-400">
                {project.assigned_developer ||
                  "STREAMSURGE.DEV"}{" "}
                is working on your project.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-5">

            <div
              className={`h-5 w-5 rounded-full ${
                project.status === "Completed"
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            ></div>

            <div>

              <h3 className="font-semibold">
                Project Status
              </h3>

              <p className="text-gray-400">
                {project.status}
              </p>

            </div>

          </div>          <div className="flex items-center gap-5">

            <div
              className={`h-5 w-5 rounded-full ${
                project.status === "Completed"
                  ? "bg-green-500"
                  : "bg-gray-600"
              }`}
            ></div>

            <div>

              <h3 className="font-semibold">
                Delivery
              </h3>

              <p className="text-gray-400">

                {project.status === "Completed"
                  ? "Your project has been delivered successfully."
                  : "Your audit will appear here once completed."}

              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-10 flex flex-wrap gap-5">

        {project.status === "Completed" &&
          project.audit_url && (

            <a
              href={project.audit_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              📄 Download Audit
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
          Join Discord
        </a>

      </div>

    </div>

  </main>

  );

}