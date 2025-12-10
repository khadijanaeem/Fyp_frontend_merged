"use client";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

export default function Filters() {
  return (
    <div className="bg-[#EEF1FF] p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="🔍 Search jobs..."
            className="border border-gray-700 rounded-md px-3 py-2 w-60 focus:ring-2 focus:ring-[#5B6FED] outline-none"
          />
          <select className="border border-gray-700 rounded-md px-3 py-2 w-44 focus:ring-2 focus:ring-[#5B6FED]">
            <option>All Locations</option>
            <option>New York</option>
            <option>San Francisco</option>
          </select>
          <select className="border border-gray-600 rounded-md px-3 py-2 w-44 focus:ring-2 focus:ring-[#5B6FED]">
            <option>All Types</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
          </select>
        </div>
        <button className="flex items-center gap-2 text-[#5B6FED] font-medium hover:underline">
          <SlidersHorizontal size={16} /> More Filters
        </button>
      </div>
    </div>
  );
}
