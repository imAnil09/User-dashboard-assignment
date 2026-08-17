import "dotenv/config";
import express from 'express'
import cors from "cors";

import connectDatabase from "./config/database.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("User Management API is Running");
})

const startServer = async () => {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();