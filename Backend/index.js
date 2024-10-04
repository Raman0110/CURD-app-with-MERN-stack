import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRoute.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/students", studentRouter);

mongoose.connect("mongodb://localhost:27017/ramandb")
  .then(() => {
    console.log("Database Connection Successful");
    app.listen(8000, (req, res) => {
      console.log('server running');
    })
  })
  .catch((error) => {
    console.log(error.message);
  })