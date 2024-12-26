import app from "./app.mjs";
import "colors"

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
