import mongoose from "mongoose";
import dotenv from "dotenv";
import Technology from "../modules/technology/technology.model.js";
import {technologies} from "../utils/data.js"
dotenv.config();



const seedTechnologies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Optional: Clear existing data
    await Technology.deleteMany({});

    await Technology.insertMany(technologies);

    console.log("Technologies Seeded Successfully ✅");

    process.exit();
  } catch (error) {
    console.error("Seeding Failed ❌", error);
    process.exit(1);
  }
};

seedTechnologies();
