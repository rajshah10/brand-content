/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";
import { api_url } from "../constants";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import StripePricingTable from "./StripPricingTable";

const Brands = (props) => {
    const { setStep, step } = props;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [loadingCode, setLoadingCode] = useState(false)
    const [subscripnDialog, setSubscripnDialog] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        // role: "",
        email: "",
        password: "",
        companyName: "",
        phone: "",
        brandDescription: "",
        influencerType: [],
        brandAddress: "",
        collaborationType: "",
        subscription: "",
        payment: false,
        auth: ''
    });

    const handleSubscription = () => {
        setSubscripnDialog(true)
    }

    const handleCloseSubscription = () => {
        setSubscripnDialog(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleInfluencerType = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    influencerType: [...prevState.influencerType, value],
                };
            } else {
                return {
                    ...prevState,
                    influencerType: prevState.influencerType.filter((influencerType) => influencerType !== value),
                };
            }
        });
    };
    // const handleCollaborationType = (e) => {
    //     const { value, checked } = e.target;
    //     setFormData((prevState) => {
    //         if (checked) {
    //             return {
    //                 ...prevState,
    //                 collaborationType: [...prevState.collaborationType, value],
    //             };
    //         } else {
    //             return {
    //                 ...prevState,
    //                 collaborationType: prevState.collaborationType.filter((collaborationType) => collaborationType !== value),
    //             };
    //         }
    //     });
    // };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (step < 4) {
                setStep(step + 1);
            } else if (step >= 4) {
                setLoading(true);
                const response = await axios.post(`${api_url}/api/brands`, formData);
                if (response.status === 201) {
                    toast.success('Brand registration completed successfully!');
                    setLoading(false);
                    props.setShowPricingTable(true);
                    setTimeout(() => {
                        toast.success('Please make sure to secure your account by clicking on View Business plans below and complete the payment to access the site.');
                    }, 2000);
                }

            }

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message === "Invalid authentication code") {
                toast.error('Invalid authentication code. Please try again.');
            }
            setLoading(false);
        }
    };


    const handleSendCode = async () => {
        setLoadingCode(true)
        try {
            const { password, companyName, brandAddress, brandDescription, fullName, payment, phone, influencerType, subscription, auth, ...formDataWithoutPassword } = formData;
            const response = await axios.post(`${api_url}/api/influencers/sendcode`, formDataWithoutPassword);
            if (response) {
                toast.success("Auth code has been sent to your email address.");
                setLoadingCode(false)
            }
        } catch (error) {
            setLoadingCode(false);
            toast.error("Invalid Email Address");

        }
    }



    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                                Company/Organization Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="brandAddress" className="block text-sm font-medium leading-6 text-gray-900">
                                Brand Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="brandAddress"
                                    name="brandAddress"
                                    type="text"
                                    value={formData.brandAddress}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Brand Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div>
                            <label htmlFor="brandDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                Brand Description
                            </label>
                            <div className="mt-1">
                                <input
                                    id="brandDescription"
                                    name="brandDescription"
                                    type="text"
                                    value={formData.brandDescription}
                                    onChange={handleChange}
                                    required
                                    className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Types of influencer campaigns that your brand/organization participates in
                            </label>
                            <div className="mt-4">

                                <div className="mt-2 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="paidCampaigns"
                                            name="influencerType"
                                            type="checkbox"
                                            value="Paid Campaigns"
                                            checked={formData.influencerType.includes("Paid Campaigns")}
                                            onChange={handleInfluencerType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="paidCampaigns" className="ml-2 block text-sm text-gray-900">
                                            Paid Campaigns
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="giftedCampaigns"
                                            name="influencerType"
                                            type="checkbox"
                                            value="Gifted Campaigns"
                                            checked={formData.influencerType.includes("Gifted Campaigns")}
                                            onChange={handleInfluencerType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="giftedCampaigns" className="ml-2 block text-sm text-gray-900">
                                            Gifted Campaigns
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="sponsorships"
                                            name="influencerType"
                                            type="checkbox"
                                            value="Sponsorships"
                                            checked={formData.influencerType.includes("Sponsorships")}
                                            onChange={handleInfluencerType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sponsorships" className="ml-2 block text-sm text-gray-900">
                                            Sponsorships
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="affiliatePrograms"
                                            name="influencerType"
                                            type="checkbox"
                                            value="Affiliate Programs"
                                            checked={formData.influencerType.includes("Affiliate Programs")}
                                            onChange={handleInfluencerType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="affiliatePrograms" className="ml-2 block text-sm text-gray-900">
                                            Affiliate Programs
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="pr"
                                            name="influencerType"
                                            type="checkbox"
                                            value="PR"
                                            checked={formData.influencerType.includes("PR")}
                                            onChange={handleInfluencerType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pr" className="ml-2 block text-sm text-gray-900">
                                            PR
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmation
                            </label>
                            <div className="mt-1">
                                <p className="text-slate-900 text-sm">
                                    Please review all the information you have provided.
                                </p>
                            </div>
                        </div> */}
                    </>
                );
            case 4:
                return (
                    <>
                        {/* <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Type of Equellence collaboration (Check all that apply)
                                *
                            </label>
                            <div className="mt-4">

                                <div className="mt-2 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="Roster"
                                            name="collaborationType"
                                            type="checkbox"
                                            value="Roster"
                                            checked={formData.collaborationType.includes("Roster")}
                                            onChange={handleCollaborationType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="Roster" className="ml-2 block text-sm text-gray-900">
                                            Roster
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="partnership"
                                            name="collaborationType"
                                            type="checkbox"
                                            value="Partnership"
                                            checked={formData.collaborationType.includes("Partnership")}
                                            onChange={handleCollaborationType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="partnership" className="ml-2 block text-sm text-gray-900">
                                            Partnership (for non-profits/Horse Shows only)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="sponsorships"
                                            name="collaborationType"
                                            type="checkbox"
                                            value="Sponsorships"
                                            checked={formData.collaborationType.includes("Sponsorships")}
                                            onChange={handleCollaborationType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sponsorships" className="ml-2 block text-sm text-gray-900">
                                            Sponsorship
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="vendor"
                                            name="collaborationType"
                                            type="checkbox"
                                            value="Vendor at Equfest"
                                            checked={formData.collaborationType.includes("Vendor at Equfest")}
                                            onChange={handleCollaborationType}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="vendor" className="ml-2 block text-sm text-gray-900">
                                            Vendor at Equfest
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div> */}
                        <div>
                            <div>
                                <label htmlFor="auth" className="block text-sm font-medium leading-6 text-gray-900">
                                    Auth Code {loadingCode ? <CircularProgress size={"22px"} sx={{ color: "indigo" }} /> : <a onClick={handleSendCode} className="cursor-pointer text-indigo-600"> Send code</a>}
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="auth"
                                        name="auth"
                                        type="text"
                                        value={formData.auth}
                                        onChange={handleChange}
                                        required
                                        className="block outline-none px-2 w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <p className='text-sm text-gray-600 mt-1 italic'>Pls check your email for the auth code.</p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="auth" className="block text-sm font-medium leading-6 text-gray-900">
                                Subscription - <span className="cursor-pointer text-blue-700" onClick={handleSubscription}>View Business Plans</span>
                            </label>
                            <select
                                required
                                name="subscription"
                                id="subscription"
                                onChange={handleChange}
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                            >
                                <option value="">Select Subscription</option>
                                <option value="small-business">Small Business</option>
                                <option value="standard-business">Standard Business</option>
                                <option value="Professionals-business">Professionals Business</option>
                            </select>
                            <Dialog
                                open={subscripnDialog}
                                className="pricetable"
                                onClose={handleCloseSubscription}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                maxWidth='lg'
                            >
                                <DialogTitle id="alert-dialog-title">
                                    <div className="flex justify-between">
                                        <Typography>Subscriptions</Typography>
                                        <Typography onClick={handleCloseSubscription} className="cursor-pointer"><CloseIcon /></Typography>
                                    </div>
                                </DialogTitle>
                                <DialogContent>

                                    <div className="bg-[#F8FAFC] mx-0">
                                        <div className="lg:py-3 flex items-center justify-center sm:px-6 lg:px-8">
                                            <div className="mx-auto">
                                                <StripePricingTable />
                                            </div>
                                        </div>

                                    </div>

                                </DialogContent>

                            </Dialog>
                        </div>

                        <div>
                            {/* <p className="block text-xs font-medium leading-6 text-gray-900 italic">
                            Make sure to click 'View Business Plans' and complete the payment. After that, you will be able to access the site.
                            </p> */}
                            <div className="mt-1">
                                <p className="text-slate-900 text-sm">
                                    Please review all the information you have provided.
                                </p>
                            </div>
                        </div>
                    </>
                )
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col justify-center w-full px-6 lg:px-8">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-4 gap-3">
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 1 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>1</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white  ${step >= 2 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>2</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 3 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>3</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 4 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>4</div>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {renderStep()}
                    <div className="flex justify-between">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-600 bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-100"
                            >
                                Back
                            </button>
                        )}
                        <button
                            type="submit"
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4F46E5]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-100"
                        >
                            {loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : step < 4 ? "Next" : "Confirm"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Brands;
