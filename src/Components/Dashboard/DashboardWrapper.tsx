import { deleteCookie } from 'cookies-next'
import Link from 'next/link'
import React from 'react'

interface DashboardWrapperProps {
    children: React.ReactNode
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
    const logout = () => {
        deleteCookie("isLoggedIn", { path: "/" })
        window.location.href = "/login"
    }
    return (
        <div>
            <div className="flex gap-5 w-full items-start">
                <div className="bg-black flex flex-col justify-between sm:max-w-80 sm:w-full h-screen px-4 md:py-10 py-6">

                    <ul>
                        <li><Link className='block transition-all duration-500 hover:bg-zinc-100 hover:text-black bg-zinc-100 text-black font-medium p-4 rounded-lg' href={"/"}>Contact</Link></li>
                        <li><Link className='block bg-zinc-800 transition-all duration-500 hover:bg-zinc-100 hover:text-black text-white mt-2 font-medium p-4 rounded-lg' href={"/"}>Email</Link></li>
                        <li><Link className='block bg-zinc-800 transition-all duration-500 hover:bg-zinc-100 hover:text-black text-white mt-2 font-medium p-4 rounded-lg' href={"/"}>Blog</Link></li>
                    </ul>
                    <button onClick={logout} className="bg-red-600 font-medium transition-all duration-500 hover:bg-red-700 text-white px-4 py-3.5 rounded-lg cursor-pointer">Logout</button>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper