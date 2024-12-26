import app from "./app";
import "colors"
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;

const server = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`.bgYellow);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

server();
