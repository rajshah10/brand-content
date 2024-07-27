import React, { useState, useEffect } from "react";
import axios from "axios";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container, Skeleton } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import { useNavigate } from "react-router";

const Orders = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeTab, setActiveTab] = useState('Active');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const influencerId = localStorage.getItem('id')
    const navigate = useNavigate();
    const openMenu = Boolean(anchorEl);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:5000/api/campaign/${influencerId}/campaigns`);
                setOrders(response.data);
            } catch (error) {
                setError('Error fetching data');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [influencerId]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCampaignClick = (campaignId) => {
        navigate('/contentCreator', { state: { campaignId } });
    };

    return (
        <>
            <div>
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Orders</h6>
                    </div>

                    {loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Company Name</th>
                                        <th scope="col" className="px-6 py-3">Price</th>
                                        <th scope="col" className="px-6 py-3">Compensation</th>
                                        <th scope="col" className="px-6 py-3">Deadlines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(5)].map((_, index) => (
                                        <tr className="bg-white border-b" key={index}>
                                            <td className="px-6 py-4">
                                                <Skeleton width="100px" height={20} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Skeleton width="150px" height={20} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Skeleton width="80px" height={20} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Skeleton width="100px" height={20} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Skeleton width="120px" height={20} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    
                    {error && <p className="text-red-500">{error}</p>}

                    {!loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Company Name</th>
                                        <th scope="col" className="px-6 py-3">Price</th>
                                        <th scope="col" className="px-6 py-3">Compensation</th>
                                        <th scope="col" className="px-6 py-3">Deadlines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr className="bg-white border-b cursor-pointer" key={index} onClick={() => handleCampaignClick(order._id)}>
                                            <td className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">
                                                {order.COEmail}
                                            </td>
                                            <td className="px-6 py-4 text-slate-500">{order.companyName}</td>
                                            <td className="px-6 py-4 text-slate-500">{order.price}</td>
                                            <td className="px-6 py-4 text-slate-500">{order.compensation}</td>
                                            <td className="px-6 py-4 text-slate-500">{order.deadlines}</td>
                                        </tr>
                                    ))}
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
