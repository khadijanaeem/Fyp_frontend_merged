"use client";

import { Search } from "lucide-react";

export default function MeetingFilter() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between gap-3">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search by Name"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B6FED]"
        />
      </div>
      <select className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#5B6FED] focus:outline-none">
        <option>All Departments</option>
        <option>Engineering</option>
        <option>HR</option>
        <option>Marketing</option>
      </select>
      <button className="flex items-center gap-2 bg-[#5B6FED] text-white px-4 py-2 rounded-md hover:bg-[#4a5cde] transition">
        <Search size={16} />
        Search
      </button>
    </div>
  );
}
