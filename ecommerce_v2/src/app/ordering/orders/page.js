// OrdersPage.js
"use client";
import React from "react";
// Animations
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Cookies from "js-cookie";
import { baseUrl } from "../constants/Config";

const bottomToTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const OrdersPage = () => {
  const orders = [];

  React.useEffect(() => {
    handleOrders();
  }, []);
  const handleOrders = async () => {
    if (!Cookies.get("token")) {
      router.push("/ordering/auth/login");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/store/orders/`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${Cookies.get("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      result.map((item) => {
        orders.push(item);
      });
      orders.map((item) => {
        console.log(item.id);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="container flex flex-col items-center text-zinc-700 w-full h-screen mx-auto mt-32 Child:z-50">
      <Fade>
        <h1 className="text-3xl font-bold mb-4 text-center">Orders</h1>
      </Fade>
      <Reveal keyframes={bottomToTopAnimation}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-80 sm:w-96 flex-wrap">
          {orders.map((order) => (
            <div key={order.id} className="flex-1 w-full md:w-auto">
              <div className="flex items-center justify-center bg-gray-200 w-80 sm:w-96 h-8 rounded-md text-center text-black">
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal keyframes={bottomToTopAnimation} delay={200}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-2 mt-10 text-center">
            All Orders
          </h2>
          <ul className="w-[350px] sm:w-[500px] text-black">
            <ul className="w-[350px] sm:w-[500px]">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="border-b border-gray-300 py-2 w-full"
                  style={{ color: "black" }}
                >
                  Order ID: {order.id}
                  {/* Add more order information here */}
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </Reveal>
    </div>
  );
};

export default OrdersPage;
