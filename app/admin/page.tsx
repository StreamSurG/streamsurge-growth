"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Clock3,
  CheckCircle2,
  Package,
} from "lucide-react";
import AuditUploader from "@/components/AuditUploader";

type Order = {
  id: string;
  package: string;
  platform: string;
  email: string;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const res = await fetch("/api/admin");
        const data = await res.json();

        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadOrders();
  }, []);

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black">
          STREAMSURGE ADMIN
        </h1>

        <p className="mt-4 text-gray-400">
          Manage every customer project.
        </p>

        {/* Dashboard Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-[#101010] p-6 border border-white/10">
            <Users className="text-purple-400" />

            <p className="mt-4 text-4xl font-black">
              {orders.length}
            </p>

            <p className="text-gray-400">
              Total Orders
            </p>
          </div>

          <div className="rounded-3xl bg-[#101010] p-6 border border-white/10">
            <Clock3 className="text-yellow-400" />

            <p className="mt-4 text-4xl font-black">
              {
                orders.filter(
                  (o) => o.status !== "Completed"
                ).length
              }
            </p>

            <p className="text-gray-400">
              In Progress
            </p>
          </div>

          <div className="rounded-3xl bg-[#101010] p-6 border border-white/10">
            <CheckCircle2 className="text-green-400" />

            <p className="mt-4 text-4xl font-black">
              {
                orders.filter(
                  (o) => o.status === "Completed"
                ).length
              }
            </p>

            <p className="text-gray-400">
              Completed
            </p>
          </div>

          <div className="rounded-3xl bg-[#101010] p-6 border border-white/10">
            <Package className="text-cyan-400" />

            <p className="mt-4 text-3xl font-black">
              STREAMSURGE.DEV
            </p>

            <p className="text-gray-400">
              Assigned Developer
            </p>
          </div>

        </div>

        {/* Orders Table */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-[#111111]">

              <tr>

                <th className="p-5 text-left">
                  Email
                </th>

                <th className="text-left">
                  Package
                </th>

                <th className="text-left">
                  Platform
                </th>

                <th className="text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  <td className="p-5">
                    {order.email}
                  </td>

                  <td>
                    {order.package}
                  </td>

                  <td>
                    {order.platform}
                  </td>

                  <td>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        order.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Audit Upload */}

        <div className="mt-12">
          <AuditUploader />
        </div>

      </div>

    </main>
  );
}