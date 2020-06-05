const router = require("express").Router();
const postRoutes = require("./post");
const path = require("path");

// API routes
router.use("/api/post", postRoutes);
// If no API routes are hit, send the React app
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
module.exports = router;
