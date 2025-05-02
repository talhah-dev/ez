import BodyWrapper from '@/app/BodyWrapper';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";

const Page = () => {
    return (
        <BodyWrapper>
            <div className='bg-[url(/images/home_bg.svg)] min-h-screen bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <div className="overflow-hidden p-5 max-w-7xl mx-auto w-full">
                    <div className="flex items-center flex-col md:min-h-[calc(100vh-6rem)] min-h-[calc(100vh-15rem)] justify-center text-center">
                        <h1 className='md:text-8xl text-6xl leading-tight font-medium text-white'>404</h1>
                        <p className='text-[#ABAEBB] max-w-2xl w-full mx-auto md:mt-5 mt-3 md:text-lg'>
                            Oops! The page you are looking for does not exist. It might have been removed, or the URL might be incorrect.
                        </p>
                        <div className="flex mt-6">
                            <Link href={"/"} className="px-8 text-center py-2.5 text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] ">Back To Home Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </BodyWrapper>
    );
};

export default Page;
