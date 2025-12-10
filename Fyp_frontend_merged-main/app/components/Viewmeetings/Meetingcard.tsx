"use client";

interface MeetingCardProps {
  name: string;
  date: string;
  time: string;
  topic: string;
  duration: string;
}

export default function MeetingCard({
  name,
  date,
  time,
  topic,
  duration,
}: MeetingCardProps) {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 bg-white hover:shadow-md transition">
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {date}, at {time}
        </p>
        <p className="text-sm text-gray-600">
          {topic} • {duration}
        </p>
      </div>
      <button className="bg-[#5B6FED] text-white px-4 py-2 rounded-md text-sm hover:bg-[#4a5cde] transition">
        Join Meeting
      </button>
    </div>
  );
}
