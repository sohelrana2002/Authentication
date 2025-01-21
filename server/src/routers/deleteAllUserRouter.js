const express = require("express");
const router = express.Router();
const deleteAllUserController = require("../controller/deleteAllUserController");

router.route("/delete-all").delete(deleteAllUserController.deleteAllUser);

module.exports = router;
