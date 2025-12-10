/*import Navbar from "@/app/components/Navbar";
import LoginButton from "@/app/components/login/LoginButton"
//import Calendar from "./components/schedulemeeting/Calender";
//import TestCalendar from "./components/testcalender/calender";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          <LoginButton/>
        </h1>
      </div>
    </>
  );
}
*/
import Navbar from "./components/Navbar";
// import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#EEF2FF]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-16 px-6">
        
        <div className="text-[#5B6FED] bg-white px-4 py-1 rounded-full shadow-sm text-sm font-medium border border-gray-200">
          ✨ Powered by AI Innovation
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
          Transform Your HR<br />Management Experience
        </h1>

        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Streamline hiring, build applications, manage performance reviews, 
          and empower your team with our comprehensive AI platform designed 
          for modern HR teams.
        </p>

        <div className="mt-8 flex space-x-4">
          <a
            href="/Shortlisted"
            className="px-6 py-3 bg-[#5B6FED] text-white rounded-lg shadow hover:bg-[#4A56D4] transition"
          >
            Get Started Free
          </a>
          <a
            href="/jobs"
            className="px-6 py-3 bg-white text-gray-700 border rounded-lg shadow hover:bg-gray-100 transition"
          >
            Browse Jobs
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mt-24 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Everything You Need for Modern HR
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Comprehensive tools to manage your entire hiring and performance process
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#5B6FED]">Job Management</h3>
            <p className="text-gray-600 mt-2">
              Post jobs, track applications, and manage the entire hiring pipeline effortlessly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#5B6FED]">Application Tracking</h3>
            <p className="text-gray-600 mt-2">
              Monitor every stage of your hiring process in a single dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#5B6FED]">Performance Reviews</h3>
            <p className="text-gray-600 mt-2">
              Conduct comprehensive evaluations and feedback efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#5B6FED]">Team Collaboration</h3>
            <p className="text-gray-600 mt-2">
              Seamless communication between HR and managers.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 bg-[#1F1F1F] text-white py-6 text-center">
        <p className="text-sm">© 2025 EmpowHR Platform. Built for modern HR teams.</p>
      </footer>

    </div>
  );
}