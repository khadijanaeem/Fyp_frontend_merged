"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function CalendarEvents() {
  const { data: session } = useSession();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (!session) return;

    const token = (session as any).accessToken;

    fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setEvents(data.items || []));
  }, [session]);

  if (!session) return <p>Please sign in</p>;

  return (
    <div>
      <h2>Booked Events:</h2>
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.summary} - {event.start?.dateTime || event.start?.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
