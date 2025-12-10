"use client";
/*
export default function Participants() {
  return (
    <div className="bg-[#EEF1FB] p-4 rounded-lg mt-4">
      <p className="text-sm font-medium mb-2">Additional Participants</p>
      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2">
        <span className="bg-[#5B6FED] text-white text-sm px-2 py-1 rounded-full">
          Umer Jahangir ✕
        </span>
      </div>
    </div>
  );
}
*/

/*
import { useEffect, useState } from "react";

export default function Participants({ onSelect }: { onSelect?: (emails: string[]) => void }) {
  const [participants, setParticipants] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/meeting/participants")
      .then((res) => res.json())
      .then((data) => setParticipants(data.data || []));
  }, []);

  const toggleSelect = (email: string) => {
    const updated = selected.includes(email)
      ? selected.filter((e) => e !== email)
      : [...selected, email];
    setSelected(updated);
    onSelect?.(updated);
  };

  return (
    <div className="bg-[#EEF1FB] p-4 rounded-lg mt-4">
      <p className="text-sm font-medium mb-2">Select Participants</p>
      <div className="flex flex-wrap gap-2">
        {participants.map((p) => (
          <button
            key={p.email}
            onClick={() => toggleSelect(p.email)}
            className={`px-3 py-1 rounded-full border text-sm transition ${
              selected.includes(p.email)
                ? "bg-[#5B6FED] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}

*/
"use client";
import { useEffect, useState } from "react";

export default function Participants({ onSelect }: { onSelect?: (emails: string[]) => void }) {
  const [participants, setParticipants] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/meeting/participants")
      .then((res) => res.json())
      .then((data) => setParticipants(data.data || [])) // ✅ FIXED
      .catch((err) => console.error("Failed to load participants:", err));
  }, []);

  const toggleSelect = (email: string) => {
    const updated = selected.includes(email)
      ? selected.filter((e) => e !== email)
      : [...selected, email];
    setSelected(updated);
    onSelect?.(updated);
  };

  return (
    <div className="bg-[#EEF1FB] p-4 rounded-lg mt-4">
      <p className="text-sm font-medium mb-2">Select Participants</p>
      <div className="flex flex-wrap gap-2">
        {participants.length > 0 ? (
          participants.map((p) => (
            <button
              key={p.email}
              onClick={() => toggleSelect(p.email)}
              className={`px-3 py-1 rounded-full border text-sm transition ${
                selected.includes(p.email)
                  ? "bg-[#5B6FED] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {p.name}
            </button>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No participants found</p>
        )}
      </div>
    </div>
  );
}
