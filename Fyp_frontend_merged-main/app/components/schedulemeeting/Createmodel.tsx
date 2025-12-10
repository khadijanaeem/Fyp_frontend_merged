"use client";
/*import { X } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  participant: string;
  date: string;
  time: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  participant,
  date,
  time,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">*/
      {/* 🔹 Semi-black background */}
      /*
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose} // click outside to close
      />
      */

      {/* 🔹 Modal box */}
      /*
      <div className="relative bg-[#F5F6FF] rounded-2xl shadow-xl w-[500px] p-6 z-10">*/
        {/* Close Button */}
        /*
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold text-center mb-4">
          Confirm Meeting
        </h2>
*/
        {/* Participants */}
        /*
        <div className="mb-3">
          <p className="font-medium text-sm">Participants</p>
          <p className="text-gray-700">{participant}</p>
        </div>
*/
        {/* Date and Time */}
        /*
        <div className="mb-4">
          <p className="font-medium text-sm">Date & Time</p>
          <p className="text-gray-700">{date}</p>
          <p className="text-gray-700">{time}</p>
        </div>
*/
        {/* Meeting Session */}
        /*
        <div className="mb-4">
          <p className="font-medium text-sm mb-1">Meeting Session (Optional)</p>
          <textarea
            placeholder="Enter the purpose or agenda for this meeting..."
            className="w-full border rounded-md p-2 text-sm resize-none focus:ring-2 focus:ring-[#5B6FED] outline-none"
            rows={3}
          />
        </div>
*/
        {/* Buttons */}
        /*
        <div className="flex flex-col space-y-2">
          <button className="bg-[#5B6FED] text-white rounded-md py-2 font-medium hover:bg-[#4a5cde] transition">
            Book Meeting & Generate Link
          </button>
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
*/
import { X } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  participant: string;
  date: string;
  time: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  participant,
  date,
  time,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#F5F6FF] rounded-2xl shadow-xl w-[500px] p-6 z-10">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <X size={18} />
        </button>
        <h2 className="text-lg font-semibold text-center mb-4">Confirm Meeting</h2>
        <p className="font-medium text-sm mb-1">Participants</p>
        <p className="text-gray-700">{participant}</p>
        <p className="font-medium text-sm mb-1 mt-3">Date & Time</p>
        <p className="text-gray-700">{date} - {time}</p>
        <div className="flex flex-col space-y-2 mt-4">
          <button onClick={onConfirm} className="bg-[#5B6FED] text-white rounded-md py-2 font-medium hover:bg-[#4a5cde] transition">
            Book Meeting & Generate Link
          </button>
          <button onClick={onClose} className="text-sm text-gray-600 hover:underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
