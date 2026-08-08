import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NoDataFound() {

    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col items-center justify-center mx-auto mt-24 max-h-screen max-w-6xl">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto size-20 text-red-400 dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <h2 className="mt-6 text-3xl md:text-5xl font-bold text-red-400 dark:text-white">No items found</h2>
                <div className="h-1 w-16 rounded bg-red-400 dark:bg-white my-5 md:my-7"></div>
                <div className="flex justify-center items-center mx-auto w-full ">
                    <Link to={"/"} className="font-semibold bg-[#9d001b] dark:bg-[#3ea575] hover:bg-[#a92a35] dark:hover:bg-emerald-500 me-3 px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
                        Home
                    </Link>
                    <Link onClick={() => navigate(-1)} className="font-semibold bg-transparent border-2 border-[#9d001b] dark:border-[#3ea575] hover:bg-[#a92a35] dark:hover:bg-emerald-500 ms-3 px-6 py-2.5 text-[#9d001b] hover:text-white dark:text-[#3ea575] dark:hover:text-white rounded-md active:scale-95 transition-all">
                        Go back
                    </Link>
                </div>


            </div>

        </>
    )
}
