"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Clock3,
  CheckCircle2,
  Package,
  LogOut,
} from "lucide-react";

type Order = {
  id: string;
  package: string;
  platform: string;
  email: string;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const authenticated = localStorage.getItem("admin-auth");

    if (authenticated !== "true") {
      router.replace("/admin/login");
      return;
    }

    async function loadOrders() {
      try {
        const res = await fetch("/api/admin");
        const data = await res.json();

        if (data.success) {
          setOrders(data.orders);
        }
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, [router]);

  function logout() {
    localStorage.removeItem("admin-auth");
    router.replace("/admin/login");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading Dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-5xl font-black">
            STREAMSURGE ADMIN
          </h1>

          <p className="mt-3 text-gray-400">
           STREAMSURGE.DEV
          </p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-4">

        <div className="rounded-3xl bg-[#101010] p-6">
          <Users />
          <p className="mt-4 text-4xl font-black">
            {orders.length}
          </p>
          <p>Total Orders</p>
        </div>

        <div className="rounded-3xl bg-[#101010] p-6">
          <Clock3 />
          <p className="mt-4 text-4xl font-black">
            {orders.filter(o => o.status !== "Completed").length}
          </p>
          <p>In Progress</p>
        </div>

        <div className="rounded-3xl bg-[#101010] p-6">
          <CheckCircle2 />
          <p className="mt-4 text-4xl font-black">
            {orders.filter(o => o.status === "Completed").length}
          </p>
          <p>Completed</p>
        </div>

        <div className="rounded-3xl bg-[#101010] p-6">
          <Package />
          <p className="mt-4 text-4xl font-black">
            Active
          </p>
        </div>

      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">

        <table className="w-full">

          <thead className="bg-[#111]">
            <tr>
              <th className="p-5 text-left">Email</th>
              <th className="text-left">Package</th>
              <th className="text-left">Platform</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-t border-white/10"
              >
                <td className="p-5">{order.email}</td>
                <td>{order.package}</td>
                <td>{order.platform}</td>
                <td>{order.status}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}