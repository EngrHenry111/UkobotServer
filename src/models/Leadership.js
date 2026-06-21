import mongoose from "mongoose";

const leadershipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // e.g. "Executive Chairman"
    },
    organization: {
      type: String,
      required: true, // e.g. "Ibiono Ibom LGA"
    },
    startYear: {
      type: Number,
      required: true,
    },
    endYear: {
      type: Number, // can be null for "Present"
    },
    description: String,
    isCurrent: {
      type: Boolean,
      default: false,
    },
  },
  
  { timestamps: true }
);

export default mongoose.model("Leadership", leadershipSchema);