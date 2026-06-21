import Education from "../models/Education.js";

export const create = async (req, res) => {
  try {
    const education = await Education.create(req.body);

    res.status(201).json(education);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {

    const education = await Education.find()
      .sort({
        endYear: -1,
        createdAt: -1,
      });

    res.json(education);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {

    const updated = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
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

export const remove = async (req, res) => {
  try {

    await Education.findByIdAndDelete(
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

