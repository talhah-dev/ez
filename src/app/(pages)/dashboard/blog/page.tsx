"use client"
import DashboardWrapper from '@/Components/Dashboard/DashboardWrapper'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BlogPostData } from '../../../../../types/contact'
import { GoTrash } from 'react-icons/go'
import { toast } from 'react-toastify'

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

  const deleteHandler = async (id: string) => {

    if (!window.confirm("Are you sure you want to delete this Blog?")) {
      return;
    }

    const response = await axios.delete(`/api/blog?id=${id}`);
    if (response.status === 200) {
      setBlogPost(blogPost.filter((blogPost) =>
        blogPost._id !== id
      ));
      toast.success("Blog deleted successfully");
    } else {
      toast.error("Failed to delete Blog");
    }
  }

  return (
    <DashboardWrapper>
      <div className="max-w-7xl mx-auto md:p-5 p-3 md:mt-16 mt-8">
        <div className="flex items-center justify-between md:mb-20 mb-5">
          <h2 className="text-center font-medium md:text-4xl text-2xl text-zinc-800 ">All Blogs</h2>
          <Link href={"/dashboard/add-blog"} className="bg-black font-medium transition-all duration-500 hover:opacity-75 text-white px-4 md:py-2.5 py-2 rounded-lg cursor-pointer"> + Create Blog</Link>
        </div>

        {
          blogPost.map((item, index) => (
            <div key={index} className="flex border-b border-zinc-300 py-6 items-start gap-5">
              <button onClick={() => deleteHandler(item._id!)}
                className="bg-zinc-100 p-2 text-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-500"
              >
                <GoTrash />
              </button>
              <div className="w-60 ">
                <Image src={item.imageUrl} className='rounded-lg shrink-0 w-60 h-32 object-cover' width={200} height={200} alt='blog image' />
              </div>
              <div className="">
                <h2 className='font-medium text-zinc-800 text-lg'>{item.title}</h2>
                <p className='text-zinc-600 mt-1 line-clamp-2 max-w-4xl w-full'>{item.description}</p>
              </div>
            </div>
          ))
        }

      </div>
    </DashboardWrapper>
  )
}

export default Page