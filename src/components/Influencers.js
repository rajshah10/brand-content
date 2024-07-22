/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Container } from "@mui/material";
import MenuComponent from "./common/MenuComponent";
import DrawerComponent from "./common/DrawerComponent";
import Header from "./common/Header";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Influencers = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const [campaign, setCampaign] = useState([])
    const [openDraw, setOpenDrawer] = useState(false);
    const [selectedData, setSelectedData] = useState({})
    const [buttonColor, setButtonColor] = useState('bg-indigo-600');
    const [clickedButtons, setClickedButtons] = useState({});
    const [filterType, setFilterType] = useState('');
    const [filterPlatform, setFilterPlatform] = useState('');
    const [influencerId, setInfluencerId] = useState('')

    useEffect(() => {
        const fetchInfluencerData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming you store the token in local storage
                const response = await axios.get('http://localhost:5000/api/influencers/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setInfluencerId(response.data?._id)

            } catch (error) {
                console.error('Error fetching influencer data:', error);
            }
        };

        fetchInfluencerData();
    }, []);


    const handleButtonClick = async (campaignId, influencerId, index) => {
        try {
            if (influencerId) {
                const response = await axios.get(`http://localhost:5000/api/campaign/${campaignId}/influencer/${influencerId}/status`);

                if (response.data.hasApplied) {
                    toast.error('You have already applied to this campaign.');
                } else {
                    await axios.post(`http://localhost:5000/api/campaign/${campaignId}/influencer/${influencerId}`);
                    setClickedButtons((prev) => ({
                        ...prev,
                        [index]: !prev[index]
                    }));
                }
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
        const response = await axios.get('http://localhost:5000/api/campaign', {
            params: {
                type: filterType,
                platform: filterPlatform,
            },
        });
        if (response.data) {
            setCampaign(response.data);
        }
    };

    useEffect(() => {
        getAllCampaigns()
    }, [filterType, filterPlatform])


    const handleDrawer = (data) => {
        openDrawer()
        setSelectedData(data)
    }
    console.log("Campaign", campaign)
    return (
        <>
            <div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <DrawerComponent openDraw={openDraw} closeDrawer={closeDrawer} selectedData={selectedData} />
                <MenuComponent open={open} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "58vh"
                }}>
                <div className="absolute top-0 w-full h-full  bg-cover"
                    style={{
                        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684581969889-67d386781d37?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Influencers
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
            <Container>
                <div className="my-12 mx-4 md:mx-8 lg:mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">All Campaign</h6>
                        <div className="flex gap-3">
                            <select value={filterType} onChange={handleFilterTypeChange} className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option value="">All Types</option>
                                <option name="Paid">Paid</option>
                                <option name="Unpaid">Unpaid</option>
                            </select>
                            <select value={filterPlatform} onChange={handleFilterPlatformChange} className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option value="">All Platforms</option>
                                <option name="Instagram">Instagram</option>
                                <option name="Facebook">Facebook</option>
                                <option name="Twitter">Twitter</option>
                            </select>
                        </div>
                    </div>
                    {campaign?.length > 0 && campaign?.map((camp, index) => (
                        <div key={index} className="border cursor-pointer border-slate-200 my-5 rounded-md bg-slate-100">
                            <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <div className="flex flex-col">
                                    <span>{camp.campaignTitle}</span>
                                    <span className="text-sm mt-2 flex items-center gap-1">
                                        <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                        {camp.social_media} .{" "}
                                        <span className="text-slate-500 flex items-center gap-1">
                                            <PaidOutlinedIcon style={{ fontSize: "13px", color: "slate" }} />
                                            {camp.price}
                                        </span>{" "}
                                        <span className="text-slate-500">{camp.timeAgo}</span> &nbsp;
                                        {/* <div className="rounded-full border border-green-700 px-2">
                                            <span className={`text-xs ${campaign.status === "Active" ? "text-green-600" : ""}`}>{campaign.status}</span>
                                        </div> */}
                                    </span>

                                </div>
                                <div className="flex gap-2 mt-3 md:mt-0 lg:mt-0">
                                    {/* <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16 bg-slate-100">
                                        <span>{camp?.proposals}</span>
                                        <span className="text-sm text-slate-500">Proposals</span>
                                    </div> */}
                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                        <span>{camp?.influencers?.length}</span>
                                        <span className="text-sm text-slate-500">Creators</span>
                                    </div>
                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                        <span>{camp?.hired || 0}</span>
                                        <span className="text-sm text-slate-500">Hired</span>
                                    </div>
                                </div>
                            </div>
                            <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-white p-2 rounded-md">
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    {
                                        camp?.images?.map((cmp, index) => (
                                            <img className="rounded-md h-32 w-full object-cover" key={index} src={cmp} />
                                        ))
                                    }


                                </div>
                                <div className="w-full flex flex-col justify-between">
                                    <h6 className="text-sm">
                                        {truncateString(camp?.campaignDescription, 180)}
                                    </h6>
                                    <div className="flex justify-end gap-4">
                                        <div onClick={() => handleDrawer(camp)} className="flex justify-end">
                                            <button className="rounded-md  px-6 py-1.5 text-sm font-semibold leading-6 text-slate-600 focus-visible:outline">
                                                View details
                                            </button>
                                        </div>
                                        <button
                                            className={`${!clickedButtons[index] ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} rounded-md px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                            onClick={() => handleButtonClick(camp?._id, influencerId, index)}
                                        >
                                            {!clickedButtons[index] ? 'Apply Now' : 'Applied'}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Influencers;
