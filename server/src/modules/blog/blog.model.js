import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true, index: true },
        excerpt: { type: String, required: true },
        coverImage: { type: String, required: true },
        author: {
            name: String,
            avatar: String
        },
        category: { type: String, required: true, index: true },
        tags: [{ type: String }],
        content: [
            {
                heading: String,
                body: String
            }
        ],
        publishedAt: { type: Date, required: true, index: true }
    },
    { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);