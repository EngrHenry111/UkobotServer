import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String, // Cloudinary URL
      default: "",
    },

    author: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true, // 🔥 adds createdAt
  }
);

export default mongoose.model("News", newsSchema);