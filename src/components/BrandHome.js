import React, { useState } from 'react';
import { Container, Badge, Avatar, Drawer, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuComponent from "./common/MenuComponent";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import { influencers } from './constants';
import Header from './common/Header';

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
                <Header handleClick={handleClick} />
            </div>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "58vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1590102426080-52ecff3affeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Brands
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

            <Container className="mt-10 flex">
                <div className='bg-slate-50 p-3 text-gray-600 mx-4'>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="mb-4">
                            <h6 className="font-normal mb-2">Subscribers</h6>
                            <select

                                value={filters.subscribers}
                                className="block w-full outline-none border rounded-md p-2 text-gray-900"
                            >
                                <option value="100k">100k+</option>
                                <option value="200k">200k+</option>
                                <option value="300k">300k+</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <h6 className="font-normal mb-2">Likes</h6>
                            <select

                                value={filters.likes}
                                // onChange={(e) => handleLikesChange(e.target.selectedOptions)}
                                className="block w-full outline-none border rounded-md p-2 text-gray-900"
                            >
                                {uniqueValues('likes').map(value => (
                                    <option key={value} value={String(value)}>
                                        {`${value}+`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <h6 className="font-normal mb-2">Reach Price</h6>
                            <select

                                value={filters.reachPrice}
                                // onChange={(e) => handleReachPriceChange(e.target.selectedOptions)}
                                className="block w-full outline-none border rounded-md p-2 text-gray-900"
                            >
                                {uniqueValues('reachPrice').map(value => (
                                    <option key={value} value={String(value)}>
                                        {`$${value}+`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="mt-2 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                        <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none ">Reset</button>
                        <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none ">Search</button>

                    </div>
                </div>

                <div className="my-12 mx-4">
                    <h6 className="font-bold text-lg mb-4">Influencers</h6>
                    <div>
                        {filteredInfluencers.map(influencer => (
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
                                                <Avatar className="brand_avatar w-32 h-32 rounded-full" src={influencer.image} alt={influencer.name} />
                                            </Badge>
                                        </div>
                                        <div>
                                            <div>
                                                <span className="text-md text-center gap-2 font-medium text-black-600 flex items-center justify-center md:justify-center lg:justify-start">
                                                    {influencer.name}
                                                    {influencer.verified && (
                                                        <span className="text-xs text-indigo-500"><VerifiedIcon /></span>
                                                    )}
                                                </span>
                                                <p className="text-gray-400 text-center md:text-left lg:text-left">{influencer.description}</p>
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
                                    <div className="flex flex-col justify-center items-center border bg-slate-100 border-black-600 py-1 px-1 rounded-md">
                                        <span className="text-md text-black-600">{influencer.subscribers}</span>
                                        <span className="text-xs text-gray-500">Subscribers</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-1 px-1 rounded-md bg-slate-100">
                                        <span className="text-md text-black-600">{influencer.postsPerMonth}</span>
                                        <span className="text-xs text-gray-500">Posts per Month</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-1 px-1 rounded-md bg-slate-100">
                                        <span className="text-md text-black-600">{influencer.averageViews}</span>
                                        <span className="text-xs text-gray-500">Avg. Views</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-1 px-1 rounded-md bg-slate-100">
                                        <span className="text-md text-black-600">{influencer.averageLikes}</span>
                                        <span className="text-xs text-gray-500">Avg. Likes</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-1 px-1 rounded-md bg-slate-100">
                                        <span className="text-md text-black-600">{influencer.likesFromSubscribers}%</span>
                                        <span className="text-xs text-gray-500">Likes from Subs</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border border-black-600 py-1 px-1 rounded-md bg-slate-100">
                                        <span className="text-md text-black-600">{influencer.reachPrice}</span>
                                        <span className="text-xs text-gray-500">Reach Price</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center py-2 px-1 rounded-md bg-slate-100">
                                        <span className="text-md text-black-600">{influencer.cpmw}</span>
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
                                <p className='text-sm text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
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
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Subscribers</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.subscribers}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Posts per Month</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.postsPerMonth}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Avg. Views</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.averageViews}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Avg. Likes</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.averageLikes}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Likes from Subscribers</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.likesFromSubscribers}%</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">Reach Price</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{selectedInfluencer.reachPrice}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium text-left">CPMW</td>
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
