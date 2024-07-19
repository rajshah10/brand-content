/* eslint-disable jsx-a11y/anchor-is-valid */
import { CircularProgress, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('contentCreator');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');



    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selected_partner', option)
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const email = event.target.email.value;
        const password = event.target.password.value;
        const type = selectedOption

        try {
            const response = await axios.post('http://localhost:5000/api/influencers/login', { email, password, type });
            const { token } = response.data;
            if (token) {
                navigate(`/contentCreator`)
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
        const type = selectedOption

        try {
            const response = await axios.post('http://localhost:5000/api/brands/login', { email, password, type });
            const { token } = response.data;
            if (token) {
                navigate(`/brands`)
            }
            localStorage.setItem('token', token);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="flex flex-col md:flex-row lg:flex-row h-screen">
            <div className="flex flex-col justify-center w-full md:w-2/4 px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full md:max-w-sm lg:max-w-lg">
                    <img
                        className="mx-auto w-56"
                        src={require("../assets/images/Logo.png")}
                        alt="Your Company"
                    />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Choose one
                    </h2>
                </div>

                {
                    <>

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

                                <>
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
                                                    href="#"
                                                    className="font-semibold text-indigo-600   hover:text-indigo-500"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block px-2 outline-none  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </>
                                <div>
                                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        {loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : "Login"}
                                    </button>
                                </div>

                            </form>
                            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                            <p className="mt-4 text-sm text-gray-500">
                                <a
                                    onClick={() => navigate("/join")}
                                    className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500"
                                >

                                    <span className='text-slate-800 font-medium'>Yet to register? </span>Join

                                </a>
                            </p>

                        </div>


                    </>
                }


            </div>
            <div className="relative w-full h-full md:w-3/5 lg:w-3/5 md:h-auto lg:h-auto bg-cover bg-center"
                style={{
                    backgroundImage:
                        selectedOption === "brand" ? "url('https://c0.wallpaperflare.com/preview/943/758/422/person-recreation-jumping-horse.jpg')" : "url('https://www.itl.cat/pngfile/big/210-2106332_photo-wallpaper-rider-horse-horse-riding-horse-riding.jpg",
                }}>
                {
                    selectedOption === "brand" &&
                    <div className="md:absolute lg:absolute inset-0 py-24  md:py-0lg:py-0 bg-black bg-opacity-30 flex flex-col px-8 flex flex-col justify-center">
                        <div className='bg-slate-800 rounded-md bg-opacity-50 py-4 px-4 flex flex-col justify-center gap-4'>
                            <h1 className="text-white text-4xl">Brands & Organizations</h1>
                            <p className='text-slate-200 text-lg'>Are you a brand or an organization looking to work with Equellence? Please fill out your brand/company organization information out below</p>
                            <p className='text-slate-200 text-left text-lg'>We hope we can satisfy your brand's needs!</p>
                        </div>
                    </div>
                }
                {
                    selectedOption === "contentCreator" &&
                    <div className="md:absolute lg:absolute inset-0 py-24  md:py-0lg:py-0 bg-black bg-opacity-30 px-8 flex flex-col justify-center">
                        <div className='bg-slate-800 rounded-md bg-opacity-50 flex flex-col justify-center gap-4  py-4 px-4'>
                            <h1 className="text-white text-4xl">Join Equellence</h1>
                            <p className='text-slate-200 text-lg'>EQUELLENCE APPLICATIONS ARE BACK OPEN! You can apply</p>
                            <p className='text-slate-200 text-left text-lg'>Here are some ways you can work on your content and grow so that when applications open, you are ready for the club: </p>
                            <ul className='list-disc text-slate-200 text-left ml-10 text-lg'>
                                <li>Post frequently</li>
                                <li>Have a common goal or inspiring social media message</li>
                                <li>Good video content</li>
                                <li>High quality content </li>
                                <li>Engaging social media presence</li>
                            </ul>
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

export default Login
