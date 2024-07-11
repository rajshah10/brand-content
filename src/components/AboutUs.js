import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { Container } from '@mui/material';

const AboutUs = () => {
    return (
        <div className="relative">
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        About Us
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Learn more about our journey and our team.
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
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>
                <section className="relative py-20 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="w-full ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="w-full h-96 rounded-lg shadow-md"
                                    src="https://t3.ftcdn.net/jpg/02/55/60/02/240_F_255600214_qRD0Mq9euVSOkZR0ljIMFqeYv3IETV9A.jpg"
                                />
                            </div>
                            <div className="w-full ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold">
                                        Our Story
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Our journey started with a simple idea: to create a platform that fosters excellence in the equestrian world.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Through hard work and dedication, we've built a community where equestrians can share their stories, connect with each other, and achieve their goals.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        We believe in the power of community and the potential of every individual. Join us in our mission to make equestrian excellence accessible to all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-20">
                    <Container>
                        <div className="container mx-auto px-4">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold">
                                            Meet Our Team
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Our team is composed of passionate individuals who are dedicated to fostering equestrian excellence.
                                        </p>
                                        <ul className="list-none mt-6">
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <h4 className="text-gray-600">
                                                            John Doe - Founder & CEO
                                                        </h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <h4 className="text-gray-600">Jane Smith - Head of Marketing</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <h4 className="text-gray-600">Emily Johnson - Community Manager</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full  ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md"
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default AboutUs;
