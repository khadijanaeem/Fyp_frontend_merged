"use client";
import { useEffect, useState } from "react";

export default function CalendarEvents() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/calender/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events", err);
      }
    }

    loadEvents();
  }, []);

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          {event.summary} — {event.start?.dateTime || event.start?.date}
        </li>
      ))}
    </ul>
  );
}
