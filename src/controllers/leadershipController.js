import Leadership from "../models/Leadership.js";

// CREATE
export const create = async (req, res) => {
  const item = await Leadership.create(req.body);
  res.json(item);
};

// GET ALL (SORTED BY YEAR DESC)
export const getAll = async (req, res) => {
  const data = await Leadership.find().sort({ startYear: -1 });
  res.json(data);
};

// DELETE
export const deleteItem = async (req, res) => {
  await Leadership.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};