/*import { MongoClient, Db } from "mongodb";
import { CONFIG } from "@/config";

const URI = CONFIG.URI;
const DB_NAME = CONFIG.DB_NAME;

if (!URI) {
  throw new Error("❌ MONGODB_URI is not defined in .env.local");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDB(): Promise<Db> {
  if (cachedDb) return cachedDb; // reuse cached db if available

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(URI);
      await cachedClient.connect();
      console.log("✅ MongoDB connected successfully");
    }

    cachedDb = cachedClient.db(DB_NAME);
    return cachedDb;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}

*/

import { MongoClient, Db } from "mongodb";
import { CONFIG } from "@/config";

const URI = CONFIG.URI;
const DB_NAME = CONFIG.DB_NAME;

if (!URI) {
  throw new Error("❌ MONGODB_URI is not defined in .env.local");
}

// MongoClient and DB caching to prevent multiple connections in dev
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDB(): Promise<Db> {
  if (cachedDb) return cachedDb;

  try {
    if (!cachedClient) {
      // Use default options; MongoDB Atlas handles TLS automatically
      cachedClient = new MongoClient(URI);
      await cachedClient.connect();
      console.log("✅ MongoDB connected successfully");
    }

    cachedDb = cachedClient.db(DB_NAME);
    return cachedDb;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}
  
 /*
 import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI missing in .env.local");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME || "EmpowHR",
    });

    isConnected = conn.connections[0].readyState === 1;

    console.log("✅ Mongoose connected:", isConnected);
  } catch (err) {
    console.error("❌ Mongoose connection error:", err);
    throw err;
  }
}

*/