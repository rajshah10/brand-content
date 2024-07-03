import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const influencers = [
    {
        id: 1,
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        likes: 1200,
        description: "Influencer in tech and gadgets",
        subscribers: 50000,
        postsPerMonth: 30,
        averageViews: 10000,
        averageLikes: 2000,
        likesFromSubscribers: 60, // percentage
        reachPrice: "$1000",
        cpmw: "$10",
        verified: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        likes: 950,
        description: "Fashion and lifestyle influencer",
        subscribers: 75000,
        postsPerMonth: 25,
        averageViews: 15000,
        averageLikes: 3000,
        likesFromSubscribers: 70, // percentage
        reachPrice: "$1500",
        cpmw: "$15",
        verified: false,
    },
    {
        id: 3,
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        likes: 1200,
        description: "Influencer in tech and gadgets",
        subscribers: 50000,
        postsPerMonth: 30,
        averageViews: 10000,
        averageLikes: 2000,
        likesFromSubscribers: 60, // percentage
        reachPrice: "$1000",
        cpmw: "$10",
        verified: true,
    },
    {
        id: 4,
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        likes: 950,
        description: "Fashion and lifestyle influencer",
        subscribers: 75000,
        postsPerMonth: 25,
        averageViews: 15000,
        averageLikes: 3000,
        likesFromSubscribers: 70, // percentage
        reachPrice: "$1500",
        cpmw: "$15",
        verified: false,
    },
    // Add more influencers as needed
];

const BrandHome = () => {
    const [likedInfluencers, setLikedInfluencers] = useState([]);

    const handleLike = (id) => {
        setLikedInfluencers(prevLikedInfluencers => (
            prevLikedInfluencers.includes(id)
                ? prevLikedInfluencers.filter(influencerId => influencerId !== id)
                : [...prevLikedInfluencers, id]
        ));
    };

    return (
        <>
            <div>
                <div className="bg-white shadow-sm w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div>
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span className="font-medium text-slate-500">JL</span>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-6 mx-8">
                    <div className="p-4 space-y-4">
                        {influencers.map(influencer => (
                            <div
                                key={influencer.id}
                                className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 hover:scale-105 transform transition duration-300 ease-in-out"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="relative">
                                        <img
                                            className="w-24 h-24 rounded-full"
                                            src={influencer.image}
                                            alt={influencer.name}
                                        />
                                        {influencer.verified ? (
                                            <div className="absolute top-0 right-0 rounded-full bg-green-500 h-6 w-6 flex items-center justify-center">
                                                <CheckCircleIcon className="text-white" />
                                            </div>
                                        ) : (
                                            <div className="absolute top-0 right-0 rounded-full bg-orange-500 h-6 w-6 flex items-center justify-center">
                                                <HelpOutlineIcon className="text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-lg font-medium">{influencer.name}</h3>
                                        <p className="text-gray-600">{influencer.description}</p>
                                    </div>
                                    <Button variant="contained" color="error" startIcon={<ShowChartIcon />}>
                                        Statistics
                                    </Button>
                                </div>
                                <div className="flex flex-wrap justify-between gap-4 text-sm text-gray-600 mt-4">
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.subscribers}</span>
                                        <span className="text-xs text-gray-500">Subscribers</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.postsPerMonth}</span>
                                        <span className="text-xs text-gray-500">Posts per Month</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.averageViews}</span>
                                        <span className="text-xs text-gray-500">Avg. Views</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.averageLikes}</span>
                                        <span className="text-xs text-gray-500">Avg. Likes</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.likesFromSubscribers}%</span>
                                        <span className="text-xs text-gray-500">Likes from Subscribers</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.reachPrice}</span>
                                        <span className="text-xs text-gray-500">Reach Price</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-100 p-2 rounded-md">
                                        <span className="text-lg text-blue-600">{influencer.cpmw}</span>
                                        <span className="text-xs text-gray-500">CPMW</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default BrandHome;
