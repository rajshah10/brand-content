/* eslint-disable jsx-a11y/anchor-is-valid */
import { CircularProgress, DialogContent, Dialog, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { api_url } from '../constants';
import CloseIcon from '@mui/icons-material/Close';


const Login = () => {
    const [selectedOption, setSelectedOption] = useState('contentCreator');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loadingfp, setLoadingfp] = useState(false);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [fpemail, setEmail] = useState('');
    const [authcode, setAuthcode] = useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selected_partner', option);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const email = event.target.email.value;
        const password = event.target.password.value;
        const type = selectedOption;

        try {
            const response = await axios.post(`${api_url}/api/influencers/login`, { email, password, type });
            const { token } = response.data;
            if (token) {
                const tokenParts = token.split('.');
                if (tokenParts.length !== 3) return null;
                const payload = JSON.parse(atob(tokenParts[1]));
                const type = payload.type;
                localStorage.setItem('type', type);
                navigate(`/contentCreator`);
            }
            localStorage.setItem('token', token);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLoginForBrands = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const email = event.target.email.value;
        const password = event.target.password.value;
        const type = selectedOption;

        try {
            const response = await axios.post(`${api_url}/api/brands/login`, { email, password, type });
            const { token } = response.data;
            if (token) {
                const tokenParts = token.split('.');
                if (tokenParts.length !== 3) return null;
                const payload = JSON.parse(atob(tokenParts[1]));
                const type = payload.type;
                localStorage.setItem('type', type);
                navigate(`/brands`);
            }
            localStorage.setItem('token', token);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgetpassword = async (e) => {
        e.preventDefault();
        setLoadingfp(true);
        const type = selectedOption;
        try {
            const response = await axios.post(`${api_url}/api/fp/forgot-password`, { email: fpemail, type });
            toast.success(response?.data);
            setOpen(false);
            setLoadingfp(false);
        } catch (error) {
            console.error(error);
            setLoadingfp(false);
            toast.error('User not listed');
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex flex-col lg:flex-row h-screen">
                <div className="flex flex-col justify-center w-full  px-6 py-6">
                    <div >
                        <img
                            onClick={() => navigate("/")}
                            className="mx-auto w-48 cursor-pointer"
                            src={require("../assets/images/Logo.png")}
                            alt="Your Company"
                        />
                        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Choose one
                        </h2>
                    </div>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={selectedOption === "brand" ? handleLoginForBrands : handleLogin} className="space-y-6">
                            <div className="grid grid-cols-2 text-center gap-2">
                                <div
                                    className={`border py-4 rounded-md cursor-pointer ${selectedOption === 'contentCreator' ? 'border-slate-400' : 'border-slate-200'}`}
                                    onClick={() => handleOptionClick('contentCreator')}
                                >
                                    <span>Content Creator</span>
                                </div>
                                <div
                                    className={`border py-4 rounded-md cursor-pointer ${selectedOption === 'brand' ? 'border-slate-400' : 'border-slate-200'}`}
                                    onClick={() => handleOptionClick('brand')}
                                >
                                    <span>Brand</span>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a
                                            className="font-semibold text-indigo-600 cursor-pointer  hover:text-indigo-500"
                                            onClick={handleClickOpen}
                                        >
                                            Forgot password?
                                        </a>
                                        <Dialog
                                            onClose={handleClose}
                                            open={open}
                                            maxWidth="lg"
                                            fullWidth
                                            sx={{ '& .MuiDialog-paper': { width: '30%' } }}
                                        >
                                            <DialogTitle>
                                                <div className="flex justify-between">
                                                    <Typography>Reset Password</Typography>
                                                    <Typography onClick={handleClose} className="cursor-pointer"><CloseIcon /></Typography>
                                                </div>
                                            </DialogTitle>
                                            <DialogContent>
                                                <div>
                                                    <label
                                                        htmlFor="forgetPEmail"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Email address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="forgetPEmail"
                                                            name="forgetPEmail"
                                                            type="email"
                                                            value={fpemail}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                            className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                    <button onClick={handleForgetpassword} className="flex w-full justify-center rounded-md bg-[#4F46E5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">
                                                        {loadingfp ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : "Submit"}
                                                    </button>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block px-2 outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {/* {
                                    selectedOption !== 'brand' && <div className='mt-4'>
                                        <label
                                            htmlFor="authcode"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Code (Pls enter the code sent to your email)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="authcode"
                                                name="authcode"
                                                type="text"
                                                required
                                                onChange={(e) => setAuthcode(e.target.value)}
                                                className="block w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                } */}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#4F46E5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : "Sign in"}
                                </button>
                            </div>
                            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        </form>
                        <p className="mt-4 text-sm text-gray-500">
                            <a
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >

                                <span className='text-slate-800 font-medium'>Yet to Register? </span><span className='cursor-pointer' onClick={() => navigate("/join")}>Join</span>

                            </a>
                        </p>
                    </div>
                </div>
                {/* <div className="relative w-full h-screen md:w-2/4">
                    <Carousel
                        showArrows={false}
                        showIndicators={true}
                        showStatus={false}
                        autoPlay={true}
                        interval={5000}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        {images[selectedOption].map((url, index) => (
                            <div key={index}>
                                <img src={url} className="object-cover w-full h-screen" alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className="absolute bottom-12 left-8 right-8 md:left-8 md:bottom-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {selectedOption === "brand" && (
                                <div className='bg-slate-800 rounded-md bg-opacity-50 py-4 px-4 flex flex-col justify-center gap-4'>
                                    <h1 className="text-white text-4xl">Brands</h1>
                                    <p className='text-slate-200 text-lg'>Equellence is a platform where brands can connect with Equestrian-specific influencers. Brands will be able to communicate a campaign, and Equellence will do the rest by allowing our Influencers to apply to your campaign. The brand can then select the influencer to make engaging content for the brand.
                                    </p>
                                    <p className='text-slate-200 text-left text-lg'>With your subscription, you’ll unlock exclusive access to our powerhouse network of influencers and content creators. But that’s just the beginning—enjoy personal, one-on-one mentorship designed to elevate your marketing game and ignite your brand’s potential. Plus, you’ll be seamlessly connected to key industry insiders, unlocking doors you didn’t even know existed.</p>
                                    <p className='text-slate-200 text-left text-lg'>Ready to level up?
                                    </p>
                                    <p className='text-slate-200 text-left text-lg'>Sign up with Equellence now!</p>
                                </div>

                            )}
                            {selectedOption === "contentCreator" && (
                                <div className='bg-slate-800 rounded-md bg-opacity-50 flex flex-col justify-center gap-4 py-4 px-4'>

                                    <h1 className="text-white text-4xl">Join Equellence</h1>
                                    <p className='text-slate-200 text-lg'>Equellence carefully chooses the best equestrian content creators. If you’re wanting to join our website, please apply using this application:
                                    </p>
                                </div>

                            )}
                        </h1>

                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Login;
