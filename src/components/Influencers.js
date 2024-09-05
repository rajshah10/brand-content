/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container, Skeleton } from "@mui/material";
import MenuComponent from "./common/MenuComponent";
import DrawerComponent from "./common/DrawerComponent";
import Header from "./common/Header";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Facebook } from "@mui/icons-material";
import { useLocation } from "react-router";
import { api_url } from "../constants";
import NoFound from "../components/common/NoFound"
import infl from "../assets/images/influencer.jpg"


const Influencers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [campaign, setCampaign] = useState([]);
    const [openDraw, setOpenDrawer] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const buttonColor = 'bg-[#4F46E5]';
    const [clickedButtons, setClickedButtons] = useState({});
    const [filterType, setFilterType] = useState('');
    const [filterPlatform, setFilterPlatform] = useState('');
    const [loading, setLoading] = useState(true);
    const [campaignId, setCampaignId] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const influencerId = localStorage.getItem('id')

    const location = useLocation();

    const [hiredCounts, setHiredCounts] = useState([]);

    const countHiredInfluencers = (campaigns) => {
        return campaigns.map(campaign => {
            const hiredCount = campaign.influencers.filter(influencer => influencer.status === "Hired").length;
            return {
                campaignTitle: campaign.campaignTitle,
                hiredCount: hiredCount
            };
        });
    };



    useEffect(() => {
        setCampaignId(location.state?.campaignId || '');
    }, [location.state?.campaignId]);

    const handleButtonClick = async (campaignId, influencerId) => {
        try {
            if (influencerId) {
                const response = await axios.get(`${api_url}/api/campaign/${campaignId}/influencer/${influencerId}/status`);

                if (response.data.hasApplied) {
                    toast.error('You have already assigned or applied to this campaign.');
                    return
                } else {
                    await axios.post(`${api_url}/api/campaign/${campaignId}/influencer/${influencerId}`);
                    toast.success('Application submitted successfully. Please wait for brands to hire you.!');
                }

                setClickedButtons((prev) => ({
                    ...prev,
                    [campaignId]: !prev[campaignId]
                }));
            }
        } catch (error) {
            console.error('Error handling button click:', error);
        }
    };

    const handleFilterTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const handleFilterPlatformChange = (e) => {
        setFilterPlatform(e.target.value);
    };

    const openDrawer = () => setOpenDrawer(true);
    const closeDrawer = () => setOpenDrawer(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const truncateString = (str, num) => {
        if (str?.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    };
    const getAllCampaigns = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/api/campaign`, {
                params: {
                    type: filterType,
                    platform: filterPlatform,
                },
            });
            if (response.data) {
                setCampaign(response.data);
                setHiredCounts(countHiredInfluencers(response.data));
            }
        } catch (error) {
            console.error('Error fetching campaigns:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllCampaigns();
    }, [filterType, filterPlatform]);

    const handleDrawer = (data) => {
        openDrawer();
        setSelectedData(data);
    };

    const filteredCampaigns = campaign.filter(camp =>
        camp.campaignTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );




    return (
        <>
            <div>
                <Toaster position="top-right" reverseOrder={false} />
                <DrawerComponent openDraw={openDraw} closeDrawer={closeDrawer} selectedData={selectedData} hiredCounts={hiredCounts} />
                <MenuComponent open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: "58vh" }}>
                <div className="absolute top-0 w-full h-full" style={{
                    backgroundImage: `url(${infl})`,
                     backgroundPosition: 'center'
                }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">Influencers</h1>
                                <p className="mt-4 text-lg text-gray-300">Learn more about our journey and our team.</p>
                                <div className="mx-4 md:mx-8 lg:mx-8 my-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search Campaigns ... "
                                            required
                                            className="block w-full bg-white rounded-full border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                        <div className="absolute top-2.5 right-4">
                                            <SearchOutlinedIcon style={{ fontSize: "18px", color: "slategray" }} />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Container>

                {
                    loading ?
                        <>
                            <div className="my-12 mx-4 md:mx-8 lg:mx-8">
                                {[...Array(1)].map((_, index) => (
                                    <div key={index} className="border cursor-pointer border-slate-200 my-5 rounded-md bg-slate-100">
                                        <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                            <div className="flex flex-col">
                                                <Skeleton width="60%" height={20} />
                                                <Skeleton width="40%" height={20} className="mt-2" />
                                                <Skeleton width="30%" height={20} className="mt-2" />
                                            </div>
                                            <div className="flex gap-2 mt-3 md:mt-0 lg:mt-0">
                                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                                    <Skeleton width="50%" height={20} />
                                                    <Skeleton width="60%" height={20} className="mt-1" />
                                                </div>
                                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                                    <Skeleton width="50%" height={20} />
                                                    <Skeleton width="60%" height={20} className="mt-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-white p-2 rounded-md">
                                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                                {[...Array(2)].map((_, idx) => (
                                                    <Skeleton key={idx} variant="rectangular" width="100%" height={100} />
                                                ))}
                                            </div>
                                            <div className="w-full flex flex-col justify-between">
                                                <Skeleton width="80%" height={20} />
                                                <div className="flex justify-end gap-4">
                                                    <Skeleton width={120} height={30} />
                                                    <Skeleton width={120} height={30} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </> :
                        <>
                            <div className="my-12 mx-4 md:mx-8 lg:mx-8">
                                <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                                    <h6 className="font-bold text-lg">All Campaign</h6>
                                    <div className="flex gap-3">
                                        <select value={filterPlatform} onChange={handleFilterPlatformChange} className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                            <option value="">All Platforms</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Facebook">Facebook</option>
                                            {/* <option value="Twitter">Twitter</option> */}
                                        </select>
                                    </div>
                                </div>
                                {filteredCampaigns?.length > 0 ? filteredCampaigns?.map((camp, index) => {
                                    const hiredCount = hiredCounts.find(count => count.campaignTitle === camp.campaignTitle)?.hiredCount || 0;
                                    return (
                                        <div key={index} className="border cursor-pointer border-slate-200 my-5 rounded-md bg-slate-100" style={{ border: camp?._id === campaignId ? "2px solid #D3D3D3" : "" }}>
                                            <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                <div className="flex flex-col">
                                                    <span>{camp.campaignTitle}</span>
                                                    <span className="text-sm mt-2 flex items-center gap-1">
                                                        {camp?.social_media === "Instagram" ? <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} /> : <Facebook style={{ fontSize: "13px", color: "blue" }} />}
                                                        {camp.social_media} .{" "}
                                                        <span className="text-slate-500 flex items-center gap-1">
                                                            <PaidOutlinedIcon style={{ fontSize: "13px", color: "slate" }} />
                                                            {camp.price}
                                                        </span>{" "}
                                                        <span className="text-slate-500">{camp.timeAgo}</span> &nbsp;
                                                    </span>
                                                </div>
                                                <div className="flex gap-2 mt-3 md:mt-0 lg:mt-0">
                                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                                        <span>{camp?.influencers?.length}</span>
                                                        <span className="text-sm text-slate-500">Creators</span>
                                                    </div>
                                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                                        <span>{hiredCount || 0}</span>
                                                        <span className="text-sm text-slate-500">Hired</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-white p-2 rounded-md">
                                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                                    {camp?.images?.map((cmp, index) => (
                                                        <img className="rounded-md h-32 w-full object-cover" key={index} src={cmp} />
                                                    ))}
                                                </div>
                                                <div className="w-full flex flex-col justify-between">
                                                    <h6 className="text-sm">
                                                        {truncateString(camp?.campaignDescription, 180)}
                                                    </h6>
                                                    <div className="flex justify-end gap-4">
                                                        <div onClick={() => handleDrawer(camp)} className="flex justify-end">
                                                            <button className="rounded-md px-6 py-1.5 text-sm font-semibold leading-6 text-slate-600 focus-visible:outline">
                                                                View details
                                                            </button>
                                                        </div>
                                                        <button
                                                            className={`${!clickedButtons[camp._id] ? 'bg-[#4F46E5] text-white' : 'bg-indigo-500 text-white'} rounded-md px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                                            onClick={() => handleButtonClick(camp._id, influencerId)}
                                                        >
                                                            {!clickedButtons[camp._id] ? 'Apply Now' : 'Applied'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                }) :
                                    <>
                                        <NoFound />
                                    </>}
                            </div>
                        </>
                }
            </Container>
        </>
    );
};

export default Influencers;
