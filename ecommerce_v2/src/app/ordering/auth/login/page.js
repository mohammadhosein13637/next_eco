"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginPage.module.css"; // Import CSS module for styling
import Cookies from "js-cookie";
import { baseUrl } from "../../constants/Config";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });
      const data = await response.json();
      Cookies.set("otp", data.otp); // Set OTP cookie using js-cookie
      Cookies.set("phone", phone);
      Cookies.get("otp");
      console.log(data.otp);
      router.push("/ordering/auth/login/verify");
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  //   return (
  //     <div className="min-h-screen bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
  //         <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
  //           Login
  //         </h2>
  //       </div>

  //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
  //         <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
  //           <form action="" className="space-y-6" >
  //             <h1>Login Page</h1>
  //             <input
  //               type="text"
  //               placeholder="Enter your phone number"
  //               value={phone}
  //               onChange={(e) => setPhone(e.target.value)}
  //               className={styles.input}
  //             />
  //             <button onClick={handleLogin} className={styles.button}>
  //               Login
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Login
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div >
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white space-y-3" 
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="tel"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 space-y-6"
              >
                Login
              </button>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
