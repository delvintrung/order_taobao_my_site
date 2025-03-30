import { connectToDB, disconnectFromDB } from "@/utils/database";
import Order from "@/models/order";
import { ObjectId } from "mongodb";
interface Props {
  params: Promise<{ id: string }>;
}

export const GET = async (request: Request, props: Props) => {
  try {
    await connectToDB();
    const params = await props.params;

    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID format" }), {
        status: 400,
      });
    }
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
    await disconnectFromDB();
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
