import React, { useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router';
import { useProfile } from '../Context/ProfileContext';


const Header = (props) => {
    const { handleClick } = props;
    const navigate = useNavigate()
    const profileData = useProfile();

    useEffect(() => {
        localStorage.setItem('id', profileData?._id)
    }, [profileData?._id, navigate])

    return (
        <div className="bg-white shadow-sm w-full px-3 sm:px-4 md:px-8 lg:px-8 flex justify-between items-center">
            <div>
                <img
                    className="h-24 cursor-pointer"
                    src={require("../../assets/images/Logo.png")}
                    alt="Your Company"
                    onClick={() => navigate('/')}
                />
            </div>
            <div className="relative">
                {
                    props.search === false ? <> </> : <>
                        <input
                            type="text"
                            placeholder="Search..."
                            required
                            className="block w-full sm:w-96 md:w-96 lg:w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                        />
                        <div className="absolute top-1 right-2">
                            <SearchOutlinedIcon style={{ fontSize: "18px", color: "slategray" }} />
                        </div>
                    </>
                }

            </div>
            <div>
                <div onClick={handleClick} className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                    <span className="font-medium text-slate-500">{(profileData?.firstName || profileData?.fullName)?.substring(0, 2)?.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
