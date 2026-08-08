import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate();
    return (
        <>

            <div className="flex flex-col items-center justify-center mx-auto mt-24 max-h-screen min-w-screen">
                <h1 className="text-8xl md:text-9xl font-bold text-red-400 dark:text-white">404</h1>
                <div className="h-1 w-16 rounded bg-red-400 dark:bg-white my-5 md:my-7"></div>
                <p className="text-2xl md:text-3xl font-bold  text-red-400 dark:text-white/90">Page Not Found</p>
                <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <div className="flex items-center gap-4 mt-6">
                    <Link to={"/"} className="bg-[#9d001b] dark:bg-[#3ea575] hover:bg-[#a92a35] dark:hover:bg-emerald-500 px-4 py-2.5 text-white rounded-md active:scale-95 transition-all">
                        Return Home
                    </Link>
                    <Link onClick={() => navigate(-1)} className="font-semibold bg-transparent border-2 border-[#9d001b] dark:border-[#3ea575] hover:bg-[#a92a35] dark:hover:bg-emerald-500 ms-3 px-6 py-2.5 text-[#9d001b] hover:text-white dark:text-[#3ea575] dark:hover:text-white rounded-md active:scale-95 transition-all">
                        Go back
                    </Link>
                </div>
            </div>

        </>
    )
}
