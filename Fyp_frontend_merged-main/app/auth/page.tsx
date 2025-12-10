"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function AuthPage() {
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <div className="min-h-screen bg-[#EEF2FF] flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center mt-10 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.jpeg" width={45} height={45} alt="EmpowHR" />
          <span className="text-3xl font-bold text-[#5B6FED]">EmpowHR</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-4 text-gray-900">
          Welcome to EmpowHR
        </h1>
        <p className="text-gray-500 mt-2">
          Transform your HR management experience with AI
        </p>

        {/* AI Badge */}
        <div className="text-[#5B6FED] bg-white px-4 py-1 rounded-full shadow mt-4 border border-gray-200">
          ✨ Powered by AI Innovation
        </div>

        {/* AUTH CARD */}
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg mt-8 p-6">
          {/* TABS */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            <button
              onClick={() => setTab("signin")}
              className={`flex-1 py-2 rounded-full text-center font-medium transition ${
                tab === "signin"
                  ? "bg-white shadow text-[#5B6FED]"
                  : "text-gray-500"
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setTab("signup")}
              className={`flex-1 py-2 rounded-full text-center font-medium transition ${
                tab === "signup"
                  ? "bg-white shadow text-[#5B6FED]"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* FORM CONTENT ANIMATIONS */}
          <AnimatePresence mode="wait">
            {tab === "signin" ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                {/* SIGN IN FORM */}
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#5B6FED] text-white py-3 rounded-lg font-medium hover:bg-[#4A56D4] transition"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-4 text-center text-gray-500">
                  Or continue with
                </div>

                <button className="w-full border rounded-lg py-3 mt-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="Google"
                />
                  Google
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                {/* SIGN UP FORM */}
                <form className="space-y-4">

                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                      />
                    </div>

                    <div className="w-1/2">
                      <label className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Name"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#5B6FED]"
                    />
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-1" />
                    I agree to the{" "}
                    <a className="text-[#5B6FED]" href="#">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a className="text-[#5B6FED]" href="#">
                      Privacy Policy
                    </a>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#5B6FED] text-white py-3 rounded-lg font-medium hover:bg-[#4A56D4] transition"
                  >
                    Create Account
                  </button>
                </form>

                <div className="mt-4 text-center text-gray-500">
                  Or continue with
                </div>

                <button className="w-full border rounded-lg py-3 mt-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="Google"
                />
                  Google
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
