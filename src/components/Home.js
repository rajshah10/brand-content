/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import horse1 from "../assets/images/horse1.jpg"


import Navbar from './common/Navbar';
import { Container } from '@mui/material';
import Footer from './common/Footer';
const Home = () => {
    

    return (
        <div className='relative'>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage: `url('${horse1}')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Your story starts with us.
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        This is a simple example of a Landing Page you can build
                                        using Tailwind Starter Kit. It features multiple CSS
                                        components based on the Tailwindcss design system.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>
                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <Container>
                        <div className="container mx-auto px-4">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full  ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md object-cover"
                                        src="https://img.freepik.com/premium-photo/woman-riding-gray-horse-field-sunset-walking-horseback-riding-rental-beautiful-background-nature-outdoor-equestrian-sport-training-copy-space-love-animal-friendship_287527-1193.jpg"
                                    />
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold">
                                            A New Equestrian World.
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Equellence is the new way for Equestrians to achieve their goals and reach the top of the sport.<br />

                                            What was once a sport where someone needed sheer luck to succeed, now, through hard work and  creative talent via social media, any equestrian can acheive their goals.<br />

                                            Equellence fosters Equestrian Excellence through content creation.
                                        </p>
                                        <ul className='list-disc text-gray-600 text-left ml-10 mt-6 text-lg'>
                                            <li>Network with industry professionals and peers to expand your opportunities.</li>
                                            <li>Engage with your audience to build a loyal following and enhance your personal brand.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>


            <div className='mt-4'> <Footer /></div>
        </div>
    )
}

export default Home
