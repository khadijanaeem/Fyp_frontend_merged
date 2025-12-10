/*import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Job from "../../../models/jobpostschema";

// 🧠 Fetch all jobs
export async function GET() {
  await connectDB();
  const jobs = await Job.find();
  return NextResponse.json(jobs);
}

// ➕ Add new job
export async function POST(request: Request) {
  await connectDB();
  const data = await request.json();

  const newJob = new Job({
    title: data.title,
    company: data.company,
    location: data.location,
    description: data.description,
    requirements: data.requirements,
  });

  await newJob.save();
  return NextResponse.json({ message: "Job added successfully!" }, { status: 201 });
}
*/
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import { CONFIG } from "@/config";
/*
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);


    const db = await connectToDB();
    NextResponse.json("connection is ready")
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    const jobs = await collection
      .find({}, { projection: { _id: 0 } })
      .toArray();
console.log(jobs)
    return NextResponse.json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch job posts" },
      { status: 500 }
    );
  }
}*/
export async function GET(req: Request) {
  try {
    const db = await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    const jobs = await collection
      .find({}, { projection: { _id: 0 } })
      .toArray();

    return NextResponse.json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch job posts" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  try {
    const job = await req.json();

    const db = await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    const result = await collection.insertOne(job);

    return NextResponse.json({
      success: true,
      message: "Job added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding job:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add job" },
      { status: 500 }
    );
  }
}
