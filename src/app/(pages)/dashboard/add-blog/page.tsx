"use client"
import DashboardWrapper from '@/Components/Dashboard/DashboardWrapper'
// import RichTextEditor from '@/Components/TextEditor/RichTextEditor'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!title || !description || !imageUrl) {
            toast.error('Please fill in all fields')
            return
        }

        const payload = { title, description, imageUrl };

        const response = await axios.post('/api/blog', payload);
        try {
            if (response.status === 201) {
                toast.success('Blog post created successfully')
                setTitle('')
                setDescription('')
                setImageUrl('')
            }
        } catch {
            toast.error('Error creating blog post')
        }

    }


    return (
        <DashboardWrapper>
            <div className="max-w-7xl mx-auto md:p-5 p-3 md:mt-16 mt-8">
                <div className="md:mb-8 mb-5">
                    <h2 className="text-center font-medium md:text-4xl text-2xl text-zinc-800 ">Add Blog</h2>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image Url <Link href={"https://console.cloudinary.com/"} target='_blank' className='text-blue-500 underline'>Upload Image</Link></label>
                            <input
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">desc <Link href={"https://react-rte.org/demo"} target='_blank' className='text-blue-500 underline'>Text Editor</Link></label>
                            <textarea rows={9}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Description</label>
                            <RichTextEditor content={description} onChange={setDescription} />
                        </div> */}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-black w-full text-white p-4 font-medium rounded-md hover:opacity-75  transition-all duration-500 cursor-pointer"
                            >
                                Publish Blog
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </DashboardWrapper>
    )
}

export default Page