import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Pesan dari Entpoint Express",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// CONNECTION
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database Connect!");
});
