"use client";
import React, { useState } from "react";
// Animations
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { baseUrl } from "../constants/Config";
import "../global.css";
import NavBar from '../navbar/Navbar';

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

const DashboardPage = () => {
  const [link, setLink] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success message

    if (!isValidURL(link)) {
      setError("Please enter a valid URL.");
      return;
    }

    if (!Cookies.get("token")) {
      router.push("/ordering/auth/login");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/store/orders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `JWT ${Cookies.get("token")}`,
        },
        body: JSON.stringify({
          link: link,
          size: size,
          color: color,
          quantity: quantity,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      setSuccess("Order submitted successfully!"); // Set success message
      router.push('/ordering/orders')
      // Optionally, you can add logic to handle the response, e.g., reset form fields
      setLink("");
      setColor("");
      setSize("");
      setQuantity("");
      setDescription("");
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while submitting the order. Please try again."
      );
    }
  };

  return (
    <div className="bg-primary/40 text-gray-700 w-full min-h-screen flex flex-col">
      <NavBar tabnum={1} />
      <div className="flex-grow flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center lg:w-[350px] lg:h-auto mx-auto rounded-2xl   z-50 p-4 bg-pramiry/40 ">
          <div className="flex flex-col items-center gap-1 w-full">
            <h1 className="text-2xl lg:text-5xl font-bold pb-6">Dashboard</h1>
            <Reveal keyframes={bottomToTopAnimation}>
              <div className="flex flex-col items-center gap-1 w-full">
                <span className="text-lg xl:text-xl font-bold">Link:</span>
                <input
                  type="text"
                  placeholder="Enter Link..."
                  value={link}
                  onChange={handleLinkChange}
                  className="w-full px-5 h-10 sm:h-12 bg-white border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-gray-700 text-gray-700 transition duration-500"
                />
                {error && <p className="text-red-500 ">{error}</p>}
              </div>
            </Reveal>
            <Reveal keyframes={bottomToTopAnimation} delay={100}>
              <div className="flex flex-col items-center gap-1 w-full">
                <span className="text-lg xl:text-xl font-bold">Color:</span>
                <input
                  type="text"
                  placeholder="Enter Color..."
                  value={color}
                  onChange={handleColorChange}
                  className="w-full px-5 h-10 sm:h-12 bg-white border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-gray-700 text-gray-700 transition duration-500"
                />
              </div>
            </Reveal>
            <Reveal keyframes={bottomToTopAnimation} delay={200}>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="flex gap-2 w-full">
                  <div className="flex flex-col w-1/2">
                    <span className="text-lg xl:text-xl font-bold text-center">Size:</span>
                    <input
                      type="text"
                      placeholder="Enter Size..."
                      value={size}
                      onChange={handleSizeChange}
                      className="w-full px-5 h-10 sm:h-12 bg-white border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-gray-700 text-gray-700 transition duration-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <span className="text-lg xl:text-xl font-bold text-center">Quantity:</span>
                    <input
                      type="number"
                      placeholder="Enter Quantity..."
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-full px-5 h-10 sm:h-12 bg-white border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-gray-700 text-gray-700 transition duration-500"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal keyframes={bottomToTopAnimation} delay={300}>
              <div className="flex flex-col items-center gap-1 w-full">
                <span className="text-lg xl:text-xl font-bold">Description:</span>
                <input
                  type="text"
                  placeholder="Enter Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="w-full px-5 h-10 sm:h-12 bg-white border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-gray-700 text-gray-700 transition duration-500"
                />
              </div>
            </Reveal>
            <div className="flex flex-col items-center gap-1 w-[90%]">
              <button
                onClick={handleSubmit}
                className="bg-zinc-700 text-white w-full h-10 sm:h-12 rounded-full hover:bg-primary/40 hover:text-gray-700 mt-3 transition duration-500"
              >
                Submit
              </button>
              {success && <p className="text-green-500 ">{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
