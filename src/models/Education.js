import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    school: {
      type: String,
      required: true,
      trim: true,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
    },

    startYear: {
      type: Number,
      required: true,
    },

    endYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Education",
  educationSchema
);

