import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./libs/db.js";
import authRoutes from "./routes/authRoutes.js";
import pokedexRoutes from "./routes/pokedexRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { protectedRoute } from "./middlewares/authMiddleware.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
//Public Routes
app.use("/api/auth", authRoutes);
app.use("/api/pokedex", pokedexRoutes);
//Private Routes
app.use(protectedRoute);
app.use("/api/user", userRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
