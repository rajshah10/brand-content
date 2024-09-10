/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import horse2 from "../assets/images/horse2.jpg"

const Joinclub = () => {
    return (
        <div>
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
                        In a realm where excellence transcends mere aspiration, Equellence emerges as the herald of a new golden age—a world where opulence, wisdom, and grace converge into a symphony of human potential. Equellence exists to unlock the doors of divine experience, offering all the opportunity to access a frequency of pure, unadulterated love.
                        At the heart of this mission stands the horse: a being of light incarnate, an ancient and exalted force that has forever shaped our path. The horse is no ordinary creature. Horses possess an extraordinary aura, vibrating at a powerful frequency of 444 Hz, known to soothe and heal the human soul. Their mere presence extends beyond the ordinary, capable of sensing a heartbeat from over 40 feet away, their intuitive gifts inspiring awe in even the most skeptical minds. For thousands of years, horses have carried us, guided us, and helped elevate the human race. They are the bearers of a frequency that illuminates our greatest potential, awakening within us the dormant forces of love, clarity, and divine purpose.

                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Equellence is more than a brand—it is a revolution of consciousness, a movement toward the realization of a world in which the divine nature of the horse is universally recognized, celebrated, and cherished. This is a world where anyone, no matter their background, can rise into their own version of excellence, connected to the cosmic energy embodied by these extraordinary creatures.

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
