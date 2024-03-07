/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import DropDownMenu from '../components/DropDownMenu'

const AboutPage = () => {
    return (
        <main className={`bg-[#121212] px-6 py-4 h-screen flex flex-col justify-between`} >
            <div className="flex justify-between">
                <button onClick={() => window.location.href = "/"}>[Home]</button>
                <DropDownMenu />
            </div>
            <div className="justify-between">
                <h1>AboutPage</h1>
                <p>Welcome to my portfolio! I'm Soham Sangole, a passionate and driven student pursuing a Bachelor of Technology in Information Technology at Veermata Jijabai Technological Institute (VJTI), Mumbai. With a solid foundation in programming languages such as Python, Java, and Dart, coupled with expertise in Machine Learning, App Development, and Web Development.</p>
            </div>
            <div className="flex items-center justify-center ">
                <h1>India</h1>
            </div>
        </main>
    )
}

export default AboutPage