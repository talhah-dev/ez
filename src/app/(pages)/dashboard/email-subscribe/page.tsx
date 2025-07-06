"use client"
import DashboardWrapper from '@/Components/Dashboard/DashboardWrapper'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GoTrash } from 'react-icons/go';
import { toast } from 'react-toastify';

const Page = () => {

    type EmailItem = {
        email: string;
        createdAt: string;
        _id: string
    };

    const [emails, setEmails] = useState<EmailItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch emails from the API
    const fetchEmails = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/email');
            setEmails(response.data); // success case
        } catch (error: any) {
            // ✅ Handle 404 differently from other errors
            if (error.response && error.response.status === 404) {
                setEmails([]); // Treat 404 as empty list
            } else {
                toast.error("Failed to fetch emails"); // Other errors
            }
        } finally {
            setLoading(false);
        }
    };



    const deleteEmails = async (id?: string) => {

        if (emails.length == 0) {
            return toast.error("No Email Found");
        }

        if (!window.confirm(id ? "Are you sure you want to delete this email?" : "Are you sure you want to delete all emails?")) {
            return;
        }

        try {
            let response;

            if (id) {
                // Delete single email by ID
                response = await axios.delete(`/api/email?id=${id}`);
                if (response.status === 200) {
                    setEmails(prevEmails => prevEmails.filter(email => email._id !== id));
                    toast.success("Email deleted successfully");
                } else {
                    toast.error("Failed to delete email");
                }
            } else {
                // Delete all emails
                response = await axios.delete('/api/email');
                if (response.status === 200) {
                    setEmails([]);
                    toast.success("All emails deleted successfully");
                } else {
                    toast.error("Failed to delete emails");
                }
            }
        } catch (error: any) {
            console.error("Error deleting emails:", error.response?.data || error.message);
            toast.error("Failed to delete emails");
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <DashboardWrapper>
            <div className="max-w-7xl mx-auto md:p-5 p-3 md:mt-16 mt-8">
                <div className="flex items-center justify-between md:mb-8 mb-5">
                    <h2 className="text-center font-medium md:text-4xl text-2xl text-zinc-800 ">User Emails</h2>
                    <button onClick={() => deleteEmails()} className="bg-red-600 font-medium transition-all duration-500 hover:bg-red-700 text-white px-4 md:py-2.5 py-2 rounded-lg cursor-pointer">Delete All</button>
                </div>

                <div className="">
                    <table className="w-full text-left border-collapse rounded-t-2xl overflow-hidden ">
                        <thead className='rounded-t-2xl overflow-hidden'>
                            <tr className="bg-zinc-100 rounded-t-2xl overflow-hidden" >
                                <th className="p-5 font-medium border-zinc-300 border-b">Email</th>
                                <th className="p-5 font-medium border-zinc-300 border-b">Date</th>
                                <th className="p-5 font-medium border-zinc-300 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? (
                                    <tr>
                                        <td className="text-zinc-500 p-5 text-center" colSpan={3}>
                                            Loading...
                                        </td>
                                    </tr>
                                ) : emails.length === 0 ? (
                                    <tr>
                                        <td className="text-zinc-500 p-5 text-center" colSpan={3}>
                                            No messages found
                                        </td>
                                    </tr>
                                ) : (
                                    emails.map((emailObj, index) => (
                                        <tr key={index}>
                                            <td className="p-5 border-zinc-300 border-b">
                                                <Link className='hover:underline' href={`mailto:${emailObj.email}`}>
                                                    {emailObj.email}
                                                </Link>
                                            </td>
                                            <td className="p-5 border-zinc-300 border-b">
                                                {new Date(emailObj.createdAt).toLocaleString("en-US")}
                                            </td>
                                            <td className="p-5 border-zinc-300 border-b">
                                                <button onClick={() => deleteEmails(emailObj._id)}
                                                    className="bg-zinc-100 p-2 text-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-500"
                                                >
                                                    <GoTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>

        </DashboardWrapper >
    )
}

export default Page