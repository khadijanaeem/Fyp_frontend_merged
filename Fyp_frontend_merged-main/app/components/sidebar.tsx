"use client";
import { Calendar, Users, ClipboardList, BarChart3, FileText, DollarSign, Clock, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#5B6FED] text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 min-h-screen bg-[#EEF1FB] flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          {/* Logo */}
          <div className="p-6 flex items-center space-x-2">
            <div className="bg-[#5B6FED] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">HR</div>
            <div>
              <h1 className="text-lg font-semibold text-[#5B6FED]">EmpowHR</h1>
              <p className="text-xs text-gray-500">Performance Suite</p>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="mt-4 space-y-2 text-sm">
            <Link 
              href="#" 
              className="flex items-center px-6 py-2 hover:bg-[#1029c9] hover:text-white text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4 mr-3" /> Recruitment
            </Link>
            <Link 
              href="#" 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <ClipboardList className="w-4 h-4 mr-3" /> Shortlisted
            </Link>
            <Link 
              href="/questionnaire" 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-4 h-4 mr-3" /> Questionnaire
            </Link>
            <Link 
              href="/questionnaire" 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Clock className="w-4 h-4 mr-3" /> Meeting Schedule
            </Link>
            <Link 
              href='/performanceReport' 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <BarChart3 className="w-4 h-4 mr-3" /> Scorecards
            </Link>
            <Link 
              href="/jobPosts" 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <ClipboardList className="w-4 h-4 mr-3" /> Jobs & Forms
            </Link>
            <Link 
              href="/increments" 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <DollarSign className="w-4 h-4 mr-3" /> Increments
            </Link>
            <Link 
              href="/viewschedule" 
              className="flex items-center px-6 py-2 hover:bg-[#dce0fa] text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Clock className="w-4 h-4 mr-3" /> Meeting Schedule
            </Link>
          </nav>
        </div>

        {/* Schedule Meeting Button */}
        <div className="p-4">
          <Link 
            href="#" 
            className="flex items-center justify-center w-full bg-[#5B6FED] text-white py-2 rounded-lg hover:bg-[#4a5cde]"
            onClick={() => setIsOpen(false)}
          >
            <Calendar className="w-4 h-4 mr-2" /> Schedule Meeting
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
