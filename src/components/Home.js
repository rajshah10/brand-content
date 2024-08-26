/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import horse1 from "../assets/images/horse1.jpg"
import h2 from "../assets/images/h2.JPG"

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
                                        EQUELLENCE
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Fostering Equestrian Excellence.
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
                                        src={h2}
                                    />
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold lowercase">
                                            WHY SHOULD YOU BE USING EQUESTRIAN CONTENT CREATORS?
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Equestrianism is a unique niche that blends luxury, fashion, authenticity, and creativity. Our influencers don’t just create content with their equine partners—they represent the essence of the sport, where elegance meets passion, and tradition harmonizes with innovation. Whether you're looking to elevate your brand, showcase a refined lifestyle, or connect with an audience that values sophistication and authenticity, our creators are at the forefront of the equestrian world, seamlessly merging style and substance.
                                        </p>
                                        {/* <ul className='list-disc text-gray-600 text-left ml-10 mt-6 text-lg'>
                                            <li>Network with industry professionals and peers to expand your opportunities.</li>
                                            <li>Engage with your audience to build a loyal following and enhance your personal brand.</li>
                                        </ul> */}

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
