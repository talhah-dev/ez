"use client"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { PiBuildings } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TextEffectOne, TextEffectThree } from "react-text-animate";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsArrowDown } from "react-icons/bs";
import axios from "axios";

const Footer = () => {

    const [email, setEmail] = useState<string>("");

    const emailSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Enter Your E-Mail");
            return;
        }

        try {
            const response = await axios.post("/api/email", { email });

            // If status is 2xx, this runs
            if (response.data.success) {
                toast.success("Email sent successfully!");
                setEmail(""); // Clear input after success
            } else {
                // Usually won't reach here if status code is not 2xx
                toast.error(response.data.error || "Failed to send email. Please try again.");
            }
        } catch (error: any) {
            const message =
                error.response?.data?.error || // The "Email already exists" message from backend
                error.message ||               // Generic axios error message
                "Failed to send email. Please try again later.";

            toast.error(message);
        }

    };


    return (
        <>
            <div className="bg-[url(/images/footer.svg)] overflow-hidden bg-center object-cover bg-no-repeat bg-cover object-center">
                <div className="min-h-screen flex items-center justify-center p-4 flex-col py-10">
                    <div className="relative">
                        <span className="absolute right-[-60px] top-[-50px] h-[140px] w-[174px] rotate-[41deg] bg-[radial-gradient(54.45%_54.3%_at_46.68%_45.8%,#939FD7_0%,rgba(69,74,111,0.50)_46.81%,rgba(32,35,50,0.00)_100%)] blur-[10px]"></span>
                        <Image src={"/images/logoIcon.png"} width={200} height={200} alt="logo" className="md:h-40 h-32 relative w-auto" />
                    </div>
                    <TextEffectOne wrapperElement="h2"
                        staggerDuration={0.02} animateOnce className='text-zinc-200 font-medium md:text-5xl mt-2 text-3xl max-w-xl text-center w-full mx-auto leading-tight capitalize' text="Smart Solutions for" />
                    <TextEffectOne wrapperElement="h2"
                        staggerDuration={0.01} animateOnce className='text-zinc-200 font-semibold md:text-6xl mt-4 text-4xl max-w-xl text-center w-full mx-auto leading-tight capitalize' text="Bold Brands" />
                    <div className="flex items-center gap-7 md:flex-row flex-col mt-6">
                        <Link href={"/contact"} className="px-8 py-2.5  text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full bg-black border border-[#f1a274] ">Book a consultation</Link>
                        <Link href={"/services"} className='text-zinc-200  flex items-center gap-1 transition-all duration-500 hover:opacity-80'>
                            <TextEffectThree animationDuration={0.2} className='text-zinc-200' text="Explore Our Services" />
                            <IoIosArrowForward size={18} />
                        </Link>
                    </div>
                </div>
                <div className=" p-5 max-w-7xl w-full mx-auto">
                    <footer className=" flex border-y justify-between lg:flex-row flex-col flex-wrap gap-14  py-10 border-[#ffffff18]">
                        <div className="">
                            <Link href={"/"} >
                                <Image src={"/images/logo.png"} width={200} height={200} className="w-auto mx-auto h-10 md:mx-0" alt="Logo" />
                            </Link>

                            <div className="flex text-[#ffffffb4] items-center gap-6 md:mt-20 mt-8 justify-center md:justify-start">
                                <Link href={"http://wa.me/+923201091220"} target="_blank">
                                    <FaWhatsapp size={26} className="hover:text-white transition-all duration-500" />
                                </Link>
                                <Link href={"https://www.linkedin.com/company/ez-brand-builders/"} target="_blank">
                                    <FaLinkedinIn size={24} className="hover:text-white transition-all duration-500" />
                                </Link>
                                <Link href={"https://www.instagram.com/ez.brandbuilders/"} target="_blank">
                                    <FaInstagram size={24} className="hover:text-white transition-all duration-500" />
                                </Link>
                                <Link href={"https://www.facebook.com/ez.brandbuilders/"} target="_blank">
                                    <FaFacebookF size={23} className="hover:text-white transition-all duration-500" />
                                </Link>
                            </div>
                            <div className="flex ">
                                <Link href={"/signin"} className="hover:bg-zinc-900 transition-all duration-500 px-6 py-2 rounded-full border border-zinc-600 flex items-center gap-3 mt-4 text-zinc-400">Sign In <BsArrowDown className="-rotate-90" /></Link>
                            </div>
                        </div>
                        <div className="flex md:gap-20 flex-wrap md:flex-row flex-col gap-8">
                            <div className="">
                                <h4 className="text-lg font-medium text-zinc-200">Quick Links</h4>
                                <ul className="mt-3.5 text-zinc-400 space-y-4">
                                    <li><Link href={"/"} className="hover:underline">
                                        <TextEffectThree animationDuration={0.3} text="Home" />
                                    </Link></li>
                                    <li><Link href={"/about"} className="hover:underline">
                                        <TextEffectThree animationDuration={0.3} text="About Us" />
                                    </Link></li>
                                    <li><Link href={"/services"} className="hover:underline">
                                        <TextEffectThree animationDuration={0.3} text="Services" />
                                    </Link></li>
                                    <li><Link href={"/project"} className="hover:underline">
                                        <TextEffectThree animationDuration={0.3} text="Projects" />
                                    </Link></li>
                                    <li><Link href={"/contact"} className="hover:underline">
                                        <TextEffectThree animationDuration={0.3} text="Contact Us" />
                                    </Link></li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className="text-lg font-medium text-zinc-200">Get In Touch</h4>
                                <ul className="mt-3.5 text-zinc-400 space-y-3">
                                    <li className=" flex items-center gap-2"><PiBuildings size={18} />Pakistan, Karachi</li>
                                    <li><Link href={"mailto:ezbrandbuilders@gmail.com"} className="hover:underline flex items-center gap-2"><IoMailOutline size={18} />ezbrandbuilders@gmail.com</Link></li>
                                    <li><Link href={"tel:+923201091220"} className="hover:underline flex items-center gap-1.5"><MdOutlinePermPhoneMsg size={18} />+92 320 1091 220</Link></li>
                                </ul>
                            </div>
                            <form onSubmit={emailSubmitHandler}>
                                <h4 className="text-lg font-medium text-zinc-200 ">Subcribe us for a new desgin!</h4>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="abc@gmail.com" type="email" className="px-3 py-2 outline-0 text-zinc-300  rounded-lg border border-zinc-600 mt-3.5 w-full" />
                                <div className="flex items-end justify-end mt-2">
                                    <button className="bg-zinc-200 cursor-pointer px-4 py-1 rounded-full ">Submit</button>
                                </div>
                            </form>
                        </div>
                    </footer>
                </div>
                <div className="flex items-center text-[#777a84] max-w-7xl w-full lg:flex-row flex-col-reverse mx-auto px-5 gap-5 pb-5 justify-between">
                    <p className="text-center">Copyright © 2025 <Link href={"/"} className="text-zinc-300 hover:text-white transition-all duration-500">EZ Brand Builders</Link>. All rights reserved.</p>
                    <div className="flex items-center ">
                        <Link href={"/"} className="hover:text-zinc-400 transition-all duration-500 border-r border-[#ffffff21] pr-4">Privacy Policy</Link>
                        <Link href={"/"} className="hover:text-zinc-400 transition-all duration-500 pl-4">Terms of Service</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer