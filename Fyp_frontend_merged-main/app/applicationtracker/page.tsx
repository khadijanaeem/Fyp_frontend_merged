import ApplicationForm from "../components/applicationtracker/applicationform"
import ProgressTracker from "../components/applicationtracker/progresstracker";
import InterviewDetails from "../components/applicationtracker/interviewdetails";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold text-center">
          Application Progress Tracker
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Track your job application journey
        </p>

        <ApplicationForm />
        <ProgressTracker />
        <InterviewDetails />
      </main>
    </div>
  );
}
