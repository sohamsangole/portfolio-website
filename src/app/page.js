"use client";
import React from 'react';
import HeroSection from "./components/HeroSection";
import DropDownMenu from './components/DropDownMenu';

const Home = () => {
  return (

    <main className={`bg-[#121212]  py-6 px-6 h-screen flex flex-col justify-between`} >
      <div className="flex justify-end ">
        <DropDownMenu />
      </div>
      <div className="flex items-center justify-center">
        <HeroSection />
      </div>
      <div className="flex items-center justify-center ">
        <button>India</button>
      </div>
    </main>
  );
};

export default Home;
