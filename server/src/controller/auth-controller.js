const SignUp = require("../model/auth-model");
const bcrypt = require("bcrypt");

const getSignUpData = async (req, res) => {
  try {
    const getUserSignUp = await SignUp.find({});

    if (!getUserSignUp) {
      res.status(404).json({
        message: "Users not found!",
      });
    } else {
      res.status(201).json({
        message: "Success.",
        length: getUserSignUp.length,
        users: getUserSignUp,
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Internal error!",
      error: err,
    });
  }
};

// ==========for sign up=========
const register = async (req, res) => {
  try {
    const { email, password, cPassword, role } = req.body;
    const userExist = await SignUp.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "email already exists",
      });
    }

    const createUser = await SignUp.create({
      email,
      password,
      cPassword,
      role,
    });

    // console.log(createUser);
    res.status(201).json({
      message: "Sign Up Successfull",
      token: await createUser.generateToken(),
      userId: createUser._id.toString(),
    });
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

// ========for log in=======
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await SignUp.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    // =====1st method====
    // const isPasswordValid = await bcrypt.compare(password, userExist.password);
    // =====2nd method====
    const isPasswordValid = await userExist.comparePassword(password);

    // console.log(isPasswordValid);
    if (isPasswordValid) {
      res.status(200).json({
        message: "Successfully login",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({
        message: "Invalid email or password",
      });
    }
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

// =====individual profile info====
const individualProfile = async (req, res, next) => {
  try {
    const userData = req.jwtPayload;
    // console.log(userData), "userData";

    const userId = userData.userId;

    const profileDetails = await SignUp.findById(userId);

    if (profileDetails) {
      return res.status(201).json({
        message: "success",
        profileDetails: profileDetails,
      });
    } else {
      return res.status(201).json({
        message: "failed",
        error: "Invalied token",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports = { getSignUpData, register, login, individualProfile };
