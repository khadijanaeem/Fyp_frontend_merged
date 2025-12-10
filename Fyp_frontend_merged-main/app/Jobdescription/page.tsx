import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechFlow Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "React Engineer",
    company: "NextGen Labs",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    posted: "5 days ago",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl font-semibold mb-6">Available Jobs</h1>
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="border border-gray-300 p-6 rounded-xl w-[400px] hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-500">
              {job.company} — {job.location}
            </p>
            <p className="text-blue-600 font-semibold mt-2">{job.salary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
