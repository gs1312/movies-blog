const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [6, "name must have min. 6 characters"],
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 6,
    unique: true,
    match: [
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
      "Please Enter valid Email",
    ],
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: [6, "Password must have min. 6 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
