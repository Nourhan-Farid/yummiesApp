import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

export default function Layout() {
    return (
        <>
            <SideNav />
            <div className='ps-20 pe-5 pt-8 pb-10 container-fluid mx-auto bg-[#f1f1e6] dark:bg-[#001E29] min-h-screen'>
                <Outlet />
            </div>
        </>
    )
}
// #d6f1eb