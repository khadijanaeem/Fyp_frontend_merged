// app/api/calendar/book/route.ts
/*
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const { time, participants, title } = await req.json();
  const session = await getServerSession(authOptions);

  if (!session || !(session as any).accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const token = (session as any).accessToken;

  const start = new Date(time);
  const end = new Date(start);
  end.setMinutes(start.getMinutes() + 30); // 30 min meeting

  const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
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
}*/
import { NextRequest, NextResponse } from "next/server";
//import { auth } from "@/auth";
import { getServerSession } from "next-auth";
import { connectToDB } from "@/services/mongodb";
import { authOptions } from "@/auth";
export async function POST(req: NextRequest) {
 const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const db = await connectToDB();
  const users = db.collection("users");

  // get accessToken from the database
  const userRecord = await users.findOne({ email: session.user.email });

  if (!userRecord || !userRecord.accessToken) {
    return NextResponse.json(
      { error: "No access token found in DB" },
      { status: 403 }
    );
  }

  const googleAccessToken = userRecord.accessToken;

  const { time, participants, title } = await req.json();

  const start = new Date(time);
  const end = new Date(start);
  end.setMinutes(start.getMinutes() + 30);

  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${googleAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: title || "New Meeting",
        start: { dateTime: start.toISOString() },
        end: { dateTime: end.toISOString() },
        attendees: participants.map((email: string) => ({ email })),
        conferenceData: {
          createRequest: { requestId: String(Date.now()) },
        },
      }),
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}

