const Post = require("../models/post");

// Defining all methods and business logic for routes
module.exports = {
  getPosts: function (req, res) {
    Post.find().limit(parseInt(req.query.count))
      .then((posts) => res.json(posts))
      .catch((err) => res.status(422).json(err));
  },
  addPosts: function (req, res) {
    const newPost = new Post({
        name: req.body.name,
        author: req.body.author,
        comments: req.body.comments,
        link: req.body.link,
        date: req.body.date,
        points: req.body.points,
      });
      newPost
        .save()
        .then(() => res.json("Post added"))
        .catch((err) => res.status(400).json("Error: " + err));
  }
};