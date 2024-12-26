import cors from "cors";
import express from "express";
import helmet from "helmet";
import dbConnect from "./config/db.config.mjs";
import handleError from "./middleware/error-handler.mjs";
import 'dotenv/config'


const app = express();

// database connection 
dbConnect();

app.use(express.json());
app.use(cors());
app.use(helmet());

// routes

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "No route found!",
  });
});

app.use(handleError);

export default app;