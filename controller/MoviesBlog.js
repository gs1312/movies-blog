const MovieBlog = require("../model/MoviesBlog");

//@desc - Get all Movies Blog
//@route - GET /
//@access - Public
exports.getBlogs = async (req, res) => {
  try {
    const movieBlogs = await MovieBlog.find();
    res.status(200).json({
      success: true,
      count: movieBlogs.length,
      data: movieBlogs,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc - Create new Movie Blog
//@route - POST /
//@access - Private
exports.createBlog = async (req, res) => {
  try {
    const movieblog = await MovieBlog.create(req.body);
    res.status(201).json({
      success: true,
      message: "Blog Created Successfully!!!",
      data: movieblog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc - Delete a Movie Blog
//@route - DELETE /:id
//@access - Private
exports.deleteBlog = async (req, res) => {
  try {
    console.log(req.params.id);
    const movieblog = await MovieBlog.findByIdAndDelete(req.params.id);
    if (!movieblog) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      succes: true,
      message: "Blog Deleted Successfully!!!",
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
