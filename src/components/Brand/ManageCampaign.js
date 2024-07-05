/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Container } from "@mui/material";
// import MenuComponent from "./common/MenuComponent";
// import DrawerComponent from "./common/DrawerComponent";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";


const ManageCampaign = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl);
    const [openDraw, setOpenDrawer] = useState(false);
    const [selectedData, setSelectedData] = useState({})
    const [buttonColor, setButtonColor] = useState('bg-indigo-600');
    const [clickedButtons, setClickedButtons] = useState({});

    const handleButtonClick = (index) => {
        setClickedButtons((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
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
    const campaigns = [
        {
            title: "Summer Sale 2023, New Product launch - Summer 2023, back to School Sale 2023",
            description: "Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike",
            platform: "Instagram",
            type: "Paid",
            timeAgo: "1 hr ago",
            proposals: "02",
            creators: "02",
            hired: "02",
            status: "Active",
            images: [
                "https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg?resize=2048:*",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3Ehqyb83E1sTv48tNl86cfKMRyy0YsTRRA&s"
            ]
        },
        {
            title: "Summer Sale 2023, New Product launch - Summer 2023, back to School Sale 2023",
            description: "Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike",
            platform: "Instagram",
            type: "Paid",
            timeAgo: "1 hr ago",
            proposals: "02",
            creators: "02",
            status: "Active",
            hired: "02",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSed7XOOAyH0ZNkdaMt13e8mgyo_GiVRMnug&s",
                "https://pictures-ethiopia.jijistatic.com/2274267_NjIwLTYyMC04N2QzOTNkYTMw.webp"
            ]
        },
        {
            title: "Summer Sale 2023, New Product launch - Summer 2023, back to School Sale 2023",
            description: "Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike",
            platform: "Instagram",
            type: "Paid",
            timeAgo: "1 hr ago",
            proposals: "02",
            creators: "02",
            status: "Active",
            hired: "02",
            images: [
                "https://www.obeetee.in/cdn/shop/files/s_a52912e1-fe20-4995-966e-833fbfe9ba46_900x.jpg?v=1685786990",
                "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/tasmania_sofa/sofa_WSFATSNN2FVAM/sofa_WSFATSNN2FVAM_1.jpg"
            ]
        }
    ];
    const handleDrawer = (data) => {
        // openDrawer()
        setSelectedData(data)
    }
    return (
        <>
            <div>
                {/* <DrawerComponent openDraw={openDraw} closeDrawer={closeDrawer} selectedData={selectedData} /> */}
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Manage Campaign</h6>
                        <div className="flex gap-3">
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Active</option>
                                <option>Closed</option>
                            </select>
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Carryminati</option>
                                <option>IshowSpeed</option>
                            </select>
                        </div>
                    </div>
                    {campaigns.map((campaign, index) => (
                        <div key={index} className="border cursor-pointer border-slate-200 my-5 rounded-md bg-slate-100">
                            <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <div className="flex flex-col">
                                    <span>{campaign.title}</span>
                                    <span className="text-sm mt-2 flex items-center gap-1">
                                        <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                        {campaign.platform} .{" "}
                                        <span className="text-slate-500 flex items-center gap-1">
                                            <PaidOutlinedIcon style={{ fontSize: "13px", color: "slate" }} />
                                            {campaign.type}
                                        </span>{" "}
                                        . <span className="text-slate-500">{campaign.timeAgo}</span> &nbsp;
                                        <div className="rounded-full border border-green-700 px-2">
                                            <span className={`text-xs ${campaign.status === "Active" ? "text-green-600" : ""}`}>{campaign.status}</span>
                                        </div>
                                    </span>

                                </div>
                                <div className="flex gap-2 mt-3 md:mt-0 lg:mt-0">
                                    <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16 bg-slate-100">
                                        <span>{campaign.proposals}</span>
                                        <span className="text-sm text-slate-500">Proposals</span>
                                    </div>
                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                        <span>{campaign.creators}</span>
                                        <span className="text-sm text-slate-500">Creators</span>
                                    </div>
                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                        <span>{campaign.hired}</span>
                                        <span className="text-sm text-slate-500">Hired</span>
                                    </div>
                                </div>


                            </div>
                            <div className="py-2 px-2 mx-2 rounded-md bg-white grid grid-cols-3 gap-2">
                                <div className="border border-slate-200 py-2 px-2 rounded-md grid grid-cols-3 gap-2">
                                    <div className=' flex flex-col items-center gap-1'>
                                        <img className='w-full h-full object-cover rounded-md' src="https://www.tubefilter.com/wp-content/uploads/2023/10/i-show-speed.jpg" />
                                        <span className='text-sm'>CarryMinati</span>
                                    </div>
                                    <div className="">
                                        <span className="text-sm">Post Photo</span>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            className={`bg-indigo-600 rounded-md px-6 py-1.5 text-sm  leading-6 text-white shadow-sm hover:${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                            onClick={() => handleButtonClick(index)}
                                        >
                                            Activate
                                        </button>
                                    </div>
                                </div>
                                <div className="border border-slate-200 py-2 px-2 rounded-md grid grid-cols-3 gap-2">
                                    <div className=' flex flex-col items-center gap-1'>
                                        <img className='w-full h-full object-cover rounded-md' src="https://www.tubefilter.com/wp-content/uploads/2023/10/i-show-speed.jpg" />
                                        <span className='text-sm'>CarryMinati</span>
                                    </div>
                                    <div className="">
                                        <span className="text-sm">Post Photo</span>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            className={`bg-teal-600 rounded-md px-6 py-1.5 text-sm  leading-6 text-white shadow-sm hover:${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                            onClick={() => handleButtonClick(index)}
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                                <div className="border border-slate-200 py-2 px-2 rounded-md grid grid-cols-3 gap-2">
                                    <div className=' flex flex-col items-center gap-1'>
                                        <img className='w-full h-full object-cover rounded-md' src="https://www.tubefilter.com/wp-content/uploads/2023/10/i-show-speed.jpg" />
                                        <span className='text-sm'>CarryMinati</span>
                                    </div>
                                    <div className="">
                                        <span className="text-sm">Post Photo</span>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            className={`bg-indigo-600 rounded-md px-6 py-1.5 text-sm  leading-6 text-white shadow-sm hover:${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                            onClick={() => handleButtonClick(index)}
                                        >
                                            Activate
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

export default ManageCampaign;
