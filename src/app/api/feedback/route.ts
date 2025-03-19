import { connectToDB, disconnectFromDB } from "../../../utils/database";
import Feedback from "@/app/models/feedback";

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
  } catch (error) {
    return new Response(JSON.stringify({ error: "Lỗi server" }), {
      status: 500,
    });
  }
};
