import mongoose, { Document } from 'mongoose';

export interface IEmail extends Document {
    email: string;
}

const EmailSchema = new mongoose.Schema<IEmail>({
    email: { type: String, required: true, unique: true }
}, {
    timestamps: { createdAt: true, updatedAt: false }
})

export default mongoose.models.Email || mongoose.model<IEmail>('Email', EmailSchema);