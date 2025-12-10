"use client";
import Link from "next/link";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

interface JobCardProps {
  id:number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}

export default function JobCard({
  id,
  title,
  company,
  location,
  type,
  salary,
  posted,
}: JobCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <div className="flex items-center space-x-3 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
          <span className="flex items-center gap-1"><Briefcase size={14} /> {type}</span>
          <span className="flex items-center gap-1"><DollarSign size={14} /> {salary}</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">• Posted {posted}</p>
      </div>

       <Link href={`/jobs/${id}`}>
        <button className="bg-[#5B6FED] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
}
/*
import Link from "next/link";
import { Briefcase, MapPin, DollarSign } from "lucide-react";
interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}
export default function JobCard({
  id,
  title,
  company,
  location,
  type,
  salary,
  posted,
}: JobCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <div className="flex items-center space-x-3 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
          <span className="flex items-center gap-1"><Briefcase size={14} /> {type}</span>
          <span className="flex items-center gap-1"><DollarSign size={14} /> {salary}</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">• Posted {posted}</p>
      </div>

      <Link href={`/jobs/${id}`}>
        <button className="bg-[#5B6FED] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
}
*/