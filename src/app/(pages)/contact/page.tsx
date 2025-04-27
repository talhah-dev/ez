import BodyWrapper from "@/app/BodyWrapper"
import Navbar from "@/Components/Navbar"
import Image from "next/image"

const page = () => {
    return (
        <BodyWrapper>
            <div className='bg-[#040406] min-h-screen bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <Image src={"/images/box.svg"} width={1000} height={1000} className="absolute top-0 right-0 w-1/4" alt="box" />

                <div className="max-w-7xl w-full md:py-20 py-10 mx-auto md:p-5 p-4 min-h-[calc(100vh-7rem)] flex items-start justify-between md:gap-10 gap-20 md:flex-row flex-col">

                    <div className="md:max-w-1/2 w-full md:mt-5 md:text-start text-center ">
                        <h2 className="text-zinc-200 font-medium md:text-5xl text-4xl">Contact Us</h2>
                        <p className="text-zinc-200 md:text-lg mt-2">We’re here to answer your questions.</p>
                    </div>
                    <div className="md:max-w-1/2 w-full">
                        <div className="relative rounded-2xl md:px-8 px-4  bg-[#0B0C0E] pt-16 pb-8 flex justify-center items-center flex-col">
                            <Image src={"/images/logoIcon.png"} width={300} height={300} className="mx-auto absolute -top-12 h-28 w-auto" alt="box" />
                            <form action="" className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6">
                                <div className="">
                                    <label htmlFor="name" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Muhammad" className="remove-autocomplete-styles appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 text-white placeholder:text-[#8A8C99]" />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">E-Mail</label>
                                    <input type="email" name="Email" id="email" placeholder="abc@gmail.com" className="remove-autocomplete-styles text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-[#8A8C99]" />
                                </div>
                                <div className="">
                                    <label htmlFor="number" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">Phone / Whatsapp Number</label>
                                    <input type="number" name="number" id="number" placeholder="0300 0000 000" className="remove-autocomplete-styles text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-[#8A8C99]" />
                                </div>
                                <div className="">
                                    <label htmlFor="find" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">How did you find us?</label>
                                    <input type="text" name="find" id="find" placeholder="Insta / Facebook / Friend" className="remove-autocomplete-styles text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight h-11 rounded px-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-[#8A8C99]" />
                                </div>
                                <div className="md:col-span-2 col-span-1">
                                    <label htmlFor="help" className="text-13 text-zinc-300 text-sm font-medium leading-none tracking-tight text-gray-94">How can we help?</label>
                                    <textarea name="help" id="help" placeholder="Your Message..." className=" text-white appearance-none  transition-colors duration-200 focus:outline-none mt-1 bg-[#04040659] w-full border tracking-tight placeholder:tracking-tight rounded p-3 border-[#41434D] hover:border-[#707280] focus:border-[#A3A6B2] text-gray-94 placeholder:text-[#8A8C99]" rows={6}></textarea>
                                </div>
                                <button className="px-8 py-2.5 text-zinc-200 bt cursor-pointer w-full md:w-auto transition-all duration-500 hover:opacity-80 rounded-full border border-[#f1a274] md:col-span-2">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </BodyWrapper>
    )
}

export default page