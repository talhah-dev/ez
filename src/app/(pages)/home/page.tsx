import BodyWrapper from '@/app/BodyWrapper';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";

const Home = () => {
    return (
        <BodyWrapper>
            <div className='bg-[url(/images/home_bg.svg)] min-h-screen bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <div className="overflow-hidden mt-10 md:mt-0  max-w-7xl mx-auto w-full">
                    <div className="flex items-center md:flex-row flex-col min-h-[calc(100vh-6rem)] justify-between md:gap-16 gap-8">
                        <div className="md:max-w-[50%] w-full px-5">
                            <h1 className='md:text-6xl text-4xl leading-tight font-medium text-white'>Building Brands and Solve Tech Challenges</h1>
                            <p className='text-[#ABAEBB] md:mt-5 mt-3 md:text-lg'>We have become the top-notch software development services provider primarily due to our years of experience, creative solutions, and dedication to quality.</p>
                            <div className="flex items-center gap-7 md:flex-row flex-col mt-6">
                                <button className="px-8 py-2.5 text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] ">Get In Touch</button>
                                <Link href={"/"} className='text-zinc-200 flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Explore Our Services <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="md:max-w-[50%] w-full">
                            <Image src={"/images/home.png"} width={1000} height={1000} className='w-full animate-[spin_200s_linear_infinite]' alt='Image' />
                        </div>
                    </div>
                    <h2 className='md:text-4xl text-3xl mt-10 leading-tight font-medium text-white capitalize px-5'>Our Services</h2>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-14 gap-8 md:mt-8 mt-6 md:mb-14 mb-8 px-5">

                        <div className="w-full">
                            <h3 className='text-zinc-100 capitalize text-lg font-medium flex items-center gap-2'><FaDesktop className='text-[#76ddd4]' size={20} />Web Design & Development</h3>
                            <p className='text-[#ABAEBB] text-[15px] mt-2 '>Your website is often the first impression you make. We build fast, mobile-friendly websites that help your visitors find what they need, trust your brand, and take action.</p>
                            <div className="flex">
                                <Link href={"/"} className='text-zinc-100 mt-2 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className='text-zinc-100 capitalize text-lg font-medium flex items-center gap-1'><MdPhoneIphone className='text-[#8b67c6]' size={20} />Web & Mobile App Development</h3>
                            <p className='text-[#ABAEBB] text-[15px] mt-2 '>We build smart, user-friendly apps that deliver practical solutions—whether it’s streamlining operations, improving customer experience, or bringing your ideas to life.</p>
                            <div className="flex">
                                <Link href={"/"} className='text-zinc-100 mt-2 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className='text-zinc-100 capitalize text-lg font-medium flex items-center gap-1.5'><MdAutoGraph className='text-[#eb9377]' size={23} />Digital Marketing</h3>
                            <p className='text-[#ABAEBB] text-[15px] mt-2 '>We craft tailored digital strategies that offer real solutions—helping you reach the right audience, build trust, and grow your business online.</p>
                            <p className='md:block hidden select-none'>&nbsp;</p>
                            <div className="flex">
                                <Link href={"/"} className='text-zinc-100 mt-2 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex items-center max-w-7xl mx-auto w-full md:flex-row flex-col md:mt-24 mt-10 justify-center md:gap-16 gap-8">
                <div className="md:max-w-[50%] w-full px-5">
                    <h1 className='md:text-5xl text-3xl font-medium text-zinc-900'>Why Choose Us?</h1>
                    <p className='text-zinc-600 md:mt-5 mt-3 md:text-'><span className='text-zinc-800 font-medium'>Reliable Solutions</span>: EZ Brand Builders understands that every business is unique. We serve them with innovative solutions that help them overcome business challenges.
                        <br />
                        <span className='text-zinc-800 font-medium'>Client-Centric Approach</span>: We always ensure our client’s mission and work accordingly to drive business growth.
                        <br /><br />
                        <span className='text-zinc-800 font-medium'>Constant Support</span>:
                        Our goal is to give businesses peace of mind and allow them to concentrate on their primary business operations by offering continuous support and maintenance.
                        <br />
                        <span className='text-zinc-800 font-medium'>Depth of Knowledge</span>: We use our expertise to guide our clients through the challenges of the digital age and assist them in achieving their strategic objectives.

                    </p>
                    <div className="flex items-center gap-7 md:flex-row flex-col mt-6">
                        <Link href={"/"} className='text-[#e69135] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More About Us <IoIosArrowForward size={18} />
                        </Link>
                    </div>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <Image src={"/images/whyChooseUs.png"} width={1000} height={1000} className='w-full md:rounded-xl' alt='Image' />
                </div>
            </div>

            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    );
};

export default Home;
