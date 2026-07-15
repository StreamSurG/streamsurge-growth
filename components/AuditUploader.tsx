"use client";

import { useEffect, useState } from "react";

type Order = {
  id: string;
  email: string;
  package: string;
};

export default function AuditUploader() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadOrders() {
      const res = await fetch("/api/admin");
      const data = await res.json();

      if (data.success) {
        setOrders(
          data.orders.filter((o: any) => o.status !== "Completed")
        );
      }
    }

    loadOrders();
  }, []);

  async function uploadAudit() {
    if (!selectedOrder) {
      setMessage("Select a customer.");
      return;
    }

    if (!file) {
      setMessage("Choose a PDF.");
      return;
    }

    setLoading(true);
    setMessage("");

    const form = new FormData();

    form.append("file", file);
    form.append("id", selectedOrder);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (data.success) {
      setMessage("✅ Audit uploaded and customer notified.");
      setFile(null);
      setSelectedOrder("");
    } else {
      setMessage(data.message);
    }

    setLoading(false);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#101010] p-8">

      <h2 className="text-3xl font-bold">
        Upload Finished Audit
      </h2>

      <p className="mt-2 text-gray-400">
        Upload the completed PDF and instantly notify the customer.
      </p>

      <select
        value={selectedOrder}
        onChange={(e) => setSelectedOrder(e.target.value)}
        className="mt-8 w-full rounded-xl bg-white/5 p-4 text-white"
      >
        <option value="">
          Select Customer
        </option>

        {orders.map((order) => (
          <option
            key={order.id}
            value={order.id}
          >
            {order.email} ({order.package})
          </option>
        ))}
      </select>

      <input
        type="file"
        accept=".pdf"
        className="mt-6 w-full rounded-xl bg-white/5 p-4"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={uploadAudit}
        disabled={loading}
        className="mt-6 rounded-xl bg-purple-600 px-8 py-4 font-bold text-white"
      >
        {loading ? "Uploading..." : "Upload & Complete Project"}
      </button>

      {message && (
        <div className="mt-6 rounded-xl bg-white/5 p-4">
          {message}
        </div>
      )}
    </div>
  );
}