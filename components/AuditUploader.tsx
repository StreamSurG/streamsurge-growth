"use client";

import { useState } from "react";

export default function AuditUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function uploadFile() {
    if (!file) {
      setMessage("Please select a PDF first.");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setMessage(result.message || "Upload failed.");
        setLoading(false);
        return;
      }

      setMessage("✅ Audit uploaded successfully.");
      setFile(null);
    } catch {
      setMessage("Unable to upload file.");
    }

    setLoading(false);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#101010] p-8">

      <h2 className="text-3xl font-bold text-white">
        Upload Client Audit
      </h2>

      <p className="mt-3 text-gray-400">
        Upload the completed audit PDF.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
        className="mt-8 block w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />

      <button
        onClick={uploadFile}
        disabled={loading}
        className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-bold text-white disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Audit"}
      </button>

      {message && (
        <div className="mt-6 rounded-xl bg-white/5 p-4 text-white">
          {message}
        </div>
      )}

    </div>
  );
}