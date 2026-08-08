import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function GoBackBtn() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)} className={"group w-10 h-10 -mt-3 ms-6 rounded-xl flex justify-start items-center relative border-2 border-[#9d001b] dark:border-[#3ea575] bg-[#9d001b] dark:bg-[#3ea575] hover:bg-[#a92a35] dark:hover:bg-emerald-500 cursor-pointer active:scale-95 transition-all"}>
                <Link className="flex justify-center items-center mx-auto font-semibold bg-transparent text-[#9d001b] hover:text-white dark:text-[#3ea575] dark:hover:text-white rounded-xl active:scale-95 transition-all">
                    <ChevronLeft className='flex justify-center items-center mx-auto text-white group-hover:animate-none w-10 h-10 pe-1.5' />
                </Link>
            </button>

        </div>
    )
}
