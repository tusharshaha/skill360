import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

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

app.use(errorHandler);

export default app;
