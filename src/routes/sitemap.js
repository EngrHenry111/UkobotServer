import express from "express";
import { SitemapStream, streamToPromise } from "sitemap";

const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://rt-hon-asuakak-k2o9.vercel.app"
    });

    // STATIC PAGES
    smStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
    smStream.write({ url: "/news", changefreq: "daily", priority: 0.8 });

    // 🔥 OPTIONAL: dynamic pages later (news, etc)

    smStream.end();

    const sitemap = await streamToPromise(smStream);

    res.header("Content-Type", "application/xml");
    res.send(sitemap.toString());

  } catch (err) {
    res.status(500).end();
  }
});

export default router;