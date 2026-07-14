import Profile from "../models/Profile.js";

/* CREATE */
export const create = async (req, res) => {
  try {

    const item = await Profile.create({
      ...req.body,
      image: req.file?.path || ""
    });

    res.status(201).json({
      success: true,
      message: "Profile created successfully.",
      data: item
    });

  } catch (err) {

    console.error("PROFILE CREATE ERROR:", err);

    res.status(500).json({
      success: false,
      message: "Failed to create profile.",
      error: err.message
    });

  }
};

/* GET ALL */
export const getAll = async (req, res) => {
  try {

    const data = await Profile.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch profiles."
    });

  }
};

/* GET ONE */
export const getOne = async (req, res) => {

  try {

    const item = await Profile.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Profile not found."
      });
    }

    res.json({
      success: true,
      data: item
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch profile."
    });

  }

};

/* UPDATE */
export const update = async (req, res) => {

  try {

    const updated = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(req.file && { image: req.file.path })
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Profile not found."
      });
    }

    res.json({
      success: true,
      message: "Profile updated successfully.",
      data: updated
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to update profile.",
      error: err.message
    });

  }

};

/* DELETE */
export const remove = async (req, res) => {

  try {

    const deleted = await Profile.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Profile not found."
      });
    }

    res.json({
      success: true,
      message: "Profile deleted successfully."
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Failed to delete profile."
    });

  }

};