"use client"
import BodyWrapper from '@/app/BodyWrapper';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import Counter from '@/Components/Counter';
import DevelopmentCard from '@/Components/DevelopmentCard';
import Clients from '@/Components/Clients';
import { FaArrowRightLong } from "react-icons/fa6";
import { TextEffectOne, TextEffectThree } from 'react-text-animate';
import Project from '@/Components/Project';

const Page = () => {

    return (
        <BodyWrapper>
            <div className='bg-[url(/images/home_bg.svg)] min-h-screen bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <div className="overflow-hidden mt-10 md:mt-0  max-w-7xl mx-auto w-full">
                    <div className="flex items-center md:flex-row flex-col md:min-h-[calc(100vh-6rem)] md:py-0 py-20 justify-center md:gap-16 gap-5">
                        <div className="w-full px-5 text-center" >
                            <TextEffectOne wrapperElement="h1"
                                staggerDuration={0.01} animateOnce className='md:text-7xl 2xl:text-8xl text-4xl leading-tight font-semibold text-white' text="Helping Businesses" />
                            <TextEffectOne wrapperElement="h1"
                                staggerDuration={0.01} animateOnce className='md:text-7xl 2xl:text-8xl text-4xl leading-tight font-semibold text-white' text="to Become Iconic" />
                            <TextEffectOne wrapperElement="h1"
                                staggerDuration={0.01} animateOnce className='md:text-7xl 2xl:text-8xl text-4xl leading-tight font-semibold text-white' text=" Brands" />
                            <TextEffectOne wrapperElement="p"
                                staggerDuration={0.005} initialDelay={0.01} animateOnce className='text-[#ABAEBB] max-w-2xl !leading-tight mx-auto md:mt-5 mt-3 md:text-lg' text="We have become the top-notch software development services provider primarily due to our." />
                            <div className="flex items-center gap-7 justify-center md:flex-row flex-col mt-6">
                                <Link href={"/contact"} className="px-10 text-center py-3.5 text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] ">Get Started</Link>
                                <Link href={"/services"} className='text-zinc-200 flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>
                                    <TextEffectThree animationDuration={0.2} className='text-zinc-200' text="Explore Our Services" />
                                    <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>
                        {/* <div className="md:max-w-[50%] w-full">
                            <Image src={"/images/builders.png"} width={1000} height={1000} className='w-full md:-scale-x-100' alt='Image' />
                        </div> */}
                    </div>
                    <TextEffectOne wrapperElement="h2"
                        staggerDuration={0.02} animateOnce className='md:text-4xl text-3xl mt-10 leading-tight font-medium text-white capitalize px-5' text="Our Top Services" />
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-14 gap-8 md:mt-8 mt-6 md:mb-14 mb-8 px-5">
                        <div className="w-full">
                            <h3 className='text-zinc-100 capitalize text-lg font-medium flex items-center gap-2'><FaDesktop className='text-[#76ddd4]' size={20} />Web Design & Development</h3>
                            <p className='text-[#ABAEBB] text-[15px] mt-2 '>Your website is often the first impression you make. We build fast, mobile-friendly websites that help your visitors find what they need, trust your brand, and take action.</p>
                            <div className="flex">
                                <Link href={"/services"} className='text-zinc-100 mt-2 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 data-aos="fade-up" className='text-zinc-100 capitalize text-lg font-medium flex items-center gap-1'><MdPhoneIphone className='text-[#8b67c6]' size={20} />Web & Mobile App Development</h3>
                            <p className='text-[#ABAEBB] text-[15px] mt-2 '>We build smart, user-friendly apps that deliver practical solutions—whether it’s streamlining operations, improving customer experience, or bringing your ideas to life.</p>
                            <div className="flex">
                                <Link href={"/services"} className='text-zinc-100 mt-2 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className='text-zinc-100 capitalize text-lg font-medium flex items-center gap-1.5'><MdAutoGraph className='text-[#eb9377]' size={23} />Digital Marketing</h3>
                            <p className='text-[#ABAEBB] text-[15px] mt-2 '>We craft tailored digital strategies that offer real solutions—helping you reach the right audience, build trust, and grow your business online.</p>
                            <p className='md:block hidden select-none'>&nbsp;</p>
                            <div className="flex">
                                <Link href={"/services"} className='text-zinc-100 mt-2 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More <IoIosArrowForward size={18} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex items-center max-w-7xl mx-auto w-full md:flex-row flex-col md:mt-24 mt-10 justify-center md:gap-16 gap-8">
                <div className="md:max-w-[50%] w-full px-5">
                    <TextEffectOne initialDelay={0.1} wrapperElement="h2"
                        staggerDuration={0.02} animateOnce className='md:text-5xl text-3xl font-medium text-zinc-900' text="Why Choose Us?" />
                    <p className='text-zinc-600 md:mt-5 mt-3 md:text-'><span className='text-zinc-800 font-medium'>Reliable Solutions</span>: EZ Brand Builders understands that every business is unique. We serve them with innovative solutions that help them overcome business challenges.
                        <br />
                        <span className='text-zinc-800 font-medium'>Client-Centric Approach</span>: We always ensure our client’s mission and work accordingly to drive business growth.
                        <br /><br />
                        <span className='text-zinc-800 font-medium'>Constant Support</span>:
                        Our goal is to give businesses peace of mind and allow them to concentrate on their primary business operations by offering continuous support and maintenance.
                        <br />
                        <span className='text-zinc-800 font-medium'>Depth of Knowledge</span>: We use our expertise to guide our clients through the challenges of the digital age and assist them in achieving their strategic objectives.

                    </p>
                    <div className="flex md:items-center gap-7 md:flex-row flex-col mt-6">
                        <Link href={"/about"} className='text-[#e69135] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Learn More About Us <IoIosArrowForward size={18} />
                        </Link>
                    </div>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <Image src={"/images/whyChooseUs.png"} width={1000} height={1000} className='w-full md:rounded-xl' alt='Image' />
                </div>
            </div>

            <div className="md:mt-24 mt-8">
                <Counter />
            </div>

            <div className="md:mt-24 mt-8 max-w-[70rem] w-full mx-auto md:p-5 p-3">
                <TextEffectOne initialDelay={0.1} wrapperElement="h2"
                    staggerDuration={0.02} animateOnce className='md:text-5xl text-3xl text-center font-medium text-zinc-900' text="Our Development Process" />
                <TextEffectOne initialDelay={0.1} wrapperElement="p"
                    staggerDuration={0.005} animateOnce className='text-zinc-600 md:mt-5 mt-3 text-center' text="Exceptional development. Seamless integration. Delighted developers. Increased adoption." />
                <div className="grid md:mt-12 mt-8 md:grid-cols-2 grid-cols-1 md:gap-3 gap-2">
                    <Image src={"/images/development-card-1.jpg"} alt='develoment card' className='w-full md:block hidden rounded-xl md:col-span-2' width={1000} height={1000} />
                    <Image src={"/images/development-card-1-sm.jpg"} alt='develoment card' className='w-full md:hidden block rounded-xl' width={1000} height={1000} />
                    <DevelopmentCard image={"/images/development-card-2.jpg"} title={"Accelerate time-to-market"} description={"descriptionGet your product to market faster with our SDK development services. Reduce time-to-market from months to weeks."} />
                    <DevelopmentCard image={"/images/development-card-3.jpg"} title={"Reduce development costs"} description={"Minimise development costs for your customers and internal teams. Well-designed SDKs save valuable time and resources."} />
                    <DevelopmentCard image={"/images/development-card-4.jpg"} title={"Boost app quality and stability"} description={"Develop SDKs that empower developers to build stable, performant, and secure applications, leading to a better user and developer experience."} />
                    <DevelopmentCard image={"/images/development-card-5.png"} title={"Foster developer ecosystem"} description={"Empower developers with clear documentation, intuitive APIs, guides, samples, and tutorials – to accelerate product adoption and diversify integrations."} />
                </div>
            </div>

            <div className="md:mt-20 mt-8 w-full relative mx-auto md:p-5 p-3 bg-black md:py-28 py-14">
                <Image src={"/images/box.svg"} width={1000} height={1000} className="absolute top-0 right-0 w-1/4" alt="box" />
                <Image src={"/images/box.svg"} width={1000} height={1000} className="absolute opacity-45 bottom-0 left-0 w-1/4" alt="box" />
                <TextEffectOne wrapperElement="h2"
                    staggerDuration={0.02} initialDelay={0.1} animateOnce className='md:text-5xl text-3xl text-center font-medium text-zinc-100' text="Our Clients" />
                <TextEffectOne wrapperElement="p"
                    staggerDuration={0.005} initialDelay={0.1} animateOnce className='text-zinc-300 md:mb-14 mb-8 md:mt-5 mt-3 text-center max-w-4xl mx-auto' text="We take pride in our diverse clientele, ranging from startups to established enterprises. Our clients trust us to deliver innovative solutions that drive their business forward." />
                <div className="relative z-20">
                    <Clients />
                </div>
            </div>

            <div className="md:mt-20 mt-8 max-w-7xl w-full mx-auto md:p-5 p-3">
                <TextEffectOne wrapperElement="h2"
                    staggerDuration={0.02} initialDelay={0.1} animateOnce className='md:text-5xl text-3xl text-center font-medium text-zinc-900' text="Recent Projects" />
                <TextEffectOne wrapperElement="p"
                    staggerDuration={0.005} initialDelay={0.1} animateOnce className='text-zinc-600 md:mt-5 mt-3 text-center max-w-4xl mx-auto' text="We have successfully delivered a wide range of projects across various industries. Our portfolio showcases our expertise in web and mobile app development, digital marketing, and custom software solutions." />
                <div className="grid md:mt-12 mt-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-2">
                    <Project showImages={6} />
                </div>

                <div className="flex items-center justify-center mt-12">
                    <Link href={"/project"} className='flex items-center gap-2 text-gray-800 hover:underline'>
                        <TextEffectThree animationDuration={0.3} className='text-gray-800' text="View More" />
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>

            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    );
};

export default Page;
