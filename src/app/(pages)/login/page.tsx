"use client"
import { setCookie } from "cookies-next"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

const Page = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("All Fields are required!")
            return;
        }

        if (email === "ezbrandbuilders@gmail.com" && password === "cs18513") {
            setCookie("isLoggedIn", "true", { path: "/" }) // 🍪 set cookie
            toast.success("Login successful!");
            // Optional redirect
            window.location.href = "/dashboard";
        } else {
            toast.error("Invalid email or password!");
        }
    }

    return (
        <div>
            <div className="w-full flex ">
                <div className="max-w-1/2 bg-[url(/images/home_bg.svg)] lg:block hidden min-h-screen bg-no-repeat bg-center bg-cover relative bg-[#18181b] w-full">
                    <div className="min-h-screen hidden w-full p-5 lg:flex flex-col justify-between">
                        <Link href={"/"}>
                            <Image src={"/images/logo.png"} width={200} height={200} className="w-auto md:h-10 h-8" alt="Logo" />
                        </Link>
                        <p className="text-zinc-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit molestiae iusto odio officiis hic aperiam consectetur? Accusamus, molestias. In nisi aperiam enim maxime tempore dolore voluptates tenetur incidunt animi ex.</p>
                    </div>
                </div>
                <div className="lg:max-w-1/2 p-5 relative w-full bg-[#e5e5e6] min-h-screen flex items-center justify-center">
                    <Link href={"/signin"} className=" text-zinc-800 absolute md:top-8 top-5 md:right-8 right-5">Sign In</Link>
                    <form onSubmit={loginHandler} className="text-center max-w-sm w-full">
                        <h2 className="text-zinc-800 font-medium text-2xl capitalize">Welcome Back 👋</h2>
                        <p className="text-zinc-800 mt-1">Please sign in to continue!</p>
                        <label htmlFor="email" className="text-start block text-sm mt-5 text-zinc-800 font-medium">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="name@gmail.com" className="border placeholder:text-sm outline-zinc-500 mt-1 rounded-lg border-zinc-400 w-full px-3 py-2" />
                        <label htmlFor="password" className="text-start block text-sm mt-4 text-zinc-800 font-medium">Your Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Your Password" className="border placeholder:text-sm outline-zinc-500 mt-1 rounded-lg border-zinc-400 w-full px-3 py-2" />
                        <button className="bg-[#18181b] w-full p-2.5 mt-4 transition-all duration-500 hover:opacity-80 cursor-pointer text-center text-zinc-100 rounded-lg ">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page