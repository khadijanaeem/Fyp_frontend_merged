import Link from "next/link";
import { jobs } from "../../lib/JobData";

interface JobDescriptionProps {
  params: {
    id: string; // the dynamic route param
  };
}

export default function JobDescription({ params }: JobDescriptionProps) {
  // Convert to number if your jobs use numeric IDs
  const job = jobs.find((j) => j.id === Number(params.id));

  if (!job) return <p className="text-center mt-20">Job not found</p>;

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        {job.company} • {job.location} • {job.type}
      </p>
      <p className="text-blue-600 font-semibold mb-2">{job.salary}</p>
      <p className="text-gray-500 mb-6">Posted {job.posted}</p>

      <h2 className="text-lg font-semibold mb-2">Job Description</h2>
      <p className="text-gray-700 mb-6">{job.description}</p>

      <h3 className="font-semibold mb-2">Requirements</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        {job.requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">Benefits & Perks</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        {job.perks.map((perk, i) => (
          <li key={i}>{perk}</li>
        ))}
      </ul>

      <Link
        href={`/jobs/${job.id}/apply`}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Apply Now
      </Link>
    </div>
  );
}
