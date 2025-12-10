
"use client";// JobList.tsx or JobList.jsx
/*
import JobCard from "../Job/JobCard";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  perks: string[];
}

interface JobListProps {
  jobs: Job[]; // <-- Make sure it's "jobs", not "job"
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
*/

import JobCard from "../Job/JobCard";

interface Job {
   _id?: string;
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  perks: string[];
}

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <JobCard key={job._id?.toString() || job.id} {...job} />
      ))}
    </div>
  );
}