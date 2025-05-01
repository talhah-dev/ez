import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface ServicesCardProps {
    image: string,
    title: string,
    description: string,
    link: string,
    imageColor: string,
}

const ServicesCard: React.FC<ServicesCardProps> = ({ image, title, description, link, imageColor }) => {
    return (
        <div>
            <div className="w-full flex flex-col items-start">
                <Image
                    src={image}
                    width={100}
                    height={100}
                    className="h-14 w-auto rounded-full"
                    style={{ filter: `drop-shadow(0 4px 6px ${imageColor})` }}
                    alt={title}
                />
                <h2 className="text-xl font-medium mt-6 text-[#17183b]">{title}</h2>
                <p className="mt-3 text-zinc-600">{description}</p>
                <div className="flex">
                    <Link href={link} className='text-zinc-700 font-medium mt-3 text-[15px] flex items-center gap-1 transition-all duration-500 hover:gap-2 hover:opacity-80'>Get Started <IoIosArrowForward size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard