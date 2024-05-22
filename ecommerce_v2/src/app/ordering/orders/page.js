"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { baseUrl } from "../constants/Config";
import { useRouter } from "next/navigation";
import NavBar from "../navbar/Navbar";
import Link from "next/link";
export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (
      Cookies.get("token") == "" ||
      Cookies.get("token") == null ||
      Cookies.get("token") == "undefined"
    ) {
      router.push("/ordering/auth/login");
    }
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/store/orders/`, {
          headers: {
            Authorization: `JWT ${Cookies.get("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch orders");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOrders();
  }, []);
  const getStatusText = (status) => {
    return status === "P" ? "PENDING" : status === "A" ? "Accepted" : "Unknown";
  };

  return (
    <div>
      <NavBar tabnum={2} />
      <div className="min-h-screen bg-primary/40 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders</h1>
        {loading ? (
          <div className="text-center text-gray-700">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="relative mx-auto mb-6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <Link href={`/ordering/orders/${order.id}/invoice`}className="w-6/6">
                <div class="bg-primary/40 hover:bg-primary/55 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-700 rounded text-center	" onClick={()=>Cookies.set("orderId",order.id)}>
                  Invoice
                </div>
                </Link>
                <a
                  className="relative mx-3 mt-3 flex h-20 overflow-hidden rounded-xl"
                  href={order.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-primary/40 px-2 text-center text-sm font-medium text-gray-700">
                    Order #{order.id}
                  </span>
                </a>
                <div className="px-5 pb-5 ">
                  {/* <a
                    href={order.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-dark tracking-tight"
                  >
                      {order.link}
                  </a> */}
                  <div className="mt-2 mb-5">
                    <p className="text-gray-700">
                      <strong>Size:</strong> {order.size}
                    </p>
                    <p className="text-gray-700">
                      <strong>Color:</strong> {order.color}
                    </p>
                    <p className="text-gray-700">
                      <strong>Description:</strong> {order.description}
                    </p>
                    <p className="text-gray-700">
                      <strong>Customer ID:</strong> {order.customer}
                    </p>
                    <p className="text-gray-700">
                      <strong>Created At:</strong>{" "}
                      {new Date(order.created_at).toLocaleString()}
                    </p>
                    <p className="text-gray-700">
                      <strong>Last Status:</strong>{" "}
                      {getStatusText(order.last_status.status)} at{" "}
                      {new Date(
                        order.last_status.status_change
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
