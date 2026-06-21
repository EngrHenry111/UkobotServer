import express from "express";
import * as ctrl from "../controllers/profileController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", protect, upload.single("image"), ctrl.create);
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getOne);
router.put("/:id", protect, upload.single("image"), ctrl.update);
router.delete("/:id", protect, ctrl.remove);

export default router;