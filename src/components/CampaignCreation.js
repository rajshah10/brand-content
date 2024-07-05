import React, { useState } from 'react';
import MenuComponent from "./common/MenuComponent";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container } from '@mui/material';

const CampaignCreation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [buttonColor, setButtonColor] = useState('bg-indigo-600');
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [campaign, setCampaign] = useState({
        companyName: '',
        campaignTitle: '',
        campaignDescription: '',
        requirements: '',
        deliverables: '',
        deadlines: '',
        compensation: '',
        createdDateTime: new Date().toISOString()
    });

    const handleChange = (e) => {
        setCampaign({
            ...campaign,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the campaign data submission
        console.log('Campaign Details:', campaign);
    };

    return (
        <>
            <div>
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <div className="bg-white shadow-sm w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            required
                            className="block xs:w-full sm:w-96 md:w-96 lg:w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                        />
                        <div className="absolute top-1 right-2">
                            <SearchOutlinedIcon style={{ fontSize: "18px", color: "slategray" }} />
                        </div>
                    </div>
                    <div>
                        <div onClick={handleClick} className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span className="font-medium text-slate-500 ">JL</span>
                        </div>
                    </div>
                </div>
            </div>
            <Container>

                <div className="my-6 mx-8">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Create New Campaign</h2>
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="grid grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                        <label for="companyName" class="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                                        <div class="mt-2">
                                            <input type="text" name="companyName" id="first-name" autocomplete="given-name" value={campaign.companyName}
                                            onChange={handleChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none  sm:text-sm sm:leading-6 px-2" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="campaignTitle" class="block text-sm font-medium leading-6 text-gray-900">Campaign Title</label>
                                        <div class="mt-2">
                                            <input type="text" name="campaignTitle" id="last-name" autocomplete="family-name" value={campaign.campaignTitle}
                                            onChange={handleChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none  sm:text-sm sm:leading-6 px-2" />
                                        </div>
                                    </div>
                                {/* <div className="sm:col-span-3">
                                    <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="companyName"
                                            id="companyName"
                                            value={campaign.companyName}
                                            onChange={handleChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="campaignTitle" className="block text-sm font-medium leading-6 text-gray-900">Campaign Title</label>
                                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="campaignTitle"
                                            id="campaignTitle"
                                            value={campaign.campaignTitle}
                                            onChange={handleChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div> */}
                                <div className="col-span-full">
                                    <label htmlFor="campaignDescription" className="block text-sm font-medium leading-6 text-gray-900">Campaign Description</label>
                                    <div className="mt-2">
                                        <textarea
                                            name="campaignDescription"
                                            id="campaignDescription"
                                            value={campaign.campaignDescription}
                                            onChange={handleChange}
                                            rows="4"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="requirements" className="block text-sm font-medium leading-6 text-gray-900">Requirements</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="requirements"
                                            id="requirements"
                                            value={campaign.requirements}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="deliverables" className="block text-sm font-medium leading-6 text-gray-900">Deliverables</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="deliverables"
                                            id="deliverables"
                                            value={campaign.deliverables}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="deadlines" className="block text-sm font-medium leading-6 text-gray-900">Deadlines</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="deadlines"
                                            id="deadlines"
                                            value={campaign.deadlines}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="compensation" className="block text-sm font-medium leading-6 text-gray-900">Compensation</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="compensation"
                                            id="compensation"
                                            value={campaign.compensation}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="createdDateTime" className="block text-sm font-medium leading-6 text-gray-900">Created DateTime</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="createdDateTime"
                                            id="createdDateTime"
                                            value={campaign.createdDateTime}
                                            disabled
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-100 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className={` bg-blue-500 text-white rounded-md px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            Create Campaign
                        </button>

                    </form>
                </div>

            </Container>
        </>
    );
};

export default CampaignCreation;
