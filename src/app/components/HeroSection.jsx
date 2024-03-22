import React from 'react';
import Typed from 'typed.js'
import words from "../words.js";

class Typing extends React.Component {
    componentDidMount() {
        const options = {
            strings: words,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            cursorChar: "_",
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Please don't forget to cleanup animation layer
        this.typed.destroy();
    }

    render() {
        return (
            <span
                style={{ whiteSpace: "pre", fontSize: "20px", lineHeight: "20px" }} // Adjust the line-height here
                ref={(el) => {
                    this.el = el;
                }}
            />
        );
    }

}

const HeroSection = () => {

    return (
        <section>
            <div className='grid lg:grid-cols-12 mx-auto'>
                <div className=' col-start-3 col-span-8 text-center'>
                    <h1 className="text-blue-500 mb-4 text-3xl lg:text-5xl font-extrabold">Hi! I am Soham</h1>
                    <Typing />
                    <div className=' self-center m-4'>
                        <button className='py-3 mr-4 text-white mt-4 hover:text-red-500 duration-1000' onClick={() => window.open('https://drive.google.com/drive/folders/1UADbdYDpOmguOfvMEN-MJcSao7wyx1bc?usp=drive_link', '_blank')}>[View CV]</button>
                        <button onClick={() => window.location.href = "/projects"} className='py-3 mr-4 text-white mt-4 hover:text-red-500 duration-1000'>[Projects]</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
