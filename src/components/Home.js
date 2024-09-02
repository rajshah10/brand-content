/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import horse1 from "../assets/images/horse1.jpg"
import h2 from "../assets/images/h2.JPG"
import Navbar from './common/Navbar';
import { Container } from '@mui/material';
import Footer from './common/Footer';
import { useNavigate } from 'react-router';
import c4 from "../assets/images/carryminati.png"
import owner from "../assets/images/in1.jpg"
import c2 from "../assets/images/in2.jpg"
import c3 from "../assets/images/in3.jpg"

const Home = () => {
    const navigate = useNavigate()
    const featuredItems = [
        { id: 1, image: c2, name: 'Skylynn Flod', price: "835K", media: "TikTok" },
        { id: 2, image: c3, name: 'iamKC', price: "10K", media: "TikTok" },
        { id: 3, image: owner, name: 'Nana.sfo', price: "134K", media: "TikTok" },
        { id: 4, image: c4, name: 'Carryminati', media: "Youtube", price: "43.1M" }
    ];


    return (
        <div className='relative'>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "40vh"
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

                </div>
                <section className="relative">

                    <section className="relative py-20 bg-gray-100">
                        <Container>
                            <div className="text-center mb-8">
                                <p className="text-2xl font-bold heading-home-featured">Influencer Marketing Simplified</p>
                                <p className="text-lg text-gray-600 mt-4">Find and hire top Instagram, TikTok, YouTube, and UGC influencers to create unique content for your brand</p>
                            </div>







                            <div className="container mx-auto px-4 my-2">
                                <p className="text-2xl font-bold ">Featured</p>
                                <p className="text-gray-600 font-sm">Hire top influencers across all platforms</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">

                                    {featuredItems.map(item => (
                                        <div onClick={()=>navigate("/brands")} key={item.id} className="relative group cursor-pointer">
                                            <div className="relative">
                                                <img
                                                    alt={item.name}
                                                    src={item.image}
                                                    className="w-full h-72 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t  rounded-b-lg">
                                                    <h4 className="text-white text-lg font-semibold">{item.name}</h4>

                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className='flex justify-between items-center'>
                                                    <p className="text-gray-400 text-sm">{item.media}</p> <p className="text-black font-bold text-md">{item.price}</p></div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section>


                    <Container>
                        <div className="container mx-auto px-4 py-10">
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

                   

                    <Container>
                        <div className="bg-[#F8FAFC] py-10 my-10 mx-4">
                            <div className="container mx-auto px-4">
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold uppercase mb-4">
                                        Get in Touch
                                    </h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Have any further questions or need to get in touch? You can send us an email at <a href="mailto:equellence@gmail.com" className="text-blue-500 hover:underline">equellence@gmail.com</a>.
                                    </p>
                                    {/* <div className="flex justify-center " onClick={()=>navigate("/contact")}>
                                        <a className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                            Contact Us
                                        </a>
                                    </div> */}
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
