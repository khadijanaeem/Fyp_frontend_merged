// // "use client";

// // import Link from 'next/link';
// // import { useState } from 'react';

// // import Sidebar from "../components/Sidebar/Sidebar"  
// // interface JobPosting {
// //   id: string;
// //   title: string;
// //   department: string;
// //   location: string;
// //   type: string;
// //   salary: string;
// //   description: string;
// //   requirements: string[];
// //   postedDate: string;
// //   applications: number;
// // }

// // const jobPostings: JobPosting[] = [
// //   {
// //     id: "1",
// //     title: "Senior Frontend Developer",
// //     department: "Engineering",
// //     location: "San Francisco, CA",
// //     type: "Full-time",
// //     salary: "$120,000 - $150,000",
// //     description: "We are looking for a senior frontend developer to join our growing team. You'll be responsible for building scalable web applications using React and TypeScript, collaborating with designers and backend engineers to deliver exceptional user experiences.",
// //     requirements: ["5+ years experience", "TypeScript proficiency", "UI/UX design sense"],
// //     postedDate: "2024-08-25",
// //     applications: 12
// //   },
// //   {
// //     id: "2",
// //     title: "Marketing Manager",
// //     department: "Marketing",
// //     location: "Remote",
// //     type: "Full-time",
// //     salary: "$80,000 - $100,000",
// //     description: "Join our marketing team to drive growth and brand awareness. Lead digital marketing campaigns, analyze performance metrics, and develop strategies to attract and retain customers in a fast-paced environment.",
// //     requirements: ["3+ years marketing experience", "Digital marketing expertise", "Analytics skills"],
// //     postedDate: "2024-08-26",
// //     applications: 9
// //   }
// // ];

// // export default function JobsPostPage() {
// //   const [openMenuId, setOpenMenuId] = useState<string | null>(null);

// //   const toggleMenu = (jobId: string) => {
// //     setOpenMenuId(openMenuId === jobId ? null : jobId);
// //   };

// //   const handleStopApplications = (jobId: string) => {
// //     console.log(`Stop taking applications for job ${jobId}`);
// //     setOpenMenuId(null);
// //     // Add your actual logic here
// //   };

// //   const handleDeleteJob = (jobId: string) => {
// //     console.log(`Delete job ${jobId}`);
// //     setOpenMenuId(null);
// //     // Add your actual logic here
// //   };

// //   const handleApplyViaForm = (jobId: string) => {
// //     console.log(`Apply via form for job ${jobId}`);
// //     setOpenMenuId(null);
// //     // Add your actual logic here
// //   };

// //   // Close menu when clicking outside
// //   const handleClickOutside = () => {
// //     setOpenMenuId(null);
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-gray-50">
// //       {/* Sidebar */}
// //       <Sidebar />
      
// //     <div className="min-h-screen bg-gray-50 p-6">
      
// //       {/* Header with updated color scheme */}
// //       <div className="mb-8">
// //         <h1 className="text-3xl font-bold text-gray-900">Job Postings</h1>
// //         <p className="text-gray-600 mt-2">Create and manage job openings with custom application forms</p>
// //       </div>

      

// //       {/* Job Postings Section */}
// //       <div className="bg-white rounded-lg shadow-sm border p-6">
// //         <div className="flex justify-between items-center mb-6">
// //           <div>
// //             <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
// //             <p className="text-gray-600">Create and manage job openings with custom application forms</p>
// //           </div>
// //           <Link 
// //             href="/jobPosts/create"
// //             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
// //           >
// //             Create Job Post
// //           </Link>
// //         </div>

// //         {/* Search Bar */}
// //         <div className="mb-6">
// //           <div className="relative max-w-md">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //             />
// //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //               <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //               </svg>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Job Listings */}
// //         <div className="space-y-6">
// //           {jobPostings.map((job) => (
// //             <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
// //               <div className="flex justify-between items-start">
// //                 <div className="flex-1">
// //                   <div className="flex items-start justify-between">
// //                     <div>
// //                       <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
// //                       <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
// //                         <span className="bg-gray-100 px-2 py-1 rounded">{job.department}</span>
// //                         <span>{job.location}</span>
// //                         <span>{job.type}</span>
// //                         <span className="font-semibold">{job.salary}</span>
// //                       </div>
// //                     </div>
                    
// //                     {/* Action Menu */}
// //                     <div className="relative">
// //                       <button 
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           toggleMenu(job.id);
// //                         }}
// //                         className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //                       >
// //                         <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
// //                         </svg>
// //                       </button>
                      
// //                       {/* Dropdown Menu */}
// //                       {openMenuId === job.id && (
// //                         <div 
// //                           className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10"
// //                           onClick={(e) => e.stopPropagation()}
// //                         >
// //                           <button 
// //                             onClick={() => handleApplyViaForm(job.id)}
// //                             className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                           >
// //                             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                             </svg>
// //                             Apply via Form
// //                           </button>
// //                           <button 
// //                             onClick={() => handleStopApplications(job.id)}
// //                             className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                           >
// //                             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                             </svg>
// //                             Stop Taking Applications
// //                           </button>
// //                           <button 
// //                             onClick={() => handleDeleteJob(job.id)}
// //                             className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
// //                           >
// //                             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// //                             </svg>
// //                             Delete Job
// //                           </button>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="mt-4">
// //                     <h4 className="font-semibold mb-2">Requirements:</h4>
// //                     <ul className="list-disc list-inside space-y-1">
// //                       {job.requirements.map((req, index) => (
// //                         <li key={index} className="text-gray-600">{req}</li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
// //                 <div className="text-sm text-gray-500">
// //                   Posted: {job.postedDate} • {job.applications} applications
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
// //                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
// //                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                     </svg>
// //                     Published
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Overlay to close menu when clicking outside */}
// //       {openMenuId && (
// //         <div 
// //           className="fixed inset-0 z-0"
// //           onClick={handleClickOutside}
// //         />
// //       )}
// //     </div>
// //     </div>
// //   );
// // }

// "use client";

// import Link from 'next/link';
// import { useState } from 'react';
// import Sidebar from "../components/Sidebar/Sidebar";

// interface JobPosting {
//   id: string;
//   title: string;
//   department: string;
//   location: string;
//   type: string;
//   salary: string;
//   description: string;
//   requirements: string[];
//   postedDate: string;
//   applications: number;
// }

// const jobPostings: JobPosting[] = [
//   {
//     id: "1",
//     title: "Senior Frontend Developer",
//     department: "Engineering",
//     location: "San Francisco, CA",
//     type: "Full-time",
//     salary: "$120,000 - $150,000",
//     description: "We are looking for a senior frontend developer to join our growing team. You'll be responsible for building scalable web applications using React and TypeScript, collaborating with designers and backend engineers to deliver exceptional user experiences.",
//     requirements: ["5+ years experience", "TypeScript proficiency", "UI/UX design sense"],
//     postedDate: "2024-08-25",
//     applications: 12
//   },
//   {
//     id: "2",
//     title: "Marketing Manager",
//     department: "Marketing",
//     location: "Remote",
//     type: "Full-time",
//     salary: "$80,000 - $100,000",
//     description: "Join our marketing team to drive growth and brand awareness. Lead digital marketing campaigns, analyze performance metrics, and develop strategies to attract and retain customers in a fast-paced environment.",
//     requirements: ["3+ years marketing experience", "Digital marketing expertise", "Analytics skills"],
//     postedDate: "2024-08-26",
//     applications: 9
//   }
// ];

// export default function JobsPostPage() {
//   const [openMenuId, setOpenMenuId] = useState<string | null>(null);

//   const toggleMenu = (jobId: string) => {
//     setOpenMenuId(openMenuId === jobId ? null : jobId);
//   };

//   const handleStopApplications = (jobId: string) => {
//     console.log(`Stop taking applications for job ${jobId}`);
//     setOpenMenuId(null);
//   };

//   const handleDeleteJob = (jobId: string) => {
//     console.log(`Delete job ${jobId}`);
//     setOpenMenuId(null);
//   };

//   const handleApplyViaForm = (jobId: string) => {
//     console.log(`Apply via form for job ${jobId}`);
//     setOpenMenuId(null);
//   };

//   const handleClickOutside = () => {
//     setOpenMenuId(null);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Fixed Sidebar */}
//       <div className="fixed left-0 top-0 h-full z-30">
//         <Sidebar />
//       </div>

//       {/* Main Content with sidebar spacing */}
//       <div className="flex-1 ml-64"> {/* Adjust ml-64 based on your sidebar width */}
//         <div className="min-h-screen bg-gray-50 p-6">
          
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Job Postings</h1>
//             <p className="text-gray-600 mt-2">Create and manage job openings with custom application forms</p>
//           </div>

//           {/* Job Postings Section */}
//           <div className="bg-white rounded-lg shadow-sm border p-6">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
//                 <p className="text-gray-600">Create and manage job openings with custom application forms</p>
//               </div>
//               <Link 
//                 href="/jobPosts/create"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Create Job Post
//               </Link>
//             </div>

//             {/* Search Bar */}
//             <div className="mb-6">
//               <div className="relative max-w-md">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Job Listings */}
//             <div className="space-y-6">
//               {jobPostings.map((job) => (
//                 <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
//                           <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
//                             <span className="bg-gray-100 px-2 py-1 rounded">{job.department}</span>
//                             <span>{job.location}</span>
//                             <span>{job.type}</span>
//                             <span className="font-semibold">{job.salary}</span>
//                           </div>
//                         </div>
                        
//                         {/* Action Menu */}
//                         <div className="relative">
//                           <button 
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               toggleMenu(job.id);
//                             }}
//                             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           >
//                             <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                             </svg>
//                           </button>
                          
//                           {/* Dropdown Menu */}
//                           {openMenuId === job.id && (
//                             <div 
//                               className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               <button 
//                                 onClick={() => handleApplyViaForm(job.id)}
//                                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                               >
//                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 Apply via Form
//                               </button>
//                               <button 
//                                 onClick={() => handleStopApplications(job.id)}
//                                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                               >
//                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 Stop Taking Applications
//                               </button>
//                               <button 
//                                 onClick={() => handleDeleteJob(job.id)}
//                                 className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
//                               >
//                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                 </svg>
//                                 Delete Job
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="mt-4">
//                         <h4 className="font-semibold mb-2">Requirements:</h4>
//                         <ul className="list-disc list-inside space-y-1">
//                           {job.requirements.map((req, index) => (
//                             <li key={index} className="text-gray-600">{req}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
//                     <div className="text-sm text-gray-500">
//                       Posted: {job.postedDate} • {job.applications} applications
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                         <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         Published
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Overlay to close menu when clicking outside */}
//           {openMenuId && (
//             <div 
//               className="fixed inset-0 z-20"
//               onClick={handleClickOutside}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from 'next/link';
import { useState } from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar3";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applications: number;
}

const jobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We are looking for a senior frontend developer to join our growing team. You'll be responsible for building scalable web applications using React and TypeScript, collaborating with designers and backend engineers to deliver exceptional user experiences.",
    requirements: ["5+ years experience", "TypeScript proficiency", "UI/UX design sense"],
    postedDate: "2024-08-25",
    applications: 12
  },
  {
    id: "2",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    description: "Join our marketing team to drive growth and brand awareness. Lead digital marketing campaigns, analyze performance metrics, and develop strategies to attract and retain customers in a fast-paced environment.",
    requirements: ["3+ years marketing experience", "Digital marketing expertise", "Analytics skills"],
    postedDate: "2024-08-26",
    applications: 9
  }
];

export default function JobsPostPage() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (jobId: string) => {
    setOpenMenuId(openMenuId === jobId ? null : jobId);
  };

  const handleStopApplications = (jobId: string) => {
    console.log(`Stop taking applications for job ${jobId}`);
    setOpenMenuId(null);
  };

  const handleDeleteJob = (jobId: string) => {
    console.log(`Delete job ${jobId}`);
    setOpenMenuId(null);
  };

  const handleApplyViaForm = (jobId: string) => {
    console.log(`Apply via form for job ${jobId}`);
    setOpenMenuId(null);
  };

  const handleClickOutside = () => {
    setOpenMenuId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Responsive margin for sidebar */}
        <div className="pt-15 flex-1 lg:ml-64 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
            {/* Page Title - Responsive spacing */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Job Postings</h2>
              <p className="text-gray-600 mt-1 lg:mt-2">Create and manage job openings with custom application forms</p>
            </div>

            {/* Job Postings Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
                  <p className="text-gray-600">Create and manage job openings with custom application forms</p>
                </div>
                <Link 
                  href="/jobPosts/create"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Job Post
                </Link>
              </div>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="space-y-6">
                {jobPostings.map((job) => (
                  <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <span className="bg-gray-100 px-2 py-1 rounded">{job.department}</span>
                              <span>{job.location}</span>
                              <span>{job.type}</span>
                              <span className="font-semibold">{job.salary}</span>
                            </div>
                          </div>
                          
                          {/* Action Menu */}
                          <div className="relative">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu(job.id);
                              }}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </button>
                            
                            {/* Dropdown Menu */}
                            {openMenuId === job.id && (
                              <div 
                                className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button 
                                  onClick={() => handleApplyViaForm(job.id)}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                >
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Apply via Form
                                </button>
                                <button 
                                  onClick={() => handleStopApplications(job.id)}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                >
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Stop Taking Applications
                                </button>
                                <button 
                                  onClick={() => handleDeleteJob(job.id)}
                                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                                >
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Delete Job
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="text-gray-600">{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500">
                        Posted: {job.postedDate} • {job.applications} applications
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Published
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay to close menu when clicking outside */}
            {openMenuId && (
              <div 
                className="fixed inset-0 z-20"
                onClick={handleClickOutside}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}