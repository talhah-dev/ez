import BodyWrapper from "@/app/BodyWrapper"
import Clients from "@/Components/Clients"
import Counter from "@/Components/Counter"
import Navbar from "@/Components/Navbar"
import ServicesCard from "@/Components/ServicesCard"
import SERVICES from "../../../Data/Services"
import Image from "next/image"

const page = () => {
    return (
        <BodyWrapper>
            <div className='bg-[url(/images/serviceBackground.svg)] bg-no-repeat w-full bg-center bg-cover'>
                <Navbar />
                <div className="overflow-hidden mt-10 md:mt-0  max-w-7xl mx-auto w-full  md:py-20 py-10">
                    <div className="flex max-w-4xl mx-auto w-full items-center justify-center text-center">
                        <div className="">
                            <h1 className='md:text-5xl text-4xl leading-tight font-medium text-white'>Our Professional Services
                            </h1>
                            <p className='text-[#ABAEBB] md:mt-5 mt-3 md:text-lg'>We can assist you to grow your company to new heights with our tailored solutions. We combine extensive knowledge of the business with committed excellence to provide services</p>
                        </div>
                    </div>
                    <div className="md:mt-16 mt-10 text-[#a2a4ac]">
                        <Counter />
                    </div>
                </div>
            </div>

            <div className="md:mt-16 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:gap-y-20 max-w-7xl w-full mx-auto p-5">
                {
                    SERVICES.map(({ image, imageColor, title, description, link }, idx) => (
                        <ServicesCard key={idx} image={image} title={title} description={description} imageColor={imageColor} link={link} />
                    ))
                }
            </div>

            <div className="md:mt-20 mt-8 w-full mx-auto md:p-5 p-3 bg-[#18181a79]">
                <Clients />
            </div>

            <div className="md:mt-20 mt-8 max-w-7xl w-full mx-auto p-5">
                <h2 className='md:text-5xl text-3xl text-center font-medium text-zinc-900'>Our Tech Stack</h2>
                <p className='text-zinc-600 md:mt-5 mt-3 text-center max-w-4xl mx-auto'>
                    Our tech stack includes the latest and most popular tools and frameworks, allowing us to deliver high-quality solutions that meet the needs of our clients
                </p>
                <div className="md:mt-16 mt-8 grid md:grid-cols-4 grid-cols-2 gap-2 max-w-7xl w-full mx-auto">
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack1.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/react.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            React Js
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack1.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/nextjs.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            Next Js
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack2.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/typescript.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            TypeScript
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack3.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/node.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            Node Js
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack2.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/mongoose.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            Mongo DB
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack3.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/javascript.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            Javascript
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack1.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/firebase.webp"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            Firebase
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src={"/images/stack1.svg"} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                        <Image src={"/stack/tailwind_css.png"} width={500} className="w-full max-w-1/2 absolute" height={500} alt="stack" />

                        <div className="absolute md:bottom-5 bottom-1 md:left-6 left-2 md:font-medium text-white">
                            Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    )
}

export default page