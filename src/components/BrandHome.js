import React from 'react'


const BrandHome = () => {
    return (
        <>
            <div>
                <div className=" bg-white shadow-sm  w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div>
                        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span class="font-medium text-slate-500 ">JL</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandHome
