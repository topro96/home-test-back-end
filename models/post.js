const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
  },
  author: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  comments: {
    type: [String],
  },
  link: {
      type: String,
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
