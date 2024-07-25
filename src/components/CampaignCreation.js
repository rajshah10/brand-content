import React, { useEffect, useState } from 'react';
import MenuComponent from "./common/MenuComponent";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { CircularProgress, Container } from '@mui/material';
import Header from './common/Header';
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';

const CampaignCreation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [influencerData, setInfluencerData] = useState([])
    const [loading, setLoading] = useState(false);

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
        COEmail: '',
        brand: '',
        price: 'Paid',
        social_media: 'Instagram',
        images: [],
        influencerdata: ""
        // createdDateTime: new Date().toISOString()
    });


    const handleChange = (e) => {
        setCampaign({
            ...campaign,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

        Object.keys(campaign).forEach(key => {
            if (key === 'images') {
                // Append each file in the images array to FormData
                for (let i = 0; i < campaign.images.length; i++) {
                    formData.append('images', campaign.images[i]);
                }
            } else {
                formData.append(key, campaign[key]);
            }
        });

        try {
            const response = await axios.post('http://localhost:5000/api/campaign', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                toast.success('Form submitted successfully!');
                setLoading(false);
            }

        } catch (error) {
            console.error('Error submitting the form:', error);
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setCampaign({
            ...campaign,
            images: e.target.files  // Update state with selected files
        });
    };

    const getInfluencerData = async () => {
        const response = await axios.get('http://localhost:5000/api/influencers')
        if (response.data) {
            setInfluencerData(response.data);
        }
    }
    useEffect(() => {
        getInfluencerData()
    }, [])
    console.log("InfluencerData", influencerData)
    console.log("formData", campaign)
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div>
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} search={false} />
            </div>
            <div className="mx-auto px-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">

                <div className="my-12">
                    <h2 className="font-bold text-lg">Create New Campaign</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                    <form onSubmit={handleSubmit} className="space-y-12 mt-10">
                        <div className="">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                                    <div className="mt-2">
                                        <input
                                            required type="text" name="companyName" id="first-name" autoComplete="given-name" value={campaign.companyName}
                                            onChange={handleChange} className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none  sm:text-sm sm:leading-6 px-2" />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="campaignTitle" className="block text-sm font-medium leading-6 text-gray-900">Campaign Title</label>
                                    <div className="mt-2">
                                        <input
                                            required type="text" name="campaignTitle" id="last-name" autoComplete="family-name" value={campaign.campaignTitle}
                                            onChange={handleChange} className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none  sm:text-sm sm:leading-6 px-2" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="campaignDescription" className="block text-sm font-medium leading-6 text-gray-900">Campaign Description</label>
                                    <div className="mt-2">
                                        <textarea
                                            name="campaignDescription"
                                            id="campaignDescription"
                                            value={campaign.campaignDescription}
                                            onChange={handleChange}
                                            rows="4"
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="requirements" className="block text-sm font-medium leading-6 text-gray-900">Requirements</label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            type="text"
                                            name="requirements"
                                            id="requirements"
                                            value={campaign.requirements}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="deliverables" className="block text-sm font-medium leading-6 text-gray-900">Deliverables</label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            type="text"
                                            name="deliverables"
                                            id="deliverables"
                                            value={campaign.deliverables}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="deadlines" className="block text-sm font-medium leading-6 text-gray-900">Deadlines</label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            type="text"
                                            name="deadlines"
                                            id="deadlines"
                                            value={campaign.deadlines}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="compensation" className="block text-sm font-medium leading-6 text-gray-900">Compensation</label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            type="text"
                                            name="compensation"
                                            id="compensation"
                                            value={campaign.compensation}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">Brand</label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            type="text"
                                            name="brand"
                                            id="brand"
                                            value={campaign.brand}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="COEmail" className="block text-sm font-medium leading-6 text-gray-900">Campaign Owner Email</label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            type="text"
                                            name="COEmail"
                                            id="COEmail"
                                            value={campaign.COEmail}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Pricing</label>
                                    <div className="mt-2">
                                        <select
                                            required
                                            type="text"
                                            name="price"
                                            id="price"
                                            value={campaign.price}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        >
                                            <option name="Unpaid">Unpaid</option>
                                            <option name="Paid">Paid</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="influencerdata" className="block text-sm font-medium leading-6 text-gray-900">Social Media</label>
                                    <div className="mt-2">
                                        <select
                                            required
                                            type="text"
                                            name="influencerdata"
                                            id="influencerdata"
                                            value={campaign.influencerdata}
                                            onChange={handleChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                        >
                                            {
                                                influencerData?.map((data, index) => (
                                                    <option key={data._id} value={data._id}>{data.firstName} - {data.lastName}</option>

                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                {/* Other input fields */}
                                <div className="col-span-full">
                                    <label htmlFor="images" className="block text-sm font-medium leading-6 text-gray-900">Campaign Images</label>
                                    <div className="mt-2">
                                        <input
                                            type="file"
                                            name="images"
                                            id="images"
                                            multiple
                                            onChange={handleFileChange}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* <div className="col-span-full">
                                    <label htmlFor="createdDateTime" className="block text-sm font-medium leading-6 text-gray-900">Created DateTime</label>
                                    <div className="mt-2">
                                        <input
                                        required
                                            type="text"
                                            name="createdDateTime"
                                            id="createdDateTime"
                                            value={campaign.createdDateTime}
                                            disabled
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-100 sm:text-sm sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-100"
                        >
                            {loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : " Create Campaign"}
                        </button>

                    </form>
                </div>

            </div>
        </>
    );
};

export default CampaignCreation;
