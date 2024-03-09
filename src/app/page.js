"use client";
import React from 'react';
import HeroSection from "./components/HeroSection";
import DropDownMenu from './components/DropDownMenu';

const Home = () => {
  return (

    <main className={`bg-[#0c0e10]  py-6 px-6 h-screen flex flex-col justify-between`} >
      <div className="flex justify-end">
        <DropDownMenu />
      </div>
      <div className="flex items-center justify-center">
        <HeroSection />
      </div>
      <div className="flex items-center justify-center ">
        <h1></h1>
      </div>
    </main>
  );
};

export default Home;
