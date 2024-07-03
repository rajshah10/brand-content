import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuComponent from "./common/MenuComponent";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Done, Edit } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const influencers = [
    {
        id: 1,
        name: "Aldous Copaland",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        likes: 1200,
        interests: ["family", "cinema", "news"],
        description: "aldous * 28 years",
        subscribers: 50000,
        postsPerMonth: 30,
        averageViews: 10000,
        averageLikes: 2000,
        likesFromSubscribers: 60, // percentage
        reachPrice: "$1000",
        cpmw: "$10",
        verified: true,
    }
];

const BrandHome = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            //    background:"white",
            //    borderRadius:"50%"
        },
    }));
    return (
        <>
            <div>
                <MenuComponent open={open} anchorEl={anchorEl} handleClose={handleClose} />
                <div className=" bg-white shadow-sm  w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search..."
                            required
                            className="block xs:w-full sm:w-96 md:w-96 lg:w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                        />
                        <div className="absolute top-1 right-2">
                            <SearchOutlinedIcon style={{ fontSize: "18px", color: "slategray" }} />
                        </div>

                    </div>
                    <div>
                        <div onClick={handleClick} class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span class="font-medium text-slate-500 ">JL</span>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-6 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Influencers</h6>
                    </div>
                    <div className="my-5">
                        {influencers.map(influencer => (
                            <div
                                key={influencer.id}
                                className="bg-white rounded-lg p-4 flex flex-col space-y-4 border border-slate-200"
                            >
                               <div className="flex justify-center lg:flex md:justify-start lg:justify-start items-center">
                                    <div className="relative flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-4">
                                        <div>
                                            <StyledBadge
                                                overlap="circular"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                badgeContent={influencer.verified ? (
                                                    <CheckCircleIcon className="text-green-400 brand_badge" />
                                                ) : (
                                                    <HelpOutlineIcon className="text-orange-400" />
                                                )}
                                            >
                                                <Avatar className="brand_avatar w-40 h-40 rounded-full" src={influencer.image} alt={influencer.name} />
                                            </StyledBadge>
                                        </div>
                                        <div>
                                            <div>
                                                <h3 className="text-md text-center font-medium text-black-600 flex items-center justify-center md:justify-center lg:justify-start">
                                                    {influencer.name}
                                                    {influencer.verified && (
                                                        <span className="text-xs text-blue-500"><VerifiedIcon /></span>
                                                    )}
                                                </h3>
                                                <p className="text-gray-400">{influencer.description}</p>
                                                <div className="flex gap-1 mt-2 justify-center md:justify-center lg:justify-start">
                                                    {influencer.interests.map((interest, index) => (
                                                        <div key={index} className="bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-600">
                                                            {interest}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>


                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-center  gap-4 text-sm text-gray-600 mt-4">
                                    <div className="flex flex-col justify-center items-center border bg-slate-100 border-black-600 py-2 px-1 rounded-md">
                                        <span className="text-lg text-black-600">{influencer.subscribers}</span>
                                        <span className="text-xs text-gray-500">Subscribers</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-lg text-black-600">{influencer.postsPerMonth}</span>
                                        <span className="text-xs text-gray-500">Posts per Month</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-lg text-black-600">{influencer.averageViews}</span>
                                        <span className="text-xs text-gray-500">Avg. Views</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-lg text-black-600">{influencer.averageLikes}</span>
                                        <span className="text-xs text-gray-500">Avg. Likes</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-lg text-black-600">{influencer.likesFromSubscribers}%</span>
                                        <span className="text-xs text-gray-500">Likes from Subscribers</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-lg text-black-600">{influencer.reachPrice}</span>
                                        <span className="text-xs text-gray-500">Reach Price</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-lg text-black-600">{influencer.cpmw}</span>
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
