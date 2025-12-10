"use client";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow w-full bg-white shadow-sm border-b-2 border-black">
      <div className="max-w-9xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side: Logo + Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.jpeg" // replace with your logo path
            alt="EmpowHR Logo"
            width={28}
            height={28}
          />
          <span className="text-xl font-semibold text-[#5B6FED]">EmpowHR</span>
        </div>

        {/* Right Side: Navigation */}
        <div className="flex items-center space-x-8 text-black text-lg">
          <Link href="/" className="hover:text-gray-600 transition">
            Home
          </Link>
         
          
        </div>
      </div>
    </nav>
  );
}
