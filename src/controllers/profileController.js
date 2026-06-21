import Profile from "../models/Profile.js";

/* CREATE */
export const create = async (req, res) => {
  const item = await Profile.create({
    ...req.body,
    image: req.file?.path
  });
  res.json(item);
};

/* GET ALL */
export const getAll = async (req, res) => {
  const data = await Profile.find().sort({ createdAt: -1 });
  res.json(data);
};

/* GET ONE */
export const getOne = async (req, res) => {
  const item = await Profile.findById(req.params.id);
  res.json(item);
};

/* UPDATE */
export const update = async (req, res) => {
  const updated = await Profile.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      ...(req.file && { image: req.file.path })
    },
    { new: true }
  );
  res.json(updated);
};

/* DELETE */
export const remove = async (req, res) => {
  await Profile.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};