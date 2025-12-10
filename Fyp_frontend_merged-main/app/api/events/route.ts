// app/api/events/route.ts
/*
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session as any).accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const token = (session as any).accessToken;
  const { time, participants, title } = await req.json();

  const start = new Date(time);
  const end = new Date(start);
  end.setMinutes(start.getMinutes() + 30);

  const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      summary: title || "New Meeting",
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
      attendees: participants.map((email: string) => ({ email })),
      conferenceData: { createRequest: { requestId: `${Date.now()}` } },
    }),
  });

  const event = await res.json();
  return NextResponse.json(event);
}
*/
/*
import { google } from "googleapis";
import { getServerSession } from "next-auth";
//import { auth } from "@/auth";
import { authOptions } from "@/auth";
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  // create client
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.accessToken,
  });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    singleEvents: true,
    orderBy: "startTime",
  });

  return Response.json(res.data.items || []);
}
  */
 /*
 import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email || !session.user.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // create Google OAuth2 client
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.user.accessToken, // ✅ correct place
  });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    singleEvents: true,
    orderBy: "startTime",
  });

  return NextResponse.json(res.data.items || []);
}

*/

/*
import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  //const session = await getServerSession(authOptions);
  const session = (await getServerSession(authOptions)) as Session & {
  user: { accessToken?: string; refreshToken?: string };
};

  if (!session?.user?.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.user.accessToken,
    refresh_token: session.user.refreshToken, // optional if stored
  });

  // Auto-refresh token if expired
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
}*/
import { google } from "googleapis";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = (await getServerSession(authOptions)) as Session & {
    user: { accessToken?: string; refreshToken?: string };
  };

  if (!session?.user?.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.user.accessToken,
    refresh_token: session.user.refreshToken, // now allowed
  });

  // Refresh token if expired
  const tokenExpiry = oauth2Client.credentials.expiry_date;
  if (tokenExpiry && tokenExpiry <= Date.now()) {
    const { credentials } = await oauth2Client.refreshAccessToken();
    oauth2Client.setCredentials(credentials);
    // optionally save credentials.access_token to DB
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

