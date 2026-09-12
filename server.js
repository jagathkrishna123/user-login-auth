import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";


dotenv.config();


// Connect MongoDB
connectDB();


const app = express();


// Middleware
app.use(express.json());


// Routes
app.use("/api/users", userRoutes);

app.use("/api/profiles", profileRoutes);


// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});


// Port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});