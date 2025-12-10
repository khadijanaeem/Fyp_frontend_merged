// app/api/users/route.ts
import { connectToDB } from "@/services/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectToDB();
    const users = await db.collection("users").find({}, { projection: { name: 1, email: 1, _id: 0 } }).toArray();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch users" }, { status: 500 });
  }
}
