/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Drawer, IconButton } from '@mui/material'
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const DrawerForInfluencers = ({ openDraw, closeDrawer, selectedData, hiredCounts }) => {
    console.log("Selected", selectedData)
    const hiredCount = hiredCounts.find(count => count.campaignTitle === selectedData.campaignTitle)?.hiredCount || 0;
    const truncateString = (str, num) => {
        if (str?.length <= num) {
            return str;
        }
        return str?.slice(0, num) + "...";
    };
    const campaignData = {
        startDate: "2024-07-01",
        endDate: "2024-07-31",
        keyDates:
            "Application Deadline: 2024-06-25, Content Submission: 2024-07-10, Publication: 2024-07-15",
        budget: selectedData?.compensation,
        deliverables: selectedData?.deliverables,
    };
    return (
        <Drawer
            placement="right"
            open={openDraw}
            onClose={closeDrawer}
            className="drawer p-4"
        >
            <div className="py-2 px-4">
                <div className="flex items-center justify-end">
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="my-2">
                    <div>
                        <h6 className="text-lg">{selectedData.campaignTitle}</h6>
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
                    <div className="flex gap-2 mt-4">
                        <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                            <span>{selectedData?.influencers?.length || 0}</span>
                            <span className="text-sm text-slate-500">Creators</span>
                        </div>
                        <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                            <span>{hiredCount || 0}</span>
                            <span className="text-sm text-slate-500">Hired</span>
                        </div>
                    </div>
                    <div className="my-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3 bg-white py-2 rounded-md">
                        <div className="w-full flex flex-col justify-between mt-2">
                            <h6 className="text-sm">
                                {truncateString(selectedData.campaignDescription, 250)}
                            </h6>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                            {selectedData?.images?.map((image, idx) => (
                                <img
                                    key={idx}
                                    src={image}
                                    className="rounded-md h-32 w-full object-cover"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="my-6  py-2 rounded-lg">
                        <h2 className="text-lg mb-4">Campaign Details</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-slate-300">
                                <thead className="bg-slate-200">
                                    <tr>
                                        <th className="py-2 px-4 border  border-slate-200 text-left text-slate-600 font-medium">
                                            Detail
                                        </th>
                                        <th className="py-2 px-4 border  border-slate-200 text-left text-slate-600 font-medium">
                                            Information
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium">
                                            Start and End Dates
                                        </td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">
                                            {selectedData?.deadlines}
                                        </td>
                                    </tr>
                                    {/* <tr className="hover:bg-slate-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium">Key Dates and Deadlines</td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">{campaignData.keyDates}</td>
                                    </tr> */}
                                    <tr className="hover:bg-slate-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium">
                                            Budget and Compensation
                                        </td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">
                                            {campaignData.budget}
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="py-2 px-4 border border-slate-200 text-slate-800 font-medium">
                                            Deliverables
                                        </td>
                                        <td className="py-2 px-4 border border-slate-200 text-slate-700">
                                            {campaignData.deliverables}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {
                        selectedData?.influencers?.length > 0 && <div className="my-6 bg-white rounded-lg">
                            <h2 className="text-lg mb-4">Creators</h2>
                            <div className="grid grid-cols-5 gap-2">
                                {selectedData?.influencers?.map((image, idx) => (
                                    <div className=" flex flex-col items-center gap-1">
                                        <Avatar
                                            sx={{ height: "70px", width: "70px" }}
                                            className="w-full h-full object-cover rounded-md"
                                            src={image?.influencerId?.media}
                                        />
                                        <span className="text-sm">{image?.influencerId?.firstName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    {
                        selectedData?.influencers?.filter(d => d?.status === "Hired")?.length > 0 && <div className="my-6 bg-white rounded-lg">
                            <h2 className="text-lg mb-4">Hired Creators</h2>
                            <div className="grid grid-cols-5 gap-2">
                                {selectedData?.influencers?.filter(d => d?.status === "Hired").map((image, idx) => (
                                    <div className=" flex flex-col items-center gap-1">
                                        <Avatar
                                            sx={{ height: "70px", width: "70px" }}
                                            className="w-full h-full object-cover rounded-md"
                                            src={image?.influencerId?.media}
                                        />
                                        <span className="text-sm">{image?.influencerId?.firstName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Drawer>
    )
}

export default DrawerForInfluencers
