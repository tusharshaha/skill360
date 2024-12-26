import * as mongoose from "mongoose";

const dbConnect = async () =>
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log("Database Connected".bgGreen))
    .catch((err) => console.log("Database Connection Falied".bgRed));

export default dbConnect;
