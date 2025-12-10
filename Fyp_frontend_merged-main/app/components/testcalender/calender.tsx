"use client";
import { useSession } from "next-auth/react";

export default function TestCalendar() {
  const { data: session } = useSession();

  if (!session) return <p>Please sign in</p>;

  // Access token to call Google Calendar API
  const token = (session as any).accessToken;

  return <p>Access Token: {token}</p>;
}
