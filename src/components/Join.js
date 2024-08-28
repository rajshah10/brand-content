/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCreatorFlow from "./ContentCreatorFlow";
import Brands from "./Brands";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import horse6 from "../assets/images/horse6.JPEG"
import horse7 from "../assets/images/horse7.JPEG"
import horse8 from "../assets/images/horse8.JPEG"
import horse9 from "../assets/images/horse9.JPEG"
import horse10 from "../assets/images/horse10 (1).jpg"
import horse11 from "../assets/images/horse10 (2).jpg"
import horse12 from "../assets/images/horse10 (3).JPEG"


const Join = () => {

    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('contentCreator');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    const images = {
        brand: [
            horse8,
            horse9,
            horse6,
            horse12

        ],
        contentCreator: [
            horse10,
            horse7,
            horse11,
        ],
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption) {
            setFormSubmitted(true);
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selected_partner', option)
    };

    return (
        <div className="flex flex-col md:flex-row lg:flex-row h-screen">
            <div className="flex flex-col justify-center w-full md:w-2/4 px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full md:max-w-sm lg:max-w-lg">
                    {formSubmitted && step === 1 && (
                        <div className="mb-4 ml-4">
                            <IconButton onClick={() => setFormSubmitted(false)} style={{ color: "#4F46E5" }} aria-label="back">
                                <ArrowBackIcon />
                            </IconButton>
                        </div>
                    )}
                    <img
                        onClick={() => navigate("/")}
                        className="mx-auto w-48 cursor-pointer"
                        src={require("../assets/images/Logo.png")}
                        alt="Your Company"
                    />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {formSubmitted ? (selectedOption === "contentCreator" ? "Content Creator Onboarding" : "Brand Onboarding") : "Choose one"}
                    </h2>
                </div>

                {
                    <>
                        {!formSubmitted && (
                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 text-center gap-2">
                                        <div
                                            className={`border py-4 rounded-md cursor-pointer ${selectedOption === 'contentCreator' ? 'border-slate-400' : 'border-slate-200'}`}
                                            onClick={() => handleOptionClick('contentCreator')}
                                        >
                                            <span>Content Creator</span>
                                        </div>
                                        <div
                                            className={`border py-4 rounded-md cursor-pointer ${selectedOption === 'brand' ? 'border-slate-400' : 'border-slate-200'}`}
                                            onClick={() => handleOptionClick('brand')}
                                        >
                                            <span>Brand</span>
                                        </div>
                                    </div>


                                    {
                                        <div>
                                            <button className="flex w-full justify-center rounded-md bg-[#4F46E5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Next
                                            </button>
                                        </div>
                                    }


                                </form>
                                {/* {error && <p className="mt-2 text-sm text-red-600">{error}</p>} */}

                                <p className="mt-4 text-sm text-gray-500">
                                    <a
                                        className="font-semibold  leading-6 text-indigo-600 hover:text-indigo-500"
                                    >

                                        <span className='text-slate-800 font-medium'>Already a member? </span><span onClick={() => navigate("/login")} className='cursor-pointer'>Login here</span>

                                    </a>
                                </p>
                            </div>
                        )}

                    </>
                }
                {

                    <>
                        {formSubmitted && selectedOption === "contentCreator" && <ContentCreatorFlow setFormSubmitted={setFormSubmitted} step={step} setStep={setStep} />}
                        {formSubmitted && selectedOption === "brand" && <Brands setFormSubmitted={setFormSubmitted} step={step} setStep={setStep} />}
                    </>
                }

            </div>
            <div className="relative w-full h-screen md:w-2/4">
                <Carousel
                    showArrows={false}
                    showIndicators={true}
                    showStatus={false}
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    showThumbs={false}
                >
                    {images[selectedOption].map((url, index) => (
                        <div key={index}>
                            <img src={url} className="object-cover w-full h-screen" alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Carousel>
                <div className="absolute bottom-12 left-8 right-8 md:left-8 md:bottom-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {selectedOption === "brand" && (
                            <div className='bg-slate-800 rounded-md bg-opacity-50 py-4 px-4 flex flex-col justify-center gap-4'>
                                <h1 className="text-white text-4xl">Brands</h1>
                                <p className='text-slate-200 text-lg'>Equellence is a platform where brands can connect with Equestrian-specific influencers. Brands will be able to communicate a campaign, and Equellence will do the rest by allowing our Influencers to apply to your campaign. The brand can then select the influencer to make engaging content for the brand.
                                </p>
                                <p className='text-slate-200 text-left text-lg'>With your subscription, you’ll unlock exclusive access to our powerhouse network of influencers and content creators. But that’s just the beginning—enjoy personal, one-on-one mentorship designed to elevate your marketing game and ignite your brand’s potential. Plus, you’ll be seamlessly connected to key industry insiders, unlocking doors you didn’t even know existed.</p>
                                <p className='text-slate-200 text-left text-lg'>Ready to level up?
                                </p>
                                <p className='text-slate-200 text-left text-lg'>Sign up with Equellence now!</p>
                            </div>

                        )}
                        {selectedOption === "contentCreator" && (
                            <div className='bg-slate-800 rounded-md bg-opacity-50 flex flex-col justify-center gap-4 py-4 px-4'>

                                <h1 className="text-white text-4xl">Join Equellence</h1>
                                <p className='text-slate-200 text-lg'>Equellence carefully chooses the best equestrian content creators. If you’re wanting to join our website, please apply using this application:
                                </p>
                                <p className='text-slate-200 text-lg'>
                                    Not only do you gain access to our website and brand database, but also when you join the Equellence club, you receive….
                                </p>
                                <ul className='list-disc text-slate-200 text-left ml-10 text-lg'>
                                    <li>Automatic website approval </li>
                                    <li>Account boosting</li>
                                    <li>Individual account growth and help</li>
                                    <li>Masterclass</li>
                                    <li>Paid/unpaid opportunities and special perks</li>
                                </ul>
                            </div>

                        )}
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default Join
