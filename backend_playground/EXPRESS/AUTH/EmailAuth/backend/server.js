import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());  // Allow frontend requests

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Successfully connected to MongoDB");
        
        // ✅ Start Server
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("❌ Database connection error:", error.message);
        process.exit(1);  // Exit process if DB connection fails
    }
};

connectDB();

// ✅ Global Error Handler this shit came from chatGPT, i dont't know about it
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

// my request handler
app.use(userRouter);
