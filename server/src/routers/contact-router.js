const express = require("express");
const router = new express.Router();
const contactController = require("../controller/contact-controller");

router.route("/contactInfo").post(contactController.getContactInfo);

module.exports = router;