import { NextResponse } from "next/server";
import { connectToDB, disconnectFromDB } from "@/utils/database";
import User from "@/models/user";

export const GET = async (request: Request) => {
  try {
    await connectToDB();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  } finally {
    await disconnectFromDB();
  }
};
