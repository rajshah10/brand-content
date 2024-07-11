import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCreatorFlow from "./ContentCreatorFlow";
import Brands from "./Brands";

const Join = () => {
    const [loginToggle, setLoginToggle] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption) {
            setFormSubmitted(true);
        }
    };

    const handleRegister = () => {
        setLoginToggle(!loginToggle);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selected_partner', option)
    };
    return (
        <div className="flex min-h-screen">
            <div className="flex flex-col justify-center w-full md:w-2/4 px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full md:max-w-sm lg:max-w-lg">
                    {formSubmitted && step === 1 && (
                        <div className="mb-4 ml-4">
                            <IconButton onClick={() => setFormSubmitted(false)} style={{ color: "#4F46E5" }} aria-label="back">
                                <ArrowBackIcon />
                            </IconButton>
                        </div>
                    )}
                    <img
                        className="mx-auto w-56"
                        src={require("../assets/images/Logo.png")}
                        alt="Your Company"
                    />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {formSubmitted ? (selectedOption === "contentCreator" ? "Content Creator Onboarding" : "Brand Onboarding") : "Choose one"}
                    </h2>
                </div>

                {!formSubmitted && (
                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                            {loginToggle && (
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
                                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
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
                                                className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div>
                                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Next
                                </button>
                            </div>
                        </form>

                        <p className="mt-4 text-sm text-gray-500">
                            <a
                                onClick={handleRegister}
                                className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                {!loginToggle ? "Login" : "Back"}
                            </a>
                        </p>
                    </div>
                )}

                {formSubmitted && selectedOption === "contentCreator" && <ContentCreatorFlow setFormSubmitted={setFormSubmitted} step={step} setStep={setStep} />}
                {formSubmitted && selectedOption === "brand" && <Brands setFormSubmitted={setFormSubmitted} step={step} setStep={setStep} />}
            </div>
            <div
                className="hidden md:flex w-full md:w-3/5 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i0.wp.com/blog.comunitive.com/wp-content/uploads/2021/09/influencer_4-copiar.jpg?fit=2000%2C1022&ssl=1')",
                }}
            ></div>
        </div>
    )
}

export default Join