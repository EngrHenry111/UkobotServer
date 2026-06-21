import News from "../models/News.js";


// ✅ CREATE NEWS
export const createNews = async (req, res) => {
  try {
    const { title, content } = req.body;

    const news = await News.create({
      title,
      content,
      image: req.file ? req.file.path : "", // 🔥 Cloudinary URL
    });

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET ALL NEWS
export const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET SINGLE NEWS
export const getSingleNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ UPDATE NEWS
export const updateNews = async (req, res) => {
  try {
    const { title, content } = req.body;

    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    news.title = title || news.title;
    news.content = content || news.content;

    if (req.file) {
      news.image = req.file.path; // 🔥 update image
    }

    const updated = await news.save();

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ DELETE NEWS
export const deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    await news.deleteOne();

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};