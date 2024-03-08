/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import DropDownMenu from '../components/DropDownMenu'
import SlideShow from './slideshow';

const AboutPage = () => {
    return (
        <main className='bg-[#121212] min-h-screen  flex flex-col justify-between py-6 px-6 text-center'>
            <div className="flex justify-between">
                <button onClick={() => window.location.href = "/"}>[Home]</button>
                <DropDownMenu />
            </div>
            <h1 className='text-blue-500 mb-4 text-5xl lg:text-5xl font-extrabold scroll-px-96 lg:px-96 flex items-center justify-center m-8'>About Me :)</h1>
            <div className=' py-7 '>
                <p className='text-sm  scroll-px-96 lg:px-96 '>Hello, fellow coder!My name is Soham Sangole, I was born in 2003 in India.
                    I completed my high school education in 2019 and am currently enrolled in college in VJTI, Mumbai.
                    My programming journey kicked off during my 11th grade when the COVID-19 lockdown threw us all a curveball.
                    With extra time on my hands and a curiosity buzzing in my mind, I decided to dive headfirst into web development.
                    Armed with curiosity and a stack of online tutorials, I started learning HTML and CSS.
                    From crafting basic web pages to experimenting with interactive features, every line of code felt like unlocking a new level in a game.
                    Little did I know that this unplanned detour would set the stage for a lifelong passion for programming.</p>
            </div>
            <hr className='mx-0 lg:mx-96' />
            <div className=' py-7 '>
                <h1 className='text-red-500 text-xl lg:text-2xl m-4'>Hobbies & Interests</h1>
                <p className='text-sm  scroll-px-96 lg:px-96'>
                    I spend most of my time on laptop because my hobbies include video editing,
                    crafting cinematic masterpieces one clip at a time. Whether it's adding slick transitions or
                    fine-tuning the soundtrack, there's something oddly satisfying about bringing my creative vision
                    to life. And when the virtual world beckons, you can bet I'll be there, immersed in the latest
                    gaming adventures. But it's not all pixels and screens; I also enjoy soaking up some sunshine with
                    outdoor activities like badminton and cricket. There's just something about the thrill of a well-placed
                    shot or a perfectly timed catch that keeps me coming back for more.
                </p>
            </div>
            <hr className='mx-0 lg:mx-96' />
            <div className=' py-7 '>
                <h1 className='text-red-500 text-xl lg:text-2xl m-4'>Educational Background</h1>

                <SlideShow />
                <p className='text-sm  scroll-px-96 lg:px-96'>
                    My educational journey has been a mix of fun and challenges. School was a blast,
                    filled with memories and friendships that I'll cherish forever. However, the transition to
                    11th and 12th grade brought its share of pressure, especially with the looming board exams.
                    Just as I was gearing up for the final stretch, the COVID-19 pandemic hit, turning everything
                    upside down. Despite the disruptions, I persevered and successfully completed my schooling. Now,
                    diving into college life, I'm thrilled to embrace new experiences and opportunities with enthusiasm.
                </p>
            </div>
            <hr className='mx-0 lg:mx-96' />
            <div className=' py-7 '>
                <h1 className='text-red-500 text-xl lg:text-2xl m-4'>Technologies that i use</h1>
                <p className='text-sm  scroll-px-96 lg:px-96'>
                    Programming Languages: Python, Java, Dart, Golang, SQL <br />
                    Tech Stack: Machine Learning, App Development, Web Development <br />
                    Frameworks: Flutter, Flask, Tensorflow, Nextjs <br />
                    Operating Systems: Ubuntu, Windows <br />
                </p>
            </div>
            <hr className='mx-0 lg:mx-96 m-4' />
            <div className="flex items-center justify-center">
                <h1>India</h1>
            </div>
        </main>
    )
}

export default AboutPage