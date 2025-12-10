"use client";
/*import { jobs } from "@/app/lib/JobData";

interface JobApplyProps {
  params: {
    id: string; // the dynamic route param
  };
}

export default function JobApply({ params }: JobApplyProps) {
  // Convert id to number if your jobs use numeric IDs
  const job = jobs.find((j) => j.id === Number(params.id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Apply for {job.title}</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Email" className="border p-2 rounded"/>
        <input type="file" className="border p-2 rounded"/>
        <textarea placeholder="Cover Letter" className="border p-2 rounded"/>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Submit Application
        </button>
      </form>
    </div>
  );
}
*/
/*
import { jobs } from "@/app/lib/JobData";

interface JobApplyProps {
  params: Promise<{ id: string }>; // 👈 make params a Promise
}

export default async function JobApply({ params }: JobApplyProps) {
  const { id } = await params; // 👈 unwrap the Promise

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p className="text-center mt-20">Job not found</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">
        Apply for {job.title}
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <input type="file" className="border p-2 rounded" required />
        <textarea
          placeholder="Cover Letter"
          className="border p-2 rounded"
          rows={5}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
*/
/*
import Navbar from "@/app/components/Navbar";
import { jobs } from "@/app/lib/JobData";
import { Upload } from "lucide-react";

interface JobApplyProps {
  params: Promise<{ id: string }>;
}

export default async function JobApply({ params }: JobApplyProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === Number(id));

  if (!job)
    return <p className="text-center mt-20 text-gray-600">Job not found</p>;

  return (
    <div>
      <Navbar />
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EEF2FF]">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow p-8 border border-gray-200 mt-2 mb-2">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
           Apply for {job.title}
        </h1>
        <p className="text-center text-gray-500 mb-6">at TechFlow Inc.</p>

        <form className="space-y-5">*/
          {/* Full Name & Phone Number */}
          /*
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your Number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>
*/
          {/* Email */}
          /*
          <div>
            <label className="block text-gray-700 font-bold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
*/
          {/* Cover Letter */}
          /*
          <div>
            <label className="block text-gray-700 font-bold mb-1">
              Cover Letter
            </label>
            <textarea
              placeholder="Tell us why you're interested in this position..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
*/
          {/* Resume Upload */}
          /*
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Resume Upload
            </label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 hover:bg-gray-100 transition">
              <Upload className="text-blue-500 w-10 h-10 mb-3" />
              <p className="text-gray-600 mb-1 text-sm">
                Click to upload your resume
              </p>
              <p className="text-xs text-gray-400">
                (PDF, DOC, or DOCX max 10MB)
              </p>
              <input
                type="file"
                className="hidden"
                id="resumeUpload"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
          </div>
*/
          {/* Submit Button */}
          /*
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#5B6FAD] transition flex items-center justify-center gap-2"
            >
               Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
*/
/*
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { Upload } from "lucide-react";

export default function JobApply() {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/job/jobpost/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Job not found");
        setJob(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchJob();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!job) return <p className="text-center mt-10">Job not found</p>;

  const { formFields } = job;

  const renderField = (field: string) => {
    switch (field) {
      case "fullName":
      case "phone":
      case "experience":
      case "expectedSalary":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">{field.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "email":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "coverLetter":
      case "additionalNotes":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">{field.replace(/([A-Z])/g, " $1")}</label>
            <textarea
              rows={4}
              placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        );
      case "resume":
      case "portfolio":
        return (
          <div key={field}>
            <label className="block text-gray-700 font-bold mb-2">{field.replace(/([A-Z])/g, " $1")}</label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 hover:bg-gray-100 transition">
              <Upload className="text-blue-500 w-10 h-10 mb-3" />
              <p className="text-gray-600 mb-1 text-sm">Click to upload your {field.replace(/([A-Z])/g, " $1").toLowerCase()}</p>
              <p className="text-xs text-gray-400">(PDF, DOC, DOCX, or relevant format max 10MB)</p>
              <input type="file" className="hidden" id={field} />
            </div>
          </div>
        );
      case "linkedin":
      case "github":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">{field.toUpperCase()} Profile Link</label>
            <input
              type="url"
              placeholder={`Enter your ${field} profile URL`}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#EEF2FF]">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-7 bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Apply for {job.title}
        </h1>
        <p className="text-center text-gray-500 mb-6">{job.company}</p>

        <form className="space-y-5">
          {Object.entries(formFields)
            .filter(([_, value]) => value === true)
            .map(([key]) => renderField(key))}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#5B6FAD] transition flex items-center justify-center gap-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}*/

/* This one is the most correct 
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { Upload } from "lucide-react";

export default function JobApply() {
  const searchParams = useSearchParams();
  const jobDataParam = searchParams.get("jobData");
  const job = jobDataParam ? JSON.parse(decodeURIComponent(jobDataParam)) : null;

  if (!job) return <p className="text-center mt-10">Job not found</p>;

  const { formFields } = job;

  const renderField = (field: string): React.ReactNode => {
    switch (field) {
      case "fullName":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "email":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "phone":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "expectedSalary":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Expected Salary</label>
            <input
              type="text"
              placeholder="Enter your expected salary"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        );
      case "experience":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Experience</label>
            <input
              type="text"
              placeholder="Enter your experience"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "resume":
        return (
          <div key={field}>
            <label className="block text-gray-700 font-bold mb-2">Resume Upload</label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 hover:bg-gray-100 transition">
              <Upload className="text-blue-500 w-10 h-10 mb-3" />
              <p className="text-gray-600 mb-1 text-sm">Click to upload your resume</p>
              <p className="text-xs text-gray-400">(PDF, DOC, or DOCX max 10MB)</p>
              <input type="file" className="hidden" id="resumeUpload" accept=".pdf,.doc,.docx" required />
            </div>
          </div>
        );
      case "coverLetter":
        return (
          <div key={field}>
            <label className="block text-gray-700 font-bold mb-1">Cover Letter</label>
            <textarea
              placeholder="Tell us why you're interested in this position..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        );
      case "github":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">GitHub Profile</label>
            <input
              type="text"
              placeholder="Enter your GitHub profile URL"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        );
      // Add more fields as needed
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#EEF2FF]">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-7 bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Apply for {job.title}
        </h1>
        <p className="text-center text-gray-500 mb-6">{job.company}</p>

        <form className="space-y-5">
          {Object.entries(formFields)
            .filter(([_, value]) => value)
            .map(([key]) => renderField(key))}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#5B6FAD] transition flex items-center justify-center gap-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
*/

/*------------------------------------------this is correct
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { Upload } from "lucide-react";

export default function JobApply() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobDataParam = searchParams.get("jobData");
  const job = jobDataParam ? JSON.parse(decodeURIComponent(jobDataParam)) : null;

  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!job) return <p className="text-center mt-10">Job not found</p>;

  const { formFields } = job;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/job/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: job.id, formData }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSuccess(true);
      setFormData({});
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: string): React.ReactNode => {
    switch (field) {
      case "fullName":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "email":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "phone":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "experience":
        return (
          <div key={field}>
            <label className="block text-gray-700 mb-1 font-bold">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        );
      case "resume":
        return (
          <div key={field}>
            <label className="block text-gray-700 font-bold mb-2">Resume Upload</label>
            <input
              type="file"
              name="resume"
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.files?.[0] })
              }
              required
            />
          </div>
        );
      // Add other fields similarly
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#EEF2FF]">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-7 bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Apply for {job.title}
        </h1>
        <p className="text-center text-gray-500 mb-6">{job.company}</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Application submitted!</p>}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {Object.entries(formFields)
            .filter(([_, value]) => value)
            .map(([key]) => renderField(key))}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#5B6FAD] transition flex items-center justify-center gap-2"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
*/
/*--------------------------------------------this is also correct
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function JobApply() {
  const searchParams = useSearchParams();
  const jobDataParam = searchParams.get("jobData");
  const job = jobDataParam ? JSON.parse(decodeURIComponent(jobDataParam)) : null;

  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  if (!job) {
    return <p className="text-center text-red-600">Job not found</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResume(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("jobId", job._id);

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (resume) formDataToSend.append("resume", resume);

    const res = await fetch("/api/job/applications", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await res.json();
    setMessage(result.message || result.error);
  };

  const visibleFields = job.formFields;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-semibold text-center mb-2">
        Apply for {job.title}
      </h1>
      <p className="text-center text-gray-500 mb-6">{job.company}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {visibleFields.fullName && (
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        )}

        {visibleFields.email && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        )}

        {visibleFields.phone && (
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        )}

        {visibleFields.github && (
          <input
            type="url"
            name="github"
            placeholder="GitHub Profile"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {visibleFields.resume && (
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="w-full"
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>
      )}
    </div>
  );
}*/


/*
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Upload, Mail, User, Phone, FileText } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function JobApply() {
  const searchParams = useSearchParams();
  const jobDataParam = searchParams.get("jobData");
  const job = jobDataParam ? JSON.parse(decodeURIComponent(jobDataParam)) : null;

  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string>("");

  if (!job) {
    return <p className="text-center text-red-600 mt-10">Job not found</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setResume(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("jobId", job._id);

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (resume) formDataToSend.append("resume", resume);

    const res = await fetch("/api/job/applications", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await res.json();
    setMessage(result.message || result.error);
  };

  const visibleFields = job.formFields;

  return (
    <div className="min-h-screen bg-[#f4f6ff]">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-2 flex items-center justify-center gap-2">
            Apply for {job.title}
          </h1>
          <p className="text-center text-gray-500 mb-8">at {job.company}</p>

          <form onSubmit={handleSubmit} className="space-y-6">*/

            {/* Full Name + Phone */}
            /*
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleFields.fullName && (
                <div>
                  <label className="flex items-center text-gray-700 font-bold mb-1">
                    <User className="w-4 h-4 mr-2 text-gray-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>
              )}
              {visibleFields.phone && (
                <div>
                  <label className="flex items-center text-gray-700 font-bold mb-1">
                    <Phone className="w-4 h-4 mr-2 text-gray-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your Number"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>
              )}
            </div>
*/
            {/* Email */}
            /*
            {visibleFields.email && (
              <div>
                <label className="flex items-center text-gray-700 font-bold mb-1">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>
            )}
*/

            {/* Cover Letter */}
            /*
            {visibleFields.coverLetter && (
              <div>
                <label className="flex items-center text-gray-700 font-bold mb-1">
                  <FileText className="w-4 h-4 mr-2 text-gray-500" /> Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  placeholder="Tell us why you're interested in this position..."
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>
            )}
*/
            {/* Resume Upload */}
            /*
            {visibleFields.resume && (
              <div>
                <p className="text-gray-700 font-bold mb-2">Resume Upload</p>
                <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl py-8 hover:border-indigo-400 transition relative">
                  <Upload className="w-8 h-8 text-indigo-500 mb-2" />
                  <span className="text-gray-600 text-sm text-center">
                    {fileName ? (
                      <span className="text-green-600 font-medium">{fileName}</span>
                    ) : (
                      <>
                        Click to upload your resume <br />
                        <span className="text-gray-400">(PDF, DOC, or DOCX max 10MB)</span>
                      </>
                    )}
                  </span>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            )}
*/
            {/* Submit */}
            /*
            <button
              type="submit"
              className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#4B5FE0] transition flex items-center justify-center gap-2"
            >
              Submit Application
            </button>
          </form>

          {message && (
            <p className="mt-6 text-center text-green-600 font-semibold">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}-----------------------this is the best so far */
import JobApplyPage from "@/app/components/jobform/JobApplyPage";

export default function Page() {
  return <JobApplyPage />;
}


