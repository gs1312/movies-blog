const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@desc - Create new User
//@route - POST /register
//@access - Public
exports.createUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ name: req.body.name });
    if (userExist) {
      res.status(400).send("Name Already Exists");
    }
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      res.status(400).send("Email Already Exists");
    }
    //Password Hashing

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "Account Created Successfully!! Go To login",
      user: user._id,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//@desc - Login
//@route - POST /login
//@access - Public
exports.login = async (req, res) => {
  //Checking if the Email Exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is Incorrect");

  //Checking if Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Paswword is Incorrect");

  //Create and Assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res
    .header("auth-token", token)
    .json({ message: "Logged In Successfully!!!", token: token });
};
