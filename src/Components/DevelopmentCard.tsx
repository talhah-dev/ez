import Image from "next/image"

interface DevelopmentCardProp {
    image: string,
    title: string,
    description: string
}
const DevelopmentCard: React.FC<DevelopmentCardProp> = ({ image, title, description }) => {
    return (
        <div className="w-full relative flex justify-end overflow-hidden flex-col">
            <Image src={image} className="rounded-xl min-h-76 object-cover -z-10 w-full h-full object-top" alt="developemnt card 1" width={1000} height={1000} />
            <div className=" absolute md:p-5 p-3">
                <h3 className="font-medium text-zinc-200 md:text-xl mb-1">{title}</h3>
                <p className="text-zinc-300 md:text-[16px] text-sm">{description}</p>
            </div>
        </div>
    )
}

export default DevelopmentCard