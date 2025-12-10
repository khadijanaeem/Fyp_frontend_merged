
"use client";/*
import Link from "next/link";
import { jobs } from "@/app/lib/JobData";  // ✅ Correct absolute import

interface JobDescriptionProps {
  params: {
    id: string;
  };
}

export default function JobDescription({ params }: JobDescriptionProps) {
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
*/
/*
import Link from "next/link";
import { jobs } from "@/app/lib/JobData";
import Navbar from "@/app/components/Navbar";

interface JobDescriptionProps {
  params: Promise<{ id: string }>;  // 👈 updated type
}

export default async function JobDescription({ params }: JobDescriptionProps) {
  const { id } = await params;  // ✅ unwrap the Promise

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p className="text-center mt-20">Job not found</p>;

  return (
    <div className=" min-h-screen w-full bg-[#EEF2FF]">
      <Navbar />
    <div className="max-w-3xl mx-auto mt-7 bg-white p-8 rounded-2xl shadow mb-7 ">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        {job.company} • {job.location} • {job.type}
      </p>
      <p className="text-[#5B6FED] font-semibold mb-2">{job.salary}</p>
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
        className="bg-[#5B6FED] text-white px-6 py-3 rounded-lg hover:bg-[#5B6FAA] flex items-center justify-center"
      >
        Apply Now
      </Link>
    </div>
    </div>
  );
}*/
/*
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";

export default function JobDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/job/jobpost/${id}`);
        if (!res.ok) throw new Error("Failed to fetch job");
        const data = await res.json();
        setJob(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;
  if (!job) return <p className="p-6 text-gray-500">Job not found.</p>;

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">{job.company}</p>
        <p className="text-gray-500 mb-6">{job.location}</p>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>
    </div>
  );
}
*/"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"; // ✅ Import Link
import Navbar from "@/app/components/Navbar";

export default function JobDetailPage() {
  const { id } = useParams(); // Get id from URL
  const [job, setJob] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // wait until id is defined

    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/job/jobpost/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch job");
        setJob(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!job) return <p className="text-center mt-10">No job found</p>;

  return (
    <div className="min-h-screen w-full bg-[#EEF2FF]">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-7 bg-white p-8 rounded-2xl shadow mb-7">
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">
          {job.company} • {job.location} • {job.type}
        </p>
        <p className="text-[#5B6FED] font-semibold mb-2">{job.salary}</p>
        <p className="text-gray-500 mb-6">Posted {job.posted}</p>

        <h2 className="text-lg font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700 mb-6">{job.description}</p>

        {job.requirements?.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {job.requirements.map((req: string, i: number) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </>
        )}

        {job.perks?.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Benefits & Perks</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {job.perks.map((perk: string, i: number) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
          </>
        )}

       <Link
  href={`/jobs/${job._id}/apply?jobData=${encodeURIComponent(JSON.stringify(job))}`} className="bg-[#5B6FED] text-white px-6 py-3 rounded-lg hover:bg-[#5B6FAA] flex items-center justify-center"
>
  Apply Now
</Link>
      </div>
    </div>
  );
}
