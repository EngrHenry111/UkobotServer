import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  position: String,
  bio: String,
  vision: String,
  mission: String,
  image: String,
}, { timestamps: true });

export default mongoose.model("Profile", profileSchema);