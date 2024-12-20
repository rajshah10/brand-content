import { CircularProgress, Container } from '@mui/material'
import React, { useRef, useState } from 'react'
import Header from '../common/Header'
import MenuComponent from '../common/MenuComponent';
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [loading, setLoading] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_w7y93bh', 'template_5b6xeau', form.current, 'Qp9LV90EBm8pL3_p4').then((result) => {
            toast.success('Email sent successfully!');
            setLoading(false);


        }, (error) => {
            console.log(error.text)
            setLoading(false);

        });
    };
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
            <Header handleClick={handleClick} search={false} />
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Contact Us</h6>
                    </div>
                    <section class="bg-white">
                        <div class="container">
                            <div>
                                <p class="mt-3 text-gray-500">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                            </div>

                            <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                                <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                                    <div>
                                        <span class="inline-block p-3 text-gray-500 rounded-full bg-slate-100 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                                        <p class="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                                        <p class="mt-2 text-sm text-gray-500">hello@merakiui.com</p>
                                    </div>

                                    <div>
                                        <span class="inline-block p-3 text-gray-500 rounded-full bg-slate-100 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Live chat</h2>
                                        <p class="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>

                                    </div>

                                    <div>
                                        <span class="inline-block p-3 text-gray-500 rounded-full bg-slate-100 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Office</h2>
                                        <p class="mt-2 text-sm text-gray-500">Come say hello at our office HQ.</p>
                                        <p class="mt-2 text-sm text-gray-500">100 Smith Street Collingwood VIC 3066 AU</p>
                                    </div>

                                    <div>
                                        <span class="inline-block p-3 text-gray-500 rounded-full bg-slate-100 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                                        <p class="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                        <p class="mt-2 text-sm text-gray-500">+1 (555) 000-0000</p>
                                    </div>
                                </div>

                                <div class="p-4 py-6 rounded-lg bg-slate-100 md:p-8">
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <div class="-mx-2 md:items-center md:flex">
                                            <div class="flex-1 px-2">
                                                <label class="block mb-2 text-sm text-gray-600 ">First Name</label>
                                                <input required type="text" name="fname" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  focus:ring-blue-400 focus:outline-none outline-none" />
                                            </div>

                                            <div class="flex-1 px-2 mt-4 md:mt-0">
                                                <label class="block mb-2 text-sm text-gray-600 ">Last Name</label>
                                                <input required type="text" name='lname'  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  focus:ring-blue-400 focus:outline-none outline-none" />
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
                                            <input required type="email" name='email'  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none outline-none" />
                                        </div>

                                        <div class="w-full mt-4">
                                            <label class="block mb-2 text-sm text-gray-600 ">Message</label>
                                            <textarea required class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none outline-none" name='message'  rows={4}></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F46E5] rounded-lg"
                                        >
                                            {loading ? <CircularProgress size={"22px"} sx={{ color: "white" }} /> : "Send message"}
                                        </button>

                                        {/* <button type='submit' class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F46E5] rounded-lg">
                                            Send message
                                        </button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </>
    )
}

export default Contact
