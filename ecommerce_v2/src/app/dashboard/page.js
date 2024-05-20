'use client'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from '../components/Banner/Banner'
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";
import Testimonials from '../components/Testimonials/Testimonials'

import AOS from "aos";
import "aos/dist/aos.css";


export default function page() {


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-zinc-700 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Products />
        <TopProducts />
        <Banner />
        <Subscribe />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
