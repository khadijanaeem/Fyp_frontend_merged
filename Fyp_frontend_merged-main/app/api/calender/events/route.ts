/*import { google } from "googleapis";
import { getServerSession, Session } from "next-auth";
//import { auth } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/auth";
export async function GET() {
  // ✅ explicitly type the session
  const session: Session | null = await getServerSession(authOptions);

  // ✅ type guard
  if (!session?.user?.accessToken) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.user.accessToken,
    refresh_token: session.user.refreshToken,
  });
const tokenExpiry = oauth2Client.credentials.expiry_date;
if (tokenExpiry && tokenExpiry <= Date.now()) {
  const { credentials } = await oauth2Client.refreshAccessToken();
  oauth2Client.setCredentials(credentials);
}
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    singleEvents: true,
    orderBy: "startTime",
  });

  return new Response(JSON.stringify(res.data.items || []));
}*/
import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = (await getServerSession(authOptions));

  if (!session?.user?.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.user.accessToken,
    refresh_token: session.user.refreshToken,
  });

  // Refresh token if expired
  const tokenExpiry = oauth2Client.credentials.expiry_date;
  if (tokenExpiry && tokenExpiry <= Date.now()) {
    const { credentials } = await oauth2Client.refreshAccessToken();
    oauth2Client.setCredentials(credentials);
    // optionally update DB with credentials.access_token
  }

  try {
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });
    const res = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      maxResults: 10,
    });

    return NextResponse.json(res.data.items || []);
  } catch (error) {
    console.error("Google API error:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

