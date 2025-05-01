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

const Footer = () => {
    return (
        <>
            <div className="bg-[url(/images/footer.svg)] overflow-hidden bg-center object-cover bg-no-repeat bg-cover object-center">
                <div className="min-h-screen flex items-center justify-center flex-col py-10">
                    <div className="relative">
                        <span className="absolute right-[-60px] top-[-50px] h-[140px] w-[174px] rotate-[41deg] bg-[radial-gradient(54.45%_54.3%_at_46.68%_45.8%,#939FD7_0%,rgba(69,74,111,0.50)_46.81%,rgba(32,35,50,0.00)_100%)] blur-[10px]"></span>
                        <Image src={"/images/logoIcon.png"} width={200} height={200} alt="logo" className="md:h-40 h-32 relative w-auto" />
                    </div>
                    <h2 className="text-zinc-200 font-medium md:text-5xl mt-2 text-3xl max-w-xl text-center w-full mx-auto leading-tight capitalize">Smart Solutions for
                        <span className="font-semibold md:text-6xl text-4xl"> Bold Brands</span></h2>
                    <div className="flex items-center gap-7 md:flex-row flex-col mt-6">
                        <button className="px-8 py-2.5  text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full bg-black border border-[#f1a274] ">Book a consultation</button>
                        <Link href={"/"} className='text-zinc-200  flex items-center gap-1 transition-all duration-500 hover:opacity-80'>Explore Our Services <IoIosArrowForward size={18} />
                        </Link>
                    </div>
                </div>
                <div className=" p-5 max-w-7xl w-full mx-auto">
                    <footer className=" flex border-y justify-between lg:flex-row flex-col flex-wrap gap-14  py-10 border-[#ffffff18]">
                        <div className="">
                            <Link href={"/"} >
                                <Image src={"/images/logo.png"} width={200} height={200} className="w-auto mx-auto h-10 md:mx-0" alt="Logo" />
                            </Link>

                            <div className="flex text-[#ffffffb4] items-center gap-6 md:mt-24 mt-8 justify-center md:justify-start">
                                <Link href={"#"}>
                                    <FaWhatsapp size={26} className="hover:text-white transition-all duration-500" />
                                </Link>
                                <Link href={"#"}>
                                    <FaLinkedinIn size={24} className="hover:text-white transition-all duration-500" />
                                </Link>
                                <Link href={"#"}>
                                    <FaInstagram size={24} className="hover:text-white transition-all duration-500" />
                                </Link>
                                <Link href={"#"}>
                                    <FaFacebookF size={23} className="hover:text-white transition-all duration-500" />
                                </Link>
                            </div>

                        </div>
                        <div className="flex md:gap-20 flex-wrap md:flex-row flex-col gap-8">
                            <div className="">
                                <h4 className="text-lg font-medium text-zinc-200">Quick Links</h4>
                                <ul className="mt-3.5 text-zinc-400 space-y-2.5">
                                    <li><Link href={"/"} className="hover:underline">Home</Link></li>
                                    <li><Link href={"/"} className="hover:underline">Projects</Link></li>
                                    <li><Link href={"/"} className="hover:underline">About Us</Link></li>
                                    <li><Link href={"/contact"} className="hover:underline">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className="text-lg font-medium text-zinc-200">Get In Touch</h4>
                                <ul className="mt-3.5 text-zinc-400 space-y-2.5">
                                    <li><Link href={"#"} className="hover:underline flex items-center gap-2"><PiBuildings size={18} />Pakistan, Karachi</Link></li>
                                    <li><Link href={"mailto:ezbrandbuilders@gmail.com"} className="hover:underline flex items-center gap-2"><IoMailOutline size={18} />ezbrandbuilders@gmail.com</Link></li>
                                    <li><Link href={"tel:+923201091220"} className="hover:underline flex items-center gap-1.5"><MdOutlinePermPhoneMsg size={18} />+92 320 1091 220</Link></li>
                                </ul>
                            </div>
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