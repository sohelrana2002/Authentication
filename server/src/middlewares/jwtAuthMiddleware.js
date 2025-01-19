require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({
      message: "Token not found!",
    });
  }
  // ===extract jwt token from request headers====
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user.",
    });
  }

  try {
    //   ===verify jwt token===
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.jwtPayload = decoded;
    next();
  } catch (err) {
    console.error("jwt token error.", err);

    res.status(401).json({
      message: "Invalid token!",
      error: err,
    });
  }
};

module.exports = jwtAuthMiddleware;
