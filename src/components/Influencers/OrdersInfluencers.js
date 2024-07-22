/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";

const OrdersInfluencers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [activeTab, setActiveTab] = useState('Active');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dummyData = [
        { name: 'John Doe', subscribers: 15000, status: 'Active', plan: 'Gold' },
        { name: 'Jane Smith', subscribers: 12000, status: 'Closed', plan: 'Silver' },
        { name: 'Mike Johnson', subscribers: 8000, status: 'Expire within 30 days', plan: 'Bronze' },
        { name: 'Sarah Brown', subscribers: 5000, status: 'Auto-renew within 30 days', plan: 'Gold' },
        { name: 'Jane Smith', subscribers: 15000, status: 'Active', plan: 'Gold' },
        { name: 'John Doe', subscribers: 12000, status: 'Closed', plan: 'Silver' },
    ];

    const getFilteredData = (status) => {
        return dummyData.filter(data => data.status === status);
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

                    <div className="relative overflow-x-auto my-6">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Order ID</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Subscribers</th>
                                    <th scope="col" className="px-6 py-3">Plan</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getFilteredData(activeTab).map((influencer, index) => (
                                    <tr className="bg-white border-b" key={index}>
                                        <th className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">1</th>
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">
                                            {influencer.name}
                                        </th>
                                        <td className="px-6 py-4 text-slate-500">{influencer.subscribers}</td>
                                        <td className="px-6 py-4 text-slate-500">{influencer.plan}</td>
                                        <td className="py-4 px-6 text-slate-500 flex gap-2">
                                            <button className="mr-2 flex gap-2 items-center">
                                                <EditOutlinedIcon style={{ fontSize: "16px" }} />
                                                Edit
                                            </button>
                                            <button className="mr-2 flex gap-2 items-center">
                                                <DeleteOutlineOutlinedIcon style={{ fontSize: "16px" }} />
                                                Delete
                                            </button>
                                        </td>

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

export default OrdersInfluencers;
