// app/api/calendar/route.ts
/*import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !(session as any).accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const token = (session as any).accessToken;

  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events?singleEvents=true&orderBy=startTime",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await res.json();
  return NextResponse.json(data.items || []);
}
*/
/*
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { participants } = await req.json();
  
  const userTokens = await getTokensFromDB(participants); // fetch tokens for each email
  
  const busyTimes = [];
  for (const user of userTokens) {
    const res = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${user.google_access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timeMin: "2025-09-05T09:00:00Z",
        timeMax: "2025-09-05T17:00:00Z",
        items: [{ id: user.email }],
      }),
    });
    const data = await res.json();
    busyTimes.push(data.calendars[user.email].busy);
  }

  // Combine busy slots & compute common free slots
  const merged = mergeBusySlots(busyTimes);
  return NextResponse.json({ busy: merged });
}
*/
// app/api/calendar/route.ts





/*
import { NextResponse } from "next/server";
import { google } from "googleapis";
import { connectToDB } from "@/services/mongodb";
//import User from "@/app/models/users";
import { findUserByEmail } from "@/app/models/users";
import { getValidAccessToken } from "@/app/lib/google/refreshToken";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const session = await getServerSession(authOptions);

const accessToken = session?.user?.accessToken;
// === Helper functions ===
async function getTokensFromDB(email: string) {
  const user = await findUserByEmail(email)
  if (!user) throw new Error("User not found");
  return {
    access_token: user.google_access_token,
    refresh_token: user.google_refresh_token,
  };
}

function mergeBusySlots(busySlotsArrays: any[][]) {
  const allBusy = busySlotsArrays.flat();
  allBusy.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const merged = [];
  let current = null;

  for (const slot of allBusy) {
    if (!current) {
      current = slot;
    } else if (new Date(slot.start) <= new Date(current.end)) {
      current.end = new Date(
        Math.max(new Date(slot.end).getTime(), new Date(current.end).getTime())
      ).toISOString();
    } else {
      merged.push(current);
      current = slot;
    }
  }

  if (current) merged.push(current);
  return merged;
}

// === Main API Route ===
export async function POST(req: Request) {
  await connectToDB();

  try {
    const { participants } = await req.json();

    if (!participants || participants.length === 0) {
      return NextResponse.json({ error: "No participants provided" }, { status: 400 });
    }

    const allBusySlots = [];

    for (const email of participants) {
      const tokens = await getTokensFromDB(email);
      const oauth2Client = new google.auth.OAuth2();
      //oauth2Client.setCredentials({ access_token: tokens.access_token });
      const accessToken = await getValidAccessToken(email);

  oauth2Client.setCredentials({ access_token: accessToken });

      const calendar = google.calendar({ version: "v3", auth: oauth2Client });

      const res = await calendar.freebusy.query({
        requestBody: {
          timeMin: new Date().toISOString(),
          timeMax: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // next 7 days
          items: [{ id: "primary" }],
        },
      });

      const busy = res.data.calendars?.primary?.busy || [];
      allBusySlots.push(busy);
    }

    const mergedBusy = mergeBusySlots(allBusySlots);

    return NextResponse.json({ mergedBusy });
  } catch (error: any) {
    console.error("Calendar API error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch calendar data" }, { status: 500 });
  }
}*/
// app/api/calendar/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";
import { findUserByEmail } from "@/app/models/users";
import { getValidAccessToken } from "@/app/lib/google/refreshToken";
import { connectToDB } from "@/services/mongodb";

function mergeBusySlots(busySlotsArrays: any[][]) {
  const allBusy = busySlotsArrays.flat();
  allBusy.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  const merged = [];
  let current: any = null;

  for (const slot of allBusy) {
    if (!current) current = { ...slot };
    else if (new Date(slot.start) <= new Date(current.end)) {
      current.end = new Date(Math.max(new Date(slot.end).getTime(), new Date(current.end).getTime())).toISOString();
    } else {
      merged.push(current);
      current = { ...slot };
    }
  }
  if (current) merged.push(current);
  return merged;
}

export async function POST(req: Request) {
  await connectToDB();

  try {
    const { participants } = await req.json();

    if (!Array.isArray(participants) || participants.length === 0) {
      return NextResponse.json({ error: "No participants provided" }, { status: 400 });
    }

    const allBusySlots: any[][] = [];

    for (const email of participants) {
      const user = await findUserByEmail(email);
      if (!user) return NextResponse.json({ error: `${email} not found` }, { status: 404 });

      if (!user.google_refresh_token) {
        return NextResponse.json({ error: `${email} has not connected Google Calendar` }, { status: 400 });
      }

      const accessToken = await getValidAccessToken(email);

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: accessToken });

      const calendar = google.calendar({ version: "v3", auth: oauth2Client });

      const res = await calendar.freebusy.query({
        requestBody: {
          timeMin: new Date().toISOString(),
          timeMax: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          items: [{ id: "primary" }],
        },
      });

      const busy = res.data.calendars?.primary?.busy || [];
      allBusySlots.push(busy);
    }

    const mergedBusy = mergeBusySlots(allBusySlots);
    return NextResponse.json({ mergedBusy });
  } catch (error: any) {
    console.error("Calendar API error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch calendar data" }, { status: 500 });
  }
}

