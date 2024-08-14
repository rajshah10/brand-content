/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { CircularProgress } from "@mui/material";
import { api_url } from "../constants";
const ContentCreatorFlow = (props) => {
    const { setStep, step } = props;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loadingCode, setLoadingCode] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        niche: [],
        bio: "",
        email: "",
        socialMediaLinks: [{ id: 1, link: "", followerCount: '' }],
        phoneNumber: "",
        password: "",
        auth: ""
    });

    const handleButtonClick = () => {
        setFormData((prevState) => ({
            ...prevState,
            socialMediaLinks: [...prevState.socialMediaLinks, { id: prevState.socialMediaLinks.length + 1, link: "" }],
        }));
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleNicheChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    niche: [...prevState.niche, value],
                };
            } else {
                return {
                    ...prevState,
                    niche: prevState.niche.filter((niche) => niche !== value),
                };
            }
        });
    };

    const handleDeleteSocialMedia = (id) => {
        const updatedLinks = formData.socialMediaLinks.filter(
            (socialMedia) => socialMedia.id !== id
        );
        setFormData({
            ...formData,
            socialMediaLinks: updatedLinks,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (step < 3) {
                setStep(step + 1);
            } else if (step >= 3) {
                setLoading(true);

                const response = await axios.post(`${api_url}/api/influencers`, formData); // Update the API endpoint accordingly
                if (response.status === 201) {
                    toast.success('Form submitted successfully!');
                    setLoading(false);
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000);
                }

            }

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message === "Invalid authentication code") {
                toast.error('Invalid authentication code. Please try again.');
            }
            setLoading(false);
        }
    };

    const handleSocialMediaChange = (id, field, value) => {
        const updatedLinks = formData.socialMediaLinks.map((link) =>
            link.id === id ? { ...link, [field]: value } : link
        );
        setFormData({
            ...formData,
            socialMediaLinks: updatedLinks,
        });
    };

    const handleSendCode = async () => {
        setLoadingCode(true)
        try {
            const { password,phoneNumber,niche,socialMediaLinks,lastName,firstName,bio,auth, ...formDataWithoutPassword } = formData;
            const response = await axios.post(`${api_url}/api/influencers/sendcode`, formDataWithoutPassword);
            if (response) {
                toast.success(response.data);
                setLoadingCode(false)
            }
        } catch (error) {
            setLoadingCode(false);
            toast.error("Please enter proper Email Id");

        }
    }


    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block outline-none  w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                                    className="block outline-none  w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="block outline-none  w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="niche" className="block text-sm font-medium leading-6 text-gray-900">
                                Equestrian Content Niche

                            </label>
                            <div className="mt-4">

                                <div className="mt-2 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="Lifestyle"
                                            name="niche"
                                            type="checkbox"
                                            value="Lifestyle"
                                            checked={formData.niche.includes("Lifestyle")}
                                            onChange={handleNicheChange}
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
                                        />
                                        <label htmlFor="Lifestyle" className="ml-2 block text-sm text-gray-900">
                                            Lifestyle
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="Comedy"
                                            name="niche"
                                            type="checkbox"
                                            value="Comedy"
                                            checked={formData.niche.includes("Comedy")}
                                            onChange={handleNicheChange}
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
                                        />
                                        <label htmlFor="Comedy" className="ml-2 block text-sm text-gray-900">
                                            Comedy
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="College/Student"
                                            name="niche"
                                            type="checkbox"
                                            value="College/Student"
                                            checked={formData.niche.includes("College/Student")}
                                            onChange={handleNicheChange}
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
                                        />
                                        <label htmlFor="College/Student" className="ml-2 block text-sm text-gray-900">
                                            College/Student Life
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="Luxury"
                                            name="niche"
                                            type="checkbox"
                                            value="Affiliate Programs"
                                            checked={formData.niche.includes("Affiliate Programs")}
                                            onChange={handleNicheChange}
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
                                        />
                                        <label htmlFor="Luxury" className="ml-2 block text-sm text-gray-900">
                                            Luxury
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="education"
                                            name="niche"
                                            type="checkbox"
                                            value="education"
                                            checked={formData.niche.includes("education")}
                                            onChange={handleNicheChange}
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
                                        />
                                        <label htmlFor="education" className="ml-2 block text-sm text-gray-900">
                                            Education
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </>
                );
            case 3:
                return (
                    <>
                        <div>
                            <label htmlFor="socialMediaLinks" className="block text-sm font-medium leading-6 text-gray-900">
                                Add Social Media
                            </label>
                            <button type="button" onClick={handleButtonClick}>
                                <AddBoxOutlinedIcon />
                            </button>
                        </div>


                        {formData.socialMediaLinks.map((socialMedia, index) => (
                            <div key={socialMedia.id} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    required
                                    placeholder={`Enter social media link ${index + 1}`}
                                    value={socialMedia.link}
                                    onChange={(e) => handleSocialMediaChange(socialMedia.id, 'link', e.target.value)}
                                    className="block outline-none w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 mt-1"
                                />
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter Follower Count"
                                    value={socialMedia.followerCount}
                                    onChange={(e) => handleSocialMediaChange(socialMedia.id, 'followerCount', e.target.value)}
                                    className="block outline-none w-32 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 mt-1"
                                />
                                <div className="mt-1 cursor-pointer">
                                    <DeleteOutlinedIcon onClick={() => handleDeleteSocialMedia(socialMedia.id)} />
                                </div>
                            </div>
                        ))}

                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                Bio
                            </label>
                            <div className="mt-1">
                                <textarea
                                    rows="3"
                                    id="bio"
                                    name="bio"
                                    type="text"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    required
                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

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
                            </div>
                        </div>

                        <div>

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
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-4 gap-3">
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 1 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>1</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white  ${step >= 2 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>2</div>
                    <div className={`w-8 h-8 rounded-full text-center py-1 text-white ${step >= 3 ? "bg-[#4F46E5]" : "bg-slate-400"}`}>3</div>

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
                            {loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : step < 3 ? "Next" : "Confirm"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContentCreatorFlow;
