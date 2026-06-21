import express from "express";
import protect from "../middleware/authMiddleware.js";
import { create, getAll, deleteItem } from "../controllers/leadershipController.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", protect, create);
router.delete("/:id", protect, deleteItem);

export default router;