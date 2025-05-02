import BodyWrapper from "@/app/BodyWrapper"
import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <BodyWrapper>
            <div className='bg-[url(/images/projectBg.svg)] md:min-h-[calc(100vh-8rem)] overflow-hidden relative bg-no-repeat w-full bg-center bg-cover'>
                <Image
                    src="/images/project-rounded-full.png"
                    alt="projects"
                    width={1000}
                    height={1000}
                    className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block hidden"
                />
                <div className="relative z-10">
                    <Navbar />
                </div>
                <div className="overflow-hidden relative z-10 mt-10 md:mt-0  max-w-7xl flex items-center md:min-h-[calc(100vh-14rem)] justify-center mx-auto w-full  md:py-20 py-10">
                    <div className="flex max-w-2xl mx-auto w-full items-center justify-center text-center">
                        <div className="px-5">
                            <h1 className='md:text-5xl text-4xl leading-tight font-medium text-white'>Recent Projects
                            </h1>
                            <p className='text-[#ABAEBB] md:mt-5 mt-3 md:text-lg'>
                                We are proud to showcase our recent projects, which demonstrate our commitment to excellence and innovation.
                            </p>
                            <div className="flex justify-center items-center mt-5">
                                <Link href={"/contact"} className="px-8 py-2.5 text-zinc-200 bt cursor-pointer w-auto transition-all block duration-500 hover:opacity-80 rounded-full border border-[#f1a274] ">Work With Us</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="md:mt-20 mt-8 max-w-7xl w-full mx-auto p-5">
                <div className="flex md:flex-row flex-col items-center justify-between w-full gap-3 md:gap-10 md:text-start text-center">
                    <h2 className='md:text-5xl text-3xl font-medium text-zinc-900 max-w-sm leading-tight'>Work That Speaks</h2>
                    <p className='text-zinc-600 max-w-sm w-full'>
                        Our tech stack includes the latest and most popular tools and frameworks, allowing us to deliver high-quality solutions that meet the needs of our clients
                    </p>
                </div>
                <div className="md:mt-16 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-2">
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project1.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project2.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project3.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project4.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project5.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project1.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project1.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project2.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                    <div className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                        <Image src={"/projects/project3.jpeg"} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                    </div>
                </div>
            </div>

            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    )
}

export default Page