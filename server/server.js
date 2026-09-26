import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import clientsRouter from "./routes/router.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Backend running");
});

// Router Mounting
app.use("/", clientsRouter);

const PORT = process.env.PORT || 5000;

connectToDB();
export default app;
