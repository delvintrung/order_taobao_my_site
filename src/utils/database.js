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

export const disconnectFromDB = async () => {
  if (!isConnected) {
    console.log("Mongoose is already disconnected");
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log("Mongoose is disconnected");
  } catch (error) {
    console.log(error.message);
  }
};
