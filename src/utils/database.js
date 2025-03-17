import * as mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongoose is already conneted");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    isConnected = true;
    console.log("Mongoose is connected");
  } catch (error) {
    console.log(error.message);
  }
};
