
"use client";
/*------------------this so far the best code keep it
"use client";

import { useState } from "react";
import ConfirmModal from "./Createmodel";

const slots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00"
];
const unavailable = ["10:00", "11:30", "13:00", "14:30", "15:00", "16:30"];

export default function TimeSlots() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSlotClick = (time: string) => {
    if (unavailable.includes(time)) return;
    setSelectedTime(time);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white border rounded-lg mt-4 p-4">
        <h3 className="text-sm font-semibold mb-3">Available Times - Sep 05, 2025</h3>
        <div className="grid grid-cols-5 gap-3">
          {slots.map((time) => (
            <div
              key={time}
              onClick={() => handleSlotClick(time)}
              className={`rounded-lg text-center py-3 cursor-pointer ${
                unavailable.includes(time)
                  ? "bg-black text-white text-xs cursor-not-allowed"
                  : "bg-white border text-gray-700 hover:bg-[#EEF1FB]"
              }`}
            >
              {time}
              {unavailable.includes(time) && (
                <p className="text-[10px]">Unavailable</p>
              )}
            </div>
          ))}
        </div>
      </div>
*/
      {/* Modal */}
      /*
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        participant="Michael Johnson"
        date="Fri, Sep 05, 2025"
        time={selectedTime || ""}
      />
    </>
  );
}*/

import { useState, useEffect } from "react";
import ConfirmModal from "./Createmodel";
interface TimeSlotsProps {
  participants: string[];
  selectedDate: Date | null;
}
const slots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00"
];

export default function TimeSlots({
  participants = ["example@gmail.com"],
  selectedDate,
}: TimeSlotsProps){
  const [booked, setBooked] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // fetch booked events from API
  /*useEffect(() => {
    fetch("/api/calendar")
      .then((res) => res.json())
      .then((events) => {
        const bookedSlots: string[] = events.map((e: any) => {
          const date = new Date(e.start.dateTime || e.start.date).toTimeString().slice(0, 5);
          return date;
        });
        setBooked(bookedSlots);
      });
  }, []);*/
/* useEffect(() => {
  if (!selectedDate) return;

  async function fetchBusySlots() {
    const res = await fetch("/api/calender", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        participants,
        date: selectedDate.toISOString().split("T")[0] // YYYY-MM-DD
      }),
    });

    const data = await res.json();

    if (data.mergedBusy) {
      const bookedSlots = data.mergedBusy.map((slot: any) =>
        new Date(slot.start).toTimeString().slice(0, 5)
      );

      setBooked(bookedSlots);
    }
  }

  fetchBusySlots();
}, [participants, selectedDate]);*/
useEffect(() => {
  if (!selectedDate) return;

  async function fetchBusySlots(date: Date) {
    const res = await fetch("/api/calender", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        participants,
        date: date.toISOString().split("T")[0], // safe
      }),
    });

    const data = await res.json();

    if (data.mergedBusy) {
      const bookedSlots = data.mergedBusy.map((slot: any) =>
        new Date(slot.start).toTimeString().slice(0, 5)
      );
      setBooked(bookedSlots);
    }
  }

  fetchBusySlots(selectedDate);
}, [participants, selectedDate]);

  const handleSlotClick = (time: string) => {
    if (booked.includes(time)) return;
    setSelectedTime(time);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (!selectedTime) return;

    const event = await fetch("/api/calender/book", {
      method: "POST",
      body: JSON.stringify({
        time: `${selectedDate?.toISOString().split("T")[0]}T${selectedTime}:00`,
        participants,
        title: "Team Meeting"
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    alert(`Meeting booked! Join link: ${event.conferenceData?.entryPoints[0]?.uri}`);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white border rounded-lg mt-4 p-4">
        <h3 className="text-sm font-semibold mb-3"> Available Times – {selectedDate ? selectedDate.toDateString() : "Pick a date"}</h3>
        <div className="grid grid-cols-5 gap-3">
          {slots.map((time) => (
            <div
              key={time}
              onClick={() => handleSlotClick(time)}
              className={`rounded-lg text-center py-3 cursor-pointer ${
                booked.includes(time)
                  ? "bg-black text-white text-xs cursor-not-allowed"
                  : "bg-white border text-gray-700 hover:bg-[#EEF1FB]"
              }`}
            >
              {time}
              {booked.includes(time) && <p className="text-[10px]">Booked</p>}
            </div>
          ))}
        </div>
      </div>

      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        participant={participants.join(", ")}
        date="Sep 05, 2025"
        time={selectedTime || ""}
        onConfirm={handleConfirm}
      />
    </>
  );
}



/*
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function TimeSlots({ participants }: { participants: string[] }) {
  const { data: session } = useSession();
  const [availability, setAvailability] = useState<{ time: string; available: boolean }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;

    const fetchAvailability = async () => {
      const res = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ participants }),
      });
      const data = await res.json();
      setAvailability(data.availability || []);
      setLoading(false);
    };

    fetchAvailability();
  }, [session, participants]);

  if (loading) return <p>Loading availability...</p>;

  return (
    <div className="grid grid-cols-3 gap-3">
      {availability.map((slot) => (
        <button
          key={slot.time}
          disabled={!slot.available}
          className={`p-2 rounded-md ${
            slot.available ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500"
          }`}
        >
          {new Date(slot.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </button>
      ))}
    </div>
  );
}*/
