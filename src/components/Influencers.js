/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Container } from "@mui/material";

const Influencers = () => {
    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    };
    return (
        <>
            <div>
                <div className=" bg-white shadow-sm  w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div>
                        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span class="font-medium text-slate-500 ">JL</span>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-6 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold">All Campaign</h6>
                        <div className="flex gap-3">
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Paid</option>
                                <option>Unpaid</option>
                            </select>
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Instagram</option>
                                <option>Facebook</option>
                            </select>
                        </div>
                    </div>
                    <div className="border border-slate-200 my-5 rounded-md bg-slate-100">
                        <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex flex-col">
                                <span>
                                    Summer Sale 2023, New Product launch - Summer 2023, back to
                                    School Sale 2023
                                </span>
                                <span className="text-sm mt-2 flex items-center gap-1">
                                    <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                    Instagram .{" "}
                                    <span className="text-slate-500 flex items-center gap-1">
                                        <PaidOutlinedIcon
                                            style={{ fontSize: "13px", color: "slate" }}
                                        />
                                        Paid
                                    </span>{" "}
                                    . <span className="text-slate-500">1 hr ago</span>
                                </span>
                            </div>
                            <div className="flex gap-2  mt-3 md:mt-0 lg:mt-0">
                                <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Proposals</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Creators</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Hired</span>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg?resize=2048:*" className="rounded-md h-32 w-full object-cover" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3Ehqyb83E1sTv48tNl86cfKMRyy0YsTRRA&s" className="rounded-md h-32 w-full object-cover" />
                            </div>
                            <div className="w-full flex flex-col justify-between">
                                <h6 className="text-sm">
                                    {truncateString("Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike", 180)}
                                </h6>
                                <div className="flex justify-end ">
                                    <button className="rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Apply 
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>





                    {/* Second */}
                    <div className="border border-slate-200 my-5 rounded-md bg-slate-100">
                        <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex flex-col">
                                <span>
                                    Summer Sale 2023, New Product launch - Summer 2023, back to
                                    School Sale 2023
                                </span>
                                <span className="text-sm mt-2 flex items-center gap-1">
                                    <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                    Instagram .{" "}
                                    <span className="text-slate-500 flex items-center gap-1">
                                        <PaidOutlinedIcon
                                            style={{ fontSize: "13px", color: "slate" }}
                                        />
                                        Paid
                                    </span>{" "}
                                    . <span className="text-slate-500">1 hr ago</span>
                                </span>
                            </div>
                            <div className="flex gap-2  mt-3 md:mt-0 lg:mt-0">
                                <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Proposals</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Creators</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Hired</span>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSed7XOOAyH0ZNkdaMt13e8mgyo_GiVRMnug&s" className="rounded-md h-32 w-full object-cover" />
                                <img src="https://pictures-ethiopia.jijistatic.com/2274267_NjIwLTYyMC04N2QzOTNkYTMw.webp" className="rounded-md h-32 w-full object-cover" />
                            </div>
                            <div className="w-full flex flex-col justify-between">
                                <h6 className="text-sm">
                                    {truncateString("Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike", 180)}
                                </h6>
                                <div className="flex justify-end ">
                                    <button className="rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Apply 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Influencers;
