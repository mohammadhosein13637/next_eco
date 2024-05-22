"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { baseUrl } from "../constants/Config";
import NavBar from "../navbar/Navbar"
const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/ordering/auth/login");
        return;
      }
      try {
        const response = await fetch(`${baseUrl}/store/customers/me/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <NavBar tabnum={3} />
      <div className="min-h-screen bg-primary/40 text-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="max-w-lg mx-auto">
              <div className="border-b border-gray-300 mb-4 pb-4">
                <h2 className="text-xl font-bold mb-2">User Information</h2>
                <p>
                  <span className="font-bold">User ID:</span> {profile.user?.id}
                </p>
                <p>
                  <span className="font-bold">Phone:</span> {profile.user?.phone}
                </p>
                <p>
                  <span className="font-bold">First Name:</span>{" "}
                  {profile.user?.first_name || "N/A"}
                </p>
                <p>
                  <span className="font-bold">Last Name:</span>{" "}
                  {profile.user?.last_name || "N/A"}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {profile.user?.email || "N/A"}
                </p>
                <p>
                  <span className="font-bold">Is Staff:</span>{" "}
                  {profile.user?.is_staff ? "Yes" : "No"}
                </p>
              </div>
              <div className="border-b border-gray-300 mb-4 pb-4">
                <h2 className="text-xl font-bold mb-2">Additional Information</h2>
                <p>
                  <span className="font-bold">ID:</span> {profile.id}
                </p>
                <p>
                  <span className="font-bold">Name:</span> {profile.name || "N/A"}
                </p>
                <p>
                  <span className="font-bold">Telegram ID:</span>{" "}
                  {profile.telegram_id || "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
