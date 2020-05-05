const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    default: null,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: [500, "Description can not be more than 500 characters."],
    default: null,
  },
  rating: {
    type: Number,
    minlength: [0, "Rating Can not be less than 0"],
    maxlength: [10, "Rating Can not be more than 5"],
  },
  cast: {
    type: String,
    maxlength: 50,
  },
  language: {
    type: String,
    maxlength: 10,
    default: "English/Hindi",
  },
  director: {
    type: String,
    required: true,
    maxlength: 20,
  },
  trailerLink: {
    type: String,
    default: "#",
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MoviesBlog", blogSchema);
