// VerifyOTPPage.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./VerifyOTPPage.module.css"; // Import CSS module for styling
import Cookies from "js-cookie";
import { Cookie } from "next/font/google";
import { baseUrl } from "@/app/ordering/constants/Config";
const VerifyOTPPage = () => {
  const router = useRouter();
  const [enteredOTP, setEnteredOTP] = useState("");

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/verify/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: Cookies.get("phone"),
          otp: Cookies.get("otp"),
        }),
      });
      await fetch(`${baseUrl}/store/customers/me/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      Cookies.set("token", data.access_token, {expires: 1});
      // Save access token in cookies (code for saving in cookies will be added later)
      router.push("/ordering/linker");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Verify OTP
        </h2>
        <h3 className="mt-6 text-center text-3xl font-extrabold text-white">
          {Cookies.get("otp")}
        </h3>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="space-y-6">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-white"
              >
                Enter OTP
              </label>
              <div className="mt-1 space-y-6">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleVerifyOTP}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 space-y-6"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerifyOTPPage;
