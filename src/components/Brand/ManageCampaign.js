/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Container, Skeleton } from "@mui/material";
import axios from "axios";
import { Facebook } from "@mui/icons-material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import DrawerForInfluencers from "../common/DrawerForInfluencers";
import { api_url } from "../../constants";

const ManageCampaign = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl);
    const [openDraw, setOpenDrawer] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [filterType, setFilterType] = useState('');
    const [filterPlatform, setFilterPlatform] = useState('');
    const [loading, setLoading] = useState(true);
    const [campaign, setCampaign] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openDrawer = () => setOpenDrawer(true);
    const closeDrawer = () => setOpenDrawer(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterType, filterPlatform]);

   



    const handleButtonClick = async (campaignId, influencerId) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/campaign/${campaignId}/hire`, { influencerId });
            if (response.data.success) {
                getAllCampaigns(); 
            }
        } catch (error) {
            console.error('Error hiring influencer:', error);
        }
    };

    const handleDrawer = (data) => {
        openDrawer()
        setSelectedData(data);
    };
    const handleFilterTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const handleFilterPlatformChange = (e) => {
        setFilterPlatform(e.target.value);
    };




    return (
        <>
            <div>
                <DrawerForInfluencers openDraw={openDraw} closeDrawer={closeDrawer} selectedData={selectedData} hiredCounts={hiredCounts} />
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <Container>
                {
                    loading ?
                        <>
                            {
                                Array.from({ length:1 }).map((_, index) => (
                                    <div className="my-12 mx-8">
                                        <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                                            <h6 className="font-bold text-lg">
                                                <Skeleton variant="text" width={100} height={20} />
                                            </h6>
                                            <div className="flex gap-3">
                                                <Skeleton variant="rectangular" width={120} height={40} />
                                                <Skeleton variant="rectangular" width={120} height={40} />
                                            </div>
                                        </div>
                                        {Array.from({ length: campaign?.length }).map((_, index) => (
                                            <div key={index} className="border border-slate-200 my-5 rounded-md bg-slate-100">
                                                <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                    <div className="flex flex-col">
                                                        <Skeleton variant="text" width={200} height={30} />
                                                        <Skeleton variant="text" width={300} height={20} />
                                                        <div className="flex gap-1 mt-2 justify-center md:justify-center lg:justify-start">
                                                            <Skeleton variant="rectangular" width={60} height={20} />
                                                            <Skeleton variant="rectangular" width={60} height={20} />
                                                            <Skeleton variant="rectangular" width={60} height={20} />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 mt-3 md:mt-0 lg:mt-0">
                                                        <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                                            <Skeleton variant="text" width={50} height={24} />
                                                            <Skeleton variant="text" width={100} height={20} />
                                                        </div>
                                                        <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                                            <Skeleton variant="text" width={50} height={24} />
                                                            <Skeleton variant="text" width={100} height={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="py-2 px-2 mx-2 rounded-md bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                                    {Array.from({ length: 3 }).map((_, idx) => (
                                                        <div key={idx} className="border border-slate-200 py-2 px-2 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                                            <div className="flex flex-col items-center gap-1">
                                                                <Skeleton variant="rectangular" width={100} height={96} />
                                                                <Skeleton variant="text" width={120} height={20} />
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <Skeleton variant="text" width={120} height={20} />
                                                                <Skeleton variant="text" width={120} height={20} />
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Skeleton variant="rectangular" width={80} height={30} />
                                                                <Skeleton variant="rectangular" width={80} height={30} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }

                        </>
                        :

                        <div className="my-12 mx-8">
                            <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                                <h6 className="font-bold text-lg">All Campaign</h6>
                                <div className="flex gap-3">
                                    <select value={filterType} onChange={handleFilterTypeChange} className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                        <option value="">All Types</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Unpaid">Unpaid</option>
                                    </select>
                                    <select value={filterPlatform} onChange={handleFilterPlatformChange} className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                        <option value="">All Platforms</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Twitter">Twitter</option>
                                    </select>
                                </div>
                            </div>
                            {campaign?.map((camp, index) => {
                                const hiredCount = hiredCounts.find(count => count.campaignTitle === camp.campaignTitle)?.hiredCount || 0;
                                return (
                                    <>
                                        <div key={index} className="border cursor-pointer border-slate-200 my-5 rounded-md bg-slate-100">
                                            <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                <div className="flex flex-col">
                                                    <span onClick={() => handleDrawer(camp)}>{camp.campaignTitle}</span>
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
                                            <div className="py-2 px-2 mx-2 rounded-md bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                                {camp?.influencers?.map((data, index) => (
                                                    <div key={index} className="border border-slate-200 py-2 px-2 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                                        <div className="flex flex-col items-center gap-1">
                                                            <img className="w-full h-24 object-cover rounded-md" src={data?.influencerId?.media} />
                                                            <span className="text-sm">{data?.influencerId?.firstName} - {data?.influencerId?.lastName}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-sm">{data?.influencerId?.email}</span>
                                                            <span className="text-sm">{data?.influencerId?.niche}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {
                                                                data?.status === "Hired" ? <>
                                                                    <button
                                                                        className={` bg-teal-500 hover:bg-teal-500 cursor-not-allowed rounded-md px-6 py-1.5 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
                                                                        onClick={() => handleButtonClick(camp._id, data.influencerId._id)}

                                                                    >
                                                                        Hired
                                                                    </button>
                                                                </> : <>
                                                                    <button
                                                                        className={`rounded-md px-6 py-1.5 cursor-not-allowed text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${data?.status === "Applied" ? "bg-indigo-300 cursor-not-allowed" : "bg-[#4F46E5] "
                                                                            }`}

                                                                        disabled={data?.status === "Applied"}
                                                                    >
                                                                        {data?.status === "Applied" ? "Applied" : "Not Applied"}
                                                                    </button>
                                                                    {
                                                                        data?.status !== "Not Applied" && <button
                                                                            className={` bg-teal-700 hover:bg-teal-600 cursor-pointer rounded-md px-6 py-1.5 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
                                                                            onClick={() => handleButtonClick(camp._id, data.influencerId._id)}

                                                                        >
                                                                            Hire
                                                                        </button>
                                                                    }
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        

                                    </>
                                )
                            })}
                        </div>
                }
            </Container>
        </>
    );
};

export default ManageCampaign;
