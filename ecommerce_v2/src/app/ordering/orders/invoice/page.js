"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/app/ordering/constants/Config";
const InvoicePage = () => {
  const router = useRouter();
  console.log(router);
  const [invoiceData, setInvoiceData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      const orderId = Cookies.get("orderId");
      if (!orderId) return;

      setLoading(true);
      try {
        const response = await fetch(
          `${baseUrl}/store/orders/${orderId}/invoices/`,
          {
            headers: {
              Authorization: `JWT ${Cookies.get("token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setInvoiceData(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch invoice data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchInvoiceData();
  }, [router.query]);

  const renderStatusText = (status) => {
    if (status == "P") {
      return "Pending";
    } else if (status == "A") {
      return "Accepted";
    } else {
      return ""; // Handle other statuses if needed
    }
  };
  return (
    <div>
      {/* <NavBar tabnum={0} /> */}
      <div className="min-h-screen bg-primary/40 p-6">
        <div
          className="flex items-center space-x-3 mb-8"
          onClick={() => router.push("/ordering/orders")}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <div className="text-3xl font-bold ">Invoice</div>
        </div>
        {loading ? (
          <div className="text-center text-gray-700">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {invoiceData.map((invoice, index) => (
              <div
                key={index}
                className="mx-auto mb-6 w-full max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <div className="px-5 py-4">
                  <p className="text-lg font-bold text-primary-dark mb-2">
                    Invoice {index + 1}
                  </p>
                  <p className="text-gray-700">
                    <strong>Amount:</strong> {invoice.amount}
                  </p>
                  <p className="text-gray-700">
                    <strong>Status:</strong> {renderStatusText(invoice.status)}
                  </p>
                  <p className="text-gray-700">
                    <strong>Description:</strong> {invoice.description}
                  </p>
                  <p className="text-gray-700">
                    <strong>Created At:</strong>{" "}
                    {new Date(invoice.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoicePage;
