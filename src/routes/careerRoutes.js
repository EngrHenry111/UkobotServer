import express from "express";
import * as ctrl from "../controllers/careerController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, ctrl.create);
router.get("/", ctrl.getAll);
router.put("/:id", protect, ctrl.update);
router.delete("/:id", protect, ctrl.remove);

export default router;