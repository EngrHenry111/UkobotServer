import Profile from "../models/Profile.js";

/* CREATE */
// export const create = async (req, res) => {
//   try {

//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const item = await Profile.create({
//       ...req.body,
//       image: req.file?.path || ""
//     });

//     res.json(item);

//   } catch (error) {

//     console.error("PROFILE CREATE ERROR:", error);

//     res.status(500).json({
//       message: error.message
//     });
//   }
// };

export const create = async (req, res) => {
  try {

    console.log("========================");
    console.log("BODY");
    console.log(req.body);

    console.log("========================");
    console.log("FILE");
    console.log(req.file);

    const item = await Profile.create({
      ...req.body,
      image: req.file?.path || ""
    });

    res.json(item);

  } catch (err) {

    console.log("========================");
    console.log(err);

    res.status(500).json({
      message: err.message
    });
  }
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
  try {

    const updated = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(req.file && {
          image: req.file.path
        })
      },
      { new: true }
    );

    res.json(updated);

  } catch (error) {

    console.error("PROFILE UPDATE ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

/* DELETE */
export const remove = async (req, res) => {
  await Profile.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};