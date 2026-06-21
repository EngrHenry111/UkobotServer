import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  title: String,
  startYear: String,
  endYear: String,
  description: String,
}, { timestamps: true });

export default mongoose.model("Career", careerSchema);