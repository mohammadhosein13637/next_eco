// DashboardPage.js
"use client";
import React, { useState } from "react";

const LinkerPage = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can submit the inputs to the backend
    // For demonstration purposes, we'll just log the values
    console.log("Color:", color);
    console.log("Size:", size);
    console.log("Description:", description);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="container lg:glass-effect flex flex-col justify-center items-center lg:border border-white/80 lg:w-[350px] lg:h-[440px] mx-auto rounded-2xl mt-10 md:mt-32 lg:mt-20">
        <div className="flex flex-col items-center gap-1 w-full">
          <h1 className="text-2xl font-bold  mt-6">Dashboard</h1>
          <span className="text-lg xl:text-xl font-bold">Link:</span>
          <input
            type="text"
            placeholder="Enter Link..."
            value={color}
            onChange={handleColorChange}
            className="w-[80%] sm:w-[90%] px-5 h-8 sm:h-12 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <span className="text-lg xl:text-xl font-bold">Color:</span>
          <input
            type="text"
            placeholder="Enter Color..."
            value={color}
            onChange={handleColorChange}
            className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <span className="text-lg xl:text-xl font-bold">Size:</span>
          <input
            type="text"
            placeholder="Enter Size..."
            value={size}
            onChange={handleSizeChange}
            className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <span className="text-lg xl:text-xl font-bold">Description:</span>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <button
            onClick={handleSubmit}
            className="bg-black text-white w-[80%] sm:w-[90%] h-10 sm:h-12 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 mb-5 mt-3"
          >
            Submit
          </button>

        </div>

      </div>
    </div>
  );
};

export default LinkerPage;
