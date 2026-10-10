import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose.set("sanitizeFilter", true);

  await mongoose.connect(env.MONGO_URI, {
    serverSelectionTimeoutMS: 10_000,
  });

  console.log("MongoDB Connected");
};
