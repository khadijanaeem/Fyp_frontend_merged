"use client";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import JobApplyForm from "./JobApplyForm";

export default function JobApplyPage() {
  const searchParams = useSearchParams();
  const jobDataParam = searchParams.get("jobData");
  const job = jobDataParam ? JSON.parse(decodeURIComponent(jobDataParam)) : null;

  if (!job)
    return <p className="text-center text-red-600 mt-10">Job not found</p>;

  return (
    <div className="min-h-screen bg-[#f4f6ff]">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-2 flex items-center justify-center gap-2">
            Apply for {job.title}
          </h1>
          <p className="text-center text-gray-500 mb-8">at {job.company}</p>
          <JobApplyForm job={job} />
        </div>
      </div>
    </div>
  );
}
