"use client"
import { deleteCookie } from 'cookies-next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { GoSidebarExpand } from 'react-icons/go'

interface DashboardWrapperProps {
    children: React.ReactNode
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {

    const pathname = usePathname();

    const [slidebar, setSlidebar] = useState<boolean>(false)

    const logout = () => {
        deleteCookie("isLoggedIn", { path: "/" })
        window.location.href = "/login"
    }
    return (
        <div>
            <div className="flex gap-5 w-full items-start">
                <div className="md:hidden block">
                    <GoSidebarExpand onClick={() => setSlidebar(true)} className='text-zinc-800 absolute top-5 left-3 rotate-180 text-2xl' />
                </div>
                <div className={`${slidebar ? "w-full" : "w-0"} bg-black md:max-w-80 overflow-hidden transition-all duration-500 md:static fixed h-screen left-0 top-0 md:w-full `}>
                    <div className="flex flex-col justify-between h-screen px-4 md:py-10 py-6">
                        <div className="">
                            <div className="flex items-end justify-end">
                                <GoSidebarExpand onClick={() => setSlidebar(false)} className='text-white md:hidden text-2xl' />
                            </div>
                            <ul className='mt-7'>
                                <li ><Link className={`block ${pathname === "/dashboard/contact"
                                    ? "bg-zinc-100 text-black"
                                    : "bg-zinc-800 text-white"
                                    } transition-all duration-500 hover:bg-zinc-100 hover:text-black font-medium p-4 rounded-lg`} href={"/dashboard/contact"}>Contact</Link></li>
                                <li ><Link className={` ${pathname === "/dashboard/email-subscribe"
                                    ? "bg-zinc-100 text-black"
                                    : "bg-zinc-800 text-white"
                                    } block transition-all duration-500 hover:bg-zinc-100 hover:text-black mt-2 font-medium p-4 rounded-lg`} href={"/dashboard/email-subscribe"}>Email</Link></li>
                                <li ><Link className={` ${pathname === "/dashboard/blog"
                                    ? "bg-zinc-100 text-black"
                                    : "bg-zinc-800 text-white"
                                    } block transition-all duration-500 hover:bg-zinc-100 hover:text-black mt-2 font-medium p-4 rounded-lg`} href={"/dashboard/blog"}>Blog</Link></li>
                            </ul>
                        </div>
                        <button onClick={logout} className="bg-red-600 font-medium transition-all duration-500 hover:bg-red-700 text-white px-4 py-3.5 rounded-lg cursor-pointer">Logout</button>
                    </div>
                </div>
                <div className="w-full md:mt-0 mt-6 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper