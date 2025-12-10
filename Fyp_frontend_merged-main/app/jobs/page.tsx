"use client";
/*
"use client";
import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import JobList from "@/app/components/viewjobpostapplication/JobList";
import { jobs } from "@/app/lib/JobData";
import Navbar from "../components/Navbar";

export default function JobsPage() {
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [search, setSearch] = useState("");

  return (
    <div>
    <Navbar />
    <div className="bg-[#EEF2FF] min-h-screen px-8 py-10">*/
      
      {/* Header */}
      /*
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800">
          Find Your Dream Job
        </h1>
        <p className="text-gray-500 mt-1">
          Discover opportunities that truly resonate!
        </p>
*/
        {/* Filters */}
        /*
        <div className="flex flex-wrap items-center gap-3 bg-white p-3 mt-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md w-full sm:w-auto flex-1">
            <Search className="text-gray-400 mr-2" size={16} />
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-transparent outline-none text-sm w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="bg-gray-50 text-sm px-3 py-2 rounded-md border border-gray-200"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>All Locations</option>
            <option>New York, NY</option>
            <option>San Francisco, CA</option>
            <option>Remote</option>
          </select>

          <select
            className="bg-gray-50 text-sm px-3 py-2 rounded-md border border-gray-200"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>All Types</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
          </select>

          <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 transition">
            <Filter size={14} className="mr-1" /> More Filters
          </button>
        </div>
*/
        {/* Job Count */}
        /*
        <p className="text-sm text-gray-500 mt-5">
          <span className="font-medium text-gray-700">{jobs.length}</span> Jobs Found
        </p>
*/
        {/* Job List */}
        /*
        <div className="mt-4 space-y-4">
          <JobList jobs={jobs} />
        </div>
      </div>
    </div>
        </div>

  );
}*/
/*
import { useState, useEffect } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import JobList from "@/app/components/viewjobpostapplication/JobList";
import Navbar from "../components/Navbar";

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [search, setSearch] = useState("");

  // Fetch jobs from API when component mounts
useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/job/jobpost");
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      console.log("Fetched jobs:", data); // <-- add this
      setJobs(data)
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchJobs();
}, []);


  // Filter jobs based on search/location/type
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesLocation =
      location === "All Locations" || job.location === location;
    const matchesType = type === "All Types" || job.type === type;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div>
      <Navbar />
      <div className="bg-[#EEF2FF] min-h-screen px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800">
            Find Your Dream Job
          </h1>
          <p className="text-gray-500 mt-1">
            Discover opportunities that truly resonate!
          </p>
*/
          {/* Filters */}
          /*
          <div className="flex flex-wrap items-center gap-3 bg-white p-3 mt-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md w-full sm:w-auto flex-1">
              <Search className="text-gray-400 mr-2" size={16} />
              <input
                type="text"
                placeholder="Search jobs..."
                className="bg-transparent outline-none text-sm w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="bg-gray-50 text-sm px-3 py-2 rounded-md border border-gray-200"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>All Locations</option>
              <option>San Francisco, CA</option>
              <option>New York, NY</option>
              <option>Remote</option>
            </select>

            <select
              className="bg-gray-50 text-sm px-3 py-2 rounded-md border border-gray-200"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>All Types</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>

            <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 transition">
              <Filter size={14} className="mr-1" /> More Filters
            </button>
          </div>
*/
          {/* Job Count / Loading */}
          /*
          <div className="mt-5">
            {loading ? (
              <p className="text-gray-500">Loading jobs...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {filteredJobs.length}
                </span>{" "}
                Jobs Found
              </p>
            )}
          </div>
*/
          {/* Job List */}
          /*
          {!loading && !error && (
            <div className="mt-4 space-y-4">
              <JobList jobs={filteredJobs} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}*/

import { useState, useEffect } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import JobList from "@/app/components/viewjobpostapplication/JobList";
import Navbar from "../components/Navbar";

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [search, setSearch] = useState("");

  // ✅ Fetch jobs from API once
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/job/jobpost");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        console.log("Fetched jobs:", data);
        setJobs(data.data);
        setFilteredJobs(data.data); // Show all initially
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // ✅ Apply filters only when user changes filters/search
  useEffect(() => {
    if (!jobs.length) return;

    let updated = [...jobs];

    if (search.trim()) {
      updated = updated.filter((job) =>
        job.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location !== "All Locations") {
      updated = updated.filter(
        (job) => job.location?.toLowerCase() === location.toLowerCase()
      );
    }

    if (type !== "All Types") {
      updated = updated.filter(
        (job) => job.type?.toLowerCase() === type.toLowerCase()
      );
    }

    setFilteredJobs(updated);
  }, [search, location, type, jobs]);

  return (
    <div>
      <Navbar />
      <div className="bg-[#EEF2FF] min-h-screen px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800">
            Find Your Dream Job
          </h1>
          <p className="text-gray-500 mt-1">
            Discover opportunities that truly resonate!
          </p>

          {/* 🔍 Filters */}
          <div className="flex flex-wrap items-center gap-3 bg-white p-3 mt-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md w-full sm:w-auto flex-1">
              <Search className="text-gray-400 mr-2" size={16} />
              <input
                type="text"
                placeholder="Search jobs..."
                className="bg-transparent outline-none text-sm w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="bg-gray-50 text-sm px-3 py-2 rounded-md border border-gray-200"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>All Locations</option>
              <option>San Francisco, CA</option>
              <option>New York, NY</option>
              <option>Remote</option>
            </select>

            <select
              className="bg-gray-50 text-sm px-3 py-2 rounded-md border border-gray-200"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>All Types</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>

            <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 transition">
              <Filter size={14} className="mr-1" /> More Filters
            </button>
          </div>

          {/* 📊 Job Count */}
          <div className="mt-5">
            {loading ? (
              <p className="text-gray-500">Loading jobs...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {filteredJobs.length}
                </span>{" "}
                Jobs Found
              </p>
            )}
          </div>

          {/* 🧾 Job List */}
          {!loading && !error && (
            <div className="mt-4 space-y-4">
              <JobList jobs={filteredJobs} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}






