import mongooseConnection from "@/lib/mongodb";
import { NextResponse } from "next/server";
import EmailModel from "../../../../Models/email";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        await mongooseConnection();
        const { email } = await request.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
        }

        const findEmail = await EmailModel.findOne({ email });
        if (findEmail) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
        }

        await EmailModel.create({ email });
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

export async function GET() {
    try {
        await mongooseConnection();
        const emails = await EmailModel.find().sort({ createdAt: -1 });
        return NextResponse.json(emails, { status: 200 }); // Always return 200, even if empty
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("API ERROR:", error.message);
        } else {
            console.error("API ERROR:", error);
        }
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        await mongooseConnection();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {

            // Optional: validate ObjectId format
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
            }
            const deleted = await EmailModel.findByIdAndDelete(id);
            if (!deleted) {
                return NextResponse.json({ error: 'Email not found' }, { status: 404 });
            }
            return NextResponse.json({ success: true, message: `Deleted email ${id}` }, { status: 200 });
        }

        await EmailModel.deleteMany({});
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