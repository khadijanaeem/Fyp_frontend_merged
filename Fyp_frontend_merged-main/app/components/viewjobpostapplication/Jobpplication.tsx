"use client";
import { useState } from "react";
import { jobs } from "../../lib/JobData";
interface JobApplicationProps {
  params: {
    id: string;
  };
}

export default function JobApplication({ params }: JobApplicationProps) {
  const job = jobs.find((j) => j.id === parseInt(params.id));
if (!job) return <p className="text-center mt-20">Job not found</p>;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    coverLetter: "",
    file: null,
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, files } = e.target as HTMLInputElement;
  setForm((prev) => ({
    ...prev,
    [name]: files ? files[0] : value,
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert(`Application submitted for ${job.title} at ${job.company}`);
};

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">
        Apply for {job.title}
      </h1>
      <p className="text-gray-500 mb-8">at {job.company}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg focus:outline-blue-500"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded-lg focus:outline-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded-lg focus:outline-blue-500"
          onChange={handleChange}
          required
        />

        <textarea
          name="coverLetter"
          placeholder="Tell us why you’re interested in this position..."
          className="border p-3 rounded-lg focus:outline-blue-500"
          onChange={handleChange}
          required
        ></textarea>

        <input
          name="file"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="border-2 border-dashed p-6 rounded-lg text-center cursor-pointer"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
