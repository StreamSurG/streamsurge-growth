"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Project = {
  id: string;
  package: string;
  platform: string;
  email: string;
  status: string;
  payment_status: string;
  assigned_developer: string;
  audit_url: string | null;
};

export default function DashboardPage() {
  const { id } = useParams();

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
      <main className="min-h-screen flex items-center justify-center bg-[#090909] text-white">
        <h1 className="text-4xl font-bold">
          Loading Dashboard...
        </h1>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#090909] text-white">
        <h1 className="text-4xl font-bold text-red-500">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white p-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-black">
          StreamSurge Dashboard
        </h1>

        <p className="mt-3 text-gray-400">
          {project.email}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-[#141414] p-6">
            <h2 className="text-gray-400">
              Package
            </h2>

            <p className="mt-3 text-3xl font-bold text-purple-400">
              {project.package}
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] p-6">
            <h2 className="text-gray-400">
              Platform
            </h2>

            <p className="mt-3 text-3xl font-bold text-cyan-400">
              {project.platform}
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] p-6">
            <h2 className="text-gray-400">
              Status
            </h2>

            <p className="mt-3 text-3xl font-bold text-yellow-400">
              {project.status}
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] p-6">
            <h2 className="text-gray-400">
              Developer
            </h2>

            <p className="mt-3 text-xl font-bold text-green-400">
              {project.assigned_developer}
            </p>
          </div>

        </div>

        {project.audit_url && (
          <a
            href={project.audit_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-bold"
          >
            📄 Download My Report
          </a>
        )}

      </div>

    </main>
  );
}