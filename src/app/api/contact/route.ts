import mongooseConnection from "@/lib/mongodb";
import contact from "../../../../Models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        await mongooseConnection();

        const { name, email, number, message, budget, services, socialMedia } = await request.json();

        if (!name || !email || !number || !message || !budget || !services || !socialMedia) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }

        const newContact = await contact.create({
            name,
            email,
            number,
            message,
            budget,
            services,
            socialMedia,
        });

        return new Response(JSON.stringify({ success: true, contactId: newContact._id }), { status: 200 });

    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}

export async function GET() {
    try {
        await mongooseConnection();
        const contacts = await contact.find();
        return new Response(JSON.stringify(contacts), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {

        await mongooseConnection();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (id) {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
            }
            const deleted = await contact.findByIdAndDelete(id)
            if (!deleted) {
                return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
            }
            return NextResponse.json({ success: true, message: `Deleted Contact ${id}` }, { status: 200 });
        }

        await contact.deleteMany({});
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("API ERROR:", error.message);
        } else {
            console.error("API ERROR:", error);
        }
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }

}