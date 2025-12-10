"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow flex items-center justify-between border-b px-6 py-3 bg-white shadow-sm">
      <h2 className="text-lg font-semibold">Schedule Meeting</h2>
       <Link 
        href="/schedule" 
        className="bg-[#5B6FED] text-white px-4 py-2 rounded-full text-sm hover:bg-[#4a5cde] transition-colors"
      >
        Book new meeting
      </Link>
    </div>
  );
}
