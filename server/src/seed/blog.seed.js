import dotenv from "dotenv";
import mongoose from "mongoose";
import {connectDB} from "../config/db.js";
import Blog from "../modules/blog/blog.model.js";
import { blogs } from "../utils/data.js";

dotenv.config();

const seedBlogs = async () => {
  try {
    await connectDB();

    console.log("Seeding started...");

    // OPTIONAL: Clear old blogs
    await Blog.deleteMany({});
    console.log("Old blogs removed");

    await Blog.insertMany(blogs);

    console.log("Blogs seeded successfully ✅");

    process.exit();
  } catch (error) {
    console.error("Seeding failed ❌", error);
    process.exit(1);
  }
};

seedBlogs();