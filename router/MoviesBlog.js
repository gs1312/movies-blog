const express = require("express");
// const verify = require("../auth/verify");
const {
  getBlogs,
  createBlog,
  deleteBlog,
} = require("../controller/MoviesBlog");

const router = express.Router();

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").delete(deleteBlog);

module.exports = router;
