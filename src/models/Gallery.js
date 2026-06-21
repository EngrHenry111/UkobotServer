import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Award",
        "Project",
        "Community",
        "Meeting",
        "Education",
        "Leadership",
      ],
      default: "Leadership",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Gallery",
  gallerySchema
);