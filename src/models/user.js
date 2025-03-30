import { Schema, model, models } from "mongoose";

const UserScheme = new Schema({
  email: {
    type: String,
    unique: [true, "Email is existed"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  image: String,
});

const User = models.User || model("User", UserScheme);
export default User;
