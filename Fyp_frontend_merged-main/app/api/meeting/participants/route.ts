//import User from "@/app/models/users";
import { connectToDB } from "@/services/mongodb";
import { NextResponse } from "next/server";
//import { findUserByEmail } from "@/app/models/users";
export async function GET() {
  try {
  const db=  await connectToDB(); // Connect mongoose
    const users = await db.collection("Users").find(
  {}, 
  { projection: { name: 1, email: 1, _id: 0 } }
).toArray();;
    console.log("Fetched Users:", users);
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
