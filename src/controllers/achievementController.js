
import Achievement from "../models/Achievements.js";

export const create = async (req, res) => {
  try {
    const { title, description, year } = req.body;

    const achievement = await Achievement.create({
      title,
      description,
      year,
    });

    res.status(201).json(achievement);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { title, description, year } = req.body;

    const updated = await Achievement.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        year,
      },
      {
        new: true,
      }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const achievements = await Achievement.find()
      .sort({
        year: -1,
        createdAt: -1,
      });

    res.json(achievements);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

