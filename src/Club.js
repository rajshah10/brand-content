import React from 'react';
import Navbar from '../src/components/common/Navbar';
import Footer from './components/common/Footer';
import horse5 from "../src/assets/images/horse5.jpg"
import { Container } from '@mui/material';

const Club = () => {
    return (
        <div className="relative">
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "40vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url('${horse5}')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Join Club
                                    </h1>
                                    {/* <p className="mt-4 text-lg text-gray-300">
                                        Frequently Asked Questions about Equellence.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Container>
                    <div className="container mx-auto px-4 py-10">
                        <div className="items-center grid md:grid-cols-1 lg:grid-cols-1 gap-4">
                            {/* <div className="w-full  ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md object-cover"
                                        src={h2}
                                    />
                                </div> */}
                            <div className="w-full ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold uppercase">
                                        Join The Club
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        The Equellence Group is the new way for Equestrians to achieve their goals and reach the top of the sport.

                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        What was once a sport where someone needed sheer luck to succeed, now, through hard work and creative talent via social media, any equestrian can acheive their goals.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Equellence fosters Equestrian Excellence through content creation. In our club platform, we provide a multitude of services to our content creators such as….
                                    </p>
                                    <ul className='list-disc ml-5 mt-4'>
                                        <li>
                                            A network and community of Equestrian content creators and professionals.
                                        </li>
                                        <li>Free VIP access to all Equellence related events </li>
                                        <li>Free VIP access to various horse shows
                                        </li>
                                        <li>Free housing and trips to many incredible countries through our group retreats</li>
                                        <li>A specially curated network and platform to communicate and collaborate with over 100+ equestrian content creators </li>
                                        <li>Access to a multitude of videos and tutorials on how to successfully grow a platform as a content creator, including trends, tips and tricks, and a place to ask questions and gain feedback.</li>
                                        <li>Opportunity to connect with big equestrian content creators and professionals from all over the world, advancing and solidifying your career longterm as an equestrian.</li>

                                    </ul>




                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </main>
            <Footer />
        </div>
    );
}

export default Club;
