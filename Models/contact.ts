// models/Contact.ts
import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email: string;
    number: string;
    message: string;
    budget: string;
    services: string[];
    socialMedia: string[];
    createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        number: { type: String, required: true },
        message: { type: String, required: true },
        budget: { type: String, required: true },
        services: { type: [String], required: true },
        socialMedia: { type: [String], required: true },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);

export default models.Contact || model<IContact>('Contact', ContactSchema);
