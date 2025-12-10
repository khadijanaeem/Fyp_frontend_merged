/*import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";

export async function GET() {
  try {
    const db = await connectToDB();

    const results = await db
      .collection("processed_videos1")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(results);
  } catch (error: any) {
    console.error("Error fetching processed videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch interview results" },
      { status: 500 }
    );
  }
}*/
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";

export async function GET() {
  try {
    const db = await connectToDB();

    // Fetch only applications having analysis
    const results = await db
      .collection("jobApplications")
      .find({ analysis: { $exists: true } })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}

