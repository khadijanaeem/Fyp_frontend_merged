/*import { connectToDB } from "@/services/mongodb";

export async function getValidAccessToken(email: string) {
  const db = await connectToDB();
  const user = await db.collection("users").findOne({ email });

  if (!user) throw new Error("User not found");

  // Step 1: Try existing token
  const test = await fetch(
    "https://www.googleapis.com/calendar/v3/users/me/calendarList",
    { headers: { Authorization: `Bearer ${user.google_access_token}` } }
  );

  if (test.status !== 401) return user.google_access_token;

  // Step 2: Refresh token
  const refreshRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: user.google_refresh_token,
      grant_type: "refresh_token",
    }),
  });

  const newTokens = await refreshRes.json();

  // Step 3: Update DB
  await db.collection("users").updateOne(
    { email },
    { $set: { google_access_token: newTokens.access_token } }
  );

  return newTokens.access_token;
}
*/
// app/lib/google/refreshToken.ts
import { connectToDB } from "@/services/mongodb";

export async function getValidAccessToken(email: string) {
  const db = await connectToDB();
  const user = await db.collection("users").findOne({ email });

  if (!user) throw new Error("User not found");

  const currentAccess = user.google_access_token;
  const currentRefresh = user.google_refresh_token;

  if (!currentRefresh || typeof currentRefresh !== "string") {
    throw new Error("User has not connected Google Calendar or no refresh token");
  }

  // test current access token
  const test = await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
    headers: { Authorization: `Bearer ${currentAccess}` },
  });

  if (test.status !== 401 && currentAccess) return currentAccess;

  // refresh
  const refreshRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: currentRefresh,
      grant_type: "refresh_token",
    }),
  });

  const newTokens = await refreshRes.json();
  if (!newTokens.access_token) throw new Error("Failed to refresh token");

  await db.collection("users").updateOne(
    { email },
    { $set: { google_access_token: newTokens.access_token } }
  );

  return newTokens.access_token;
}
