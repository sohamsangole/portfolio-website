import React from 'react';

const HeroSection = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-12 mx-auto'>
                <div className=' col-start-3 col-span-8 text-center'>
                    <h1 className="text-blue-500 mb-4 text-3xl lg:text-5xl font-extrabold">Hi! I am Soham</h1>
                    <p className="text-white text-lg lg:text-xl">I am a third year IT Student</p>
                    <div className=' self-center'>
                        <button className='py-3 mr-4 text-white mt-4 hover:text-red-500 duration-1000'>[View CV]</button>
                        <button className='py-3 mr-4 text-white mt-4 hover:text-red-500 duration-1000'>[About]</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
