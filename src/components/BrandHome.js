import React, { useState } from 'react';
import { Container, Badge, Avatar, Drawer, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuComponent from "./common/MenuComponent";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import { influencers } from './constants';

const BrandHome = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);

    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = (influencer) => {
        setSelectedInfluencer(influencer);
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setSelectedInfluencer(null);
    };

    return (
        <>
            <div>
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <div className="bg-white shadow-sm w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
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
                        <div onClick={handleClick} className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span className="font-medium text-slate-500 ">JL</span>
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
                                className="bg-white rounded-lg mt-2 p-4 flex flex-col space-y-4 border border-slate-200 cursor-pointer"
                                onClick={() => handleDrawerOpen(influencer)}
                            >
                                <div className="flex justify-center lg:flex md:justify-start lg:justify-start items-center">
                                    <div className="relative flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-4">
                                        <div>
                                            <Badge
                                                overlap="circular"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                badgeContent={influencer.verified ? (
                                                    <CheckCircleIcon className="text-green-400 brand_badge" />
                                                ) : (
                                                    <HelpOutlineIcon className="text-orange-400 brand_badge" />
                                                )}
                                            >
                                                <Avatar className="brand_avatar w-40 h-40 rounded-full" src={influencer.image} alt={influencer.name} />
                                            </Badge>
                                        </div>
                                        <div>
                                            <div>
                                                <span className="text-md text-center font-medium text-black-600 flex items-center justify-center md:justify-center lg:justify-start">
                                                    {influencer.name}
                                                    {influencer.verified && (
                                                        <span className="text-xs text-blue-500"><VerifiedIcon /></span>
                                                    )}
                                                </span>
                                                <p className="text-gray-400 text-center">{influencer.description}</p>
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
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-center gap-4 text-sm text-gray-600 mt-4">
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

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose} className="drawer p-4">
                <div className="py-2 px-4">
                    <div className="flex items-center justify-end">
                        <IconButton variant="text" color="blue-gray" onClick={handleDrawerClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    {/* <IconButton onClick={handleDrawerClose} className="float-right brand_drawer_close">
                        <CloseIcon />
                    </IconButton> */}
                    {selectedInfluencer && (
                        <>
                            <div className="flex flex-col items-center">
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    badgeContent={selectedInfluencer.verified ? (
                                        <CheckCircleIcon className="text-green-400 brand_badge" />
                                    ) : (
                                        <HelpOutlineIcon className="text-orange-400 brand_badge" />
                                    )}
                                >
                                    <Avatar className="brand_avatar w-40 h-40 rounded-full" src={selectedInfluencer.image} alt={selectedInfluencer.name} />
                                </Badge>
                                <h3 className="text-lg font-medium text-black-600 flex items-center mt-4">
                                    {selectedInfluencer.name}
                                    {selectedInfluencer.verified && (
                                        <span className="ml-1 text-xs text-blue-500"><VerifiedIcon /></span>
                                    )}
                                </h3>
                                <p className="text-gray-400 text-center">{selectedInfluencer.description}</p>
                                <div className="flex gap-1 mt-2 justify-center">
                                    {selectedInfluencer.interests.map((interest, index) => (
                                        <div key={index} className="bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-600">
                                            {interest}
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-4">
                                <p style={{ textIndent: '30px', textAlign: "justify" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                            <div className="flex flex-wrap gap-3 md:gap:0 lg:gap-0">
                                <h2 className="text-lg my-4 text-left">Influencers Statestics</h2>
                            </div>
                            <table className="min-w-full bg-white border border-slate-300">
                                <thead className="bg-slate-200">
                                    <tr>
                                        <th className="py-2 px-4 border border-slate-200 text-left text-slate-600 font-medium">Detail</th>
                                        <th className="py-2 px-4 border border-slate-200 text-left text-slate-600 font-medium">Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Subscribers:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.subscribers}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Posts per Month:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.postsPerMonth}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Avg. Views:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.averageViews}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Avg. Likes:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.averageLikes}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Likes from Subscribers:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.likesFromSubscribers}%</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Reach Price:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.reachPrice}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">CPMW:</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.cpmw}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </Drawer>

        </>
    );
}

export default BrandHome;
