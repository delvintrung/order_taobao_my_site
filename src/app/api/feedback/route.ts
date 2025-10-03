import { connectToDB, disconnectFromDB } from "../../../utils/database";
import Feedback from "@/models/feedback";
import { uploadToCloudinary } from "@/utils/uploadImage";

export const GET = async (request: Request) => {
  try {
    await connectToDB();
    const feedbacks = await Feedback.find({});
    disconnectFromDB();
    return new Response(JSON.stringify(feedbacks), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  await connectToDB();
  try {
    const formData = await request.formData();
    const file = formData.get("img_feedback") as File | null;

    if (!file) {
      disconnectFromDB();
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
      });
    }
    if (file instanceof File) {
      const result = await uploadToCloudinary(file);
      const feedback = new Feedback({
        name: formData.get("feedback_text"),
        link_info: formData.get("feedback_link"),
        image_feedback: result,
      });
      await feedback.save();
      disconnectFromDB();
    }

    disconnectFromDB();
    return new Response(JSON.stringify("OK"), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Lỗi server" + error }), {
      status: 500,
    });
  }
};
