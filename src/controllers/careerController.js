import Career from "../models/Career.js";

export const create = async (req, res) => {
  const item = await Career.create(req.body);
  res.json(item);
};

export const getAll = async (req, res) => {
  const data = await Career.find().sort({ startYear: -1 });
  res.json(data);
};

export const update = async (req, res) => {
  const updated = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Career.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};