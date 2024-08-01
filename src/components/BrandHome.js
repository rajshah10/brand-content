/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react';
import { Container, Badge, Avatar, Drawer, IconButton, Skeleton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuComponent from "./common/MenuComponent";
import VerifiedIcon from '@mui/icons-material/Verified';
import Header from './common/Header';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { api_url, follower, niches } from '../constants';
import NoFound from './common/NoFound';

const BrandHome = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [campaign, setCampaign] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);
    const [influencerdata, setInfluencerData] = useState([]);
    const [selectedNiches, setSelectedNiches] = useState([]);
    const [selectedFollowers, setSelectedFollowers] = useState([]);
    const [expandedSections, setExpandedSections] = useState({
        category: true,
        followers: true
    });

    const toggleSection = (section) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

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
    const getAllCampaigns = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/api/campaign`);
            if (response.data) {
                setCampaign(response.data);
            }
        } catch (error) {
            console.error('Error fetching campaigns:', error);
        } finally {
            setLoading(false);
        }
    };

    const getInfluencerData = async () => {
        const response = await axios.get(`${api_url}/api/influencers`)
        if (response.data) {
            setInfluencerData(response.data);
        }
    }
    useEffect(() => {
        getInfluencerData()
    }, [])

    useEffect(() => {
        getAllCampaigns()
    }, [])


    const getIconComponent = (url) => {
        if (url.includes('instagram.com')) return <InstagramIcon fontSize="inherit" />;
        if (url.includes('facebook.com')) return <FacebookIcon fontSize="inherit" />;
        if (url.includes('twitter.com')) return <TwitterIcon fontSize="inherit" />;
        if (url.includes('github.com')) return <GitHubIcon fontSize="inherit" />;
        // Add more conditions for other platforms
        return <LinkIcon fontSize="inherit" />; // Default icon if no match
    };



    const handleNicheChange = (niche) => {
        setSelectedNiches((prevNiches) =>
            prevNiches.includes(niche)
                ? prevNiches.filter((item) => item !== niche)
                : [...prevNiches, niche]
        );
    };

    const handleFollowersChange = (followerRange) => {
        setSelectedFollowers((prevFollowers) =>
            prevFollowers.includes(followerRange)
                ? prevFollowers.filter((item) => item !== followerRange)
                : [...prevFollowers, followerRange]
        );
    };


    const parseFollowersCount = (count) => {
        const number = parseFloat(count.replace(/[^0-9.]/g, ''));
        if (count.includes('M')) return number * 1_000_000;
        if (count.includes('k')) return number * 1_000;
        return number;
    };

    const filterInfluencers = (data) => {
        return data.filter((influencer) => {
            const nicheMatch = selectedNiches.length === 0 || influencer.niche.some((niche) =>
                selectedNiches.map(n => n.toLowerCase()).includes(niche.toLowerCase())
            );
            const followersMatch = selectedFollowers.length === 0 || influencer.socialMediaLinks.some((link) => {
                const followersCount = parseFollowersCount(link.followerCount);

                return selectedFollowers.some((range) => {
                    switch (range) {
                        case "0-100k":
                            return followersCount <= 10000;
                        case "100k-200k":
                            return followersCount > 100000 && followersCount <= 200000;
                        case "200k-300k":
                            return followersCount > 200000 && followersCount <= 300000;
                        case "300k-400k":
                            return followersCount > 300000 && followersCount <= 400000;
                        case "400k-500k":
                            return followersCount > 400000 && followersCount <= 500000;
                        case "500k-600k":
                            return followersCount > 500000 && followersCount <= 600000;
                        case "600k-700k":
                            return followersCount > 600000 && followersCount <= 700000;
                        case "700k-800k":
                            return followersCount > 700000 && followersCount <= 800000;
                        default:
                            return false;
                    }
                });
            });

            return nicheMatch && followersMatch;
        });
    };
    const filteredInfluencers = filterInfluencers(influencerdata);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    const handleChange = (e) => {
        setSelectedCampaign(JSON.parse(e.target.value));
    };

    const handleButtonClick = async (influencerId) => {
        try {
            if (selectedCampaign?._id) {
                const response = await axios.get(`${api_url}/api/campaign/${selectedCampaign?._id}/influencer/${influencerId}/status`);

                if (response.data.hasApplied) {
                    toast.error('Already assigned to this campaign.');
                    return
                } else {
                    await axios.post(`${api_url}/api/campaign/${selectedCampaign?._id}/influencer/${influencerId}`);
                    toast.success('Assigned successful!');
                }
            }
        } catch (error) {
            console.error('Error handling button click:', error);
        }
    }


    return (
        <>
            <div>
                <Toaster position="top-right" reverseOrder={false} />
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                <div className="absolute flex flex-col inset-0 bg-black bg-opacity-50 items-center justify-center">
                    <h1 className="text-white text-4xl font-bold text-center">
                        Brands
                    </h1>
                    {/* <div className="py-4 px-6 text-slate-300">
                        <p className="text-lg">
                            Insert your description of the content creator here. This could include details about their work, achievements, or any other relevant information.
                        </p>
                    </div> */}
                </div>
            </div>
            <Container>

                <div className="my-6 mx-4 md:mx-4 lg:mx-4">
                    <div className="flex flex-col justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Influencers</h6>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 gap-8'>
                            <div class=" border-gray-200 py-6">
                                <h3 class="-mx-2 -my-3 flow-root">

                                    <button type="button" class="flex w-full items-center justify-between border rounded-md bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Category</span>
                                        <span class="ml-6 flex items-center">

                                            {expandedSections.category ? (
                                                <svg onClick={() => toggleSection('category')} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg onClick={() => toggleSection('category')} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                </h3>
                                {expandedSections.category &&
                                    <div class="pt-6" id="filter-section-mobile-0">
                                        <div class="space-y-6 overflow-y-auto h-32 custom-scrollbar">
                                            {niches?.length > 0 ? (
                                                niches?.map((niche, index) => (
                                                    <div class="flex items-center">
                                                        <input checked={selectedNiches.includes(niche.name)}
                                                            onChange={() => handleNicheChange(niche.name)}
                                                            id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">{niche.name}</label>
                                                    </div>
                                                ))) : (
                                                <tr>
                                                    <td colSpan="5" className="text-black">
                                                        <NoFound />
                                                    </td>
                                                </tr>)
                                            }

                                        </div>
                                    </div>}
                            </div>

                            <div class=" border-gray-200 py-6">
                                <h3 class="-mx-2 -my-3 flow-root">

                                    <button type="button" class="flex w-full items-center justify-between border rounded-md bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Follower Count</span>
                                        <span class="ml-6 flex items-center">

                                            {expandedSections.followers ? (
                                                <svg onClick={() => toggleSection('followers')} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg onClick={() => toggleSection('followers')} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                </h3>
                                {expandedSections.followers &&
                                    <div class="pt-6" id="filter-section-mobile-0">
                                        <div class="space-y-6 overflow-y-auto h-32 custom-scrollbar">
                                            {follower?.length > 0 ? (
                                                follower?.map((niche, index) => (
                                                    <div class="flex items-center">
                                                        <input checked={selectedFollowers.includes(niche.name)}
                                                            onChange={() => handleFollowersChange(niche.name)} id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">{niche.name}</label>
                                                    </div>
                                                ))) : (
                                                <tr>
                                                    <td colSpan="5" className="text-black">
                                                        <NoFound />
                                                    </td>
                                                </tr>)
                                            }

                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        {loading ? (
                            <>
                                {
                                    Array.from({ length: filteredInfluencers?.length }).map((_, index) => (
                                        <div key={index} className="bg-white rounded-lg mt-2 p-4 flex flex-col space-y-4 border border-slate-200 cursor-pointer">
                                            <div className="flex justify-center lg:flex md:justify-start lg:justify-start items-center">
                                                <div className="relative w-full flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-4">
                                                    <div className='flex items-center gap-4'>
                                                        <div>
                                                            <Badge
                                                                overlap="circular"
                                                                anchorOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                badgeContent={<Skeleton variant="circular" width={24} height={24} />}
                                                            >
                                                                <Avatar className="brand_avatar w-32 h-32 rounded-full">
                                                                    <Skeleton variant="circular" width={128} height={128} />
                                                                </Avatar>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <Skeleton variant="text" width={200} height={30} />
                                                                <Skeleton variant="text" width={300} height={20} />
                                                                <div className="flex gap-1 mt-2 justify-center md:justify-center lg:justify-start">
                                                                    <Skeleton variant="rectangular" width={60} height={20} />
                                                                    <Skeleton variant="rectangular" width={60} height={20} />
                                                                    <Skeleton variant="rectangular" width={60} height={20} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-full">
                                                        <div className="mt-2 flex flex-col gap-2">
                                                            <Skeleton variant="rectangular" width="100%" height={40} />
                                                            <Skeleton variant="rectangular" width="100%" height={40} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-sm text-gray-600'>
                                                <Skeleton variant="text" width="100%" height={20} />
                                            </div>
                                            <div className='grid grid-cols-4 gap-3'>
                                                {Array.from({ length: 2 }).map((_, index) => (
                                                    <div key={index} className="flex flex-col justify-center items-center border bg-slate-100 border-black-600 py-1 px-1 rounded-md">
                                                        <Skeleton variant="circular" width={24} height={24} />
                                                        <div className='flex gap-1 items-center'>
                                                            <Skeleton variant="text" width={50} height={20} />
                                                            <Skeleton variant="text" width={40} height={20} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ) : (
                            <>
                                {filteredInfluencers && filteredInfluencers.map(influencer => (
                                    <div
                                        key={influencer.id}
                                        className="bg-white rounded-lg mt-2 p-4 flex flex-col space-y-4 border border-slate-200 cursor-pointer"

                                    >
                                        <div className="flex justify-center lg:flex md:justify-start lg:justify-start items-center">
                                            <div className="relative w-full flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-4">
                                                <div className='flex items-center gap-4'>
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
                                                            <Avatar onClick={() => handleDrawerOpen(influencer)} className="brand_avatar w-32 h-32 rounded-full" src={influencer.media} alt={influencer.name} />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <span className="text-md text-center gap-2 font-medium text-black-600 flex items-center justify-center md:justify-center lg:justify-start">
                                                                {influencer.firstName} - {influencer.lastName} - <span className='text-sm text-gray-600'>{influencer.email}</span>
                                                                {influencer.verified && (
                                                                    <span className="text-xs text-indigo-500"><VerifiedIcon /></span>
                                                                )}
                                                            </span>
                                                            <p className="text-gray-400 text-center md:text-left lg:text-left">{influencer.description}</p>
                                                            <div className="flex gap-1 mt-2 justify-center md:justify-center lg:justify-start">
                                                                {influencer.niche.map((interest, index) => (
                                                                    <div key={index} className="bg-gray-200 px-2 py-1 rounded-md text-xs text-gray-600">
                                                                        {interest}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-full">
                                                    {/* <label htmlFor="influencerdata" className="block text-sm font-medium leading-6 text-gray-900">Select Campaign</label> */}
                                                    <div className="mt-2 flex flex-col gap-2 ">
                                                        <select
                                                            required
                                                            type="text"
                                                            name="influencerdata"
                                                            id="influencerdata"
                                                            // value={campaign.influencerdata}
                                                            onChange={(e) => handleChange(e, influencer?._id)}
                                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                                        >
                                                            <option>Select Campaign</option>
                                                            {
                                                                campaign?.map((d, index) => (
                                                                    <option value={JSON.stringify(d)} key={index}>{d?.campaignTitle}</option>
                                                                ))
                                                            }

                                                        </select>
                                                        <button
                                                            className="bg-[#4F46E5] text-white'  rounded-md px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            onClick={() => handleButtonClick(influencer?._id)}
                                                        >
                                                            Assign Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-sm text-gray-600'>
                                            {influencer?.bio}
                                        </div>
                                        <div className='grid grid-cols-4 gap-3'>
                                            {influencer?.socialMediaLinks?.map((link, index) => (
                                                <Link to={`${link.link}`}>
                                                    <div className="flex flex-col justify-center items-center border bg-slate-100 border-black-600 py-1 px-1 rounded-md">
                                                        <div>
                                                            {getIconComponent(link.link)}
                                                        </div>
                                                        <div className='flex gap-1 items-center'>
                                                            <span className="text-md text-black-600">{link.followerCount}</span>
                                                            <span className="text-xs text-gray-500">Followers</span>
                                                        </div>
                                                    </div>
                                                </Link>

                                            ))}
                                        </div>


                                    </div>
                                ))}
                            </>)}

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
                                    <Avatar className="brand_avatar w-40 h-40 rounded-full" src={selectedInfluencer.media} alt={selectedInfluencer.media} />
                                </Badge>
                                <h3 className="text-lg font-medium text-black-600 flex items-center mt-4">
                                    {selectedInfluencer.firstName} - {selectedInfluencer.lastName} -&nbsp; <span className='text-sm text-gray-600'> {selectedInfluencer.email}</span>
                                    {selectedInfluencer.verified && (
                                        <span className="text-xs text-indigo-500"><VerifiedIcon /></span>
                                    )}
                                </h3>
                                <p className="text-gray-400 text-center">{selectedInfluencer.description}</p>
                                <div className="flex gap-1 mt-2 justify-center">
                                    {selectedInfluencer.niche.map((interest, index) => (
                                        <div key={index} className="bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-600">
                                            {interest}
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-4">
                                <p className='text-sm text-left'>{selectedInfluencer?.bio}.</p>
                            </div>

                            <div className="flex flex-wrap gap-3 md:gap:0 lg:gap-0">
                                <h2 className="text-lg my-4 text-left">Influencers Statestics</h2>
                            </div>
                            <div className='grid grid-cols-4 gap-3'>
                                {selectedInfluencer?.socialMediaLinks?.map((link, index) => (
                                    <Link to={`${link.link}`}>
                                        <div className="flex flex-col justify-center items-center border bg-slate-100 border-black-600 py-1 px-1 rounded-md">
                                            <div>
                                                {getIconComponent(link.link)}
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <span className="text-md text-black-600">{link.followerCount}</span>
                                                <span className="text-xs text-gray-500">Followers</span>
                                            </div>
                                        </div>
                                    </Link>

                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Drawer>

        </>
    );
}

export default BrandHome;
