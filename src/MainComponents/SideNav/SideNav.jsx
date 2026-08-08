import React, { useEffect, useRef, useState } from 'react'
import doughnutLogo from '../../assets/Images/doughnut.png'
import ModeToggle from '../ModeToggle/ModeToggle';
import { Link, NavLink } from 'react-router-dom';



export default function SideNav() {

    const [isChecked, setIsChecked] = useState(false);

    function handleSideNav() {
        let sideNavClass = document.getElementsByClassName('sideNavWindow');
        let sideNavContent = document.getElementsByClassName('sideNavContent');
        let inputId = document.getElementById('navBarIcon');
        if (isChecked) {
            sideNavClass[0].classList.add("-translate-x-56");
            sideNavContent[0].classList.remove("-translate-y-60");
            handleSideNavClose();
            setIsChecked(false);
        } else {
            sideNavClass[0].classList.remove("-translate-x-56");
            sideNavContent[0].classList.add("-translate-y-60");
            setIsChecked(true);
        }


    }

    function handleSideNavClose() {
        let sideNavClass = document.getElementsByClassName('sideNavWindow');
        let inputId = document.getElementById('navBarIcon');
        sideNavClass[0].classList.add("-translate-x-56");
        inputId.checked = false;
        setIsChecked(false);
    }

    const navRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                handleSideNavClose();
                setIsChecked(false); // close sidebar
            }
        }

        function handleEscape(event) {
            if (event.key === "Escape") {
                handleSideNavClose();
                setIsChecked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);


    return (
        <>
            <div ref={navRef} id='sideNavWindow' className="sideNavWindow z-50 flex justify-between items-start left-0 h-screen fixed w-72 -translate-x-56 transition-all duration-300 bg-[#f1f1e6] dark:bg-[#004852] shadow-lg border-2 border-orange-100 dark:border-[#004852]">
                <div className="flex justify-between items-center flex-col w-16 right-0 h-full mx-auto absolute shadow-lg z-10" >
                    <div className="navbar-start flex-col w-full h-16 flex justify-center items-center">

                        <div className="mt-5">
                            <label
                                for="navBarIcon"
                                className="btn btn-ghost btn-circle cursor-pointer hover:bg-[#d6f1eb] dark:hover:bg-[#328477] border-2 border-transparent hover:border-[#d6f1eb] dark:hover:border-[#328477]"
                            ><button onClick={() => handleSideNav()} className="w-7 h-7 flex flex-col items-center justify-center space-y-1.5 rounded-full transition-all duration-300">
                                    <input onChange={handleSideNav} checked={isChecked == true} id="navBarIcon" type="checkbox" className="hidden peer" />
                                    <div
                                        className="w-2/3 h-1.5 bg-red-400 rounded-lg transition-all duration-300 origin-right peer-checked:-ms-2.5 peer-checked:w-full peer-checked:-translate-x-[2px] peer-checked:rotate-[-34deg] peer-checked:-translate-y-[3.5px]"
                                    ></div>
                                    <div
                                        className="w-full h-1.5 bg-red-400 rounded-lg transition-all duration-300 origin-center peer-checked:-ms-2.5 peer-checked:rotate-90 peer-checked:translate-x-[12.5px] peer-checked:translate-y-[0.5px]"
                                    ></div>
                                    <div
                                        className="w-2/3 h-1.5 bg-red-400 rounded-lg transition-all duration-300 origin-right peer-checked:-ms-2.5 peer-checked:w-full peer-checked:rotate-[25deg] peer-checked:translate-x-0.25 peer-checked:translate-y-[5px]"
                                    ></div>

                                </button>
                            </label>

                        </div>
                    </div>
                    <div className="group relative navbar-center">
                        <button onClick={() => handleSideNavClose()} className="btn btn-ghost flex justify-center items-center mx-auto rounded-full p-0 w-11">
                            <Link to={"/"}>
                                <img src={doughnutLogo} className='w-full cursor-pointer' alt="Doughnut Logo" />
                            </Link>
                        </button>
                        <div
                            class="bg-red-400 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
                        >
                            <span class="text-white whitespace-nowrap">Yummies</span>
                            <div
                                class="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                            ></div>
                        </div>

                    </div>
                    <div className="navbar-end flex-col mx-auto w-full flex justify-center items-center space-y-2 mb-2">
                        <button onClick={() => handleSideNavClose()} className="btn btn-ghost btn-circle hover:bg-[#d6f1eb] dark:hover:bg-[#328477] border-2 border-transparent hover:border-[#d6f1eb] dark:hover:border-[#328477]">
                            <Link to={"/search"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#09937e] dark:text-[#d6f1eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                            </Link>
                        </button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="w-52 transition-all duration-700">
                    <ul className="sideNavContent transition-all duration-700 w-56 absolute py-2 px-1 me-1">
                        <li onClick={() => handleSideNavClose()} id='Li1' className='Li1 py-2 px-2 w-full text-lg cursor-pointer rounded-md hover:bg-[#d2e7e2] dark:hover:bg-[#328477] translate-y-60 duration-300 transition-all'><NavLink to={"/"} className='px-1 text-[#00766c] dark:text-[#d6f1eb] font-semibold'>Home</NavLink></li>
                        <li onClick={() => handleSideNavClose()} id='Li2' className='Li2 py-2 px-2 w-full text-lg cursor-pointer rounded-md hover:bg-[#d2e7e2] dark:hover:bg-[#328477] translate-y-60 duration-300 transition-all'><NavLink to={"/categories"} className='px-1 text-[#00766c] dark:text-[#d6f1eb] font-semibold'>Categories</NavLink></li>
                        <li onClick={() => handleSideNavClose()} id='Li3' className='Li3 py-2 px-2 w-full text-lg cursor-pointer rounded-md hover:bg-[#d2e7e2] dark:hover:bg-[#328477] translate-y-60 duration-300 transition-all'><NavLink to={"/originLocation"} className='px-1 text-[#00766c] dark:text-[#d6f1eb] font-semibold'>Origin</NavLink></li>
                        <li onClick={() => handleSideNavClose()} id='Li4' className='Li4 py-2 px-2 w-full text-lg cursor-pointer rounded-md hover:bg-[#d2e7e2] dark:hover:bg-[#328477] translate-y-60 duration-300 transition-all'><NavLink to={"/ingredients"} className='px-1 text-[#00766c] dark:text-[#d6f1eb] font-semibold'>Ingredients</NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}