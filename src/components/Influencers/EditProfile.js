import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import toast, { Toaster } from 'react-hot-toast';
import MenuComponent from '../common/MenuComponent';
import Header from '../common/Header';

const EditProfile = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [formData, setFormData] = useState({
        bio: '',
        collaborationCount: '',
        dateJoined: '',
        email: '',
        firstName: '',
        lastName: '',
        niche: [],
        phoneNumber: '',
        socialMediaLinks: [{ id: 1, link: '', followerCount: '' }],
        status: '',
    });
    const [newNiche, setNewNiche] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [isAddingSM, setIsAddingSM] = useState(false);
    const [newSocialMediaLink, setNewSocialMediaLink] = useState({ link: '', followerCount: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const fetchInfluencerData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming you store the token in local storage
                const response = await axios.get('http://localhost:5000/api/influencers/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching influencer data:', error);
            }
        };

        fetchInfluencerData();
    }, []);

    const handleAddNiche = () => {
        if (newNiche.trim() !== '') {
            setFormData(prevState => ({
                ...prevState,
                niche: [...prevState.niche, newNiche]
            }));
            setNewNiche('');
            setIsAdding(false);
        }
    };

    const handleRemoveNiche = (niche) => {
        setFormData(prevState => ({
            ...prevState,
            niche: prevState.niche.filter(n => n !== niche)
        }));
    };

    const handleAddSocialMediaLink = () => {
        if (newSocialMediaLink.link.trim() !== '' && newSocialMediaLink.followerCount.trim() !== '') {
            setFormData(prevState => ({
                ...prevState,
                socialMediaLinks: [
                    ...prevState.socialMediaLinks,
                    { id: Date.now(), ...newSocialMediaLink } // Adding a unique id for new links
                ]
            }));
            setNewSocialMediaLink({ link: '', followerCount: '' });
        }
    };

    const handleRemoveSocialMediaLink = (linkId) => {
        setFormData(prevState => ({
            ...prevState,
            socialMediaLinks: prevState.socialMediaLinks.filter(link => link.id !== linkId)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem('token'); // Assuming you store the token in local storage
            await axios.put('http://localhost:5000/api/influencers/profile/edit', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            toast.success('Profile updated successfully!');
            setLoading(false);
            navigate('/influencers/profile'); // Redirect to profile page after successful update
        } catch (error) {
            console.error('Error updating influencer data:', error);
            setLoading(false);
        }
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
            <Header handleClick={handleClick}  search={false}/>
            <div className="mx-auto px-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className='my-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-lg font-semibold">Profile</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    value={formData.firstName}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                                                    placeholder="Jane"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    value={formData.lastName}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                                                    placeholder="Smith"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">Bio</label>
                                        <div className="mt-2">
                                            <textarea
                                                onChange={handleChange}
                                                value={formData.bio}
                                                id="bio"
                                                name="bio"
                                                rows="3"
                                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                            ></textarea>
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                            </svg>
                                            <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-12">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                        <div className="mt-2">
                                            <input
                                                onChange={handleChange}
                                                value={formData.email}
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                                        <div className="mt-2">
                                            <input
                                                onChange={handleChange}
                                                value={formData.phoneNumber}
                                                type="tel"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                autoComplete="tel"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="niche" className="block text-sm font-medium leading-6 text-gray-900">Niche</label>
                                        <div className="mt-2">
                                            {formData.niche.map((niche, index) => (
                                                <div key={index} className="flex items-center gap-x-3">
                                                    <span>{niche}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveNiche(niche)}
                                                        className="text-red-600 hover:text-red-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <div className='flex flex-col gap-1 my-2'>
                                                {!isAdding ?
                                                    <AddCircleOutlineIcon style={{ marginBottom: "2px", cursor: "pointer" }} onClick={() => setIsAdding(true)} /> :
                                                    <RemoveCircleOutlineIcon onClick={() => setIsAdding(false)} style={{ marginBottom: "2px", cursor: "pointer" }} />
                                                }
                                                {isAdding && <>
                                                    <input
                                                        type="text"
                                                        value={newNiche}
                                                        onChange={(e) => setNewNiche(e.target.value)}
                                                        placeholder="Add new niche"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleAddNiche}
                                                        className="my-1 px-4 h-full w-32 py-1.5 bg-blue-500 text-white rounded-md"
                                                    >
                                                        Add Niche
                                                    </button>
                                                </>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="socialMediaLinks" className="block text-sm font-medium leading-6 text-gray-900">Social Media Links</label>
                                        <div className="mt-2">
                                            {formData.socialMediaLinks.map((link) => (
                                                <div key={link.id} className="flex items-center gap-x-3">
                                                    <a href={link.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">{link.link}</a>
                                                    <span className="text-gray-500">{link.followerCount}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveSocialMediaLink(link.id)}
                                                        className="text-red-600 hover:text-red-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <div className="mt-2 flex flex-col gap-2">
                                                {!isAddingSM ?
                                                    <AddCircleOutlineIcon style={{ marginBottom: "2px", cursor: "pointer" }} onClick={() => setIsAddingSM(true)} /> :
                                                    <RemoveCircleOutlineIcon onClick={() => setIsAddingSM(false)} style={{ marginBottom: "2px", cursor: "pointer" }} />
                                                }
                                                {isAddingSM && <>
                                                    <input
                                                        type="text"
                                                        value={newSocialMediaLink.link}
                                                        onChange={(e) => setNewSocialMediaLink(prev => ({ ...prev, link: e.target.value }))}
                                                        placeholder="Social Media Link"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={newSocialMediaLink.followerCount}
                                                        onChange={(e) => setNewSocialMediaLink(prev => ({ ...prev, followerCount: e.target.value }))}
                                                        placeholder="Follower Count"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleAddSocialMediaLink}
                                                        className="my-1 px-4 h-full w-32 py-1.5 bg-blue-500 text-white rounded-md"
                                                    >
                                                        Add Link
                                                    </button>
                                                </>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="px-4 py-1 text-white rounded-md" style={{ background: "#4F46E5" }}>{loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : "Save Changes"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;
