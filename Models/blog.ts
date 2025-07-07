import mongoose, { Document, Model } from "mongoose";

export interface IBlog extends Document {
    title: string;
    description: string;
    imageUrl: string
}

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
}, {
    timestamps: true
})

const blogModel: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default blogModel;
