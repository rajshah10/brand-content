import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Header = (props) => {
    const { handleClick } = props
    return (
        <div className=" bg-white shadow-sm  w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
            <div>
                <img
                    className="h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
            </div>
            <div className="relative">

                <input
                    type="text"
                    placeholder="Search..."
                    required
                    className="block xs:w-full sm:w-96 md:w-96 lg:w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                />
                <div className="absolute top-1 right-2">
                    <SearchOutlinedIcon style={{ fontSize: "18px", color: "slategray" }} />
                </div>

            </div>
            <div>
                <div onClick={handleClick} class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                    <span class="font-medium text-slate-500 ">JL</span>
                </div>
            </div>
        </div>
    )
}

export default Header
