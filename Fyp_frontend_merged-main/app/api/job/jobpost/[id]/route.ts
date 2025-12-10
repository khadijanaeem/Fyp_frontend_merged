/*import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
//import Job from "@/models/Job"; // your Mongoose model
import { CONFIG } from "@/config";
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
     const db =await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);
    const job = await collection.findById(params.id);

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
*/
/*
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import { CONFIG } from "@/config";
import { ObjectId } from "mongodb";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    // ✅ Await params before using
    const { id } = await context.params;

    const db = await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    const job = await collection.findOne({ _id: new ObjectId(id) });

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
*/
/*
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import { CONFIG } from "@/config";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const db = await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    // Convert id to number because your "id" field in DB is numeric
    const job =  collection.findOne({ id: parseInt(params.id, 10) });
console.log(job)
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
*/
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import { CONFIG } from "@/config";

export async function GET(req: Request) {
  try {
    const db = await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    // Extract id from URL
    const url = new URL(req.url);
    const idStr = url.pathname.split("/").pop(); // get the last part
    if (!idStr) return NextResponse.json({ error: "No ID provided" }, { status: 400 });

    const idNum = parseInt(idStr, 10);

    // Find job by numeric id
    const job = await collection.findOne({ id: idNum });
console.log(job)
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

