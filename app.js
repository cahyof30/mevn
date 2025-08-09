import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./router/authRouter.js"; // Import the auth router
import cookieParser from "cookie-parser";
import morgan from "morgan";
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
if(process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Pesan dari Endpoint Express",
  });
});
// Parent Router

app.use('/api/v1/auth', authRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// CONNECTION
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database Connect!");
});
