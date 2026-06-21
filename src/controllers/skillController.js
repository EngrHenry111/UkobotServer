import Skill from "../models/Skill.js";

export const create = async (req, res) => {
  try {
    const { name, percentage } = req.body;

    if (percentage < 0 || percentage > 100) {
      return res.status(400).json({
        message: "Percentage must be between 0 and 100",
      });
    }

    const skill = await Skill.create({
      name,
      percentage,
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ percentage: -1 });

    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};