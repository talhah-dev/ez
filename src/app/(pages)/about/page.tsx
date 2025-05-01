import BodyWrapper from "@/app/BodyWrapper"
import Counter from "@/Components/Counter"
import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

const page = () => {
    return (
        <BodyWrapper>
            <div className='bg-[url(/images/serviceBackground.svg)] bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <div className="overflow-hidden mt-10 md:mt-0  max-w-7xl mx-auto w-full  md:py-20 py-10">
                    <div className="flex max-w-4xl mx-auto w-full items-center justify-center text-center">
                        <div className="">
                            <h1 className='md:text-5xl text-4xl leading-tight font-medium text-white'>About EZ Brand Builders
                            </h1>
                            <p className='text-[#ABAEBB] md:mt-5 mt-3 md:text-lg'>EZ Brand Builders Private Limited was established in 2017 with fewer employees. With the span of time, we become the leading software development company in UAE, ready to serve the businesses and companies across the world.</p>
                        </div>
                    </div>
                    <div className="md:mt-16 mt-10 text-[#a2a4ac]">
                        <Counter />
                    </div>
                </div>
            </div>
            <div className="flex items-center max-w-7xl mx-auto w-full md:flex-row flex-col md:mt-24 mt-10 justify-center md:gap-16 gap-8">
                <div className="md:max-w-[50%] w-full px-5">
                    <h3 className='text-xl font-medium mb-2 text-zinc-700'>EZ Brand Builders</h3>
                    <h2 className="md:text-4xl text-2xl font-medium text-zinc-900">Your Partner in Digital Excellence</h2>
                    <p className="text-zinc-600 md:mt-5 mt-3">Whether creating user-friendly websites, intuitive mobile applications, or maximizing your online presence with cutting-edge SEO techniques, we produce outcomes that promote operational effectiveness and business growth. With EZ Brand Builders on your side, you can successfully negotiate the complexities of the digital environment and keep your competitive edge in the market today.
                    </p>
                    <div className="flex md:items-center gap-7 md:flex-row flex-col mt-6">
                        <Link href={"/"} className='text-[#e69135] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Let's connect with us <IoIosArrowForward size={18} />
                        </Link>
                    </div>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <Image src={"/about/DigitalExcellence.png"} width={1000} height={1000} className='w-full md:rounded-xl' alt='Image' />
                </div>
            </div>

            <div className="flex items-center max-w-7xl mx-auto w-full md:flex-row flex-col md:mt-24 mt-10 justify-center md:gap-16 gap-8">
                <div className="md:max-w-[50%] w-full px-5">
                    <h2 className='md:text-4xl text-2xl font-medium text-zinc-900'>Our Mission</h2>
                    <p className='text-zinc-600 md:mt-5 mt-3 md:text-'>Enabling businesses to achieve their goals through digital transformation, optimize their operations, and experience long-term success by transforming their ideas into reality.</p>
                </div>
                <div className="md:max-w-[50%] w-full px-5">
                    <h2 className='md:text-4xl text-2xl font-medium text-zinc-900'>Our Vision</h2>
                    <p className='text-zinc-600 md:mt-5 mt-3 md:text-'>{"To deliver innovative digital solutions that not only meet but also excel our client&rsquo;s expectations, automate process, and also challenging issues"}</p>
                </div>
            </div>

            <div className='bg-[url(/images/serviceBackground.svg)] bg-no-repeat w-full bg-center bg-cover'>
                <div className="flex px-5 md:py-20 py-10 items-center max-w-7xl mx-auto w-full md:flex-row flex-col md:mt-24 mt-10 justify-center md:gap-16 gap-8">
                    <div className="md:max-w-[40%] w-full px-5">
                        <h2 className='md:text-4xl text-2xl font-medium text-zinc-200'>Driving Success with
                            our Digital Solutions
                        </h2>
                    </div>
                    <div className="md:max-w-[60%] w-full px-5">
                        <p className='text-zinc-400 md:mt-5 mt-2 '>EZ Brand Builders is a cutting-edge application development company that personalizes and streamlines the development process. We help startups and businesses evolve, compete, and succeed in the Artificial Intelligence (AI) era. As the leading company, we provide software development services through human touch in every aspect that makes us unique.</p>
                        <div className="flex mt-5">
                            <Link target="_blank" href={"http://wa.me/+923201091220"} className="px-8 block py-2.5 text-zinc-200 bt cursor-pointer w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] ">Send Us a Message</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:mt-20 mt-8 max-w-7xl w-full mx-auto p-5">
                <h2 className='md:text-5xl text-3xl text-center font-medium text-zinc-900'>Our Team Members</h2>
                <p className='text-zinc-600 md:mt-5 mt-3 text-center max-w-5xl mx-auto'>
                    Our team of experts is dedicated to delivering high-quality solutions that meet the unique needs of our clients. With a focus on innovation and excellence, we are committed to helping businesses succeed in the digital age.
                </p>
                <div className="md:mt-16 mt-8 grid md:grid-cols-4 gap-y-8 grid-cols-2 md:gap-5 gap-2">

                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/talha.jpg"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">Developer</h2>
                    </div>
                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/ali.png"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">Marketer</h2>
                    </div>
                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/talha.jpg"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">SEO Expert</h2>
                    </div>
                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/ali.png"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">Devops</h2>
                    </div>

                </div>
            </div>


            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    )
}

export default page