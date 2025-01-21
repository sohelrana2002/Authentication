const express = require("express");

const router = express.Router();

router.route("/delete-All").delete(deleteAllUserController);

module.exports = router;
