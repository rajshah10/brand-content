import React, { useState } from "react";
import { useNavigate } from "react-router";

const ContentCreatorFlow = (props) => {
    const { setStep, step } = props;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        niche: "",
        bio: "",
        media: null,
        email: "",
        rateCard: "",
        followerCount: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            media: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (step < 4) {
            setStep(step + 1);
        } else if (step >= 4) {
            navigate('/influencers');
        }
    };



    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Equestrian Content Niche

                            </label>
                            <div className="mt-4">

                                <div className="mt-2 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="paidCampaigns"
                                            name="campaignTypes"
                                            type="checkbox"
                                            value="Paid Campaigns"
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="paidCampaigns" className="ml-2 block text-sm text-gray-900">
                                            Lifestyle
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="giftedCampaigns"
                                            name="campaignTypes"
                                            type="checkbox"
                                            value="Gifted Campaigns"
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="giftedCampaigns" className="ml-2 block text-sm text-gray-900">
                                            Comedy
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="sponsorships"
                                            name="campaignTypes"
                                            type="checkbox"
                                            value="Sponsorships"
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sponsorships" className="ml-2 block text-sm text-gray-900">
                                            College/Student Life
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="affiliatePrograms"
                                            name="campaignTypes"
                                            type="checkbox"
                                            value="Affiliate Programs"
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="affiliatePrograms" className="ml-2 block text-sm text-gray-900">
                                            Luxury
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="pr"
                                            name="campaignTypes"
                                            type="checkbox"
                                            value="PR"
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pr" className="ml-2 block text-sm text-gray-900">
                                            Fashion
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="pr"
                                            name="campaignTypes"
                                            type="checkbox"
                                            value="PR"
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pr" className="ml-2 block text-sm text-gray-900">
                                            Education
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}

                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>



                    </>
                );
            case 2:
                return (
                    <>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}

                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="rateCard" className="block text-sm font-medium leading-6 text-gray-900">
                                Instagram handle
                            </label>
                            <div className="mt-1">
                                <input
                                    id="rateCard"
                                    name="rateCard"
                                    type="text"
                                    value={formData.rateCard}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div>
                            <label htmlFor="followerCount" className="block text-sm font-medium leading-6 text-gray-900">
                                Follower Count on Instagram
                            </label>
                            <div className="mt-1">
                                <input
                                    id="followerCount"
                                    name="followerCount"
                                    type="text"
                                    value={formData.followerCount}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="followerCount" className="block text-sm font-medium leading-6 text-gray-900">
                                Link to Instagram
                            </label>
                            <div className="mt-1">
                                <input
                                    id="followerCount"
                                    name="followerCount"
                                    type="text"
                                    value={formData.followerCount}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="followerCount" className="block text-sm font-medium leading-6 text-gray-900">
                                TikTok Handle (Put N/A if none)

                            </label>
                            <div className="mt-1">
                                <input
                                    id="followerCount"
                                    name="followerCount"
                                    type="text"
                                    value={formData.followerCount}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </>
                );
            case 4:
                return (
                    <>
                        <div>
                            <label htmlFor="followerCount" className="block text-sm font-medium leading-6 text-gray-900">
                                Follower Count on TikTok

                            </label>
                            <div className="mt-1">
                                <input
                                    id="followerCount"
                                    name="followerCount"
                                    type="text"
                                    value={formData.followerCount}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="followerCount" className="block text-sm font-medium leading-6 text-gray-900">
                                Link To TikTok
                            </label>
                            <div className="mt-1">
                                <input
                                    id="followerCount"
                                    name="followerCount"
                                    type="text"
                                    value={formData.followerCount}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmation
                            </label>
                            <div className="mt-1">
                                <p className="text-slate-900 text-sm">
                                    Please review all the information you have provided.
                                </p>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col justify-center w-full px-6 lg:px-8">
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-4 gap-3">
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 1 ? "bg-indigo-600" : "bg-slate-400"}`}>1</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white  ${step >= 2 ? "bg-indigo-600" : "bg-slate-400"}`}>2</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 3 ? "bg-indigo-600" : "bg-slate-400"}`}>3</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 4 ? "bg-indigo-600" : "bg-slate-400"}`}>3</div>
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
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-100"
                        >
                            {step < 4 ? "Next" : "Confirm"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContentCreatorFlow;
