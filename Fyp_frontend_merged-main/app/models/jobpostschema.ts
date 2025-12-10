/*import mongoose, { Schema, models } from "mongoose";

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    requirements: { type: String },
  },
  { timestamps: true }
);

const Job = models.Job || mongoose.model("Job", JobSchema);
export default Job;
*/
// models/Job.ts
import mongoose, { Schema, model, models } from "mongoose";

const jobSchema = new Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  salary: String,
  posted: String,
  description: String,
  requirements: [String],
  perks: [String],
});

const Job = models.Job || model("Job", jobSchema);
export default Job;
