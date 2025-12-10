"use client";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar3";
import { useEffect, useState } from "react";

// ===============================
// INTERFACE
// ===============================
interface ProcessedVideo {
  _id: string;
  video_title: string;

  emotions: {
    most_common: string;
    emotion_counts: Record<string, number>;
  };

  speech: {
    filler_ratio: number;
    pause_ratio: number;
    speech_rate_wpm: number;
    total_time: number;
    voiced_time: number;
  };

  attention: {
    attention_score: number;
    attentive_time: number;
    total_time: number;
  };
}

// ===============================
// COMPONENT
// ===============================
export default function InterviewResults() {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch("/api/interview/processedinterview");
      const data = await res.json();
      console.log("Fetched:", data);
      setVideos(data);
    }
    fetchVideos();
  }, []);

  if (!videos.length) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#F5F6FF]">
      <Navbar />

      <div className=" flex">
        <Sidebar />

        <div className="pt-15 flex-1 lg:ml-64 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
            
            {/* Page Title */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Interview Result </h2>
            </div>

            {videos.map((vid) => {
              const initials = (vid.video_title ?? "NA")
                .substring(0, 2)
                .toUpperCase();

              // ---- Emotion Percentages ----
              const totalEmotions = Object.values(
                vid.emotions.emotion_counts
              ).reduce((sum, val) => sum + val, 0);

              const emotionPercentage = Object.entries(
                vid.emotions.emotion_counts
              )
                .map(([label, count]) => ({
                  label,
                  percent: (count / totalEmotions) * 100,
                }))
                .filter((e) => e.percent >= 1); // REMOVE <1%

              // ---- Speech Metrics ----
              const fillerPercent = (vid.speech.filler_ratio * 100).toFixed(1);
              const pausePercent = (vid.speech.pause_ratio * 100).toFixed(1);
              const voicedPercent = (
                (vid.speech.voiced_time / vid.speech.total_time) *
                100
              ).toFixed(1);

              const speechRatePercent = Math.min(
                (vid.speech.speech_rate_wpm / 300) * 100,
                100
              ).toFixed(1);

              // ---- Attention ----
              const attentiveRatio = (
                (vid.attention.attentive_time / vid.attention.total_time) *
                100
              ).toFixed(1);

              return (
                <div key={vid._id} className="bg-white p-6 rounded-xl shadow mb-10">

                  {/* ========================== HEADER ========================== */}
                  <div className="flex gap-4 mb-6 items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">
                      {initials}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">{vid.video_title}</h2>
                      <p className="text-gray-500 text-sm">Processed Interview Summary</p>
                    </div>

                    {/* Confirm / Reject Buttons */}
                    <div className="ml-auto flex gap-2">
                      <button className="px-4 py-2 bg-green-100 text-green-700 border border-green-400 rounded-lg hover:bg-green-200">
                        Confirm
                      </button>

                      <button className="px-4 py-2 bg-red-100 text-red-700 border border-red-400 rounded-lg hover:bg-red-200">
                        Reject
                      </button>
                    </div>
                  </div>

                  {/* ========================== EMOTION BREAKDOWN ========================== */}
                  <h3 className="font-semibold mb-3 text-lg">Emotion Breakdown (%)</h3>

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

                  {/* ========================== SPEECH ANALYSIS ========================== */}
                  <h3 className="font-semibold mt-6 text-lg">Speech Analysis (%)</h3>

                  <div className="grid grid-cols-2 gap-4 text-gray-700 mt-2">
                    <p>Filler Ratio: <strong>{fillerPercent}%</strong></p>
                    <p>Pause Ratio: <strong>{pausePercent}%</strong></p>
                    <p>Voiced Time: <strong>{voicedPercent}%</strong></p>
                    <p>Speech Rate Score: <strong>{speechRatePercent}%</strong></p>
                  </div>

                  {/* ========================== ATTENTION ANALYSIS ========================== */}
                  <h3 className="font-semibold mt-6 text-lg">Attention Analysis (%)</h3>

                  <div className="grid grid-cols-2 gap-4 text-gray-700 mt-2">
                    <p>Attentive Duration Ratio: <strong>{attentiveRatio}%</strong></p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
