import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import technologyRoutes from "./modules/technology/technology.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";

const app = express();

// Security
app.use(helmet());

// Compression
app.use(compression());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (IMPORTANT FIX)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
// Routes
app.use("/api/technologies", technologyRoutes);
app.use("/api/blogs", blogRoutes);

export default app;
