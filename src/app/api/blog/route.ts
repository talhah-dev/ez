import mongooseConnection from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import blogModel from '../../../../Models/blog'

export async function POST(req: NextRequest) {
    try {
        await mongooseConnection()
        const { title, description, imageUrl } = await req.json()

        if (!title || !description || !imageUrl) {
            return NextResponse.json({ message: "Please fill in all fields" }, { status: 400, })
        }

        const newPost = new blogModel({
            title,
            description,
            imageUrl
        })

        await newPost.save()

        return NextResponse.json({ message: "Blog post created successfully" }, { status: 201, })
    } catch {
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}

export async function GET(request: Request) {
    try {
        await mongooseConnection();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (id) {
            const blog = await blogModel.findById(id);
            if (!blog) {
                return NextResponse.json({ message: "Blog post not found" }, {
                    status: 404
                });
            }
            return NextResponse.json(blog, { status: 200 });
        } else {
            const posts = await blogModel.find();
            return NextResponse.json(posts, { status: 200 });
        }

    } catch {
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {

        await mongooseConnection();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Please provide a valid id" }, {
                status:
                    400
            });
        }

        const blog = await blogModel.findByIdAndDelete(id);
        if (!blog) {
            return NextResponse.json({ message: "Blog post not found" }, {
                status: 404
            });
        }
        return NextResponse.json({ message: "Blog Deleted successfully" }, { status: 200 });

    } catch {
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}