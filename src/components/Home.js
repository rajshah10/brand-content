/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import horse1 from "../assets/images/horse1.jpg"
import h2 from "../assets/images/h2.JPG"
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Autocomplete } from '@mui/material';

import Navbar from './common/Navbar';
import { Container } from '@mui/material';
import Footer from './common/Footer';

const platforms = ['Instagram', 'TikTok', 'YouTube', 'UGC'];
const categories = ['Fashion', 'Beauty', 'Lifestyle', 'Fitness'];

const Home = () => {

    const featuredItems = [
        { id: 1, image: 'https://d5ik1gor6xydq.cloudfront.net/sellers/18115/1627627424282652.webp', name: 'Equestrian Helmet', subname: 'Premium Safety', price: '$120', description: 'Top-notch safety and comfort.' },
        { id: 2, image: 'https://d5ik1gor6xydq.cloudfront.net/sellers/194452/17235002820285673.webp', name: 'Riding Boots', subname: 'Leather Finish', price: '$220', description: 'Stylish and durable.' },
        { id: 3, image: 'https://d5ik1gor6xydq.cloudfront.net/sellers/8114/16276320783904722.webp', name: 'Saddle', subname: 'Comfort Fit', price: '$350', description: 'Ergonomic design for riders.' },
        { id: 4, image: 'https://d5ik1gor6xydq.cloudfront.net/sellers/14764/16276268044178376.webp', name: 'Horse Blanket', subname: 'Winter Warmth', price: '$80', description: 'Keep your horse warm and cozy.' }
    ];


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

                    <section className="relative py-20 bg-gray-100">
                        <Container>
                            <div className="text-center mb-8">
                                <p className="text-2xl font-bold heading-home-featured">Influencer Marketing Made Easy</p>
                                <p className="text-lg text-gray-600 mt-2">Find and hire top Instagram, TikTok, YouTube, and UGC influencers to create unique content for your brand</p>
                            </div>


                            <div className="flex justify-center mb-8">
                                <div
                                    className="flex items-center rounded-lg shadow-md p-2 w-full max-w-5xl"
                                    style={{ borderRadius: "5rem", width: "85%" }} // Adjusted container width
                                >
                                    <Autocomplete
                                        options={platforms}
                                        getOptionLabel={(option) => option}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Choose Platform"
                                                fullWidth
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    sx: {
                                                        border: 'none',
                                                        outline: 'none',
                                                    },
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 0,
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                    },
                                                }}
                                            />
                                        )}
                                        sx={{ width: "45%" }}
                                    />
                                    <Autocomplete
                                        multiple
                                        options={categories}
                                        getOptionLabel={(option) => option}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Choose Category"
                                                fullWidth
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    sx: {
                                                        border: 'none',
                                                        outline: 'none',
                                                    },
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 0,
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                    },
                                                }}
                                            />
                                        )}
                                        sx={{ width: "45%", ml: 2 }}
                                    />
                                    <SearchIcon className="text-gray-500 ml-4 search-homepage" />
                                </div>
                            </div>




                            <p className="text-2xl font-bold  mx-auto px-4">Featured</p>
                            <p className="text-gray-600 font-sm mx-auto px-4">Hire top influencers across all platforms</p>
                            <div className="container mx-auto px-4 my-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {featuredItems.map(item => (
                                        <div key={item.id} className="relative group">
                                            <div className="relative">
                                                <img
                                                    alt={item.name}
                                                    src={item.image}
                                                    className="w-full h-72 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
                                                    <h4 className="text-white text-lg font-semibold">{item.name}</h4>
                                                    <p className="text-gray-300 text-sm">{item.subname}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className='flex justify-between'><p className="text-gray-400 text-sm">Instagram</p> <p className="text-black font-bold text-xl">{item.price}</p></div>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section>


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
