import express from "express";
import cors from "cors";
import { config } from "dotenv";

const app = express();

config({
    path: "./.env"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("The server is working");
});

import userRoutes from './routes/userRoute.js';

app.use('/worko', userRoutes);

export default app;
