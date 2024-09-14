import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { api_url } from '../../constants';



const Header = (props) => {
    const { handleClick } = props;
    const [profile, setProfile] = useState()
    const [token, setToken] = useState()
    const [type, setType] = useState()
    const navigate = useNavigate()

    const getProfile = async () => {
        const token = localStorage.getItem('token');
        const type = localStorage.getItem('type')
        setToken(token)
        setType(type)
        try {
            const response = await axios.get(`${api_url}/api/${type === "brand" ? "brands" : "influencers"}/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data)
            if (response.data) {
                localStorage.setItem('id', response?.data?._id)
            }
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        getProfile()
    }, [type, token])

    const handleNavigate = () => {
        navigate("/")
    }

    return (
        <div className="bg-white shadow-sm w-full px-3 sm:px-4 md:px-8 lg:px-8 flex justify-between items-center">
            <div>
                <img
                    className="h-24 cursor-pointer"
                    src={require("../../assets/images/Logo.png")}
                    alt="Your Company"
                    onClick={handleNavigate}
                />
            </div>
            <div>
                <div onClick={handleClick} className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                    <span className="font-medium text-slate-500">{(profile?.firstName || profile?.fullName)?.substring(0, 2)?.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
