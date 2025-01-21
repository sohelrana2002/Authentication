require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "manager", "user"],
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

// =====secure password using bcrypt=========
signUpSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password", "cPassword")) {
    next();
  }

  try {
    const saltRounds = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRounds);
    user.password = hash_password;
    user.cPassword = hash_password;
  } catch (err) {
    next(err);
  }
});

// ======compare password=========
signUpSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// =======json web token=======
signUpSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        role: this.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const SignUp = new mongoose.model("userSignUp", signUpSchema);

module.exports = SignUp;
