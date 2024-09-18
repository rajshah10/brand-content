/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import horse2 from "../assets/images/horse12.jpg"

const Joinclub = () => {
    return (
        <div>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "70vh"
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
                                    Join the Club
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="w-full ml-auto mr-auto px-4 my-6">
                <div className="md:pr-12">
                    <h3 className="text-3xl font-semibold">
                        Equellence’s Mission
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        At Equellence, we offer much more than just travel opportunities and collaborations with prestigious brands—though, yes, those are certainly part of the experience. What truly sets Equellence apart is the unparalleled community and network that our members become a part of. When you join Equellence, you enter a realm of kindred spirits—a collective of creators bound not just by their love for the equestrian world but by a shared vision to elevate humanity and themselves to new heights

                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        We are more than a club; we are a movement, a network of excellence that will amplify your voice and propel your message to the farthest reaches of your potential. Our creators are not only gifted with opportunities but equipped with the strategies necessary to become masters of their own story. Through our specialized mentorship, you will learn how to channel your message into a powerful force, honing your influence to resonate deeply with your audience. At Equellence, we believe that your personal narrative, when aligned with the wisdom and majesty of the horse, has the power to transcend the ordinary and impact lives. We will teach you how to make this a reality through social media mastery, storytelling techniques, and the secrets to sustainable growth in the content creator space.


                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Equellence is not just fostering collaborations; we are fostering equestrian excellence. By joining us, you are aligning yourself with a legacy—a network that will guide, support, and uplift you as you ascend to your highest potential. You’ll be surrounded by others who, like you, have defied the odds, remaining steadfast in their authenticity and light. Together, we will craft a future where your voice, your vision, and your story can truly soar.
                        .


                    </p>
                    <p className='mt-4 text-lg  text-gray-600'>
                       <p className='font-bold'> WHEN YOU JOIN THE EQUELLENCE CLUB YOU RECEIVE:</p>
                        <ul class="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                            <li>Access to our club forum with our vast equestrian content creator network consisting of riders, barns, and trainers</li>
                            <li>Collaboration and content opportunities</li>
                            <li>Travel opportunities (lodging included)</li>
                            <li>VIP Passes to various events and horse shows</li>
                            <li>Exclusive networking events</li>
                            <li>Access to collaborate with our brands, including paid, gifted, and modeling opportunities</li>
                            <li>Extra account help and boosting</li>
                            <li>Masterclass sessions and tutorials to help grow a following</li>
                            <li>Plus many more perks!</li>
                        </ul>

                    </p>
                    <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                        This is your chance to not only elevate your brand but to become part of a new change to the horse world—one that recognizes the beauty, strength, love and diversity through horses.

                        Step into your greatness. With Equellence, you are not just a content creator; you are a beacon of influence, a force of nature, and a beacon of excellence.

                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        If you’re interested in joining our club, please <a className='text-blue-400' href="https://docs.google.com/forms/d/1uWacTgHxrDFmpJEP1VFdcyGVNdHmTRZMsw6ePEpkrx8/edit#response=ACYDBNjsSqBPLzOk-L9_yNfEJ_MChTgJZrmRJeoy-UK5flZoeQgMdQNs9ZIhyxviE5h249U" target="_blank">apply here</a>
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Joinclub
