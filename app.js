import express from "express";
import cors from "cors";

import authRoutes from "./src/routes/authRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";
import educationRoutes from "./src/routes/educationRoutes.js";
import careerRoutes from "./src/routes/careerRoutes.js";
import skillRoutes from "./src/routes/skillRoutes.js";
import achievementRoutes from "./src/routes/achievementRoutes.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import galleryRoutes from "./src/routes/galleryController.js";
import leadershipRoutes from "./src/routes/leadershipRoutes.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import sitemapRoutes from "./src/routes/sitemap.js";




const app = express();

app.use(cors());
app.use(express.json());


app.use(helmet());


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://rt-hon-asuakak-k2o9.vercel.app"
  ],
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);


app.use("/", sitemapRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/skill", skillRoutes);
app.use("/api/achievement", achievementRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/leadership", leadershipRoutes);




export default app;