"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Users,
  Clock3,
  CheckCircle2,
  Package,
  Search,
  RefreshCw,
} from "lucide-react";

import AuditUploader from "@/components/AuditUploader";

type Order = {
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
  created_at: string;
};

export default function AdminPage() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadOrders() {

    try {

      const res = await fetch("/api/admin");

      const data = await res.json();

      if (data.success) {

        setOrders(data.orders);

      }

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadOrders();

    const interval = setInterval(loadOrders,10000);

    return ()=>clearInterval(interval);

  },[]);

  const filteredOrders = useMemo(()=>{

    return orders.filter((order)=>{

      const keyword = search.toLowerCase();

      return (

        order.email.toLowerCase().includes(keyword)

        ||

        order.package.toLowerCase().includes(keyword)

        ||

        order.platform.toLowerCase().includes(keyword)

      );

    });

  },[orders,search]);

  const totalOrders = orders.length;

  const completedOrders = orders.filter(

    o=>o.status==="Completed"

  ).length;

  const activeOrders = totalOrders-completedOrders;

  return (

    <main className="min-h-screen bg-black px-8 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black">

              STREAMSURGE ADMIN

            </h1>

            <p className="mt-4 text-gray-400">

              Creator Growth Systems

            </p>

          </div>

          <button

            onClick={loadOrders}

            className="flex items-center gap-2 rounded-2xl bg-purple-600 px-6 py-3 font-bold"

          >

            <RefreshCw size={18}/>

            Refresh

          </button>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-6">

            <Users className="text-purple-400"/>

            <h2 className="mt-4 text-4xl font-black">

              {totalOrders}

            </h2>

            <p className="text-gray-400">

              Total Orders

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-6">

            <Clock3 className="text-yellow-400"/>

            <h2 className="mt-4 text-4xl font-black">

              {activeOrders}

            </h2>

            <p className="text-gray-400">

              Active Projects

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-6">

            <CheckCircle2 className="text-green-400"/>

            <h2 className="mt-4 text-4xl font-black">

              {completedOrders}

            </h2>

            <p className="text-gray-400">

              Completed

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-6">

            <Package className="text-cyan-400"/>

            <h2 className="mt-4 text-2xl font-black">

              STREAMSURGE.DEV

            </h2>

            <p className="text-gray-400">

              Assigned Developer

            </p>

          </div>

        </div>

        <div className="relative mt-12">

  <Search
    size={20}
    className="absolute left-5 top-5 text-gray-500"
  />

  <input
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    placeholder="Search customers..."
    className="w-full rounded-2xl border border-white/10 bg-[#101010] py-5 pl-14 pr-6 outline-none"
  />

</div>        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-[#111111]">

              <tr>

                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="text-left">
                  Package
                </th>

                <th className="text-left">
                  Platform
                </th>

                <th className="text-left">
                  Payment
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-left">
                  Developer
                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan={6}
                    className="p-10 text-center text-gray-400"
                  >

                    Loading Orders...

                  </td>

                </tr>

              ) : filteredOrders.length===0 ? (

                <tr>

                  <td
                    colSpan={6}
                    className="p-10 text-center text-gray-400"
                  >

                    No Orders Found

                  </td>

                </tr>

              ) : (

                filteredOrders.map((order)=>(

                  <tr
                    key={order.id}
                    className="border-t border-white/10 hover:bg-white/5"
                  >

                    <td className="p-5">

                      <div className="font-semibold">

                        {order.email}

                      </div>

                      <div className="mt-1 text-sm text-gray-500">

                        {order.channel_url}

                      </div>

                    </td>

                    <td>

                      <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">

                        {order.package}

                      </span>

                    </td>

                    <td>

                      {order.platform}

                    </td>

                    <td>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          order.payment_status==="Paid"

                          ? "bg-green-500/20 text-green-400"

                          : "bg-red-500/20 text-red-400"

                        }`}
                      >

                        {order.payment_status ?? "Pending"}

                      </span>

                    </td>

                    <td>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          order.status==="Completed"

                          ? "bg-green-500/20 text-green-400"

                          : "bg-yellow-500/20 text-yellow-400"

                        }`}
                      >

                        {order.status}

                      </span>

                    </td>

                    <td>

                      <span className="text-cyan-400 font-semibold">

                        {order.assigned_developer || "STREAMSURGE.DEV"}

                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>        <div className="mt-12">

          <AuditUploader />

        </div>

      </div>

    </main>

  );

}