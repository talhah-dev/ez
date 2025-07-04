import mongooseConnection from "@/lib/mongodb";
import contact from "../../../../Models/contact";

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
