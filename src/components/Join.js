/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCreatorFlow from "./ContentCreatorFlow";
import Brands from "./Brands";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import horse6 from "../assets/images/horse6.JPEG"
import horse7 from "../assets/images/horse7.JPEG"
import horse8 from "../assets/images/horse8.JPEG"
import horse9 from "../assets/images/horse9.JPEG"
import horse10 from "../assets/images/horse10 (1).jpg"
import horse11 from "../assets/images/horse10 (2).jpg"
import horse12 from "../assets/images/horse10 (3).JPEG"
import StripePricingTable from './StripPricingTable';


const Join = () => {
    const pricingRef = useRef(null);
    const location = useLocation();
    const type = location.state?.type;
    const [showPricingTable, setShowPricingTable] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('contentCreator');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (showPricingTable) {
            pricingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showPricingTable]);


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

    useEffect(() => {
        if (type === "brand") {
            setSelectedOption("brand")
        }
    }, [])

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selected_partner', option)
    };
    const handleNavigate = () => {
        navigate("/")
    }

    return (
        <>

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
                            onClick={handleNavigate}
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
                                    {
                                        selectedOption !== "brand" && <p className='text-sm text-gray-600 mt-4'>This registration is through invite only. Pls write to  equellence@gmail.com to get an invite</p>
                                    }
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
                            {formSubmitted && selectedOption === "contentCreator" &&
                                <ContentCreatorFlow setFormSubmitted={setFormSubmitted} step={step} setStep={setStep} />}
                            {formSubmitted && selectedOption === "brand" && <Brands setShowPricingTable={setShowPricingTable} setFormSubmitted={setFormSubmitted} step={step} setStep={setStep} />}
                        </>
                    }

                </div>
                <div className="relative w-full h-full lg:h-screen md:w-2/4">
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
                                <img src={url} className="object-cover w-full h-screen lg:h-screen" alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className={`${selectedOption === "brand" ? "absolute" : "lg:absolute"} bottom-12 lg:bottom-2 left-4 right-4 md:left-8 md:bottom-16`}>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                            {((selectedOption === "brand" && type === "brand") || (selectedOption === "brand" && type !== "brand")) && (
                                <div className='bg-slate-800 lg:rounded-md bg-opacity-80 py-4 px-2 lg:px-4 lg:flex flex-col justify-center gap-4'>
                                    <h3 className="text-3xl font-semibold uppercase">
                                        Brands
                                    </h3>
                                    <p className="mt-4 text-sm lg:text-lg leading-relaxed text-white">
                                        Equellence is a platform where brands can connect with Equestrian-specific influencers. Brands will be able to communicate a campaign, and Equellence will do the rest by allowing our Influencers to apply to your campaign. The brand can then select the influencer to make engaging content for the brand.
                                    </p>
                                    <p className="mt-4 text-sm lg:text-lg leading-relaxed text-white">
                                        With your subscription, you’ll unlock exclusive access to our powerhouse network of influencers and content creators. But that’s just the beginning—enjoy personal, one-on-one mentorship designed to elevate your marketing game and ignite your brand’s potential. Plus, you’ll be seamlessly connected to key industry insiders, unlocking doors you didn’t even know existed.
                                    </p>
                                    <p className="mt-4 text-sm lg:text-lg leading-relaxed text-white">Ready to level up?</p>
                                </div>

                            )}
                            {((selectedOption === "contentCreator" && type === "brand") || (selectedOption !== "brand" && type !== "brand")) && (
                                <div className='bg-slate-800 lg:rounded-md bg-opacity-80  lg:flex flex-col justify-center gap-4 py-4 px-2'>
                                    <div className="w-full ml-auto mr-auto px-4">
                                        <div className="md:pr-12">
                                            <h3 className="text-3xl font-semibold uppercase">
                                                Influencers
                                            </h3>
                                            <p className="mt-4 text-sm leading-relaxed text-white-600">
                                                At Equellence, we offer much more than just travel opportunities and collaborations with prestigious brands—though, yes, those are certainly part of the experience. What truly sets Equellence apart is the unparalleled community and network that our members become a part of. When you join Equellence, you enter a realm of kindred spirits—a collective of creators bound not just by their love for the equestrian world but by a shared vision to elevate humanity and themselves to new heights.

                                            </p>
                                            <p className="mt-4 text-sm leading-relaxed text-white-600">
                                                We are more than a club; we are a movement, a network of excellence that will amplify your voice and propel your message to the farthest reaches of your potential.
                                                Our creators are not only gifted with opportunities but equipped with the strategies necessary to become masters of their own story. Through our specialized mentorship, you will learn how to channel your message into a powerful force, honing your influence to resonate deeply with your audience. At Equellence, we believe that your personal narrative, when aligned with the wisdom and majesty of the horse, has the power to transcend the ordinary and impact lives. We will teach you how to make this a reality through social media mastery, storytelling techniques, and the secrets to sustainable growth in the content creator space.
                                            </p>

                                            <p className="mt-4 text-sm leading-relaxed text-white-600">
                                                Equellence is not just fostering collaborations; we are fostering equestrian excellence. By joining us, you are aligning yourself with a legacy—a network that will guide, support, and uplift you as you ascend to your highest potential. You’ll be surrounded by others who, like you, have defied the odds, remaining steadfast in their authenticity and light. Together, we will craft a future where your voice, your vision, and your story can truly soar.

                                            </p>
                                            <p className="mt-4 text-sm leading-relaxed text-white-600">This is your chance to not only elevate your brand but to become part of a collective consciousness—one that recognizes the beauty, strength, and transformative power of the horse. Step into your greatness. With Equellence, you are not just a content creator; you are a beacon of influence, a force of nature, and a beacon of excellence.
                                            </p>
                                            <p className="mt-4 text-sm leading-relaxed text-white-600">
                                                If you’re interested in joining our club, please <a className='text-blue-400' href="https://docs.google.com/forms/d/1uWacTgHxrDFmpJEP1VFdcyGVNdHmTRZMsw6ePEpkrx8/edit#response=ACYDBNjsSqBPLzOk-L9_yNfEJ_MChTgJZrmRJeoy-UK5flZoeQgMdQNs9ZIhyxviE5h249U" target="_blank">apply here</a>
                                            </p>
                                            {/* <ul className='list-disc ml-5 mt-4 text-sm'>
                                                <li>
                                                    <span className='text-cyan-300 font-semibold mr-1'>Automatic website approval</span>
                                                </li>
                                                <li><span className='text-cyan-300 font-semibold mr-1'>Account boosting:</span> As you’ve seen on our social media page, we oftentimes post videos and photos of our members. These reels/images boost your account and engagement, and also help curate your feed as a content creator. You can upload images/videos to our group forum for us to edit and post for you.
                                                </li>
                                                <li>
                                                    <span className='text-cyan-300 font-semibold mr-1'>Individual account growth and help:</span> New members get individual club meetings from our club founder on strategies with how to grow your account, and personal assistance.
                                                </li>
                                                <li><span className='text-cyan-300 font-semibold mr-1'>Masterclass: </span>Our masterclass aids you on specific content trends, goals, strategies and more on how to grow your page and personal brand! </li>
                                                <li>
                                                    <span className='text-cyan-300 font-semibold mr-1'>Paid/unpaid opportunities and special perks:</span>
                                                    There are fun perks that happen in the club. We have collaborations between members, paid and unpaid opportunities, traveling opportunities, brand partnerships and more
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>

                            )}
                        </h1>

                    </div>

                </div>

            </div>
            {
                selectedOption === "brand" && 
                <div ref={pricingRef} className='mt-96 pyu-8 md:mt-0 lg:mt-0 flex flex-col items-center'>
                    <div className='my-24'>
                    <p>Brands, want to join Equellence? Book a call with us to get signed up!</p>
                    <a href="https://calendly.com/meetingswithnana/discovery-call" class="button">Book a call</a>
                    </div>
                </div>
            }

        </>
    )
}

export default Join
