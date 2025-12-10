"use client";

import MeetingCard from "./Meetingcard";

const meetings = [
  {
    name: "Umar Jahangir",
    date: "Tue Sep 02, 2025",
    time: "10:00",
    topic: "Project Review",
    duration: "45 minutes",
  },
  {
    name: "Sarah Waris",
    date: "Wed Sep 03, 2025",
    time: "15:00",
    topic: "Client Presentation",
    duration: "1.5 hours",
  },
  {
    name: "Haleema Ahmed",
    date: "Thu Sep 04, 2025",
    time: "09:00",
    topic: "Marketing Strategy",
    duration: "1.5 hours",
  },
  {
    name: "Amna Salaar",
    date: "Fri Sep 05, 2025",
    time: "14:00",
    topic: "Product Demo",
    duration: "45 minutes",
  },
];

export default function MeetingList() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-gray-700">All Scheduled Meetings</h2>
        <span className="text-sm text-gray-500">{meetings.length} meetings</span>
      </div>

      <div className="flex flex-col gap-4">
        {meetings.map((meeting, index) => (
          <MeetingCard key={index} {...meeting} />
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="text-sm text-gray-600 hover:underline">
          View All {meetings.length} Meetings
        </button>
      </div>
    </div>
  );
}
