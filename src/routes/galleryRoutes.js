import express from "express";
import upload from "../middleware/upload.js";
import * as ctrl from "../controllers/galleryController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();


// Public Routes
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getOne);


// Protected Routes
router.post(
  "/",
  protect,
  upload.single("image"),
  ctrl.create
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  ctrl.update
);

router.delete(
  "/:id",
  protect,
  ctrl.remove
);

export default router;