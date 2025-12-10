"use client";

import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
  activeTab: "signin" | "signup";
}

export default function AuthCard({ children, activeTab }: AuthCardProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
      {/* Tabs */}
      <div className="flex mb-6">
        <a
          href="/signin"
          className={`w-1/2 text-center py-2 rounded-lg font-medium ${
            activeTab === "signin"
              ? "bg-indigo-100 text-indigo-600"
              : "text-gray-500"
          }`}
        >
          Sign In
        </a>

        <a
          href="/signup"
          className={`w-1/2 text-center py-2 rounded-lg font-medium ${
            activeTab === "signup"
              ? "bg-indigo-100 text-indigo-600"
              : "text-gray-500"
          }`}
        >
          Sign Up
        </a>
      </div>

      {children}
    </div>
  );
}