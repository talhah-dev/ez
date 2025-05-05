"use client"
import { db } from "@/lib/firebase"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GoTrash } from "react-icons/go"
import { toast } from "react-toastify"

const Page = () => {

    type Client = {
        id: string;
        name: string;
        email: string;
        number: string;
        budget: number;
        message: string;
        services?: string[];
        socialMedia?: string[];
        createdAt?: {
            toDate: () => Date;
        };
    };


    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            const querySnapshot = await getDocs(collection(db, "clients"));
            const clientsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Client[];

            setClients(clientsData);
            setLoading(false);
        };

        fetchClients();
    }, []);


    const handleDelete = async (clientData: { id: string, name: string }) => {
        const confirmDelete = confirm("Are you sure you want to delete this client?");
        if (!confirmDelete) return;

        try {
            const client_Data = clientData.id;
            await deleteDoc(doc(db, "clients", client_Data));
            setClients(prev => prev.filter(client => client.id !== client_Data));
            toast.success(`${clientData.name} deleted successfully!`);

        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-7xl mx-auto md:p-5 p-3 md:mt-16 mt-8">

            <div className="flex items-center justify-between md:mb-8 mb-5">
                <div className="md:block hidden"></div>
                <h2 className="text-center font-medium md:text-4xl text-2xl text-zinc-800 ">Dashboard</h2>
                <button className="bg-red-600 font-medium transition-all duration-500 hover:bg-red-700 text-white px-4 md:py-2.5 py-2 rounded-lg cursor-pointer">Delete All</button>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {clients.map((client) => (
                    <div key={client.id} className="w-full md:p-7 p-4 border-zinc-300 border rounded-lg">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-zinc-500">date: {client.createdAt?.toDate().toLocaleDateString()}</p>
                            <button
                                onClick={() => handleDelete(client)}
                                className="bg-zinc-100 p-2 text-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-500"
                            >
                                <GoTrash />
                            </button>
                        </div>

                        <p className="text-sm text-zinc-500 mt-4">User ID:
                            <span className="text-[16px] font-medium text-zinc-800 md:pl-1"> {client.id}</span>
                        </p>
                        <p className="text-sm mt-5 text-zinc-500">Name:
                            <span className="text-[16px] font-medium text-zinc-800 md:pl-1"> {client.name}</span>
                        </p>

                        <Link href={`mailto:${client.email}`} className="text-sm text-zinc-500 block mt-5">
                            E-Mail:
                            <span className="text-[16px] font-medium text-zinc-800 md:pl-1 hover:underline"> {client.email}</span>
                        </Link>

                        <Link href={`tel:${client.number}`} className="text-sm text-zinc-500 block mt-5">
                            Phone Number:
                            <span className="text-[16px] font-medium text-zinc-800 md:pl-1 hover:underline"> {client.number}</span>
                        </Link>

                        <p className="text-sm mt-5 text-zinc-500">Project budget:
                            <span className="text-[16px] font-medium text-zinc-800 md:pl-1"> $ {client.budget}</span>
                        </p>

                        <p className="text-sm gap-y-3 gap-1 flex flex-wrap mt-5 text-zinc-500">Services:
                            {client.services?.map((service: string, index: number) => (
                                <span key={index} className="text-[16px] font-medium text-zinc-800 bg-zinc-100 md:ml-1 px-3 block rounded-full">
                                    {service}
                                </span>
                            ))}
                        </p>

                        <p className="text-sm gap-y-3 gap-1 flex flex-wrap mt-5 text-zinc-500">Project Detail:</p>
                        <textarea
                            readOnly
                            defaultValue={client.message}
                            className="p-2 text-zinc-700 rounded-lg border outline-0 w-full border-zinc-400 mt-2"
                        />

                        <p className="text-sm gap-y-3 gap-1 flex flex-wrap mt-5 text-zinc-500">I&apos;m coming from:
                            {client.socialMedia?.map((media: string, index: number) => (
                                <span key={index} className="text-[16px] font-medium text-zinc-800 bg-zinc-100 md:ml-1 px-3 block rounded-full">
                                    {media}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page;
