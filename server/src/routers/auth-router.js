const express = require("express");
const router = new express.Router();
const authController = require("../controller/auth-controller");
const signUpValidatorSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/signUp-data").get(authController.getSignUpData);
// =====for sign up=====
router
  .route("/sign-up")
  .post(validate(signUpValidatorSchema), authController.register);

// =====for log in=====
router.route("/login").get(authController.login);


module.exports = router;