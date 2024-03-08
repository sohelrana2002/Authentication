const express = require("express");
const router = new express.Router();
const authController = require("../controller/auth-controller");


router.route("/sign-up").post(authController.register);

router.route("/signUp-data").get(authController.getSignUpData);



module.exports = router;