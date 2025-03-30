import { connectToDB, disconnectFromDB } from "@/utils/database";
import Order from "@/models/order";
import { ObjectId } from "mongodb";

export const GET = async (
  resquest: Request,
  { params }: { params: { id: string } }
) => {
  const id = await params.id;
  try {
    await connectToDB();
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "owner",
        },
      },
      {
        $match: {
          userId: new ObjectId(id),
        },
      },
      {
        $project: {
          userId: 0,
        },
      },
    ]);
    disconnectFromDB();
    return new Response(JSON.stringify(orders), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
