import React, { useState } from "react";
import { useNavigate } from "react-router";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ContentCreatorFlow = (props) => {
    const { setStep, step } = props;
    const navigate = useNavigate();
    const [inputVisible, setInputVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        niche: "",
        bio: "",
        media: null,
        email: "",
        rateCard: "",
        followerCount: "",
        socialMediaLinks: [{ id: 1, link: "" }],
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

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            media: e.target.files[0],
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


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (step < 3) {
            setStep(step + 1);
        } else if (step >= 3) {
            navigate('/influencers');
        }
    };



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
                                    type="text"
                                    value={formData.email}
                                    onChange={handleChange}
                                    // required
                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleChange}
                                    // required
                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
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

                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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

                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
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
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
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
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
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
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
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
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
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
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
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
                                            className="h-4 w-4 outline-none px-2 text-indigo-600 border-gray-300 rounded "
                                        />
                                        <label htmlFor="pr" className="ml-2 block text-sm text-gray-900">
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
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                Add Social Media
                            </label>
                            <button type="button" onClick={handleButtonClick}>
                                <AddBoxOutlinedIcon />
                            </button>
                        </div>
                        {formData.socialMediaLinks.map((socialMedia, index) => (
                            <div key={socialMedia.id} className="flex items-center">
                                <input
                                    key={socialMedia.id}
                                    type="text"
                                    placeholder={`Enter social media link ${index + 1}`}
                                    value={socialMedia.link}
                                    // onChange={(e) => handleSocialMediaChange(socialMedia.id, e.target.value)}
                                    className="block outline-none px-2 w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 mt-1    "
                                />
                                <div className="mt-1 cursor-pointer">
                                    <DeleteOutlinedIcon onClick={() => handleDeleteSocialMedia(socialMedia.id)} />
                                </div>

                            </div>
                        ))}

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
                    
                </div>
                <form className="space-y-4" >
                    {renderStep()}
                    <div className="flex justify-between">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-600 bg-slate-200 hover:bg-slate-300 focus:outline-none px-2 focus:ring-2 focus:ring-offset-2 focus:ring-slate-100"
                            >
                                Back
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none px-2 focus:ring-2 focus:ring-offset-2 focus:ring-slate-100"
                        >
                            {step < 3 ? "Next" : "Confirm"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContentCreatorFlow;
