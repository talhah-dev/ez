import Image from "next/image"
import Link from "next/link"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between h-24 text-white">
            <Link href={"/"}>
                <Image src={"/"} width={100} height={100} alt="Logo" />
            </Link>
            <ul className="md:flex hidden items-center justify-center gap-5">
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Home</Link></li>
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>About</Link></li>
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Portfolio</Link></li>
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Contact Us</Link></li>
            </ul>
            <button className="px-6 py-3 md:block hidden cursor-pointer transition-all duration-500 hover:opacity-80 rounded-full bg-[#25252d] font-medium">Get In Touch</button>
            <HiMiniBars3CenterLeft size={25} className="rotate-180 md:hidden text-zinc-200" />
        </div>
    )
}

export default Navbar