import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { Container } from '@mui/material';
import horse2 from "../assets/images/horse2.jpg"
import horse3 from "../assets/images/horse3.jpg"
import owner from "../assets/images/owner.jpg"
import owner1 from "../assets/images/owner1.jpg"
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
                            backgroundImage: `url('${horse2}')`
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
                <Container>
                    <section className="relative py-20">
                        <div className="container mx-auto">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md"
                                        src={horse3}
                                    />
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold">
                                            What is Equellence ?
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Started in 2024, Equellence is a social media agency-like group that connects equestrian content creators with brands, events, and opportunities.
                                        </p>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            The main objective of Equellence is to bridge the gap between the equestrian and the non-horse world by connecting equestrians, brands, barns, and events while promoting individual content creation and social media through a specifically curated equestrian network.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                <Container>
                    <div className='px-4'>
                        <p className=" text-lg leading-relaxed text-gray-600">
                            We help our members excel through the sport in a non-conventional way. Equellence provides them with both equestrian and non-equestrian related opportunities. Equellence fosters a culture of creativity through content creation, and features a broad range of Equestrians content creators making waves and changing the industry one by one through passion, talent, and activism. Equellence also focuses on an emphasis of partnering with non-equestrian related brands specifically, as not only does it provide an inside look to others that are not part of the horse world, but also helps solidify a longterm career for our content creators within any industry.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            Equellence assists equestrian content creators by landing them paid brand deals, PR collateral, and sponsorship opportunities, as well as connecting them with unique and exclusive events around the world.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            Equellence is changing the standards of the equestrian Industry. What once was a world where privilege was the main contributor to success and reach the top of this sport, now anyone with a strong voice, genuine talent, passion, and creativity can achieve their goals.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            Equellence fosters diversity by accepting all equestrians from all walks of life, countries, and origins. Our diverse network truly showcases a new vision for the equestrian world. Our members originate from all cultures, ethnicities, and nationalities, which will enable a unique collaboration network across the world and help all types of riders from all backgrounds to get to the top of the sport through a long-term career outlet.
                        </p>
                    </div>
                </Container>
                <section className="relative py-20">
                    <Container>
                        <div className="container mx-auto">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold">
                                            Meet the Founder
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            NANA SARFO
                                        </p>
                                        <p className="mt-4 text-lg  text-gray-600">
                                            Nana Sarfo is a 20-year-old Ghanaian-American Equestrian, Entrepreneur, Influencer, and advocate. She first sat on a pony at nine and quickly caught the horse bug. She started officially taking riding lessons just before her 13th birthday and has been riding ever since. Nana has classical training in the Hunter/jumper discipline and has ridden mainly on the California circuit. Nana has also gotten international training in Fermo, Italy. She has recently started her career as a show jumper with her new horse, Santiago.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full  ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md"
                                        src={owner}
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <Container>
                    <div className='px-4'>
                        <p className="text-lg  text-gray-600">
                            Nana has always had a knack for entrepreneurship. She started her first business at just thirteen years old called LPSCon, an annual convention for Littlest Pet Shop enthusiasts that attracts 900 attendees yearly. She has been running this event ever since.
                        </p>
                        <p className="mt-4 text-lg  text-gray-600">
                            At nineteen, Nana decided to start taking Equestrian content creation seriously. She explores the industry's issues on her social media through comedy and inspires other Equestrians and non-horse enthusiasts to join the sport.
                        </p>
                        <p className='mt-4 text-lg  text-gray-600'>
                                            Diversity and inclusion is also a topic Nana explores on her social media and is highly passionate about. As Ghanaian immigrants, Nana's parents knew absolutely nothing about horses. It was a foreign concept to them, so obtaining knowledge and opportunity in the sport was tough. Furthermore, she quickly realized she was the only black rider in the Nevadan Hunter/Jumper circuit and one of only a handful in the California circuit. Nana advocates for diversity through her social media and fosters groups and platforms for POC Equestrians to connect and prosper.
                                        </p>
                    </div>

                </Container>
                <section className="relative py-20">
                    <Container>
                        <div className="container mx-auto">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full  ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md"
                                        src={owner1}
                                    />
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <p className='mt-4 text-lg  text-gray-600'>
                                        Nana’s long-term goals as an Equestrian are to become an industry professional, open her stable, and compete at the Grand prix level. Nana also plans to open a nonprofit to help Ghanaian Equestrians succeed through horses, handwork, and passion. Nana also has dreams in the fashion, acting, modeling, and influencer world. Nana also has big ambitions and wants to create an environment where every rider can succeed through talent and passion, so Equellence was formed. She has over 137K followers across all her social platforms and is committed to diversifying the horse world one hoof at a time.
                                        </p>
                                    </div>
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
