import Gallery from "../models/Gallery.js";


// CREATE EVENT
export const create = async (req, res) => {
  try {

    const {
      title,
      description,
      eventDate,
      location,
      category,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const gallery = await Gallery.create({
      image: req.file.path,
      title,
      description,
      eventDate,
      location,
      category,
    });

    res.status(201).json(gallery);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL EVENTS
export const getAll = async (req, res) => {
  try {

    const gallery = await Gallery.find()
      .sort({
        eventDate: -1,
        createdAt: -1,
      });

    res.json(gallery);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE EVENT
export const getOne = async (req, res) => {
  try {

    const gallery =
      await Gallery.findById(
        req.params.id
      );

    if (!gallery) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json(gallery);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE EVENT
export const update = async (req, res) => {
  try {

    const {
      title,
      description,
      eventDate,
      location,
      category,
    } = req.body;

    const existing =
      await Gallery.findById(
        req.params.id
      );

    if (!existing) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    const payload = {
      title,
      description,
      eventDate,
      location,
      category,
    };

    // update image only if new image uploaded
    if (req.file) {
      payload.image = req.file.path;
    }

    const updated =
      await Gallery.findByIdAndUpdate(
        req.params.id,
        payload,
        {
          new: true,
        }
      );

    res.json(updated);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE EVENT
export const remove = async (req, res) => {
  try {

    const gallery =
      await Gallery.findByIdAndDelete(
        req.params.id
      );

    if (!gallery) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json({
      message:
        "Event deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};