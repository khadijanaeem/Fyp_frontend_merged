import mongoose from "mongoose";

const ProcessedVideoSchema = new mongoose.Schema(
  {
    video_title: String,
    video_url: String,

    emotions: {
      most_common: String,
      emotion_counts: Object,
      negative_detected: [String],
    },

    speech: {
      transcript: String,
      classic_fillers: Object,
      repeated_word_fillers: Array,
      total_fillers: Number,
      voiced_time: Number,
      silence_time: Number,
      total_time: Number,
      speech_rate_wpm: Number,
      pause_ratio: Number,
      filler_ratio: Number,
    },

    attention: {
      attention_score: Number,
      attentive_time: Number,
      total_time: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ProcessedVideo ||
  mongoose.model("processed_videos", ProcessedVideoSchema);
