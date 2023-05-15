const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const isPasswordCorrect = await user.comparePassword(password);
  const token = user.createJWT();

  // if the user does not enter a passowrd or email throw new error
  if (!email || !password) {
    throw new Error("Please provide email and password");
  }

  // if the user does not exist in database throw new error
  if (!user) {
    throw new Error("Invalid Credentials");
  }

  // if the password is incorrect throw new error
  if (!isPasswordCorrect) {
    throw new Error("Invalid Password");
  }

  // compare password
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      token,
    },
  });
};

// update user credentials
const updateUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ _id: req.user.userId });

  if (!email) {
    throw new Error("Please provide an email");
  }

  user.email = email;

  await user.save();
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      token,
    },
  });
};

module.exports = {
  register,
  login,
  updateUser,
};
