/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import horse1 from "../assets/images/horse1.jpg"
import h2 from "../assets/images/h2.JPG"
import Navbar from './common/Navbar';
import { Container } from '@mui/material';
import Footer from './common/Footer';
import { useNavigate } from 'react-router';
import c4 from "../assets/images/carryminati.png"
import owner from "../assets/images/owner.jpeg"
import c2 from "../assets/images/RNI-Films-IMG-BD7361CA-04F9-4580-A98E-A68E421071D4.JPG"
import c3 from "../assets/images/horse10 (2).jpg"

const Home = () => {
    const navigate = useNavigate()
    const featuredItems = [
        { id: 1, image: c2, name: 'Skylynn Flod', price: "835", media: "TikTok" },
        { id: 2, image: c3, name: 'iamKC', price: "10K", media: "TikTok" },
        { id: 3, image: owner, name: 'Nana.sfo', price: "134K", media: "TikTok" },
        { id: 4, image: c4, name: 'Carryminati', media: "Youtube", price: "25M" }
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
                                <p className="text-2xl font-bold heading-home-featured">Influencer Marketing Made Easy</p>
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
                                            Brands
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Equellence is a platform where brands can connect with Equestrian-specific influencers. Brands will be able to communicate a campaign, and Equellence will do the rest by allowing our Influencers to apply to your campaign. The brand can then select the influencer to make engaging content for the brand.
                                        </p>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            With your subscription, you’ll unlock exclusive access to our powerhouse network of influencers and content creators. But that’s just the beginning—enjoy personal, one-on-one mentorship designed to elevate your marketing game and ignite your brand’s potential. Plus, you’ll be seamlessly connected to key industry insiders, unlocking doors you didn’t even know existed.
                                        </p>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Ready to level up?</p>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            <span className='text-slate-800 font-medium'>Already have an account? </span><span className='cursor-pointer text-[#4F46E5]' onClick={() => navigate("/login")}>login here</span>
                                        </p>

                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            <button onClick={() => navigate("/join")} className="flex w-fit justify-center rounded-md bg-[#4F46E5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Sign Up
                                            </button>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>

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
                                            Influencers
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Equellence carefully chooses the best equestrian content creators. If you’re wanting to join our website, please apply using this application:

                                        </p>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Not only do you gain access to our website and brand database, but also when you join the Equellence club, you receive….
                                        </p>
                                        <ul className='list-disc ml-5 mt-4'>
                                            <li>
                                                <span className='text-[#4F46E5] font-semibold mr-1'>Automatic website approval</span>
                                            </li>
                                            <li><span className='text-[#4F46E5] font-semibold mr-1'>Account boosting:</span> As you’ve seen on our social media page, we oftentimes post videos and photos of our members. These reels/images boost your account and engagement, and also help curate your feed as a content creator. You can upload images/videos to our group forum for us to edit and post for you.
                                            </li>
                                            <li>
                                                <span className='text-[#4F46E5] font-semibold mr-1'>Individual account growth and help:</span> New members get individual club meetings from our founder @nana.sfo on strategies with how to grow your account, and personal assistance.
                                            </li>
                                            <li><span className='text-[#4F46E5] font-semibold mr-1'>Masterclass: </span>Our masterclass aids you on specific content trends, goals, strategies and more on how to grow your page and personal brand! </li>
                                            <li>
                                                <span className='text-[#4F46E5] font-semibold mr-1'>Paid/unpaid opportunities and special perks:</span>
                                                There are fun perks that happen in the club. We have collaborations between members, paid and unpaid opportunities, traveling opportunities, brand partnerships and more
                                            </li>
                                        </ul>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            <span className='text-slate-800 font-medium'>Already have an account? </span><span className='cursor-pointer text-[#4F46E5]' onClick={() => navigate("/login")}>login here</span>
                                        </p>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            <button onClick={() => navigate("/join")} className="flex w-fit justify-center rounded-md bg-[#4F46E5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Sign Up
                                            </button>
                                        </p>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>

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
                                                Aa network nad community of Equestrian content creators and professionals from all over the world
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

                    <Container>
                        <div className="w-full ml-auto mr-auto px-8 py-10">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold uppercase">
                                    Subscriptions
                                </h3>
                            </div>
                        </div>

                        <div className="bg-[#F8FAFC] mx-4">
                            <div className="py-3  flex items-center justify-center px-4 sm:px-6 lg:px-8">
                                <div className="max-w-7xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500 flex flex-col">
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-bold text-gray-800 mb-2">Small Business</h3>
                                                <p className="text-2xl font-semibold text-gray-800 mb-4">$79.99/month</p>
                                                <p className="text-gray-600 mb-4"> Brands with minimal following and exposure, general brands, brands that will mostly do gift exchange, commissions, ambassador or unpaid opportunities. This tier will attract lower influencers from our site due to the mid paid campaign size (1K-10K)
                                                </p>
                                                <ul className="text-gray-600 space-y-2 mb-4">
                                                    <li>✔️ Gifted Campaigns</li>
                                                    <li>✔️ PR Campaigns</li>
                                                    <li>✔️ Work with 3 Influencer Campaigns per month</li>
                                                    <li>✔️ Assigned Influencer per Campaign</li>
                                                </ul>
                                            </div>
                                            {/* <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                                        Choose Plan
                                                    </button> */}
                                        </div>


                                        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-green-500 flex flex-col">
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-bold text-gray-800 mb-2">Standard Business</h3>
                                                <p className="text-2xl font-semibold text-gray-800 mb-4">$199.99/month</p>
                                                <p className="text-gray-600 mb-4">
                                                    Brands with average following and exposure, general brands, brands that will mostly do gift exchange, commissions, ambassador and some paid campaigns with a limited budget. This tier will attract lower midinfluencers from our site due to the mid paid campaign size (10K-50K)

                                                </p>
                                                <ul className="text-gray-600 space-y-2 mb-4">
                                                    <li>✔️ Paid Campaigns (disclose budget per Campaign)</li>
                                                    <li>✔️ Gifted Campaigns</li>
                                                    <li>✔️ 5 Influencer Campaigns per month</li>
                                                    <li>✔️ Ability to select Influencers per Campaign</li>
                                                </ul>
                                            </div>
                                            {/* <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                                        Choose Plan
                                                    </button> */}
                                        </div>


                                        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-indigo-500 flex flex-col">
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-bold text-gray-800 mb-2">Professionals Business</h3>
                                                <p className="text-2xl font-semibold text-gray-800 mb-4">$399.99/month</p>
                                                <p className="text-gray-600 mb-4">Brands with high following and exposure, general brands, brands that will mostly do PR and paid campaigns. This tier will attract upper midinfluencers from our site due to the paid campaigns (50K+) Best for all types of Corporations or big companies looking to expand their outreach.</p>
                                                <ul className="text-gray-600 space-y-2 mb-4">
                                                    <li>✔️ Paid Campaigns (disclose budget per Campaign)</li>
                                                    <li>✔️ PR Campaigns</li>
                                                    <li>✔️ Gifted Campaigns</li>
                                                    <li>✔️ 5 Influencer Campaigns per month</li>
                                                    <li>✔️ Unlimited Influencer Campaigns per month</li>
                                                    <li>✔️ Ability to select Influencer per Campaign</li>
                                                    <li>✔️ Highlighted campaigns</li>
                                                    <li>✔️ Campaigns boosted to the top of the page for increased visibility </li>
                                                    <li>✔️ Priority for Events</li>
                                                    <li>✔️ Newsletter inclusion</li>
                                                </ul>
                                            </div>
                                            {/* <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                                                        Choose Plan
                                                    </button> */}
                                        </div>
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
