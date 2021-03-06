const router = require("express").Router();
const postController = require("../controllers/postController");

router.route("/posts").get(postController.getPosts);

router.route("/").post(postController.addPosts);

router.route("/count").get(postController.count);

module.exports = router;
