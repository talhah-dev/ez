"use client"
import BodyWrapper from '@/app/BodyWrapper'
import Navbar from '@/Components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { TextEffectThree } from 'react-text-animate'
import { BlogPostData } from '../../../../types/contact'
import axios from 'axios'

const Page = () => {

    const [blogPost, setBlogPost] = useState<BlogPostData[]>([]);

    const fetchBlogPost = async () => {
        try {
            const response = await axios.get('/api/blog');
            setBlogPost(response.data);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    };

    useEffect(() => {
        fetchBlogPost();
    }, []);

    const data = "<p> hello world <br> my first program  </p>"

    return (
        <BodyWrapper>
            <div className="bg-[#040406]">
                <div className='bg-[url(/images/serviceBackground.svg)] md:pb-20 pb-12 bg-no-repeat w-full bg-center bg-cover'>
                    <Navbar />
                    <div className="text-white" ></div>
                    <div className="max-w-7xl mx-auto p-5 md:mt-16 mt-8">
                        <h2 className='text-zinc-100 md:text-5xl font-medium mt-6 text-2xl'>Blogs</h2>
                        <p className='text-zinc-300 mt-3 text-lg'>Get the latest news and updates from the Invertase team.</p>
                    </div>
                    <div className="max-w-7xl gap-x-10 gap-y-14 w-full mx-auto p-5 md:mt-12 mt-7 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {
                            blogPost.map((item, index) => (
                                <div key={index} className="w-full">
                                    <Image src={item.imageUrl} height={300} width={400} className='w-full md:h-72 rounded-xl object-cover' alt='blog image' />
                                    <data value={"23"} className='text-sm text-zinc-400 mt-2.5 block'>{"22 feb"}</data>
                                    <h2 className='text-zinc-200 font-medium mt-5 text-2xl line-clamp-2'>{item.title}</h2>
                                    <p className='text-zinc-400 mt-3 line-clamp-3' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                    <Link href={`/blog/${item._id}`} className='text-zinc-300 flex items-center gap-1 transition-all mt-7 duration-500 hover:opacity-80'>
                                        <TextEffectThree animationDuration={0.2} className='text-zinc-200' text="Read More" />
                                        <IoIosArrowForward size={18} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </BodyWrapper>
    )
}

export default Page