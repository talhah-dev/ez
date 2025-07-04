import BodyWrapper from "@/app/BodyWrapper"
import Counter from "@/Components/Counter"
import Navbar from "@/Components/Navbar"
import ServicesCard from "@/Components/ServicesCard"
import SERVICES from "../../../Data/Services"
import Image from "next/image"

const servicesData = [
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/nextdotjs.svg",
        title: "Next Js",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/react.svg",
        title: "React Js",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack2.svg",
        image: "/stack/nodedotjs.svg",
        title: "Node Js",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack3.svg",
        image: "/stack/typescript.svg",
        title: "TypeScript",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/express.svg",
        title: "Express Js",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/docker.svg",
        title: "Docker",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack2.svg",
        image: "/stack/firebase.svg",
        title: "Firebase",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack3.svg",
        image: "/stack/javascript.svg",
        title: "JavaScript",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/mongodb.svg",
        title: "MongoDB",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/bootstrap.svg",
        title: "Bootstrap",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack2.svg",
        image: "/stack/c.svg",
        title: "C",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack3.svg",
        image: "/stack/clerk.svg",
        title: "Clerk",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/cloudinary.svg",
        title: "Cloudinary",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/cplusplus.svg",
        title: "C++",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack2.svg",
        image: "/stack/css.svg",
        title: "CSS",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack3.svg",
        image: "/stack/html5.png",
        title: "HTML",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/python.svg",
        title: "Python",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack1.svg",
        image: "/stack/tailwindcss.svg",
        title: "Tailwind CSS",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack2.svg",
        image: "/stack/threedotjs.svg",
        title: "Three Js",
        filter: "frontend",
    },
    {
        backgroundImage: "/images/stack3.svg",
        image: "/stack/zod.svg",
        title: "Zod",
        filter: "frontend",
    },
]

const Page = () => {

    return (
        <BodyWrapper>
            <div className="bg-[#040406]">
                <div className='bg-[url(/images/serviceBackground.svg)] bg-no-repeat w-full bg-center bg-cover'>
                    <Navbar />
                    <div className="overflow-hidden mt-10 md:mt-0  max-w-7xl mx-auto w-full  md:py-20 py-10 px-4">
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
            </div>

            <div className="md:mt-16 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:gap-y-20 max-w-7xl w-full mx-auto p-5">
                {
                    SERVICES.map(({ image, imageColor, title, description, link }, idx) => (
                        <ServicesCard key={idx} image={image} title={title} description={description} imageColor={imageColor} link={link} />
                    ))
                }
            </div>

            <div className="md:mt-28 mt-8 max-w-7xl w-full mx-auto p-5">
                <h2 className='md:text-5xl text-3xl text-center font-medium text-zinc-900'>Our Tech Stack</h2>
                <p className='text-zinc-600 md:mt-5 mt-3 text-center max-w-4xl mx-auto'>
                    Our tech stack includes the latest and most popular tools and frameworks, allowing us to deliver high-quality solutions that meet the needs of our clients
                </p>
                <div className="md:mt-16 mt-8 grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-1 max-w-7xl w-full mx-auto">

                    {
                        servicesData.map((item, index) => (
                            <div key={index} className="relative flex items-center justify-center">
                                <Image src={item.backgroundImage} width={500} className="w-full rounded-2xl" height={500} alt="stack" />
                                <Image src={item.image} width={500} className="w-full invert max-w-[45%] absolute" height={500} alt="stack" />

                                <div className="absolute md:bottom-3 bottom-1 md:left-5 left-2 md:font-medium text-white">
                                    {item.title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="md:mt-16 mt-8"></div>

        </BodyWrapper>
    )
}

export default Page