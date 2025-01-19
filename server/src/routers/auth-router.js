const express = require("express");
const router = new express.Router();
const authController = require("../controller/auth-controller");
const signUpValidatorSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const jwtAuthMiddleware = require("../middlewares/jwtAuthMiddleware");

// ====get usersInfo using protected route using jwtAuthMiddleware ===
router
  .route("/users-info")
  .get(jwtAuthMiddleware, authController.getSignUpData);
// =====for sign up=====
router
  .route("/sign-up")
  .post(validate(signUpValidatorSchema), authController.register);

// =====for log in=====
router.route("/login").post(authController.login);

module.exports = router;
