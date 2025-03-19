import { Schema, model, models } from "mongoose";

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link_info: {
    type: String,
    required: true,
  },
  image_feedback: {
    type: String,
    required: true,
  },
});

const Feedback =
  models.Feedback || model("Feedback", feedbackSchema, "feedback");

export default Feedback;
