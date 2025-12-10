'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Requirement {
  id: string;
  text: string;
}

export default function CreateJobPost() {
  const router = useRouter();
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirement, setNewRequirement] = useState('');

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, { 
        id: Date.now().toString(), 
        text: newRequirement.trim() 
      }]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (id: string) => {
    setRequirements(requirements.filter(req => req.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Job post created');
    router.push('/jobs');
  };

  const navigateToApplicationConfig = () => {
    router.push('/jobPosts/create/questions');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Jobs & Forms</h1>
          <p className="text-gray-600 mt-2">Recruitment & outsourcing</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Postings</h2>
          <p className="text-gray-600 mb-6">Create and manage job openings with custom application forms</p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Job Title & Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Senior Frontend Developer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select department</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g., San Francisco, CA or Remote"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range
                </label>
                <input
                  type="text"
                  placeholder="e.g., $80,000 - $120,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Requirements Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                <div className="space-y-2">
                  {requirements.map((req) => (
                    <div key={req.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <span>{req.text}</span>
                      <button
                        type="button"
                        onClick={() => removeRequirement(req.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
                      placeholder="e.g., 3+ years of React experience"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={addRequirement}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Add Requirement
                    </button>
                  </div>
                </div>
              </div>

              {/* Application Form Configuration */}
              <div className="border-t pt-6 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Application Form Configuration
                    </h3>
                    <p className="text-gray-600">
                      Customize the questions applicants will see when applying for this position
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={navigateToApplicationConfig}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Configure Application Form
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end mt-8 pt-6 border-t">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Create Job Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}