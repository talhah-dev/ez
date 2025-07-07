'use client'

import BodyWrapper from '@/app/BodyWrapper'
import Navbar from '@/Components/Navbar'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BlogPostData } from '../../../../../types/contact'
import axios from 'axios'
import { useParams } from 'next/navigation'

const Page = () => {

  const params = useParams()

  const [blogPost, setBlogPost] = useState<BlogPostData | null>(null)

  const fetchBlogPost = async () => {
    try {
      const response = await axios.get(`/api/blog`, {
        params: {
          id: params.id
        }
      })
      setBlogPost(response.data)
    } catch (error) {
      console.error('Error fetching blog post:', error)
    }
  }

  useEffect(() => {
    fetchBlogPost()
  }, [])

  if (!blogPost) return;

  return (
    <BodyWrapper>
      <div className="bg-[#040406]">
        <div className='bg-[url(/images/serviceBackground.svg)] md:pb-20 pb-12 bg-no-repeat w-full bg-center bg-cover'>
          <Navbar />
          <div className="max-w-7xl mx-auto p-5 md:mt-16 mt-8">
            <Link
              href="/blog"
              className='flex items-center gap-2 text-zinc-400 text-lg transition-all duration-500 hover:text-white mb-5'
            >
              <IoIosArrowForward className='rotate-180' size={18} />
              Back
            </Link>

            {/* Image */}
            {blogPost.imageUrl && (
              <Image
                src={blogPost.imageUrl}
                width={800}
                height={400}
                className="w-full rounded-2xl object-cover"
                alt={blogPost.title}
              />
            )}

            {/* Title */}
            <h2 className='text-zinc-100 md:text-4xl font-medium mt-10 text-2xl'>
              {blogPost.title}
            </h2>

            {/* Description */}
            <div className='text-zinc-300 mt-5 text-lg' dangerouslySetInnerHTML={{ __html: blogPost.description }}></div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}

export default Page
