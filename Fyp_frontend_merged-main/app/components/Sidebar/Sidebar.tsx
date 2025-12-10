"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  // { label: "Recruitment", path: "/recruitment" },
  { label: "Shortlisted Candidates", path: "/Shortlisted" },
  { label: "Questionnaire", path: "/questionnaire" },
  { label: "Scorecards", path: "/performanceReport" },
  { label: "Jobs & Forms", path: "/jobPosts" },
  { label: "Increments", path: "/increments" },
  { label: "View Meeting Schedule", path: "/viewschedule" },
  { label: "Schedule New Meeting", path: "/schedule" },
  { label: "View Interview Results ", path: "/InterviewResults" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-[#F5F6FB] border-r p-5 flex flex-col gap-6 fixed">
      {/* <div className="flex items-center gap-3">
        <img src="/images/logo.jpeg" className="w-10" />
        <div>
          <h1 className="font-bold text-lg text-indigo-600">EmpowHR</h1>
          <p className="text-gray-500 text-sm">Performance Suite</p>
        </div>
      </div> */}

      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`p-3 rounded-lg text-sm font-medium ${
              pathname === item.path
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-3 p-3 bg-pink-100 rounded-full w-fit">
        <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
          HR
        </div>
      </div>
    </div>
  );
}