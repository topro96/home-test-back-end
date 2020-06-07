const Post = require("../models/post");

// Defining all methods and business logic for routes
module.exports = {
  getPosts: function (req, res) {
    Post.find().sort( req.query.sort).find()
      .skip(parseInt(req.query.skip))
      .limit(parseInt(req.query.limit))
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
  },
  count: function (req, res) {
    Post.count({})
      .then((count) => res.json(count))
      .catch((err) => res.status(400).json("Error: " + err));
  },
};
