"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <>
            <div className="max-w-7xl p-5 w-full mx-auto flex items-center justify-between md:h-24 h-20 text-white">
                <Link href={"/"}>
                    <Image src={"/images/logo.png"} width={200} height={200} className="w-full md:h-10 h-8" alt="Logo" />
                </Link>
                <ul className="md:flex hidden items-center justify-center gap-8">
                    <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Home</Link></li>
                    <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>About</Link></li>
                    <li><Link className="transition-all duration-500 hover:opacity-80" href={"/services"}>Services</Link></li>
                    <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Projects</Link></li>
                    <li><Link className="transition-all duration-500 hover:opacity-80" href={"/contact"}>Contact Us</Link></li>
                </ul>
                <Link href={"/contact"} className="px-6 py-3 navBtn md:block hidden cursor-pointer transition-all duration-500 hover:opacity-80 rounded-full bg-[#191a20] font-medium">Get In Touch</Link>
                <HiMiniBars3CenterLeft onClick={() => setNavbar(true)} size={25} className="rotate-180 md:hidden text-zinc-200" />
            </div>
            {/* responsive navbar */}

            <div className={`fixed  bg-[url(/images/home_bg.svg)] object-cover bg-center bg-no-repeat bg-cover bg-black text-white overflow-hidden transition-all duration-500 top-0 ${navbar ? "w-full opacity-100" : "w-0 opacity-0"} left-0 z-50`}>
                <div className=" w-full px-5 relative pt-6 min-h-screen">
                    <IoClose onClick={() => setNavbar(false)} className={` transition-all duration-500 ${navbar ? "opacity-100" : "opacity-0"} absolute top-6 right-7 text-3xl`} />
                    <Image src={"/images/logo.png"} width={200} height={200} alt="logo" className={`h-10 w-auto transition-all duration-500 ${navbar ? "opacity-100" : "opacity-0"}`} />
                    <ul className='flex mt-12 px-5 flex-col space-y-7'>
                        <li><Link onClick={() => setNavbar(false)} href={"/"}>Home</Link></li>
                        <li><Link onClick={() => setNavbar(false)} className="text-nowrap" href={"/"}>About Us</Link></li>
                        <li><Link onClick={() => setNavbar(false)} href={"/services"}>Services</Link></li>
                        <li><Link onClick={() => setNavbar(false)} href={"/"}>Projects</Link></li>
                        <li><Link onClick={() => setNavbar(false)} className="text-nowrap" href={"/contact"}>Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar