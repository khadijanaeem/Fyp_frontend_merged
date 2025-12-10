import { NextResponse } from "next/server";
import { connectToDB } from "@/services/mongodb";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) return NextResponse.json({ error: "Missing code" });

  // Exchange code for tokens
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenRes.json();

  // Fetch Google user email
  const userRes = await fetch(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
  );

  const googleUser = await userRes.json();

  // Save to DB
  const db = await connectToDB();
  await db.collection("users").updateOne(
    { email: googleUser.email },
    {
      $set: {
        name: googleUser.name,
        email: googleUser.email,
        google_id: googleUser.id,
        google_access_token: tokenData.access_token,
        google_refresh_token: tokenData.refresh_token, // important
      },
    },
    { upsert: true }
  );

  // Redirect back to your app
  return NextResponse.redirect("/dashboard"); // change to your page
}
