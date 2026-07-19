import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import technologyRoutes from "./modules/technology/technology.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js"
import dotenv from "dotenv";

 // Enable Env Variables 
dotenv.config();

 // Run Express
const app = express();

// Security
app.use(helmet());

// Compression
app.use(compression());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS ( FE <-> BE )

app.use(cors({
  origin: process.env.FRONT_END_URI,
  credentials: true
}));

// Routes
app.use("/api/technologies", technologyRoutes);
app.use("/api/blogs", blogRoutes);

export default app;
