import Image from "next/image"
import Link from "next/link"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className="max-w-7xl p-5 w-full mx-auto flex items-center justify-between md:h-24 h-20 text-white">
            <Link href={"/"}>
                <Image src={"/images/logo.png"} width={200} height={200} className="w-full md:h-10 h-8" alt="Logo" />
            </Link>
            <ul className="md:flex hidden items-center justify-center gap-8">
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Home</Link></li>
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>About</Link></li>
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Portfolio</Link></li>
                <li><Link className="transition-all duration-500 hover:opacity-80" href={"/"}>Contact Us</Link></li>
            </ul>
            <button className="px-6 py-3 navBtn md:block hidden cursor-pointer transition-all duration-500 hover:opacity-80 rounded-full bg-[#191a20] font-medium">Get In Touch</button>
            <HiMiniBars3CenterLeft size={25} className="rotate-180 md:hidden text-zinc-200" />
        </div>
    )
}

export default Navbar