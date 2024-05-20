// DashboardPage.js
"use client";
import React, { useState } from "react";
// Animations
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


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
    <div className="flex justify-center items-center w-full h-screen text-zinc-700">
      <div className="container flex flex-col justify-center items-center lg:w-[350px] lg:h-[440px] mx-auto rounded-2xl mt-10 md:mt-32 lg:mt-20 z-50">
        <div className="flex flex-col items-center gap-1 w-full">
            <h1 className="text-2xl lg:text-5xl font-bold pb-6">Dashboard</h1>
          <Reveal keyframes={bottomToTopAnimation}>
            <div className="flex flex-col items-center gap-1 w-[350px]">
              <span className="text-lg xl:text-xl font-bold">Link:</span>
              <input
                type="text"
                placeholder="Enter Link..."
                value={color}
                onChange={handleColorChange}
                className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 bg-[#f3f4f6] border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-zinc-700 text-zinc-700 transition duration-500"
              />

            </div>
          </Reveal>
          <Reveal keyframes={bottomToTopAnimation} delay={100}>
            <div className="flex flex-col items-center gap-1 w-[350px]">
          <span className="text-lg xl:text-xl font-bold">Color:</span>
          <input
            type="text"
            placeholder="Enter Color..."
            value={color}
            onChange={handleColorChange}
            className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 bg-[#f3f4f6] border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-zinc-700 text-zinc-700 transition duration-500" 
            />
            </div>
            </Reveal>
            <Reveal keyframes={bottomToTopAnimation} delay={200}>
            <div className="flex flex-col items-center gap-1 w-[350px]">
          <span className="text-lg xl:text-xl font-bold">Size:</span>
          <input
            type="text"
            placeholder="Enter Size..."
            value={size}
            onChange={handleSizeChange}
            className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 bg-[#f3f4f6] border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-zinc-700 text-zinc-700 transition duration-500"
          />
          </div>
          </Reveal>
          <Reveal keyframes={bottomToTopAnimation} delay={300}>
            <div className="flex flex-col items-center gap-1 w-[350px]">
          <span className="text-lg xl:text-xl font-bold">Description:</span>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-[80%] sm:w-[90%] px-5 h-10 sm:h-12 bg-[#f3f4f6] border-b-2 border-primary/50 rounded-full focus:outline-none focus:bg-white focus:text-zinc-700 text-zinc-700 transition duration-500"
          />
          </div>
          </Reveal>
            <div className="flex flex-col items-center gap-1 w-[350px]">
          <button
            onClick={handleSubmit}
            className="bg-zinc-700 text-white w-[80%] sm:w-[90%] h-10 sm:h-12 rounded-full hover:md:bg-primary/40 hover:md:text-zinc-700 mt-5 transition duration-500"
          >
            Submit
          </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
