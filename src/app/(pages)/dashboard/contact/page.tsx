"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GoTrash } from "react-icons/go"
import { toast } from "react-toastify"
import DashboardWrapper from "@/Components/Dashboard/DashboardWrapper"
import axios from "axios"
import { ContactFormData } from "../../../../../types/contact"

const Page = () => {

    const [clients, setClients] = useState<ContactFormData[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch clients data from the API
    const fetchContacts = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/contact");
            setClients(response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Failed to fetch contacts");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchContacts();
    }, []);


    // const handleDelete = () => {

    // };

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <DashboardWrapper>
            <div className="max-w-7xl mx-auto md:p-5 p-3 md:mt-16 mt-8">
                <div className="flex items-center justify-between md:mb-8 mb-5">
                    <h2 className="text-center font-medium md:text-4xl text-2xl text-zinc-800 ">Contact Messages</h2>
                    <button className="bg-red-600 font-medium transition-all duration-500 hover:bg-red-700 text-white px-4 md:py-2.5 py-2 rounded-lg cursor-pointer">Delete All</button>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        clients.map((item, index) => (
                            <div key={index} className="w-full md:p-7 p-4 border-zinc-300 border rounded-lg">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-zinc-500">date: 123</p>
                                    <button
                                        className="bg-zinc-100 p-2 text-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-500"
                                    >
                                        <GoTrash />
                                    </button>
                                </div>

                                <p className="text-sm mt-5 text-zinc-500">Name:
                                    <span className="text-[16px] font-medium text-zinc-800 md:pl-1">{item.name}</span>
                                </p>

                                <Link href={`mailto:${item.email}`} className="text-sm text-zinc-500 block mt-5">
                                    E-Mail:
                                    <span className="text-[16px] font-medium text-zinc-800 md:pl-1 hover:underline"> {item.email}</span>
                                </Link>

                                <Link href={`tel:${item.number}`} className="text-sm text-zinc-500 block mt-5">
                                    Phone Number:
                                    <span className="text-[16px] font-medium text-zinc-800 md:pl-1 hover:underline"> {item.number}</span>
                                </Link>

                                <p className="text-sm mt-5 text-zinc-500">Project budget:
                                    <span className="text-[16px] font-medium text-zinc-800 md:pl-1"> ${item.budget}</span>
                                </p>

                                <p className="text-sm gap-y-3 gap-1 flex flex-wrap mt-5 text-zinc-500">Services:
                                    {
                                        item.services.map((subItem, subIndex) => (
                                            <span key={subIndex} className="text-[16px] font-medium text-zinc-800 bg-zinc-100 md:ml-1 px-3 block rounded-full">
                                                {subItem}
                                            </span>
                                        ))
                                    }
                                </p>

                                <p className="text-sm gap-y-3 gap-1 flex flex-wrap mt-5 text-zinc-500">Project Detail:</p>
                                <textarea
                                    readOnly
                                    defaultValue={item.message}
                                    className="p-2 text-zinc-700 rounded-lg border outline-0 w-full border-zinc-400 mt-2"
                                />

                                <p className="text-sm gap-y-3 gap-1 flex flex-wrap mt-5 text-zinc-500">I&apos;m coming from:
                                    <span className="text-[16px] font-medium text-zinc-800 bg-zinc-100 md:ml-1 px-3 block rounded-full">
                                        {item.socialMedia}
                                    </span>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </DashboardWrapper>
    )
}

export default Page;
