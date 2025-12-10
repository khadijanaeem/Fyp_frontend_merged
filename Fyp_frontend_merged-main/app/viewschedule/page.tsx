"use client";
import Navbar from "../components/Navbar2";
import Sidebar from "../components/Sidebar/Sidebar"  
import MeetingFilter from "../components/Viewmeetings/Meetingfilters";
import MeetingList from "../components/Viewmeetings/MeetingList";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#F5F6FF]">
      {/* Sidebar hidden on mobile, shown on desktop */}
      <div className="hidden lg:block fixed left-0 top-0 h-full z-30">
        <Sidebar />
      </div>

      {/* Main content - full width on mobile, with margin on desktop */}
      <div className="lg:ml-64">
        <Navbar />

        <div className="p-4 sm:p-6 lg:p-8">
          

          <div className="pt-15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Scheduled Meetings
            </h2>
            <button className="bg-[#5B6FED] text-white px-4 py-2 rounded-md text-sm hover:bg-[#4a5cde] transition w-full sm:w-auto">
              View scheduled meetings
            </button>
          </div>

          <MeetingFilter />
          <MeetingList />
        </div>
      </div>
    </div>
  );
}