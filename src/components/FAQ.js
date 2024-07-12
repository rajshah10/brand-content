import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import horse5 from "../assets/images/horse5.jpg"

const FAQ = () => {
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
                            backgroundImage: `url('${horse5}')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        FAQ
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Frequently Asked Questions about Equellence.
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
                        <div className="container mx-auto px-4 text-center">
                            <div className="w-full mx-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold">
                                        Frequently Asked Questions
                                    </h3>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT IS EQUELLENCE?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                The main objective of Equellence is to bridge the gap between the equestrian and the non-horse world by connecting equestrians, brands, barns, and events while promoting all individual content creation and social media through a specifically curated equestrian network.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT CAN I DO TO JOIN AS A CONTENT CREATOR?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                To join Equellence, you can submit an application here. To increase your chances of acceptance into the Equellence group, upload impressive social media content, be: daring, bold and original, and try to have a message that stands out. Whether or not you get accepted into Equellence, you can always re-apply so continue to grow your platform to the best of your abilities!
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT DO I GET WHEN I JOIN?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                When you become a member of Equellence, you are not just joining a club. You are joining a lifelong Equestrian family. Therefore, like family, we take care of you. You receive a lot:
                                                <ul>
                                                    <li>Free VIP access to Equfest and all Equellence related events all around the world</li>
                                                    <li>Free VIP access to various horse shows</li>
                                                    <li>Free housing and trips to many incredible countries through our group retreats</li>
                                                    <li>A specially curated network and platform to communicate and collaborate with over 100+ equestrian content creators</li>
                                                    <li>Access to a multitude of videos and tutorials on how to successfully grow a platform as a content creator, including trends, tips and tricks, and a place to ask questions and gain feedback.</li>
                                                    <li>Brand deals both paid monetarily and gifted.</li>
                                                    <li>PR collateral with a multitude of brands</li>
                                                    <li>Free Equellence uniform and merchandise.</li>
                                                    <li>Opportunity to connect with big equestrian content creators and professionals from all over the world, advancing and solidifying your career long-term as an equestrian.</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4a-content"
                                            id="panel4a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT IS MY EXPECTATION AS A MEMBER?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                Equellence as a whole gains more brand deals and exposure through the collective effort of each individual in the club. Therefore, as a member, content creators are expected to produce content to be used on the official Equellence Instagram. Brands and prominent equestrians follow the official Equellence Instagram, therefore from there they are able to scout out members they want to work with. Creating exclusive content for the Equellence social media pages benefits our content creators as an individual in the long run and helps them grow their individual platforms as well. Equellence also has "creators of the month", who receive special benefits. The more you post, the more you gain!
                                                <br/><br/>
                                                Individually, creators must continue to grow their accounts as well. Members will also be expected to promote the charities Equellence partners with, as well as Equellence (Equfest) events.
                                                <br/><br/>
                                                To reiterate, Equellence is a club where you do need to put in the work. However, that is the amazing part about Equellence. Now, opportunities to reach the top in the horse world can finally be gained through hard work instead of sheer luck.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel5a-content"
                                            id="panel5a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>DO I NEED TO PAY ANYTHING?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                To fund the club and all the amazing activities, we do have a monthly membership fee of $19.99. You can pay this monthly, or select yearly membership with a discount.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel6a-content"
                                            id="panel6a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHERE CAN I BUY TICKETS FOR EQUELLENCE EVENTS?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                You can find more about Equfest, the festival for equestrians, run by Equellence, on the official Equfest website here.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel7a-content"
                                            id="panel7a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>DO I NEED TO BE AN EQUESTRIAN TO JOIN?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                Equellence is an agency for creators making content with any types of Equines. You don't have to ride, however, your content does have to stand out.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel8a-content"
                                            id="panel8a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>DO YOU ACCEPT EQUESTRIANS OF ALL BACKGROUNDS?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600'>
                                                Absolutely! We pride ourselves in diversity and make an effort to select Equestrians with not a lot of opportunity and backgrounds. In our selection process, we also do try to select Equestrians we know will also match the resources and the connections we have, so please also do keep that in mind when applying.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default FAQ;
