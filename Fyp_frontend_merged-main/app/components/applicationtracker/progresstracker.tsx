"use client";
import { CheckCircle, Circle, Loader2 } from "lucide-react";

export default function ProgressTracker() {
  const stages = [
    { title: "Application Submitted", status: "completed" },
    { title: "Email Update Sent", status: "completed" },
    { title: "Shortlisted", status: "completed" },
    { title: "Interview Call", status: "inprogress" },
    { title: "Interview Results Sent", status: "pending" },
    { title: "Final Result", status: "pending" },
  ];

  return (
    <section className="mt-10">
      <h3 className="text-xl font-semibold text-center">Application Progress</h3>
      <p className="text-center text-gray-500 mb-6">
        Position: Frontend Developer | Application ID: APP-12345
      </p>

      <div className="flex justify-between items-center relative">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2 
                ${
                  stage.status === "completed"
                    ? "bg-[#5B6FED] text-white border-[#5B6FED]"
                    : stage.status === "inprogress"
                    ? "border--[#5B6FED]0 text-[#5B6FED]"
                    : "border-gray-300 text-gray-400"
                }`}
            >
              {stage.status === "completed" ? (
                <CheckCircle className="w-5 h-5" />
              ) : stage.status === "inprogress" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </div>
            <p className="text-sm font-medium text-gray-700">{stage.title}</p>
            <p className="text-xs text-gray-500">
              {stage.status === "completed"
                ? "✓ Completed"
                : stage.status === "inprogress"
                ? "In Progress"
                : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
