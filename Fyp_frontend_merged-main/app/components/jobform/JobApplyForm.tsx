"use client";
/*import React, { useState } from "react";
import { Mail, User, Phone, FileText } from "lucide-react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import FileUpload from "./FileUpload";

export default function JobApplyForm({ job }: { job: any }) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [resume, setResume] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    Object.entries(formData).forEach(([key, value]) =>
      formDataToSend.append(key, value)
    );
    if (resume) formDataToSend.append("resume", resume);

    const res = await fetch("/api/job/applications", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await res.json();
    setMessage(result.message || result.error);
  };

  const fields = job.formFields;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.fullName && (
          <InputField
            name="fullName"
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            icon={User}
            onChange={handleChange}
          />
        )}
        {fields.phone && (
          <InputField
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your number"
            icon={Phone}
            onChange={handleChange}
          />
        )}
      </div>

      {fields.email && (
        <InputField
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          icon={Mail}
          onChange={handleChange}
        />
      )}

      {fields.coverLetter && (
        <TextAreaField
          name="coverLetter"
          label="Cover Letter"
          placeholder="Tell us why you're interested in this position..."
          icon={FileText}
          onChange={handleChange}
        />
      )}

      {fields.resume && (
        <FileUpload fileName={fileName} onChange={handleFileChange} />
      )}

      <button
        type="submit"
        className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#4B5FE0] transition flex items-center justify-center gap-2"
      >
        Submit Application
      </button>

      {message && (
        <p className="mt-6 text-center text-green-600 font-semibold">
          {message}
        </p>
      )}
    </form>
  );
}
*/
import React, { useState } from "react";
import {
  Mail,
  User,
  Phone,
  FileText,
  Upload,
  Briefcase,
  DollarSign,
  Globe,
  Linkedin,
  Github,
  Award,
  Calendar,
  StickyNote,
} from "lucide-react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import FileUpload from "./FileUpload";

export default function JobApplyForm({ job }: { job: any }) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [resume, setResume] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    Object.entries(formData).forEach(([key, value]) =>
      formDataToSend.append(key, value)
    );
    if (resume) formDataToSend.append("resume", resume);

    const res = await fetch("/api/job/applications", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await res.json();
    setMessage(result.message || result.error);
  };

  const fields = job.formFields;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.fullName && (
          <InputField
            name="fullName"
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            icon={User}
            onChange={handleChange}
          />
        )}
        {fields.phone && (
          <InputField
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
            icon={Phone}
            onChange={handleChange}
          />
        )}
      </div>

      {fields.email && (
        <InputField
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          icon={Mail}
          onChange={handleChange}
        />
      )}

      {fields.expectedSalary && (
        <InputField
          name="expectedSalary"
          type="number"
          label="Expected Salary"
          placeholder="Enter your expected salary"
          icon={DollarSign}
          onChange={handleChange}
        />
      )}

      {fields.experience && (
        <InputField
          name="experience"
          type="text"
          label="Experience"
          placeholder="Enter your years or field of experience"
          icon={Briefcase}
          onChange={handleChange}
        />
      )}

      {fields.portfolio && (
        <InputField
          name="portfolio"
          type="url"
          label="Portfolio Website"
          placeholder="Enter your portfolio URL"
          icon={Globe}
          onChange={handleChange}
        />
      )}

      {fields.linkedin && (
        <InputField
          name="linkedin"
          type="url"
          label="LinkedIn Profile"
          placeholder="Enter your LinkedIn profile link"
          icon={Linkedin}
          onChange={handleChange}
        />
      )}

      {fields.github && (
        <InputField
          name="github"
          type="url"
          label="GitHub Profile"
          placeholder="Enter your GitHub profile link"
          icon={Github}
          onChange={handleChange}
        />
      )}

      {fields.certifications && (
        <TextAreaField
          name="certifications"
          label="Certifications"
          placeholder="List any relevant certifications..."
          icon={Award}
          onChange={handleChange}
        />
      )}

      {fields.references && (
        <TextAreaField
          name="references"
          label="References"
          placeholder="Provide references or contacts..."
          icon={User}
          onChange={handleChange}
        />
      )}

      {fields.availability && (
        <InputField
          name="availability"
          type="text"
          label="Availability"
          placeholder="When can you start?"
          icon={Calendar}
          onChange={handleChange}
        />
      )}

      {fields.coverLetter && (
        <TextAreaField
          name="coverLetter"
          label="Cover Letter"
          placeholder="Tell us why you're interested in this position..."
          icon={FileText}
          onChange={handleChange}
        />
      )}

      {fields.additionalNotes && (
        <TextAreaField
          name="additionalNotes"
          label="Additional Notes"
          placeholder="Add any additional information..."
          icon={StickyNote}
          onChange={handleChange}
        />
      )}

      {fields.resume && (
        <FileUpload fileName={fileName} onChange={handleFileChange} />
      )}

      <button
        type="submit"
        className="w-full bg-[#5B6FED] text-white py-3 rounded-xl font-medium hover:bg-[#4B5FE0] transition flex items-center justify-center gap-2"
      >
        Submit Application
      </button>

      {message && (
        <p className="mt-6 text-center text-green-600 font-semibold">
          {message}
        </p>
      )}
    </form>
  );
}
