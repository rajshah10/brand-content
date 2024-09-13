import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Skeleton, Dialog, DialogTitle, DialogContent, IconButton, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, DialogActions, TextField, Badge } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import { useNavigate } from "react-router";
import { api_url } from "../../constants";
import CloseIcon from "@mui/icons-material/Close";
import NoFound from "../common/NoFound";
import toast, { Toaster } from "react-hot-toast";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Orders = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const influencerId = localStorage.getItem('id');

   
    const openMenu = Boolean(anchorEl);

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${api_url}/api/campaign/${influencerId}/campaigns`);
            setOrders(response.data);
        } catch (error) {
            setError('Error fetching data');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [influencerId]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCampaignClick = (campaign) => {
        // setSelectedCampaign(campaign);
        navigate(`/orders/${campaign._id}`, { state: { campaign } });
        // fetchMessages(influencerId, campaign?._id);
        // fetchMessagesOther(influencerId, campaign?._id)
        // setDialogOpen(true);
    };

    const handleDialogClose = () => {
       
        // setSelectedCampaign(null);
        // setMessages([]);
        // setMessagesOther()
    };
    return (
        <>
            <div>
                <Toaster position="top-right" reverseOrder={false} />
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} search={false} />
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Orders</h6>
                    </div>

                    {loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Order Id</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Company Name</th>
                                        <th scope="col" className="px-6 py-3">Compensation</th>
                                        <th scope="col" className="px-6 py-3">Deadlines</th>

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


                    {!loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Order Id</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Company Name</th>
                                        <th scope="col" className="px-6 py-3">Compensation</th>
                                        <th scope="col" className="px-6 py-3">Deadlines</th>
                                        <th scope="col" className="px-6 py-3">Notifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders?.length > 0 ? (
                                        orders.map((order, index) => (
                                            <tr className="bg-white border-b cursor-pointer" key={index} onClick={() => handleCampaignClick(order)}>
                                                <td className="px-6 py-4 text-slate-500">{order._id}</td>
                                                <td className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">{order.COEmail}</td>
                                                <td className="px-6 py-4 text-slate-500">{order.companyName}</td>
                                                <td className="px-6 py-4 text-slate-500">{order.compensation}</td>
                                                <td className="px-6 py-4 text-slate-500">{order.deadlines}</td>
                                                <td className="px-6 py-4 text-slate-500">
                                                    <Badge color="secondary" variant={order.notificationSent ? `dot` : ''} >
                                                        <NotificationsNoneIcon />
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-black">
                                                <NoFound />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                    )}


                    
                </div>
            </Container>
        </>
    );
};

export default Orders;
