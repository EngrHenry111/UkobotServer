import express from "express";
import {
  createNews,
  getNews,
  getSingleNews,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js";

import protect  from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getNews);
router.get("/:id", getSingleNews);

router.post("/", protect, upload.single("image"), createNews);
router.put("/:id", protect, upload.single("image"), updateNews);
router.delete("/:id", protect, deleteNews);

export default router;