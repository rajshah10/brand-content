import React, { useState, useEffect } from "react";
import axios from "axios";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import { useNavigate } from "react-router";

const Orders = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeTab, setActiveTab] = useState('Active');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [influencerId, setInfluencerId] = useState('')
    const navigate = useNavigate();

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
    }, [activeTab, influencerId]);

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

                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}

                    <div className="relative overflow-x-auto my-6">
                        <table className="w-full text-sm text-left text-gray-500 table-auto">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Company Name</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Compensation</th>
                                    <th scope="col" className="px-6 py-3">Deadlines</th>
                                    {/* <th scope="col" className="px-6 py-3">Actions</th> */}
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
                                        {/* <td className="px-6 py-4 text-slate-500 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button className="flex gap-2 items-center">
                                                    <EditOutlinedIcon style={{ fontSize: "16px" }} />
                                                    Edit
                                                </button>
                                                <button className="flex gap-2 items-center">
                                                    <DeleteOutlineOutlinedIcon style={{ fontSize: "16px" }} />
                                                    Delete
                                                </button>
                                            </div>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Orders;
