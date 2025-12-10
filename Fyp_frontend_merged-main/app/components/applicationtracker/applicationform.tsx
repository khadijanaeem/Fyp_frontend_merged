"use client";
import { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "Zaviar Khan",
    position: "Backend Developer",
    id: "455656",
  });

  return (
    <div className="border-[#C7D7FF] p-6 rounded-xl bg-[#E0E7FF]">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Job Position
          </label>
          <select
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            <option>Full Stack Developer</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Application ID
          </label>
          <input
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-[#5B6FED] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
          Track Progress
        </button>
        <button
          onClick={() => setForm({ name: "", position: "", id: "" })}
          className="border border-gray-400 px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
