import React, { useState } from "react";

const ContentCreatorFlow = (props) => {
    const { setFormSubmitted } = props;
    const [formData, setFormData] = useState({
        fullName: "",
        niche: "",
        bio: "",
        media: null,
        socialLinks: "",
        rateCard: "",
        followerCount: "",
    });
    const [step, setStep] = useState(1);

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
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Final form submission logic
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
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
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="niche" className="block text-sm font-medium leading-6 text-gray-900">
                                Niche
                            </label>
                            <div className="mt-1">
                                <input
                                    id="niche"
                                    name="niche"
                                    type="text"
                                    value={formData.niche}
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                Bio (no more than 750 words)
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    maxLength="750"
                                    required
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
                            <label htmlFor="media" className="block text-sm font-medium leading-6 text-gray-900">
                                Media
                            </label>
                            <div className="mt-1">
                                <input
                                    id="media"
                                    name="media"
                                    type="file"
                                    onChange={handleFileChange}
                                    // required
                                    className="block w-full text-gray-900"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="socialLinks" className="block text-sm font-medium leading-6 text-gray-900">
                                Social Links
                            </label>
                            <div className="mt-1">
                                <input
                                    id="socialLinks"
                                    name="socialLinks"
                                    type="text"
                                    value={formData.socialLinks}
                                    onChange={handleChange}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="rateCard" className="block text-sm font-medium leading-6 text-gray-900">
                                Rate Card
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
                                Follower Count
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
        <div className="flex flex-col justify-center w-full px-6 py-7 lg:px-8">
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-4 gap-3">
                    <div className={`w-8 h-8 rounded-full ${step >= 1 ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                    <div className={`w-8 h-8 rounded-full ${step >= 2 ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                    <div className={`w-8 h-8 rounded-full ${step >= 3 ? "bg-indigo-600" : "bg-gray-300"}`}></div>
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
                            {step < 3 ? "Next" : "Confirm"}
                        </button>
                    </div>
                </form>
                {/* <p className="mt-4 text-sm text-gray-500">
                    <a onClick={() => setFormSubmitted(false)} className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500">
                        {"Back"}
                    </a>
                </p> */}
            </div>
        </div>
    );
};

export default ContentCreatorFlow;
