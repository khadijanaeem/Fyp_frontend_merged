"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar3";
import { useEffect, useState } from "react";

interface JobApp {
  _id: string;
  applicationId: string;
  formData?: {
    fullName?: string;
    email?: string;
    title?: string;
  };
  analysis?: {
    video_title: string;
    video_url: string;
    emotions?: {
      emotion_counts?: Record<string, number>;
      most_common?: string;
    };
    speech?: {
      filler_ratio: number;
      pause_ratio: number;
      speech_rate_wpm: number;
      total_time: number;
      voiced_time: number;
    };
    attention?: {
      attentive_time: number;
      total_time: number;
      attention_score: number;
    };
  };
}

export default function InterviewResults() {
  const [apps, setApps] = useState<JobApp[]>([]);

  useEffect(() => {
    async function fetchApps() {
      const res = await fetch("/api/interview/processedinterview");
      const data = await res.json();
      console.log("Fetched Applications:", data);
      setApps(data);
    }
    fetchApps();
  }, []);

  if (!apps.length) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#F5F6FF]">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="pt-15 flex-1 lg:ml-64 w-full">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h2 className="text-3xl font-bold mb-8">Interview Analysis</h2>

            {apps.map((app) => {
              const a = app.analysis;
              if (!a) return null;

              const initials = (app.formData?.fullName ?? "NA")
                .substring(0, 2)
                .toUpperCase();

              // ===================== EMOTIONS =====================
              const emotionCounts = a.emotions?.emotion_counts ?? {};
              const total = Object.values(emotionCounts).reduce(
                (sum, val) => sum + val,
                0
              );

              const emotionPercentage = Object.entries(emotionCounts)
                .map(([label, count]) => ({
                  label,
                  percent: total === 0 ? 0 : (count / total) * 100,
                }))
                .filter((e) => e.percent >= 1); // 🚀 REMOVE <1%

              // ===================== SPEECH METRICS =====================
              const fillerPercent = ((a.speech?.filler_ratio ?? 0) * 100).toFixed(1);
              const pausePercent = ((a.speech?.pause_ratio ?? 0) * 100).toFixed(1);
              const voicedPercent = a.speech
                ? (
                    (a.speech.voiced_time / a.speech.total_time) *
                    100
                  ).toFixed(1)
                : "0";
              const wpmScore = a.speech
                ? Math.min((a.speech.speech_rate_wpm / 300) * 100, 100).toFixed(1)
                : "0";

              // ===================== ATTENTION =====================
              const attentivePercent = a.attention
                ? (
                    (a.attention.attentive_time / a.attention.total_time) *
                    100
                  ).toFixed(1)
                : "0";

              return (
                <div
                  key={app._id}
                  className="bg-white p-6 rounded-xl shadow mb-10 border border-gray-200"
                >
                  {/* HEADER */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">
                      {initials}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {app.formData?.fullName} ({app.formData?.title})
                      </h3>
                      <p className="text-gray-500 text-sm">{a.video_title}</p>
                    </div>
                  </div>

                  {/* EMOTIONS */}
                  <h3 className="font-semibold mb-3">Emotion Breakdown (%)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {emotionPercentage.map(({ label, percent }) => (
                      <div key={label}>
                        <p className="text-sm capitalize text-gray-600">{label}</p>
                        <div className="w-full h-3 bg-gray-200 rounded-full">
                          <div
                            className="h-3 bg-indigo-500 rounded-full"
                            style={{ width: `${percent.toFixed(1)}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-500 text-xs">
                          {percent.toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* SPEECH */}
                  <h3 className="font-semibold mt-6">Speech Metrics (%)</h3>
                  <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <p>Filler Ratio: <strong>{fillerPercent}%</strong></p>
                    <p>Pause Ratio: <strong>{pausePercent}%</strong></p>
                    <p>Voiced Time: <strong>{voicedPercent}%</strong></p>
                    <p>Speech Rate Score: <strong>{wpmScore}%</strong></p>
                  </div>

                  {/* ATTENTION */}
                  <h3 className="font-semibold mt-6">Attention Analysis</h3>
                  <p className="text-gray-700">
                    Attentive Duration: <strong>{attentivePercent}%</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
