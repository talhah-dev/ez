import Image from "next/image"
import BodyWrapper from "@/app/BodyWrapper"
import Counter from "@/Components/Counter"
import Navbar from "@/Components/Navbar"
import Link from "next/link"
import Clients from "@/Components/Clients"
import { TextEffectOne } from "react-text-animate"
import DevelopmentCard from "@/Components/DevelopmentCard"

const Page = () => {
    return (
        <BodyWrapper>
            <div className="bg-[#040406]">
                <div className='bg-[url(/images/serviceBackground.svg)] bg-no-repeat w-full bg-center bg-cover'>
                    <Navbar />
                    <div className="overflow-hidden mt-10 md:mt-0 px-4  max-w-7xl mx-auto w-full  md:py-20 py-10">
                        <div className="flex max-w-4xl mx-auto w-full items-center justify-center text-center">
                            <div className="">
                                <h1 className='md:text-5xl text-4xl leading-tight font-medium text-white'>About EZ Brand Builders
                                </h1>
                                <p className='text-[#ABAEBB] md:mt-5 mt-3 md:text-lg'>EZ Brand Builders Private Limited was established in 2017 with fewer employees. With the span of time, we become the leading software development company in PAKISTAN, ready to serve the businesses and companies across the world.</p>
                            </div>
                        </div>
                        <div className="md:mt-16 mt-10 text-[#a2a4ac]">
                            <Counter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center max-w-7xl mx-auto w-full md:flex-row flex-col md:mt-24 mt-10 justify-center md:gap-16 gap-8">
                <div className="md:max-w-[50%] w-full px-5">
                    <h3 className="text-xl font-medium mb-2 text-zinc-700">EZ Brand Builders</h3>
                    <h2 className="md:text-4xl text-2xl font-medium text-zinc-900">Your Partner in Digital Excellence</h2>
                    <p className="text-zinc-600 md:mt-5 mt-3">Whether creating user-friendly websites, intuitive mobile applications, or maximizing your online presence with cutting-edge SEO techniques, we produce outcomes that promote operational effectiveness and business growth. With EZ Brand Builders on your side, you can successfully negotiate the complexities of the digital environment and keep your competitive edge in the market today.
                    </p>

                </div>
                <div className="md:max-w-[40%] w-full">
                    <Image src={"/about/DigitalExcellence.png"} width={1000} height={1000} className='w-full md:rounded-xl' alt='EZ Brand Builders digital marketing visual' />
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
                    <div className="md:max-w-[40%] w-full">
                        <h2 className='md:text-4xl text-2xl font-medium text-zinc-200'>Driving Success with
                            our Digital Solutions
                        </h2>
                    </div>
                    <div className="md:max-w-[60%] w-full">
                        <p className='text-zinc-400 md:mt-5 mt-2 '>EZ Brand Builders is a cutting-edge application development company that personalizes and streamlines the development process. We help startups and businesses evolve, compete, and succeed in the Artificial Intelligence (AI) era. As the leading company, we provide software development services through human touch in every aspect that makes us unique.</p>
                        <div className="flex mt-5">
                            <Link target="_blank" href={"http://wa.me/+923201091220"} className="px-8 block py-2.5 text-zinc-200 bt cursor-pointer w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] ">Send Us a Message</Link>
                        </div>
                    </div>
                </div>
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

            <div className="w-full mx-auto md:mt-20 mt-8 md:p-5 p-3 bg-black md:py-28 py-14 relative">
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

            <div className="md:mt-20 mt-8 max-w-7xl w-full mx-auto p-5">
                <h2 className='md:text-5xl text-3xl text-center font-medium text-zinc-900'>Our Team Members</h2>
                <p className='text-zinc-600 md:mt-5 mt-3 text-center max-w-5xl mx-auto'>
                    Our team of experts is dedicated to delivering high-quality solutions that meet the unique needs of our clients. With a focus on innovation and excellence, we are committed to helping businesses succeed in the digital age.
                </p>
                <div className="md:mt-16 mt-8 grid md:grid-cols-4 gap-y-8 grid-cols-2 md:gap-5 gap-2">

                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/man.jpg"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">Developer</h2>
                    </div>
                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/man.jpg"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">Marketer</h2>
                    </div>
                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/man.jpg"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">SEO Expert</h2>
                    </div>
                    <div className="group w-full">
                        <div className="w-full md:h-80 h-40 rounded-2xl overflow-hidden">
                            <Image src={"/team/woman.jpg"} width={1000} height={1000} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl' alt='project' />
                        </div>
                        <h2 className="mt-2 text-center text-zinc-800 font-medium text-lg">Devops</h2>
                    </div>

                </div>
            </div>

            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    )
}

export default Page