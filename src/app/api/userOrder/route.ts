import { connectToDB, disconnectFromDB } from "@/utils/database";
import Order from "@/models/order";

export const GET = async () => {
  try {
    await connectToDB();
    const orders = await Order.find();
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

export const POST = async (request: Request) => {
  await connectToDB();
  try {
    const body = await request.json();
    const order = new Order(body);
    await order.save();
    disconnectFromDB();
    return new Response(
      JSON.stringify({ status: 1, message: "Them don hang thanh cong" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Lỗi server" }), {
      status: 500,
    });
  }
};
export const DELETE = async (request: Request) => {
  await connectToDB();
  try {
    const body = await request.json();
    const { id } = body;
    const order = await Order.findByIdAndDelete(id);
    disconnectFromDB();
    return new Response(JSON.stringify(order), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Lỗi server" }), {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  await connectToDB();
  try {
    const body = await request.json();
    const { id, ...rest } = body;
    const order = await Order.findByIdAndUpdate(id, rest, { new: true });
    disconnectFromDB();
    return new Response(JSON.stringify(order), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Lỗi server" }), {
      status: 500,
    });
  }
};
