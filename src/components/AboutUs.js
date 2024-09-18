import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { Container } from '@mui/material';

import owner from "../assets/images/owner.PNG"
import horse6 from "../assets/images/horse10 (4).JPEG"
import horse2 from "../assets/images/IMG_0931_edited - Arianna Ames.jpg"
const AboutUs = () => {
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
                            backgroundImage: `url('${horse2}')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-35 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12 mt-6">
                                    <h1 className="text-white font-semibold text-5xl">
                                        About Us
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        At Equellence, we work with brands and Equestrians to create a new world vision.

                                        On our website, brands are able to work with an infleuncer of their choice to create content for thier pages. Our roster includes many extremely talented Equestrian content creators, who are excited to spread your brand’s goals and mission through an impressive medium-the world of horses.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <Container>
                    <section className="relative py-20">
                        <div className="container mx-auto">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="w-full ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full  rounded-lg shadow-md"
                                        src={horse6}
                                    />
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold">
                                            What is Equellence?
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            Started in 2024, Equellence is a social media agency-like group that connects equestrian content creators with brands, events, and opportunities.

                                            The main objective of Equellence is to bridge the gap between the equestrian and the non-horse world by connecting equestrians, brands, barns, and events while promoting individual content creation and social media through a specifically curated equestrian network.

                                            We help our members excel through the sport in a non-conventional way. Equellence provides them with both equestrian and non-equestrian related opportunities. Equellence fosters a culture of creativity through content creation, and features a broad range of Equestrians content creators making waves and changing the industry one by one through passion, talent, and activism. Equellence also focuses on an emphasis of partnering with non-equestrian related brands specifically, as not only does it provide an inside look to others that are not part of the horse world, but also helps solidify a longterm career for our content creators within any industry.

                                            Equellence assists equestrian content creators by landing them paid brand deals, PR collateral, and sponsorship opportunities, as well as connecting them with unique and exclusive events around the world.
                                        </p>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                <Container>
                    <div className='px-4'>
                        <h3 className="text-3xl font-semibold">
                            Equellence's Mission
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            In a realm where excellence transcends mere aspiration, Equellence emerges as the herald of a new golden age—a world where opulence, wisdom, and grace converge into a symphony of human potential. Equellence exists to unlock the doors of divine experience, offering all the opportunity to access a frequency of pure, unadulterated love.
                            At the heart of this mission stands the horse: a being of light incarnate, an ancient and exalted force that has forever shaped our path. The horse is no ordinary creature. Horses possess an extraordinary aura, vibrating at a powerful frequency of 444 Hz, known to soothe and heal the human soul. Their mere presence extends beyond the ordinary, capable of sensing a heartbeat from over 40 feet away, their intuitive gifts inspiring awe in even the most skeptical minds. For thousands of years, horses have carried us, guided us, and helped elevate the human race. They are the bearers of a frequency that illuminates our greatest potential, awakening within us the dormant forces of love, clarity, and divine purpose.

                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            Equellence is more than a brand—it is a revolution of consciousness, a movement toward the realization of a world in which the divine nature of the horse is universally recognized, celebrated, and cherished. This is a world where anyone, no matter their background, can rise into their own version of excellence, connected to the cosmic energy embodied by these extraordinary creatures.

                        </p>
                        <p className=" text-lg leading-relaxed text-gray-600">
                            We exist to make this reality tangible for all. Through Equellence, luxury is not exclusive but all-encompassing. We have arrived to uplift humanity into its higher frequency, ensuring that every person can step into the light, alongside the majestic beings that have so generously offered themselves to our journey. We spread the wisdom of the horse to inspire confidence, growth, and a profound spiritual awakening in every soul.
                            This is the Equellence vision. To guide humanity into a future where love, divinity, and excellence reign supreme, led by the grace of the horse—our most ancient and powerful companions.

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
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-auto rounded-lg object-contain"
                                        src={owner}
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="relative py-20">
                    <Container>
                        <div className="container mx-auto">
                            <div className="items-center grid md:grid-cols-1 lg:grid-cols-1 gap-4">
                                {/* <div className="w-full  ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="w-full h-96 rounded-lg shadow-md object-cover"
                                        src={owner1}
                                    />
                                </div> */}
                                <div className="w-full ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <p className='mt-4 text-lg  text-gray-600'>
                                            Nana’s long-term goals as an Equestrian are to become an industry professional, open her stable, and compete at the Grand prix level. Nana also plans to open a nonprofit to help Ghanaian Equestrians succeed through horses, handwork, and passion. Nana also has dreams in the fashion, acting, modeling, and influencer world. Nana also has big ambitions and wants to create an environment where every rider can succeed through talent and passion, so Equellence was formed. She has over 207,000 followers across all her social platforms and is committed to diversifying the horse world one hoof at a time.
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
