/*import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { jobId, formData } = await req.json();
    if (!jobId || !formData) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const db = await connectToDB();
    const collection = db.collection("applicatons");

    // Assign a unique _id automatically
    const result = await collection.insertOne({
      _id: new ObjectId(),
      jobId,
      formData,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Application submitted", id: result.insertedId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
                                                         ---this is the correct one 
*/
/*
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const applicationId = formData.get("applicationId") as string;
    const jobId = formData.get("jobId") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const resume = formData.get("resume") as File;

    if (!jobId) {
      return NextResponse.json({ error: "Job ID missing" }, { status: 400 });
    }

    // Save resume file
    let resumePath = "";
    if (resume) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      const filePath = path.join(uploadDir, `${applicationId}_${resume.name}`);
      await writeFile(filePath, buffer);
      resumePath = `/uploads/${applicationId}_${resume.name}`;
    }

    // Save to MongoDB
    const db = await connectToDB();
    const collection = db.collection("jobApplications");

    await collection.insertOne({
      applicationId,
      jobId,
      fullName,
      email,
      phone,
      experience,
      resumePath,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Application saved", applicationId });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
*//*
import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { connectToDB } from "@/services/mongodb";
import { v4 as uuidv4 } from "uuid";
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    // 1️⃣ Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // 2️⃣ Initialize Formidable
    const form = formidable({
      multiples: false,
      uploadDir,
      keepExtensions: true,
    });

    // 3️⃣ Parse the form
    const [fields, files]: any = await new Promise((resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // 4️⃣ Rename uploaded file to include UUID for uniqueness
    const resumeFile = files.resume?.[0];
    if (!resumeFile) {
      return NextResponse.json({ error: "No resume uploaded" }, { status: 400 });
    }

    const newFileName = `${uuidv4()}_${resumeFile.originalFilename}`;
    const newFilePath = path.join(uploadDir, newFileName);
    fs.renameSync(resumeFile.filepath, newFilePath);

    // 5️⃣ Save relative path to DB
    const relativePath = `/uploads/${newFileName}`;
    const db = await connectToDB();
    const collection = db.collection("job_applications");

    await collection.insertOne({
      jobId: fields.jobId,
      name: fields.name,
      email: fields.email,
      resumePath: relativePath,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Application submitted successfully" });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}*/
import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const jobId = formData.get("jobId")?.toString() || "";
    const resume = formData.get("resume") as File | null;

    // Separate out all form fields except resume
    const formFields: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (key !== "resume") formFields[key] = value.toString();
    });

    let resumePath = "";
    if (resume) {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const uniqueName = `${uuidv4()}_${resume.name}`;
      const filePath = path.join(uploadDir, uniqueName);
      const buffer = Buffer.from(await resume.arrayBuffer());
      await fs.writeFile(filePath, buffer);
      resumePath = `/uploads/${uniqueName}`;
    }

    // Save to MongoDB
    const db = await connectToDB();
    const applications = db.collection("jobApplications");

    await applications.insertOne({
      applicationId: uuidv4(),
      jobId,
      formData: formFields,
      resumePath,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Application submitted successfully!" });
  } catch (error: any) {
    console.error("Error saving application:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

