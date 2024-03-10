const express = require("express");
const router = new express.Router();
const authController = require("../controller/auth-controller");


router.route("/signUp-data").get(authController.getSignUpData);
// =====for sign up=====
router.route("/sign-up").post(authController.register);

// =====for log in=====
router.route("/login").get(authController.login);



module.exports = router;