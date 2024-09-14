import React, { useEffect, useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Checkbox, FormControl, InputLabel, Select, MenuItem, Skeleton, Badge } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import axios from "axios";
import { api_url } from "../../constants";
import toast, { Toaster } from "react-hot-toast";
import NoFound from "../common/NoFound";
import BreadCrumb from "../common/BreadCrumb";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from "react-router";

const OrdersInfluencers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [influencerData, setInfluencerData] = useState([]);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);
    const [statusFilter, setStatusFilter] = useState('Hired');
    const [loading, setLoading] = useState(false);

    const handleFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getInfluencerData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${api_url}/api/influencers`);
            if (response.data) {
                setInfluencerData(response.data);
            }
        } catch (error) {
            console.error("Error fetching influencer data", error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getInfluencerData();
    }, []);

    const navigate = useNavigate()
    const handleRowClick = async (influencer) => {
        setSelectedInfluencer(influencer);
        navigate(`/orders-influencer/${influencer._id}`, { state: { influencer } });
    };

    // const handleCloseDialog = () => {
    //     setDialogOpen(false);
    //     setSelectedInfluencer(null);
    //     setSelectedCampaigns([])
    //     setMessages([])
    //     setMessagesOther([])
    // };



    const filteredInfluencers = statusFilter
        ? influencerData.filter(influencer => influencer.status === statusFilter)
        : influencerData;

    return (
        <>
            <div>
                {/* <MenuComponent open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} /> */}
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <BreadCrumb />
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Influencers</h6>
                        <div className="flex gap-2 items-center">
                            <h6>Status:</h6>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        value="pending"
                                        checked={statusFilter === "pending"}
                                        onChange={handleFilterChange}
                                        className="text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                                    />
                                    Pending
                                </label>
                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        value="Hired"
                                        checked={statusFilter === "Hired"}
                                        onChange={handleFilterChange}
                                        className="text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                                    />
                                    Hired
                                </label>
                            </div>
                        </div>
                    </div>
                    {loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">ID</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Niche</th>
                                        <th scope="col" className="px-6 py-3">Followers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(1)].map((_, index) => (
                                        <tr className="bg-white border-b" key={index}>
                                            <td className="px-6 py-4"><Skeleton width="100px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="150px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="80px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="100px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="120px" height={20} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}


                    {
                        !loading && <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">ID</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Niche</th>
                                        <th scope="col" className="px-6 py-3">Followers</th>
                                        <th scope="col" className="px-6 py-3">Notifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredInfluencers?.length > 0 ? (
                                        filteredInfluencers.map((influencer) => (
                                            <tr className="bg-white border-b cursor-pointer" key={influencer._id} onClick={() => handleRowClick(influencer)}>
                                                <th className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">{influencer._id}</th>
                                                <td className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">
                                                    {influencer.firstName} {influencer.lastName}
                                                </td>
                                                <td className="px-6 py-4 text-slate-500">{influencer.email}</td>
                                                <td className="px-6 py-4 text-slate-500">{influencer.niche.join(', ')}</td>
                                                <td className="px-6 py-4 text-slate-500">
                                                    {influencer.socialMediaLinks.map(link => (
                                                        <div key={link.id} className="flex items-center gap-2 mb-2">
                                                            <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                                {link.link.split('/')[2]}
                                                            </a>
                                                            <span className="text-gray-500">{link.followerCount}</span>
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-4 text-slate-500">
                                                    <Badge color="secondary" variant={influencer.notificationSent ? `dot` : ''} >
                                                        <NotificationsNoneIcon />
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))) : (
                                        <tr>
                                            <td colSpan="5" className="text-black">
                                                <NoFound />
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </Container>
        </>
    );
};

export default OrdersInfluencers;
