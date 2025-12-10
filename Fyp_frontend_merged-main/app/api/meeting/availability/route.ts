/*import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { participants } = await req.json();
  const emails = [session.user?.email, ...participants].filter(Boolean);

  const timeMin = new Date().toISOString();
  const timeMax = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // next 24 hours

  const response = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timeMin,
      timeMax,
      items: emails.map((id) => ({ id })),
    }),
  });

  const data = await response.json();
  if (!data.calendars) {
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 });
  }

  // Generate hourly slots between 9am–6pm
  const slots = [];
  const startHour = 9;
  const endHour = 18;

  for (let h = startHour; h < endHour; h++) {
    const slotTime = new Date();
    slotTime.setHours(h, 0, 0, 0);
    slots.push(slotTime);
  }

  // Combine busy periods
  const busyTimes = Object.values(data.calendars)
    .flatMap((cal: any) => cal.busy || [])
    .map((b: any) => [new Date(b.start).getTime(), new Date(b.end).getTime()]);

  // Mark slots as available or not
  const availability = slots.map((slot) => {
    const slotStart = slot.getTime();
    const slotEnd = slotStart + 60 * 60 * 1000;
    const isBusy = busyTimes.some(([start, end]) => slotStart < end && slotEnd > start);
    return {
      time: slot.toISOString(),
      available: !isBusy,
    };
  });

  return NextResponse.json({ availability });
}
*/
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth"; // import from /auth, not [...nextauth]/route
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // Correct access to accessToken
  if (!session?.user?.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { participants } = await req.json();
  const emails = [session.user?.email, ...participants].filter(Boolean);

  const timeMin = new Date().toISOString();
  const timeMax = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // next 24 hours

  const response = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`, // ✅ use session.user.accessToken
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timeMin,
      timeMax,
      items: emails.map((id) => ({ id })),
    }),
  });

  const data = await response.json();
  if (!data.calendars) {
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 });
  }

  // Generate hourly slots between 9am–6pm
  const slots = [];
  const startHour = 9;
  const endHour = 18;

  for (let h = startHour; h < endHour; h++) {
    const slotTime = new Date();
    slotTime.setHours(h, 0, 0, 0);
    slots.push(slotTime);
  }

  // Combine busy periods
  const busyTimes = Object.values(data.calendars)
    .flatMap((cal: any) => cal.busy || [])
    .map((b: any) => [new Date(b.start).getTime(), new Date(b.end).getTime()]);

  // Mark slots as available or not
  const availability = slots.map((slot) => {
    const slotStart = slot.getTime();
    const slotEnd = slotStart + 60 * 60 * 1000;
    const isBusy = busyTimes.some(([start, end]) => slotStart < end && slotEnd > start);
    return {
      time: slot.toISOString(),
      available: !isBusy,
    };
  });

  return NextResponse.json({ availability });
}
