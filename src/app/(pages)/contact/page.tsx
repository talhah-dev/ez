"use client"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import BodyWrapper from "@/app/BodyWrapper"
import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CgWebsite } from "react-icons/cg"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GiWorld } from "react-icons/gi"
import { IoLogoInstagram } from "react-icons/io"
import { app } from "@/lib/firebase"
import { toast } from "react-toastify"

const Services = [
    { name: "Website Development", value: "websiteDevelopment" },
    { name: "Mobile Application", value: "mobileApplication" },
    { name: "Digital Marketing", value: "digitalMarketing" },
    { name: "Branding", value: "branding" },
    { name: "Graphic Design", value: "graphicDesign" },
    { name: "Content Writing", value: "contentWriting" },
    { name: "Social Media Marketing", value: "socialMediaMarketing" },
    { name: "SEO", value: "seo" }
] as const;

const SocialMedia = [
    { name: "Facebook", value: "facebook", icon: <FaFacebookF /> },
    { name: "LinkedIn", value: "linkedin", icon: <FaLinkedinIn /> },
    { name: "Instagram", value: "instagram", icon: <IoLogoInstagram /> },
    { name: "Website", value: "website", icon: <CgWebsite /> },
    { name: "Others", value: "other", icon: <GiWorld /> },
];

const firestore = getFirestore(app)

const Page = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        number: "",
        budgetOption: "",
        customBudget: "",
        message: "",
    })

    const [services, setServices] = useState<Record<string, boolean>>({
        websiteDevelopment: false,
        mobileApplication: false,
        digitalMarketing: false,
        branding: false,
        graphicDesign: false,
        contentWriting: false,
        socialMediaMarketing: false,
        seo: false,
    })

    const [social, setSocial] = useState<Record<string, boolean>>({
        facebook: false,
        linkedin: false,
        instagram: false,
        website: false,
        other: false
    })

    const formhandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!data.name || !data.email || !data.number || !data.message || data.budgetOption === "custom" ? !data.customBudget : !data.budgetOption || Object.keys(services).filter((key) => services[key]).length === 0 || Object.keys(social).filter((key) => social[key]).length === 0) {
            toast.error("Please fill all the  fields");
            return;
        }

        try {
            await addDoc(collection(firestore, "clients"), {
                name: data.name,
                email: data.email,
                number: data.number,
                budget: data.budgetOption === "custom" ? data.customBudget : data.budgetOption,
                message: data.message,
                services: Object.keys(services).filter((key) => services[key]),
                socialMedia: Object.keys(social).filter((key) => social[key]),
            });
            toast.success("Your request has been submitted successfully!");

            setData({
                name: "",
                email: "",
                number: "",
                budgetOption: "",
                customBudget: "",
                message: "",
            })
            setServices({
                websiteDevelopment: false,
                mobileApplication: false,
                digitalMarketing: false,
                branding: false,
                graphicDesign: false,
                contentWriting: false,
                socialMediaMarketing: false,
                seo: false,
            })
            setSocial({
                facebook: false,
                linkedin: false,
                instagram: false,
                website: false,
                other: false
            })

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <BodyWrapper>
            <div className='bg-[#040406] min-h-screen bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <Image src={"/images/box.svg"} width={1000} height={1000} className="absolute top-0 right-0 w-1/4" alt="box" />
                <Image src={"/images/box.svg"} width={1000} height={1000} className="absolute opacity-45 bottom-0 left-0 w-1/4" alt="box" />

                <div className="max-w-7xl relative z-10 w-full md:py-20 py-10 mx-auto md:p-5 p-4 min-h-[calc(100vh-7rem)] flex items-start justify-between md:gap-10 gap-20 md:flex-row flex-col">

                    <div className="md:max-w-[40%] w-full md:mt-5 md:text-start text-center ">
                        <h2 className="text-zinc-200 font-medium md:text-5xl leading-tight text-3xl">Have a great idea?</h2>
                        <p className="text-zinc-200 md:text-2xl text-lg mt-4">Tell us about it.</p>


                        <div className="md:block hidden">
                            <h2 className="text-zinc-200 font-medium md:mt-20 mt-10 md:text-3xl text-2xl">Message us:</h2>
                            <div className="flex items-center flex-wrap gap-3 mt-5">
                                <Link href={"http://wa.me/+923201091220"} className="border rounded-full p-3 border-zinc-500 transition-all duration-500 hover:opacity-70 cursor-pointer hover:-translate-y-1">
                                    <Image src={"/images/whatsapp.svg"} width={30} height={30} className="w-6 h-6" alt="whatsapp" />
                                </Link>
                                <Link href={"https://www.linkedin.com/company/ez-brand-builders"} className="border rounded-full p-3 border-zinc-500 transition-all duration-500 hover:opacity-70 cursor-pointer hover:-translate-y-1">
                                    <Image src={"/images/instagram.svg"} width={30} height={30} className="w-6 h-6" alt="whatsapp" />
                                </Link>
                            </div>
                            <h2 className="text-zinc-200 font-medium md:mt-20 mt-10 md:text-3xl text-2xl">Contact us:</h2>
                            <div className=" mt-5">
                                <Link href={"mailto:ezbrandbuilders@gmail.com"} className="hover:opacity-70 text-zinc-400 cursor-pointer ">
                                    ezbrandbuilders@gmail.com
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="md:max-w-[60%] w-full">
                        <div className="relative rounded-2xl md:px-8 px-4  bg-[#0B0C0E] pt-16 pb-8 flex justify-center items-center flex-col">
                            <Image src={"/images/logoIcon.png"} width={300} height={300} className="mx-auto absolute -top-12 h-28 w-auto" alt="box" />
                            <form onSubmit={formhandler} action="" className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6">
                                <div className="">
                                    <label htmlFor="name" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">Name</label>
                                    <input value={data.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
                                        type="text" name="name" id="name" placeholder="Muhammad" className="remove-autocomplete-styles appearance-none placeholder:text-zinc-700 transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 text-white" />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">E-Mail</label>
                                    <input value={data.email} onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                                        type="email" name="Email" id="email" placeholder="abc@gmail.com" className="remove-autocomplete-styles text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-zinc-700" />
                                </div>
                                <div className="">
                                    <label htmlFor="number" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">Phone / Whatsapp Number</label>
                                    <input value={data.number} onChange={(e) => setData(prev => ({ ...prev, number: e.target.value }))}
                                        type="number" name="number" id="number" placeholder="0300 0000 000" className="remove-autocomplete-styles text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-zinc-700" />
                                </div>
                                <div className="">
                                    <p className="text-13 mt-1 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94 block">Project budget (USD)</p>
                                    <select onChange={(e) => setData(prev => ({ ...prev, budgetOption: e.target.value }))}
                                        value={data.budgetOption}
                                        id="countries" className="mt-2.5 bg-[#04040659] border border-[#41434D] text-sm rounded text-zinc-300 block w-full p-2.5">
                                        <option className="bg-black py-1 block" value="">Select</option>
                                        <option className="bg-black py-1 block" value="50">$50</option>
                                        <option className="bg-black py-1 block" value="100-200">$100 - $200</option>
                                        <option className="bg-black py-1 block" value="300-400">$300 - $400</option>
                                        <option className="bg-black py-1 block" value="500-600">$500 - $600</option>
                                        <option className="bg-black py-1 block" value="600-700">$600 - $700</option>
                                        <option className="bg-black py-1 block" value="custom">Custom</option>
                                    </select>
                                    {data.budgetOption === "custom" && (
                                        <input
                                            type="text"
                                            placeholder="Enter your budget"
                                            className="mt-2 w-full bg-[#04040659] border border-[#41434D] text-white p-2.5 rounded"
                                            onChange={(e) => setData(prev => ({ ...prev, customBudget: e.target.value }))}
                                        />
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">I’m interested in...</label>
                                    <div className="flex items-center mt-2 gap-4 flex-wrap">
                                        {
                                            Services.map((name, index) => (
                                                <p key={index} onClick={() => setServices({ ...services, [name.value]: !services[name.value] })} className={` ${services[name.value] ? "border-white bg-white/20" : "border-white/20 bg-white/5"} text-zinc-200 md:px-5 px-4 md:py-3 py-2 rounded-xl cursor-pointer hover:opacity-70 active:translate-y-0.5 transition-all duration-500 border `}>{name.name}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="md:col-span-2 col-span-1">
                                    <label htmlFor="help" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">Tell us more about your project</label>
                                    <textarea value={data.message} onChange={(e) => setData(prev => ({ ...prev, message: e.target.value }))} name="help" id="help" placeholder="Something about your great idea" className=" text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight rounded p-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-zinc-700" rows={6}></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">How did you find us?</label>
                                    <div className="flex items-center mt-2 gap-2 flex-wrap">
                                        {
                                            SocialMedia.map((name, index) => (
                                                <p key={index} onClick={() => setSocial({ ...social, [name.value]: !social[name.value] })} className={` ${social[name.value] ? "border-white bg-white/20" : "border-white/20 bg-white/5"} text-zinc-200 text-sm px-3 py-1 flex gap-1.5 rounded-full cursor-pointer hover:opacity-70 items-center active:translate-y-0.5 transition-all duration-500 border `}>{name.icon}
                                                    {name.name}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <button className="px-8 py-2.5 text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] md:col-span-2">Submit the Request</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </BodyWrapper>
    )
}

export default Page